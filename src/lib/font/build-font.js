import { Path, Glyph, Font } from "opentype.js";
import { polygonBounds } from "../geometry.jsx";
import { buildKerningTable, replaceFontTable } from "./sfnt.js";
import { spacingForGlyphs } from "./kerning.js";
const fontDescender = -280;
const unicodeAliases = {
	39: [8216, 8217],
	34: [8220, 8221],
	45: [8208, 8209, 8722],
};
const syntheticDashes = [
	{
		cp: 8211,
		stretch: 1.6,
	},
	{
		cp: 8212,
		stretch: 2.4,
	},
];
const ellipsisCodepoint = 8230;
function truncateName(name, maxLength) {
	let truncatedName = ``;
	for (const character of name) {
		if (truncatedName.length + character.length > maxLength) {
			break;
		}
		truncatedName += character;
	}
	return truncatedName;
}
const familyName = (rawName) =>
	truncateName(
		rawName
			.replace(/\p{Cc}/gu, ` `)
			.replace(/\s+/g, ` `)
			.trim(),
		31,
	).trim() || `My Hand`;
function postScriptName(displayName, projectId) {
	const asciiToken = (text) =>
		text.normalize(`NFKD`).replace(/[^A-Za-z0-9]/g, ``);
	return `${(asciiToken(familyName(displayName)) || `Ductus${asciiToken(projectId).slice(0, 8)}`).slice(0, 55)}-Regular`;
}
const midpoint = (firstPoint, secondPoint) => [
	(firstPoint[0] + secondPoint[0]) / 2,
	(firstPoint[1] + secondPoint[1]) / 2,
];
const roundCoordinate = Math.round;
function contoursToPath(contours, xOffset, smooth = true) {
	const path = new Path();
	for (const contour of contours) {
		const pointCount = contour.length;
		if (!smooth) {
			path.moveTo(contour[0][0] + xOffset, contour[0][1]);
			for (let vertexIndex = 1; vertexIndex < pointCount; vertexIndex++) {
				path.lineTo(contour[vertexIndex][0] + xOffset, contour[vertexIndex][1]);
			}
			path.close();
			continue;
		}
		const firstMidpoint = midpoint(contour[pointCount - 1], contour[0]);
		path.moveTo(
			roundCoordinate(firstMidpoint[0] + xOffset),
			roundCoordinate(firstMidpoint[1]),
		);
		for (let curveIndex = 0; curveIndex < pointCount; curveIndex++) {
			const nextMidpoint = midpoint(
				contour[curveIndex],
				contour[(curveIndex + 1) % pointCount],
			);
			path.quadraticCurveTo(
				roundCoordinate(contour[curveIndex][0] + xOffset),
				roundCoordinate(contour[curveIndex][1]),
				roundCoordinate(nextMidpoint[0] + xOffset),
				roundCoordinate(nextMidpoint[1]),
			);
		}
		path.close();
	}
	return path;
}
const glyphName = (codepoint) =>
	`uni${codepoint.toString(16).toUpperCase().padStart(4, `0`)}`;
const asciiName = (displayName, fallbackName) =>
	displayName
		.normalize(`NFKD`)
		.replace(/[^\x20-\x7e]/g, ``)
		.replace(/\s+/g, ` `)
		.trim() || fallbackName;
