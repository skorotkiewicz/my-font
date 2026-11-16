import { writtenDrawings } from "./project.jsx";
import { defaultPlacement } from "./alignment.jsx";
import { familyName } from "./fontNames.jsx";
var fontWorker;
var fontRequestId = 0;
var fontRequests = new Map();
function getFontWorker() {
	return (
		fontWorker ||
		((fontWorker = new Worker(
			new URL(
				"workers/font.worker.js",
				new URL(import.meta.env.BASE_URL, location.origin),
			),
			{
				type: `module`,
			},
		)),
		(fontWorker.onmessage = ({ data: response }) => {
			let pendingRequest = fontRequests.get(response.id);
			fontRequests.delete(response.id);
			if (pendingRequest) {
				if (response.ok) {
					pendingRequest.resolve({
						buffer: response.buffer,
						ms: response.ms,
					});
				} else {
					pendingRequest.reject(Error(response.error));
				}
			}
		}),
		fontWorker)
	);
}
function requestFont(request, transferables = []) {
	let requestId = fontRequestId++;
	return new Promise((resolve, reject) => {
		fontRequests.set(requestId, {
			resolve: resolve,
			reject: reject,
		});
		getFontWorker().postMessage(
			{
				...request,
				id: requestId,
			},
			transferables,
		);
	});
}
var buildProjectFont = (project, { place: placements, lines: guideLines }) =>
	requestFont({
		type: `build`,
		familyName: familyName(project.name),
		projectId: project.id,
		tracking: project.settings.tracking,
		metrics: {
			xHeight: guideLines.xHeight,
			capHeight: guideLines.capHeight,
		},
		glyphs: writtenDrawings(project).map((glyph) => ({
			...glyph,
			place: placements.get(glyph.cp) ?? defaultPlacement,
		})),
	});
var convertWoff2 = (otfBuffer) => {
	let transferableOtf = otfBuffer.slice(0);
	return requestFont(
		{
			type: `woff2`,
			otf: transferableOtf,
		},
		[transferableOtf],
	);
};
var packProjectFont = (otfBuffer, project) => {
	let transferableOtf = otfBuffer.slice(0);
	return requestFont(
		{
			type: `pack`,
			otf: transferableOtf,
			project: project,
			exportedAt: Date.now(),
		},
		[transferableOtf],
	);
};
export { buildProjectFont, convertWoff2, packProjectFont };
