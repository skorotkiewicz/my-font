import { polygonBounds } from "../geometry.jsx";
const profileMinY = -500;
const isLowercaseCodepoint = (codepoint) => codepoint >= 97 && codepoint <= 122;
const isLetterOrDigit = (codepoint) =>
	isLowercaseCodepoint(codepoint) ||
	(codepoint >= 65 && codepoint <= 90) ||
	(codepoint >= 48 && codepoint <= 57);
const profileRowIndex = (fontY) => Math.round((fontY - profileMinY) / 10);
function contourProfile(contours) {
	const leftEdges = new Float32Array(180).fill(Infinity);
	const rightEdges = new Float32Array(180).fill(-Infinity);
	for (const contour of contours) {
		for (
			let pointIndex = 0, previousPointIndex = contour.length - 1;
			pointIndex < contour.length;
			previousPointIndex = pointIndex++
		) {
			const [[startX, startY], [endX, endY]] = [
				contour[previousPointIndex],
				contour[pointIndex],
			];
			const firstRow = Math.max(
				0,
				Math.ceil((Math.min(startY, endY) - profileMinY) / 10),
			);
			const lastRow = Math.min(
				179,
				Math.floor((Math.max(startY, endY) - profileMinY) / 10),
			);
			for (let sampleRow = firstRow; sampleRow <= lastRow; sampleRow++) {
				const sampleY = profileMinY + sampleRow * 10;
				const intersectionX =
					endY === startY
						? startX
						: startX + ((sampleY - startY) / (endY - startY)) * (endX - startX);
				if (intersectionX < leftEdges[sampleRow]) {
					leftEdges[sampleRow] = intersectionX;
				}
				if (intersectionX > rightEdges[sampleRow]) {
					rightEdges[sampleRow] = intersectionX;
				}
				if (endY === startY) {
					if (endX < leftEdges[sampleRow]) {
						leftEdges[sampleRow] = endX;
					}
					if (endX > rightEdges[sampleRow]) {
						rightEdges[sampleRow] = endX;
					}
				}
			}
		}
	}
	return {
		min: leftEdges,
		max: rightEdges,
	};
}
function glyphProfile(codepoint, contours, metrics) {
	const { xMin, xMax } = polygonBounds(contours);
	const { min: leftEdges, max: rightEdges } = contourProfile(contours);
	const leftDistances = leftEdges.map((edgeX) => edgeX - xMin);
	const rightDistances = rightEdges.map((edgeX) => xMax - edgeX);
	const nearbyRightDistances = rightDistances.map((_unusedDistance, rowIndex) => {
		let minimumDistance = Infinity;
		for (
			let neighborRow = Math.max(0, rowIndex - 3);
			neighborRow <= Math.min(179, rowIndex + 3);
			neighborRow++
		) {
			minimumDistance = Math.min(minimumDistance, rightDistances[neighborRow]);
		}
		return minimumDistance;
	});
	const whiteForSide = (distances, bandHeight) => {
		let totalWhite = 0;
		const [firstRow, lastRow] = [profileRowIndex(0), profileRowIndex(bandHeight)];
		for (let sampleRow = firstRow; sampleRow <= lastRow; sampleRow++) {
			totalWhite += Math.min(distances[sampleRow], 110) ** 2 / 110;
		}
		return totalWhite / (lastRow - firstRow + 1);
	};
	const whiteForBand = (bandHeight) => ({
		left: whiteForSide(leftDistances, bandHeight),
		right: whiteForSide(rightDistances, bandHeight),
	});
	return {
		band: isLowercaseCodepoint(codepoint) ? `x` : `cap`,
		left: leftDistances,
		right: rightDistances,
		rightNear: nearbyRightDistances,
		white: {
			x: whiteForBand(metrics.xHeight),
			cap: whiteForBand(metrics.capHeight),
		},
	};
}
const opticalSpacingAdjustment = (whiteDistance, referenceWhitespace) =>
	(whiteDistance - referenceWhitespace) * 0.65;
function pairSpacing(leftProfile, rightProfile, referenceWhitespace) {
	const band =
		leftProfile.band === `x` || rightProfile.band === `x` ? `x` : `cap`;
	let minimumGap = Infinity;
	for (let rowIndex = 0; rowIndex < 180; rowIndex++) {
		minimumGap = Math.min(
			minimumGap,
			leftProfile.rightNear[rowIndex] + rightProfile.left[rowIndex],
		);
	}
	const targetGap =
		100 -
		opticalSpacingAdjustment(
			leftProfile.white[band].right,
			referenceWhitespace,
		) -
		opticalSpacingAdjustment(
			rightProfile.white[band].left,
			referenceWhitespace,
		);
	return Math.max(targetGap, 40 - minimumGap);
}
function spacingForGlyphs(glyphs, metrics) {
	const bearings = new Map();
	const profiledGlyphs = [];
	for (const { cp: glyphCodepoint, contours: glyphContours } of glyphs) {
		if (glyphContours.length) {
			if (isLetterOrDigit(glyphCodepoint)) {
				profiledGlyphs.push({
					cp: glyphCodepoint,
					profile: glyphProfile(glyphCodepoint, glyphContours, metrics),
				});
			} else {
				bearings.set(glyphCodepoint, {
					lsb: 50,
					rsb: 50,
				});
			}
		}
	}
	const whiteDistances = profiledGlyphs
		.flatMap(({ profile }) => [
			profile.white[profile.band].left,
			profile.white[profile.band].right,
		])
		.sort((leftDistance, rightDistance) => leftDistance - rightDistance);
	const referenceWhitespace =
		whiteDistances[Math.floor((whiteDistances.length - 1) * 0.25)] ?? 0;
	const bearingFor = (whiteDistance) =>
		Math.max(
			20,
			50 - opticalSpacingAdjustment(whiteDistance, referenceWhitespace),
		);
	for (const { cp: glyphCodepoint, profile } of profiledGlyphs) {
		const bandWhite = profile.white[profile.band];
		bearings.set(glyphCodepoint, {
			lsb: bearingFor(bandWhite.left),
			rsb: bearingFor(bandWhite.right),
		});
	}
	const kerningPairs = [];
	for (const leftGlyph of profiledGlyphs) {
		for (const rightGlyph of profiledGlyphs) {
			const pairGap = pairSpacing(
				leftGlyph.profile,
				rightGlyph.profile,
				referenceWhitespace,
			);
			const kerningValue = Math.round(
				pairGap -
					bearings.get(leftGlyph.cp).rsb -
					bearings.get(rightGlyph.cp).lsb,
			);
			if (Math.abs(kerningValue) >= 10) {
				kerningPairs.push({
					left: leftGlyph.cp,
					right: rightGlyph.cp,
					value: kerningValue,
				});
			}
		}
	}
	return {
		bearings: bearings,
		kerns: kerningPairs,
	};
}
export { spacingForGlyphs };
