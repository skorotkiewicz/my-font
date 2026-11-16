var specimenWords =
	`about above after again air all also and animal answer any are around away back bad bear because bed been before best big black blue boat book box boy bread bring brown but buy cake call came can car carry cat city clean close cold come could cup cut dark day did dog done door down draw dream drink each early earth eat egg end even every eye face fall family far farm fast father feet few find fine fire fish five fly food foot form found four fox friend from front fruit full game garden gave get girl give glad good got grass great green grow had hand happy hard has have head hear heart help her here high hill him his hold home hope horse hot house how idea into iron island its jacket jam jar jazz job join joke journey joy judge juice jump just keep kept key kick kind king kiss kitchen kite knew know lake land large last late laugh lazy leaf learn left letter life light like line lion little live long look love low lucky made make many map mark may milk mix money moon more most mother move much music must name near never new next night nine noon north now number ocean off often old once only open orange other our out over own page paper park party past pen people picnic piece pink place plant play please pocket puzzle quick quiet quite queen question quiz rain read ready red rest rich ride right river road rock room round run sad said same saw say school sea seven she ship shop show side sing sister sit six sky sleep slow small snow some song soon south start stay still stop story street strong sugar summer sun swim table take talk tall tea tell ten than thank that the then there they thing think this three time today together told took tree try turn two under until upon use very visit voice wait walk warm was watch water wave way well went were west what when where which white who why wind window winter wish with word work world write yard year yellow yes yet you young zebra zero zest zip zone zoo`.split(
		` `,
	);
var punctuationSpecimens = {
	".": [`Done. Next.`, `3.14`],
	",": [`yes, no, maybe`],
	"!": [`Wow!`, `Stop!`],
	"?": [`Why?`, `Who?`],
	"'": [`it's`, `don't`],
	'"': [`"hello"`],
	"-": [`well-made`, `x-ray`],
	":": [`Note: yes`, `10:30`],
	";": [`here; there`],
	"(": [`(maybe)`, `f(x)`],
	")": [`(maybe)`, `f(x)`],
	"&": [`you & me`, `R&D`],
	"@": [`me@home.com`],
	"#": [`#1`, `#hand`],
	$: [`$5`, `$120`],
	"%": [`50%`, `100%`],
	"*": [`note*`, `2*3`],
	"/": [`and/or`, `1/2`],
	"+": [`1+1`, `+44`],
	"=": [`1+1=2`],
	_: [`snake_case`],
	"<": [`a < b`, `<tag>`],
	">": [`a > b`, `<tag>`],
	"[": [`[note]`],
	"]": [`[note]`],
	"{": [`{ok}`],
	"}": [`{ok}`],
	"\\": [`C:\\files`],
	"|": [`this | that`],
	"^": [`x^2`],
	"`": ["`code`"],
	"~": [`~5 min`],
};
var isLowercase = (character) => character >= `a` && character <= `z`;
var isUppercase = (character) => character >= `A` && character <= `Z`;
var isDigit = (character) => character >= `0` && character <= `9`;
function wordsForCharacter(character, isDrawn, limit) {
	let lowercaseCharacter = character.toLowerCase();
	let coverageFor = (word) => {
		let otherCharacters = [...word].filter(
			(candidateCharacter) => candidateCharacter !== lowercaseCharacter,
		);
		if (otherCharacters.length) {
			return otherCharacters.filter(isDrawn).length / otherCharacters.length;
		} else {
			return 1;
		}
	};
	let rankedWords = specimenWords
		.filter((word) => word.includes(lowercaseCharacter))
		.map((word, wordIndex) => ({
			w: word,
			i: wordIndex,
			score: coverageFor(word),
		}))
		.sort(
			(leftWord, rightWord) =>
				rightWord.score - leftWord.score || leftWord.i - rightWord.i,
		)
		.slice(0, limit)
		.map(({ w: word }) => word);
	if (isUppercase(character)) {
		return rankedWords.map((word) => word.toUpperCase());
	} else {
		return rankedWords;
	}
}
function specimenForCharacter(character, isDrawn = () => false) {
	if (isLowercase(character)) {
		return [
			`n${character}n o${character}o`,
			...wordsForCharacter(character, isDrawn, 3),
		];
	} else if (isUppercase(character)) {
		return [
			`H${character}H O${character}O`,
			...wordsForCharacter(character, isDrawn, 2),
		];
	} else if (isDigit(character)) {
		return [
			`1${character}1 0${character}0`,
			`${character}0${character}${character}`,
			`0123456789`,
		];
	} else {
		return [
			`n${character}n H${character}H`,
			...(punctuationSpecimens[character] ?? []),
		];
	}
}
export { specimenForCharacter };
