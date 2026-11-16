var defaultFamilyName = `My Hand`;
function truncateName(name, maxLength) {
	let truncatedName = ``;
	for (let character of name) {
		if (truncatedName.length + character.length > maxLength) {
			break;
		}
		truncatedName += character;
	}
	return truncatedName;
}
var familyName = (name) =>
	truncateName(
		name
			.replace(/\p{Cc}/gu, ` `)
			.replace(/\s+/g, ` `)
			.trim(),
		31,
	).trim() || `My Hand`;
function fileStem(name) {
	let stem = familyName(name)
		.normalize(`NFC`)
		.replace(/[^\p{L}\p{M}\p{N}]/gu, ``);
	if (/[\p{L}\p{N}]/u.test(stem)) {
		return stem;
	} else {
		return `Ductus`;
	}
}
var fontFileName = (name, extension) =>
	`${fileStem(name)}-Regular.${extension}`;
var pictureFileName = (name) => `${fileStem(name)}.png`;
export { defaultFamilyName, familyName, fontFileName, pictureFileName };
