import { pictureOpacity, paperStyleFor } from "../data/pictureStyles.jsx";
import { textRuns } from "../components/LiveText.jsx";
import { wordmarkShape } from "../components/Wordmark.jsx";
var pictureLineHeight = 1.2;
var pictureFontScale = 0.92;
var pictureFontSizes = [200, 176, 154, 136, 120, 106, 94, 84, 74, 66, 58];
function measureSpacedText(text, maxWidth, measureText) {
	let characters = [...text];
	let fittingLength = 1;
	while (
		fittingLength < characters.length &&
		measureText(characters.slice(0, fittingLength + 1).join(``)) <= maxWidth
	) {
		fittingLength++;
	}
	return characters.slice(0, fittingLength).join(``);
}
function wrapPictureText(text, maxWidth, measureText) {
	let wrappedLines = [];
	for (let paragraph of text.split(`
`)) {
		let currentLine = ``;
		for (let word of paragraph.split(/\s+/).filter(Boolean)) {
			let candidateLine = currentLine ? `${currentLine} ${word}` : word;
			if (measureText(candidateLine) <= maxWidth) {
				currentLine = candidateLine;
				continue;
			}
			if (currentLine) {
				wrappedLines.push(currentLine);
			}
			let remainingWord = word;
			for (
				let wordChunk = measureSpacedText(remainingWord, maxWidth, measureText);
				wordChunk.length < remainingWord.length;
				wordChunk = measureSpacedText(remainingWord, maxWidth, measureText)
			) {
				wrappedLines.push(wordChunk);
				remainingWord = remainingWord.slice(wordChunk.length);
			}
			currentLine = remainingWord;
		}
		wrappedLines.push(currentLine);
	}
	return wrappedLines;
}
function truncatePictureText(lines, maxLines, maxWidth, measureText) {
	let truncatedLines = lines.slice(0, maxLines);
	let lastLineCharacters = [...truncatedLines[maxLines - 1]];
	while (
		lastLineCharacters.length &&
		measureText(`${lastLineCharacters.join(``)}…`) > maxWidth
	) {
		lastLineCharacters = lastLineCharacters.slice(0, -1);
	}
	truncatedLines[maxLines - 1] = `${lastLineCharacters.join(``).trimEnd()}…`;
	return truncatedLines;
}
function fitPictureText(text, box, measureText) {
	let smallestSize = pictureFontSizes[pictureFontSizes.length - 1];
	for (let fontSize of pictureFontSizes) {
		let maxRows = Math.floor(box.height / (fontSize * pictureLineHeight));
		let maxLineWidth = box.width / fontSize;
		let wrappedLines = wrapPictureText(text.trim(), maxLineWidth, measureText);
		let fitsAllLines = wrappedLines.length <= maxRows;
		if (!fitsAllLines && fontSize !== smallestSize) {
			continue;
		}
		let visibleLines = fitsAllLines
			? wrappedLines
			: truncatePictureText(wrappedLines, maxRows, maxLineWidth, measureText);
		return {
			size: fontSize,
			rows: maxRows,
			first: Math.floor((maxRows - visibleLines.length) / 2),
			lines: visibleLines,
		};
	}
	throw Error(`unreachable: the smallest size always sets a page`);
}
var pictureSize = 1080;
var pictureTextBox = {
	x: 96,
	y: 100,
	width: 888,
	height: 760,
};
var pictureFooter = {
	baseline: 984,
	edge: 96,
};
var pictureTitleSize = 54;
var pictureCaptionSize = 34;
var pictureRuleWidth = 3;
var pictureGridWidth = 4;
var pictureLineSpacing = 100;
function pictureFonts() {
	let computedStyle = getComputedStyle(document.documentElement);
	return {
		display: computedStyle.getPropertyValue(`--font-display`).trim(),
		sans: computedStyle.getPropertyValue(`--font-sans`).trim(),
	};
}
function paintWordmark(
	context,
	x,
	baseline,
	fontSize,
	displayFont,
	paperStyle,
) {
	context.font = `900 expanded ${fontSize}px ${displayFont}`;
	context.fillStyle = paperStyle.type;
	let { fontBoundingBoxAscent: ascent, fontBoundingBoxDescent: descent } =
		context.measureText(`duc`);
	for (let character of `duc`) {
		context.fillText(character, x, baseline);
		x +=
			context.measureText(character).width + wordmarkShape.tracking * fontSize;
	}
	let textBottom = baseline + descent + (fontSize - ascent - descent) / 2;
	let { hand: handShape, viewBox, paths } = wordmarkShape;
	let handScale = Math.min(
		(handShape.width * fontSize) / viewBox.width,
		(handShape.height * fontSize) / viewBox.height,
	);
	let handX =
		x +
		handShape.before * fontSize +
		(handShape.width * fontSize - viewBox.width * handScale) / 2;
	let handY =
		textBottom -
		(handShape.lift + handShape.height) * fontSize +
		(handShape.height * fontSize - viewBox.height * handScale) / 2;
	context.save();
	context.translate(
		handX - viewBox.x * handScale,
		handY - viewBox.y * handScale,
	);
	context.scale(handScale, handScale);
	context.fillStyle = paperStyle.hand;
	for (let pathData of paths) {
		context.fill(new Path2D(pathData));
	}
	context.restore();
}
function paintRuling(context, ruling, paperStyle, layout, baselineFor) {
	if (ruling === `plain`) {
		return;
	}
	context.fillStyle = paperStyle.type;
	if (ruling === `lines`) {
		context.globalAlpha = paperStyle.rule;
		for (let rowIndex = 0; rowIndex < layout.rows; rowIndex++) {
			context.fillRect(
				0,
				baselineFor(rowIndex) - pictureRuleWidth / 2,
				pictureSize,
				pictureRuleWidth,
			);
		}
		context.globalAlpha = 1;
		return;
	}
	let gridSpacing = (layout.size * pictureLineHeight) / pictureGridWidth;
	let gridBottom = baselineFor(layout.rows - 1) + gridSpacing;
	let horizontalPositions = [];
	for (
		let gridY = baselineFor(0) % gridSpacing;
		gridY <= gridBottom + 0.5;
		gridY += gridSpacing
	) {
		horizontalPositions.push(Math.round(gridY));
	}
	let verticalPositions = [];
	for (
		let gridX = pictureTextBox.x % gridSpacing;
		gridX < pictureSize;
		gridX += gridSpacing
	) {
		verticalPositions.push(Math.round(gridX));
	}
	if (ruling === `grid`) {
		context.globalAlpha = paperStyle.rule * 0.75;
		for (let lineY of horizontalPositions) {
			context.fillRect(0, lineY - 1, pictureSize, 2);
		}
		for (let lineX of verticalPositions) {
			context.fillRect(lineX - 1, 0, 2, gridBottom);
		}
	} else {
		context.globalAlpha = Math.min(1, paperStyle.rule * 1.6);
		let dotRadius = Math.max(3, gridSpacing / 15);
		context.beginPath();
		for (let dotY of horizontalPositions) {
			for (let dotX of verticalPositions) {
				context.moveTo(dotX + dotRadius, dotY);
				context.arc(dotX, dotY, dotRadius, 0, Math.PI * 2);
			}
		}
		context.fill();
	}
	context.globalAlpha = 1;
}
function paintPicture(
	canvas,
	{
		text,
		name,
		family: fontFamily,
		isDrawn,
		lines: guideLines,
		style: pictureStyle,
	},
) {
	let context = canvas.getContext(`2d`);
	if (!context) {
		return;
	}
	let paperStyle = paperStyleFor(pictureStyle.paper);
	let fonts = pictureFonts();
	let canvasScale = canvas.width / pictureSize;
	context.setTransform(canvasScale, 0, 0, canvasScale, 0, 0);
	let handwritingFont = fontFamily
		? `"${fontFamily}", ${fonts.display}`
		: fonts.display;
	let fontForRun = (run, fontSize) =>
		run.hand
			? `${fontSize}px ${handwritingFont}`
			: `400 ${(fontSize * run.scale).toFixed(2)}px ${fonts.display}`;
	let measurements = new Map();
	let measureText = (measuredText) => {
		let measuredWidth = measurements.get(measuredText);
		if (measuredWidth === undefined) {
			measuredWidth = 0;
			for (let measuredRun of textRuns(measuredText, isDrawn, guideLines)) {
				context.font = fontForRun(measuredRun, pictureLineSpacing);
				measuredWidth +=
					context.measureText(measuredRun.text).width / pictureLineSpacing;
			}
			measurements.set(measuredText, measuredWidth);
		}
		return measuredWidth;
	};
	context.globalAlpha = 1;
	context.textAlign = `left`;
	context.textBaseline = `alphabetic`;
	context.fillStyle = paperStyle.ground;
	context.fillRect(0, 0, pictureSize, pictureSize);
	let layout = fitPictureText(text, pictureTextBox, measureText);
	let lineHeight = layout.size * pictureLineHeight;
	let textTop =
		pictureTextBox.y + (pictureTextBox.height - layout.rows * lineHeight) / 2;
	let baselineFor = (rowIndex) =>
		Math.round(
			textTop + rowIndex * lineHeight + layout.size * pictureFontScale,
		);
	paintRuling(context, pictureStyle.ruling, paperStyle, layout, baselineFor);
	layout.lines.forEach((lineText, lineIndex) => {
		let textX = pictureTextBox.x;
		for (let paintedRun of textRuns(lineText, isDrawn, guideLines)) {
			context.font = fontForRun(paintedRun, layout.size);
			context.fillStyle = paintedRun.hand ? paperStyle.hand : paperStyle.type;
			context.globalAlpha = paintedRun.hand ? 1 : pictureOpacity;
			context.fillText(
				paintedRun.text,
				textX,
				baselineFor(layout.first + lineIndex),
			);
			textX += context.measureText(paintedRun.text).width;
		}
	});
	context.globalAlpha = 1;
	paintWordmark(
		context,
		pictureFooter.edge,
		pictureFooter.baseline,
		pictureTitleSize,
		fonts.display,
		paperStyle,
	);
	context.font = `500 ${pictureCaptionSize}px ${fonts.sans}`;
	context.fillStyle = paperStyle.type;
	context.globalAlpha = 0.9;
	context.textAlign = `right`;
	context.fillText(
		name,
		pictureSize - pictureFooter.edge,
		pictureFooter.baseline,
	);
	context.globalAlpha = 1;
}
function pictureBlob(picture, fileName) {
	let canvas = document.createElement(`canvas`);
	canvas.width = canvas.height = pictureSize;
	paintPicture(canvas, picture);
	return new Promise((resolve, reject) =>
		canvas.toBlob(
			(blob) =>
				blob
					? resolve(
							new File([blob], fileName, {
								type: `image/png`,
							}),
						)
					: reject(Error(`No picture`)),
			`image/png`,
		),
	);
}
export { paintPicture, pictureBlob };
