import { descender } from "./metrics.jsx";
var shortLetterZone = {
	top: 500,
	bottom: 0,
	name: `short letter`,
};
var tallLetterZone = {
	top: 700,
	bottom: 0,
	name: `tall letter`,
};
var tailLetterZone = {
	top: 500,
	bottom: descender,
	name: `letter with a tail`,
};
var tallTailZone = {
	top: 700,
	bottom: descender,
	name: `tall, with a tail`,
};
var glyphZone = (argument, argument2, argument3) => ({
	top: argument,
	bottom: argument2,
	name: argument3,
});
var glyphZones = {
	...Object.fromEntries(
		[...`acemnorsuvwxz`].map((argument) => [argument, shortLetterZone]),
	),
	...Object.fromEntries(
		[...`bdfhiklt`].map((argument) => [argument, tallLetterZone]),
	),
	...Object.fromEntries(
		[...`gpqy`].map((argument) => [argument, tailLetterZone]),
	),
	j: tallTailZone,
	...Object.fromEntries(
		[...`!?&#$%@`].map((argument) => [argument, tallLetterZone]),
	),
	...Object.fromEntries(
		[...`()[]{}|/\\`].map((argument) => [argument, tallTailZone]),
	),
	".": glyphZone(120, 0, `dot on the line`),
	",": glyphZone(120, -120, `mark on the line, dipping below`),
	":": glyphZone(500, 0, `short mark`),
	";": glyphZone(500, -120, `short mark, dipping below`),
	"'": glyphZone(700, 480, `mark at the top`),
	'"': glyphZone(700, 480, `mark at the top`),
	"`": glyphZone(700, 480, `mark at the top`),
	"^": glyphZone(700, 420, `mark at the top`),
	"*": glyphZone(700, 380, `mark at the top`),
	"-": glyphZone(330, 170, `mark in the middle`),
	"~": glyphZone(330, 170, `mark in the middle`),
	"+": glyphZone(430, 70, `mark in the middle`),
	"=": glyphZone(380, 120, `mark in the middle`),
	"<": glyphZone(450, 50, `mark in the middle`),
	">": glyphZone(450, 50, `mark in the middle`),
	_: glyphZone(-60, -180, `line below the line`),
};
var zoneForCharacter = (argument) => glyphZones[argument] ?? tallLetterZone;
export { zoneForCharacter };