const manufacturer = `Ductus`;
function syntheticGlyphs(glyphs) {
	const additions = [];
	const hyphen = glyphs.find((glyph) => glyph.cp === 45);
	const hyphenBounds = hyphen && polygonBounds(hyphen.contours);
	if (hyphen && hyphenBounds) {
		for (const { cp: dashCodepoint, stretch } of syntheticDashes) {
			additions.push({
				cp: dashCodepoint,
				contours: hyphen.contours.map((contour) =>
					contour.map(([pointX, pointY]) => [
						hyphenBounds.xMin + (pointX - hyphenBounds.xMin) * stretch,
						pointY,
					]),
				),
			});
		}
	}
	const period = glyphs.find((glyph) => glyph.cp === 46);
	const periodBounds = period && polygonBounds(period.contours);
	if (period && periodBounds) {
		const dotSpacing = periodBounds.xMax - periodBounds.xMin + 70;
		additions.push({
			cp: ellipsisCodepoint,
			contours: [0, 1, 2].flatMap((dotIndex) =>
				period.contours.map((contour) =>
					contour.map(([pointX, pointY]) => [
						pointX + dotIndex * dotSpacing,
						pointY,
					]),
				),
			),
		});
	}
	return additions;
}
function buildFont({
	familyName: requestedFamilyName,
	projectId,
	glyphs,
	tracking,
	metrics,
}) {
	const fontMetrics = metrics ?? {
		xHeight: 500,
		capHeight: 700,
	};
	const drawnGlyphs = glyphs.filter((glyph) => glyph.contours.length);
	const allGlyphs = [...drawnGlyphs, ...syntheticGlyphs(drawnGlyphs)];
	const { bearings, kerns: kerningPairs } = spacingForGlyphs(
		allGlyphs,
		fontMetrics,
	);
	let actualAscender = 920;
	let actualDescender = fontDescender;
	const outlineGlyphs = allGlyphs.map(
		({ cp: glyphCodepoint, contours: glyphContours }) => {
			const bounds = polygonBounds(glyphContours);
			const { lsb: leftBearing, rsb: rightBearing } =
				bearings.get(glyphCodepoint);
			[actualAscender, actualDescender] = [
				Math.max(actualAscender, bounds.yMax),
				Math.min(actualDescender, bounds.yMin),
			];
			return new Glyph({
				name: glyphName(glyphCodepoint),
				unicode: glyphCodepoint,
				unicodes: [glyphCodepoint, ...(unicodeAliases[glyphCodepoint] ?? [])],
				advanceWidth: roundCoordinate(
					bounds.xMax - bounds.xMin + leftBearing + rightBearing + tracking,
				),
				path: contoursToPath(
					glyphContours,
					leftBearing + tracking / 2 - bounds.xMin,
				),
			});
		},
	);
	const lowercaseGlyphs = outlineGlyphs.filter(
		(glyph) => glyph.unicode >= 97 && glyph.unicode <= 122,
	);
	const averageLowercaseWidth = lowercaseGlyphs.length
		? lowercaseGlyphs.reduce(
				(totalWidth, glyph) => totalWidth + glyph.advanceWidth,
				0,
			) / lowercaseGlyphs.length
		: 0;
	const spaceWidth = Math.max(
		200,
		roundCoordinate(averageLowercaseWidth * 0.6 + tracking),
	);
	const fontGlyphs = [
		new Glyph({
			name: `.notdef`,
			advanceWidth: 500,
			path: contoursToPath(
				[
					[
						[60, 0],
						[440, 0],
						[440, 700],
						[60, 700],
					],
					[
						[110, 50],
						[110, 650],
						[390, 650],
						[390, 50],
					],
				],
				0,
				false,
			),
		}),
		new Glyph({
			name: `space`,
			unicode: 32,
			unicodes: [32, 160],
			advanceWidth: spaceWidth,
			path: new Path(),
		}),
		...outlineGlyphs,
	];
	const postScriptIdentifier = postScriptName(requestedFamilyName, projectId);
	const font = new Font({
		familyName: requestedFamilyName,
		styleName: `Regular`,
		postScriptName: postScriptIdentifier,
		unitsPerEm: 1000,
		ascender: 920,
		descender: fontDescender,
		weightClass: 400,
		version: `Version 1.000`,
		description: `Handwriting, made into a font with Ductus`,
		manufacturer: manufacturer,
		glyphs: fontGlyphs,
		tables: {
			os2: {
				fsType: 0,
				fsSelection: 192,
				sxHeight: roundCoordinate(fontMetrics.xHeight),
				sCapHeight: roundCoordinate(fontMetrics.capHeight),
				usWinAscent: roundCoordinate(actualAscender),
				usWinDescent: roundCoordinate(-actualDescender),
			},
		},
	});
	for (const names of Object.values(font.names)) {
		names.uniqueID = {
			en: `${manufacturer}: ${requestedFamilyName}: ${projectId}`,
		};
	}
	const originalGetEnglishName = font.getEnglishName.bind(font);
	font.getEnglishName = (nameKey) =>
		nameKey === `fontFamily`
			? asciiName(
					requestedFamilyName,
					postScriptIdentifier.replace(/-Regular$/, ``),
				)
			: originalGetEnglishName(nameKey);
	const fontBuffer = font.toArrayBuffer();
	if (!kerningPairs.length) {
		return fontBuffer;
	}
	const glyphIndices = new Map(
		allGlyphs.map(({ cp: glyphCodepoint }, glyphIndex) => [
			glyphCodepoint,
			glyphIndex + 2,
		]),
	);
	return replaceFontTable(
		fontBuffer,
		`GPOS`,
		buildKerningTable(
			kerningPairs.map((pair) => ({
				left: glyphIndices.get(pair.left),
				right: glyphIndices.get(pair.right),
				value: pair.value,
			})),
		),
	);
}
/**
 * splaytree v3.1.2
 * Fast Splay tree for Node and browser
 *
 * @author Alexander Milevski <info@w8r.name>
 * @license MIT
 * @preserve
 */
export { buildFont };
