var activeFontFace;
var fontFaceId = 0;
async function loadLiveFont(buffer) {
	const family = `live-font-${fontFaceId++}`;
	const face = new FontFace(family, buffer);
	await face.load();
	document.fonts.add(face);
	if (activeFontFace) {
		document.fonts.delete(activeFontFace);
	}
	activeFontFace = face;
	return family;
}
export { loadLiveFont };
