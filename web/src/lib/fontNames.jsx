var defaultFamilyName = `My Hand`;
function truncateName(argument, argument2) {
	let value = ``;
	for (let value2 of argument) {
		if (value.length + value2.length > argument2) {
			break;
		}
		value += value2;
	}
	return value;
}
var familyName = (argument) =>
	truncateName(
		argument
			.replace(/\p{Cc}/gu, ` `)
			.replace(/\s+/g, ` `)
			.trim(),
		31,
	).trim() || `My Hand`;
function fileStem(argument) {
	let value = familyName(argument)
		.normalize(`NFC`)
		.replace(/[^\p{L}\p{M}\p{N}]/gu, ``);
	if (/[\p{L}\p{N}]/u.test(value)) {
		return value;
	} else {
		return `Ductus`;
	}
}
var fontFileName = (argument, argument2) =>
	`${fileStem(argument)}-Regular.${argument2}`;
var pictureFileName = (argument) => `${fileStem(argument)}.png`;
export { defaultFamilyName, familyName, fontFileName, pictureFileName };
