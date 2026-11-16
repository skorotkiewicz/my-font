import { allCodepoints } from "../data/characters.jsx";
var sha256Constants = new Uint32Array([
	1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993,
	2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987,
	1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774,
	264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986,
	2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711,
	113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291,
	1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411,
	3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344,
	430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063,
	1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474,
	2756734187, 3204031479, 3329325298,
]);
var rotateRight = (word, bitCount) =>
	(word >>> bitCount) | (word << (32 - bitCount));
function sha256(inputBytes) {
	let bitLength = inputBytes.length * 8;
	let paddedBytes = new Uint8Array(((inputBytes.length + 9 + 63) >> 6) << 6);
	paddedBytes.set(inputBytes);
	paddedBytes[inputBytes.length] = 128;
	let paddedView = new DataView(paddedBytes.buffer);
	paddedView.setUint32(
		paddedBytes.length - 8,
		Math.floor(bitLength / 4294967296),
	);
	paddedView.setUint32(paddedBytes.length - 4, bitLength >>> 0);
	let hashState = new Uint32Array([
		1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924,
		528734635, 1541459225,
	]);
	let schedule = new Uint32Array(64);
	for (
		let blockOffset = 0;
		blockOffset < paddedBytes.length;
		blockOffset += 64
	) {
		for (let inputWordIndex = 0; inputWordIndex < 16; inputWordIndex++) {
			schedule[inputWordIndex] = paddedView.getUint32(
				blockOffset + inputWordIndex * 4,
			);
		}
		for (
			let expandedWordIndex = 16;
			expandedWordIndex < 64;
			expandedWordIndex++
		) {
			let smallSigmaZero =
				rotateRight(schedule[expandedWordIndex - 15], 7) ^
				rotateRight(schedule[expandedWordIndex - 15], 18) ^
				(schedule[expandedWordIndex - 15] >>> 3);
			let smallSigmaOne =
				rotateRight(schedule[expandedWordIndex - 2], 17) ^
				rotateRight(schedule[expandedWordIndex - 2], 19) ^
				(schedule[expandedWordIndex - 2] >>> 10);
			schedule[expandedWordIndex] =
				schedule[expandedWordIndex - 16] +
				smallSigmaZero +
				schedule[expandedWordIndex - 7] +
				smallSigmaOne;
		}
		let [stateA, stateB, stateC, stateD, stateE, stateF, stateG, stateH] =
			hashState;
		for (let roundIndex = 0; roundIndex < 64; roundIndex++) {
			let firstTemporary =
				stateH +
				(rotateRight(stateE, 6) ^
					rotateRight(stateE, 11) ^
					rotateRight(stateE, 25)) +
				((stateE & stateF) ^ (~stateE & stateG)) +
				sha256Constants[roundIndex] +
				schedule[roundIndex];
			let secondTemporary =
				(rotateRight(stateA, 2) ^
					rotateRight(stateA, 13) ^
					rotateRight(stateA, 22)) +
				((stateA & stateB) ^ (stateA & stateC) ^ (stateB & stateC));
			stateH = stateG;
			stateG = stateF;
			stateF = stateE;
			stateE = (stateD + firstTemporary) >>> 0;
			stateD = stateC;
			stateC = stateB;
			stateB = stateA;
			stateA = (firstTemporary + secondTemporary) >>> 0;
		}
		hashState[0] += stateA;
		hashState[1] += stateB;
		hashState[2] += stateC;
		hashState[3] += stateD;
		hashState[4] += stateE;
		hashState[5] += stateF;
		hashState[6] += stateG;
		hashState[7] += stateH;
	}
	let digestBytes = new Uint8Array(32);
	let digestView = new DataView(digestBytes.buffer);
	hashState.forEach((hashWord, hashWordIndex) =>
		digestView.setUint32(hashWordIndex * 4, hashWord),
	);
	return digestBytes;
}
var projectTableTag = `DUCT`;
var projectMagic = `DCTS`;
var projectFormatVersion = 1;
var projectHeaderSize = 44;
var maxInflatedBytes = 50331648;
var maxProjectPoints = 2000000;
var legacyFontPrefix = `Handwriting font `;
var readTag = (fontBytes, offset) =>
	String.fromCharCode(
		fontBytes[offset],
		fontBytes[offset + 1],
		fontBytes[offset + 2],
		fontBytes[offset + 3],
	);
