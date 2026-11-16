var codepointRange = (firstCharacter, lastCharacter) =>
	Array.from(
		{
			length: lastCharacter.charCodeAt(0) - firstCharacter.charCodeAt(0) + 1,
		},
		(unusedElement, offset) => firstCharacter.charCodeAt(0) + offset,
	);
var punctuationCodepoints = `.,!?'"-:;()&@#$%*/+=_<>[]{}\\|^\`~`
	.split(``)
	.map((character) => character.charCodeAt(0));
var characterSets = [
	{
		id: `lowercase`,
		label: `Lowercase`,
		required: true,
		codepoints: codepointRange(`a`, `z`),
	},
	{
		id: `uppercase`,
		label: `Uppercase`,
		required: false,
		codepoints: codepointRange(`A`, `Z`),
	},
	{
		id: `digits`,
		label: `Numbers`,
		required: false,
		codepoints: codepointRange(`0`, `9`),
	},
	{
		id: `punctuation`,
		label: `Punctuation`,
		required: false,
		codepoints: punctuationCodepoints,
	},
];
var allCodepoints = characterSets.flatMap(
	(characterSet) => characterSet.codepoints,
);
characterSets
	.filter((characterSet) => characterSet.required)
	.flatMap((characterSet) => characterSet.codepoints);
var characterSetFor = (codepoint) =>
	characterSets.find((characterSet) =>
		characterSet.codepoints.includes(codepoint),
	);
var punctuationLabels = {
	".": `a full stop`,
	",": `a comma`,
	"!": `an exclamation mark`,
	"?": `a question mark`,
	"'": `an apostrophe`,
	'"': `a quotation mark`,
	"-": `a hyphen`,
	":": `a colon`,
	";": `a semicolon`,
	"(": `an opening bracket`,
	")": `a closing bracket`,
	"&": `an ampersand`,
	"@": `an at sign`,
	"#": `a hash`,
	$: `a dollar sign`,
	"%": `a percent sign`,
	"*": `an asterisk`,
	"/": `a slash`,
	"+": `a plus sign`,
	"=": `an equals sign`,
	_: `an underscore`,
	"<": `a less-than sign`,
	">": `a greater-than sign`,
	"[": `an opening square bracket`,
	"]": `a closing square bracket`,
	"{": `an opening brace`,
	"}": `a closing brace`,
	"\\": `a backslash`,
	"|": `a vertical bar`,
	"^": `a caret`,
	"`": `a backtick`,
	"~": `a tilde`,
};
var characterFor = (codepoint) => String.fromCharCode(codepoint);
function describeCharacter(codepoint) {
	let character = characterFor(codepoint);
	if (character >= `a` && character <= `z`) {
		return `a small ${character}`;
	} else if (character >= `A` && character <= `Z`) {
		return `a capital ${character}`;
	} else if (character >= `0` && character <= `9`) {
		return `the number ${character}`;
	} else {
		return punctuationLabels[character] ?? character;
	}
}
export {
	characterSets,
	allCodepoints,
	characterSetFor,
	characterFor,
	describeCharacter,
};
