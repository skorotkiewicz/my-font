var defaultFix = {
	dx: 0,
	dy: 0,
	scale: 1,
};
var createId = () => {
	if (typeof crypto.randomUUID === `function`) {
		return crypto.randomUUID();
	}
	const randomBytes = crypto.getRandomValues(new Uint8Array(16));
	randomBytes[6] = (randomBytes[6] & 15) | 64;
	randomBytes[8] = (randomBytes[8] & 63) | 128;
	const hexBytes = Array.from(randomBytes, (byte) =>
		byte.toString(16).padStart(2, `0`),
	).join(``);
	return `${hexBytes.slice(0, 8)}-${hexBytes.slice(8, 12)}-${hexBytes.slice(12, 16)}-${hexBytes.slice(16, 20)}-${hexBytes.slice(20)}`;
};
var legacyProjectId = `spike-0000`;
var ensureProjectId = (project) =>
	project.id && project.id !== legacyProjectId
		? project
		: {
				...project,
				id: createId(),
			};
function normalizeProject(inputProject) {
	const project = inputProject;
	if (project?.schemaVersion !== 1) {
		throw Error(`Unknown project schema: ${project?.schemaVersion}`);
	}
	return {
		...project,
		settings: {
			...project.settings,
			tracking: project.settings?.tracking ?? 0,
			tidy: project.settings?.tidy ?? true,
		},
	};
}
var firstDrawing = (glyph) =>
	glyph?.drawings[0]?.strokes.length ? glyph.drawings[0] : undefined;
var writtenDrawings = (project) =>
	Object.values(project.glyphs).flatMap((glyph) => {
		const drawing = firstDrawing(glyph);
		if (drawing) {
			return [
				{
					cp: glyph.cp,
					drawing: drawing,
				},
			];
		} else {
			return [];
		}
	});
export {
	defaultFix,
	createId,
	ensureProjectId,
	normalizeProject,
	firstDrawing,
	writtenDrawings,
};