function readFontTables(fontBytes) {
	let fontView = new DataView(
		fontBytes.buffer,
		fontBytes.byteOffset,
		fontBytes.byteLength,
	);
	let tableCount = fontView.getUint16(4);
	if (!tableCount || 12 + tableCount * 16 > fontBytes.length) {
		return;
	}
	let tables = new Map();
	for (let tableIndex = 0; tableIndex < tableCount; tableIndex++) {
		let recordOffset = 12 + tableIndex * 16;
		let tableOffset = fontView.getUint32(recordOffset + 8);
		let tableLength = fontView.getUint32(recordOffset + 12);
		if (tableOffset + tableLength <= fontBytes.length) {
			tables.set(readTag(fontBytes, recordOffset), {
				offset: tableOffset,
				length: tableLength,
			});
		}
	}
	return tables;
}
function fontDescription(fontBytes, nameTable) {
	if (!nameTable || nameTable.length < 6) {
		return;
	}
	let nameView = new DataView(
		fontBytes.buffer,
		fontBytes.byteOffset + nameTable.offset,
		nameTable.length,
	);
	let recordCount = nameView.getUint16(2);
	let stringsOffset = nameView.getUint16(4);
	if (!(6 + recordCount * 12 > nameTable.length)) {
		for (let recordIndex = 0; recordIndex < recordCount; recordIndex++) {
			let recordOffset = 6 + recordIndex * 12;
			let [platformId, , , nameId, stringLength, stringOffset] = [
				0, 2, 4, 6, 8, 10,
			].map((fieldOffset) => nameView.getUint16(recordOffset + fieldOffset));
			let stringStart = stringsOffset + stringOffset;
			if (
				nameId !== 8 ||
				stringStart + stringLength > nameTable.length ||
				stringLength > 256
			) {
				continue;
			}
			let stringBytes = new Uint8Array(
				fontBytes.buffer,
				fontBytes.byteOffset + nameTable.offset + stringStart,
				stringLength,
			);
			if (platformId === 3) {
				return String.fromCharCode(
					...Array.from(
						{
							length: stringLength >> 1,
						},
						(unusedElement, characterIndex) =>
							(stringBytes[characterIndex * 2] << 8) |
							stringBytes[characterIndex * 2 + 1],
					),
				);
			}
			if (platformId === 1) {
				return String.fromCharCode(...stringBytes);
			}
		}
	}
}
async function inflateProject(compressedBytes, maxBytes) {
	let reader = new Blob([compressedBytes])
		.stream()
		.pipeThrough(new DecompressionStream(`deflate-raw`))
		.getReader();
	let chunks = [];
	let totalBytes = 0;
	while (true) {
		let { done, value: chunk } = await reader.read();
		if (done) {
			break;
		}
		totalBytes += chunk.length;
		if (totalBytes > maxBytes) {
			await reader.cancel();
			throw Error(`Too large`);
		}
		chunks.push(chunk);
	}
	let inflatedBytes = new Uint8Array(totalBytes);
	let writeOffset = 0;
	for (let sourceChunk of chunks) {
		inflatedBytes.set(sourceChunk, writeOffset);
		writeOffset += sourceChunk.length;
	}
	return inflatedBytes;
}
var equalBytes = (leftBytes, rightBytes) =>
	leftBytes.length === rightBytes.length &&
	leftBytes.every((byte, byteIndex) => byte === rightBytes[byteIndex]);
async function readProjectFont(fontBuffer) {
	let refuse = (reason) => ({
		ok: false,
		reason: reason,
	});
	let fontBytes = new Uint8Array(fontBuffer);
	if (fontBytes.length < 12 || fontBytes.length > 16777216) {
		return refuse(`not-font`);
	}
	let signature = readTag(fontBytes, 0);
	if (signature === `wOFF` || signature === `wOF2`) {
		return refuse(`website`);
	}
	if (signature === `ttcf`) {
		return refuse(`not-ductus`);
	}
	if (signature !== `OTTO` && signature !== `true` && signature !== `\0\0\0`) {
		return refuse(`not-font`);
	}
	let tables = readFontTables(fontBytes);
	if (!tables) {
		return refuse(`not-font`);
	}
	let projectTable = tables.get(projectTableTag);
	if (!projectTable) {
		return refuse(
			fontDescription(fontBytes, tables.get(`name`))?.startsWith(
				legacyFontPrefix,
			)
				? `legacy`
				: `not-ductus`,
		);
	}
	try {
		if (
			projectTable.length < projectHeaderSize ||
			readTag(fontBytes, projectTable.offset) !== projectMagic
		) {
			return refuse(`damaged`);
		}
		let projectView = new DataView(
			fontBytes.buffer,
			projectTable.offset,
			projectTable.length,
		);
		if (projectView.getUint16(4) > projectFormatVersion) {
			return refuse(`newer`);
		}
		let compressedLength = projectView.getUint32(8);
		if (compressedLength !== projectTable.length - projectHeaderSize) {
			return refuse(`damaged`);
		}
		let compressedBytes = fontBytes.slice(
			projectTable.offset + projectHeaderSize,
			projectTable.offset + projectHeaderSize + compressedLength,
		);
		if (
			!equalBytes(
				sha256(compressedBytes),
				fontBytes.subarray(
					projectTable.offset + 12,
					projectTable.offset + projectHeaderSize,
				),
			)
		) {
			return refuse(`damaged`);
		}
		let projectJson = new TextDecoder(`utf-8`, {
			fatal: true,
		}).decode(await inflateProject(compressedBytes, maxInflatedBytes));
		let payload = JSON.parse(projectJson);
		if (!isRecord(payload) || !isFiniteNumber(payload.exportedAt)) {
			return refuse(`damaged`);
		} else if (
			isRecord(payload.project) &&
			isFiniteNumber(payload.project.schemaVersion) &&
			payload.project.schemaVersion > 1
		) {
			return refuse(`newer`);
		} else {
			return {
				ok: true,
				project: validateProject(payload.project),
				exportedAt: payload.exportedAt,
			};
		}
	} catch {
		return refuse(`damaged`);
	}
}
var InvalidProjectError = class extends Error {};
var isRecord = (candidate) =>
	typeof candidate == `object` && !!candidate && !Array.isArray(candidate);
