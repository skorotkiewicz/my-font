import * as React from "react";
import { familyName } from "../lib/fontNames.jsx";
import { useWrite } from "../state/WriteProvider.jsx";
var quoteAliases = {
	39: [8216, 8217],
	34: [8220, 8221],
	45: [8208, 8209, 8722],
};
var dashAliases = [
	{
		cp: 8211,
		stretch: 1.6,
	},
	{
		cp: 8212,
		stretch: 2.4,
	},
];
var ellipsisCodepoint = 8230;
var spaceCodepoints = [32, 160];
var pictureAliases = new Map([
	...Object.entries(quoteAliases).flatMap(
		([sourceCodepoint, aliasCodepoints]) =>
			aliasCodepoints.map((aliasCodepoint) => [
				aliasCodepoint,
				Number(sourceCodepoint),
			]),
	),
	...dashAliases.map(({ cp: dashCodepoint }) => [dashCodepoint, 45]),
	[ellipsisCodepoint, 46],
]);
var canRenderCodepoint = (codepoint, drawnCodepoints) =>
	spaceCodepoints.includes(codepoint) ||
	drawnCodepoints.has(pictureAliases.get(codepoint) ?? codepoint);
function usePictureInput(text) {
	let { state } = useWrite();
	let { drawn, picture: pictureStyle } = state;
	let name = familyName(state.project.name);
	let fontFamily = state.font?.family;
	let guideLines = state.alignment.lines;
	return React.useMemo(
		() => ({
			text: text,
			name: name,
			family: fontFamily,
			lines: guideLines,
			style: pictureStyle,
			isDrawn: (character) =>
				canRenderCodepoint(character.codePointAt(0), drawn),
		}),
		[text, name, fontFamily, guideLines, pictureStyle, drawn],
	);
}
export { usePictureInput };
