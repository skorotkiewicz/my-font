import { buildFont } from "../lib/font/build-font.js";
import { drawingContours, placeContours } from "../lib/font/contours.js";
import { packProjectFont } from "../lib/font/pack-project.js";
const drawingContourCache = new Map();
function cachedDrawingContours(drawing) {
	const cacheKey = `${drawing.id}:${drawing.updatedAt}`;
	let contours = drawingContourCache.get(cacheKey);
	if (!contours) {
		contours = drawingContours(drawing);
		drawingContourCache.set(cacheKey, contours);
	}
	return contours;
}
async function handleFontRequest(request) {
	if (request.type === `build`) {
		return buildFont({
			familyName: request.familyName,
			projectId: request.projectId,
			tracking: request.tracking,
			metrics: request.metrics,
			glyphs: request.glyphs.map(
				({ cp: codepoint, drawing, place: placement }) => ({
					cp: codepoint,
					contours: placeContours(cachedDrawingContours(drawing), placement),
				}),
			),
		});
	}
	if (request.type === `pack`) {
		return packProjectFont(request.otf, request.project, request.exportedAt);
	}
	if (request.type === `warm`) {
		await import("woff2-encoder");
		return new ArrayBuffer(0);
	}
	const { compress: compressWoff2 } = await import("woff2-encoder");
	const compressedFont = await compressWoff2(request.otf);
	return compressedFont.buffer.slice(
		compressedFont.byteOffset,
		compressedFont.byteOffset + compressedFont.byteLength,
	);
}
self.onmessage = async ({ data: request }) => {
	const startedAt = performance.now();
	try {
		const resultBuffer = await handleFontRequest(request);
		const response = {
			id: request.id,
			ok: true,
			buffer: resultBuffer,
			ms: performance.now() - startedAt,
		};
		self.postMessage(response, [resultBuffer]);
	} catch (error) {
		const failureResponse = {
			id: request.id,
			ok: false,
			error: error instanceof Error ? error.message : String(error),
		};
		self.postMessage(failureResponse);
	}
};