var isFiniteNumber = (candidate) =>
	typeof candidate == `number` && Number.isFinite(candidate);
function assertProject(condition) {
	if (!condition) {
		throw new InvalidProjectError();
	}
}
function boundedNumber(candidate, minimum, maximum) {
	assertProject(
		isFiniteNumber(candidate) && candidate >= minimum && candidate <= maximum,
	);
	return candidate;
}
function boundedString(candidate, maxLength) {
	assertProject(typeof candidate == `string` && candidate.length <= maxLength);
	return candidate;
}
function boundedArray(candidate, maxLength, minLength = 0) {
	assertProject(
		Array.isArray(candidate) &&
			candidate.length >= minLength &&
			candidate.length <= maxLength,
	);
	return candidate;
}
var supportedCodepoints = new Set(allCodepoints);
var supportedInputs = [`pen`, `touch`, `mouse`];
var maxStrokes = 100000;
function validateProject(project) {
	assertProject(isRecord(project) && project.schemaVersion === 1);
	let settings = project.settings;
	assertProject(isRecord(settings));
	assertProject(isRecord(project.glyphs));
	let glyphEntries = Object.entries(project.glyphs);
	assertProject(glyphEntries.length <= supportedCodepoints.size);
	let totalPoints = 0;
	let validatedGlyphs = {};
	for (let [glyphKey, glyph] of glyphEntries) {
		let glyphCodepoint = Number(glyphKey);
		assertProject(
			supportedCodepoints.has(glyphCodepoint) &&
				isRecord(glyph) &&
				glyph.cp === glyphCodepoint,
		);
		validatedGlyphs[glyphCodepoint] = {
			cp: glyphCodepoint,
			drawings: boundedArray(glyph.drawings, 8).map((drawing) => {
				assertProject(isRecord(drawing) && isRecord(drawing.fix));
				let validatedStrokes = boundedArray(drawing.strokes, 500).map(
					(stroke) => {
						assertProject(
							isRecord(stroke) && supportedInputs.includes(stroke.input),
						);
						let validatedPoints = boundedArray(stroke.pts, 20000, 1).map(
							(point) => {
								assertProject(Array.isArray(point) && point.length === 3);
								return [
									boundedNumber(point[0], -100000, maxStrokes),
									boundedNumber(point[1], -100000, maxStrokes),
									boundedNumber(point[2], 0, 1),
								];
							},
						);
						totalPoints += validatedPoints.length;
						assertProject(totalPoints <= maxProjectPoints);
						return {
							id: boundedString(stroke.id, 64),
							pts: validatedPoints,
							input: stroke.input,
						};
					},
				);
				return {
					id: boundedString(drawing.id, 64),
					strokes: validatedStrokes,
					fix: {
						dx: boundedNumber(drawing.fix.dx, -100000, maxStrokes),
						dy: boundedNumber(drawing.fix.dy, -100000, maxStrokes),
						scale: boundedNumber(drawing.fix.scale, 0.1, 10),
					},
					updatedAt: boundedNumber(drawing.updatedAt, 0, 9007199254740991),
				};
			}),
		};
	}
	return {
		schemaVersion: 1,
		id: boundedString(project.id, 64),
		name: boundedString(project.name, 100),
		createdAt: boundedNumber(project.createdAt, 0, 9007199254740991),
		updatedAt: boundedNumber(project.updatedAt, 0, 9007199254740991),
		glyphs: validatedGlyphs,
		settings: {
			tracking: boundedNumber(settings.tracking, -1000, 1000),
			tidy: typeof settings.tidy != `boolean` || settings.tidy,
		},
	};
}
export { readProjectFont, sha256, readFontTables };
