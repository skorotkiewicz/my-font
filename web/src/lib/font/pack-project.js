import { sha256 } from "../projectFont.jsx";
import { replaceFontTable } from "./sfnt.js";
const roundHundredths = (number) => Math.round(number * 100) / 100;
async function transformBytes(bytes, transformStream) {
	return new Uint8Array(
		await new Response(
			new Blob([bytes]).stream().pipeThrough(transformStream),
		).arrayBuffer(),
	);
}
async function packProjectFont(otf, project, exportedAt) {
	const projectJson = JSON.stringify(
		{
			exportedAt: exportedAt,
			project: project,
		},
		(propertyName, propertyValue) =>
			propertyName === `pts`
				? propertyValue.map(([pointX, pointY, pressure]) => [
						roundHundredths(pointX),
						roundHundredths(pointY),
						pressure,
					])
				: propertyValue,
	);
	const compressedProject = await transformBytes(
		new TextEncoder().encode(projectJson),
		new CompressionStream(`deflate-raw`),
	);
	const tableBytes = new Uint8Array(44 + compressedProject.length);
	const tableView = new DataView(tableBytes.buffer);
	tableBytes.set([...`DCTS`].map((character) => character.charCodeAt(0)));
	tableView.setUint16(4, 1);
	tableView.setUint32(8, compressedProject.length);
	tableBytes.set(sha256(compressedProject), 12);
	tableBytes.set(compressedProject, 44);
	return replaceFontTable(otf, `DUCT`, tableBytes);
}
export { packProjectFont };
