var defaultFix = {
	dx: 0,
	dy: 0,
	scale: 1,
};
var createId = () => {
	if (typeof crypto.randomUUID == `function`) {
		return crypto.randomUUID();
	}
	let value = crypto.getRandomValues(new Uint8Array(16));
	value[6] = (value[6] & 15) | 64;
	value[8] = (value[8] & 63) | 128;
	let value2 = Array.from(value, (argument) =>
		argument.toString(16).padStart(2, `0`),
	).join(``);
	return `${value2.slice(0, 8)}-${value2.slice(8, 12)}-${value2.slice(12, 16)}-${value2.slice(16, 20)}-${value2.slice(20)}`;
};
var legacyProjectId = `spike-0000`;
var ensureProjectId = (argument) =>
	argument.id && argument.id !== legacyProjectId
		? argument
		: {
				...argument,
				id: createId(),
			};
function normalizeProject(argument) {
	let value = argument;
	if (value?.schemaVersion !== 1) {
		throw Error(`Unknown project schema: ${value?.schemaVersion}`);
	}
	return {
		...value,
		settings: {
			...value.settings,
			tracking: value.settings?.tracking ?? 0,
			tidy: value.settings?.tidy ?? true,
		},
	};
}
var firstDrawing = (glyph) =>
	glyph?.drawings[0]?.strokes.length ? glyph.drawings[0] : undefined;
var writtenDrawings = (project) =>
	Object.values(project.glyphs).flatMap((argument) => {
		let value = firstDrawing(argument);
		if (value) {
			return [
				{
					cp: argument.cp,
					drawing: value,
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
