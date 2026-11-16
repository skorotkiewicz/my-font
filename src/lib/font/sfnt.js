var SfntWriter = class {
	constructor() {
		this.out = [];
	}
	get length() {
		return this.out.length;
	}
	u16(...words) {
		for (const word of words) {
			this.out.push((word >> 8) & 255, word & 255);
		}
		return this;
	}
	tag(tagText) {
		for (const character of tagText) {
			this.out.push(character.charCodeAt(0));
		}
		return this;
	}
	done() {
		return Uint8Array.from(this.out);
	}
};
function buildKerningTable(kerningPairs) {
	const pairsByLeftGlyph = new Map();
	for (const pair of kerningPairs) {
		pairsByLeftGlyph.set(pair.left, [
			...(pairsByLeftGlyph.get(pair.left) ?? []),
			pair,
		]);
	}
	const leftGlyphIndices = [...pairsByLeftGlyph.keys()].sort(
		(leftIndex, rightIndex) => leftIndex - rightIndex,
	);
	const coverageOffset = 10 + leftGlyphIndices.length * 2;
	let nextPairSetOffset = coverageOffset + (4 + leftGlyphIndices.length * 2);
	const pairSetOffsets = leftGlyphIndices.map((leftGlyphIndex) => {
		const pairSetOffset = nextPairSetOffset;
		nextPairSetOffset += 2 + pairsByLeftGlyph.get(leftGlyphIndex).length * 4;
		return pairSetOffset;
	});
	if (nextPairSetOffset > 65535) {
		throw Error(
			`Too many kerning pairs for one subtable (${kerningPairs.length})`,
		);
	}
	const writer = new SfntWriter();
	writer.u16(1, 0, 10, 36, 50);
	writer.u16(2).tag(`DFLT`).u16(14).tag(`latn`).u16(14);
	writer.u16(4, 0).u16(0, 65535, 1, 0);
	writer.u16(1).tag(`kern`).u16(8).u16(0, 1, 0);
	writer.u16(1, 4).u16(2, 0, 1, 8);
	writer.u16(
		1,
		coverageOffset,
		4,
		0,
		leftGlyphIndices.length,
		...pairSetOffsets,
	);
	writer.u16(1, leftGlyphIndices.length, ...leftGlyphIndices);
	for (const leftGlyphIndex of leftGlyphIndices) {
		const sortedPairs = pairsByLeftGlyph
			.get(leftGlyphIndex)
			.sort((leftPair, rightPair) => leftPair.right - rightPair.right);
		writer.u16(sortedPairs.length);
		for (const pair of sortedPairs) {
			writer.u16(pair.right, pair.value & 65535);
		}
	}
	return writer.done();
}
const alignFourBytes = (byteLength) => (byteLength + 3) & -4;
function sfntChecksum(fontBytes) {
	const fontView = new DataView(
		fontBytes.buffer,
		fontBytes.byteOffset,
		fontBytes.byteLength,
	);
	let checksum = 0;
	for (
		let wordOffset = 0;
		wordOffset + 4 <= fontBytes.byteLength;
		wordOffset += 4
	) {
		checksum = (checksum + fontView.getUint32(wordOffset)) >>> 0;
	}
	return checksum;
}
function replaceFontTable(sourceFontBuffer, replacementTag, replacementData) {
	const sourceView = new DataView(sourceFontBuffer);
	const sourceTableCount = sourceView.getUint16(4);
	const tables = [
		{
			tag: replacementTag,
			data: replacementData,
		},
	];
	for (let tableIndex = 0; tableIndex < sourceTableCount; tableIndex++) {
		const recordOffset = 12 + tableIndex * 16;
		const tableTag = String.fromCharCode(
			...new Uint8Array(sourceFontBuffer, recordOffset, 4),
		);
		if (tableTag !== replacementTag) {
			tables.push({
				tag: tableTag,
				data: new Uint8Array(
					sourceFontBuffer,
					sourceView.getUint32(recordOffset + 8),
					sourceView.getUint32(recordOffset + 12),
				),
			});
		}
	}
	tables.sort((leftTable, rightTable) =>
		leftTable.tag < rightTable.tag ? -1 : 1,
	);
	const tableCount = tables.length;
	const directoryEnd = 12 + tableCount * 16;
	const outputBytes = new Uint8Array(
		tables.reduce(
			(totalBytes, table) => totalBytes + alignFourBytes(table.data.byteLength),
			directoryEnd,
		),
	);
	const outputView = new DataView(outputBytes.buffer);
	const searchExponent = Math.floor(Math.log2(tableCount));
	outputView.setUint32(0, sourceView.getUint32(0));
	outputView.setUint16(4, tableCount);
	outputView.setUint16(6, 2 ** searchExponent * 16);
	outputView.setUint16(8, searchExponent);
	outputView.setUint16(10, tableCount * 16 - 2 ** searchExponent * 16);
	let writeOffset = directoryEnd;
	let headOffset = -1;
	tables.forEach((table, tableIndex) => {
		const tableLength = table.data.byteLength;
		outputBytes.set(table.data, writeOffset);
		if (table.tag === `head`) {
			headOffset = writeOffset;
			outputView.setUint32(headOffset + 8, 0);
		}
		const recordOffset = 12 + tableIndex * 16;
		outputBytes.set(
			[...table.tag].map((character) => character.charCodeAt(0)),
			recordOffset,
		);
		outputView.setUint32(
			recordOffset + 4,
			sfntChecksum(
				outputBytes.subarray(
					writeOffset,
					writeOffset + alignFourBytes(tableLength),
				),
			),
		);
		outputView.setUint32(recordOffset + 8, writeOffset);
		outputView.setUint32(recordOffset + 12, tableLength);
		writeOffset += alignFourBytes(tableLength);
	});
	if (headOffset >= 0) {
		outputView.setUint32(
			headOffset + 8,
			(2981146554 - sfntChecksum(outputBytes)) >>> 0,
		);
	}
	return outputBytes.buffer;
}
export { buildKerningTable, replaceFontTable };
