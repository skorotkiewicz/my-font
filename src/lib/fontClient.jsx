import { writtenDrawings } from "./project.jsx";
import { defaultPlacement } from "./alignment.jsx";
import { familyName } from "./fontNames.jsx";
var fontWorker;
var fontRequestId = 0;
var fontRequests = new Map();
function getFontWorker() {
	if (fontWorker) {
		return fontWorker;
	}
	fontWorker = new Worker(
		new URL("../workers/font.worker.js", import.meta.url),
		{
			type: `module`,
		},
	);
	fontWorker.onmessage = ({ data: response }) => {
		const pendingRequest = fontRequests.get(response.id);
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
	};
	return fontWorker;
}
function requestFont(request, transferables = []) {
	const requestId = fontRequestId++;
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
	const transferableOtf = otfBuffer.slice(0);
	return requestFont(
		{
			type: `woff2`,
			otf: transferableOtf,
		},
		[transferableOtf],
	);
};
var packProjectFont = (otfBuffer, project) => {
	const transferableOtf = otfBuffer.slice(0);
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
