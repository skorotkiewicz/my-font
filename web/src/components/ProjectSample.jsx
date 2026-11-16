import * as React from "react";
import { allCodepoints } from "../data/characters.jsx";
import { firstDrawing } from "../lib/project.jsx";
import {
	placementTransform,
	inkBounds,
	alignProject,
} from "../lib/alignment.jsx";
import { strokePath } from "../lib/svgPaths.jsx";
var sampleCharacters = `hamburgefonstiv`;
var sampleCount = 14;
var sampleSpacing = 90;
function projectSampleLayout(project) {
	let { place: placements, lines } = alignProject(project);
	let drawingForCodepoint = (glyphCodepoint) =>
		firstDrawing(project.glyphs[glyphCodepoint]);
	let sampleCodepoints = [...sampleCharacters]
		.map((character) => character.charCodeAt(0))
		.filter(drawingForCodepoint);
	let selectedCodepoints = (
		sampleCodepoints.length >= 5
			? sampleCodepoints
			: allCodepoints.filter(drawingForCodepoint)
	).slice(0, sampleCount);
	let cursorX = 0;
	let letters = [];
	for (let glyphCodepoint of selectedCodepoints) {
		let drawing = drawingForCodepoint(glyphCodepoint);
		let bounds = inkBounds(glyphCodepoint, drawing);
		let placement = placements.get(glyphCodepoint);
		if (bounds && placement) {
			letters.push({
				cp: glyphCodepoint,
				strokes: drawing.strokes,
				transform: placementTransform(
					placement,
					cursorX - bounds.xMin * placement.scale,
				),
			});
			cursorX += (bounds.xMax - bounds.xMin) * placement.scale + sampleSpacing;
		}
	}
	let top = 920 - Math.max(lines.ascender, lines.capHeight) - 60;
	return {
		letters: letters,
		width: Math.max(1, cursorX - sampleSpacing),
		top: top,
		bottom: 1180,
	};
}
function ProjectSample({ project, label }) {
	let { letters, width, top, bottom } = React.useMemo(
		() => projectSampleLayout(project),
		[project],
	);
	return (
		<svg
			role="img"
			aria-label={label}
			viewBox={`0 ${top.toFixed(0)} ${width.toFixed(0)} ${(bottom - top).toFixed(0)}`}
			preserveAspectRatio="xMinYMid meet"
			className="block h-11.5 w-full fill-hand"
		>
			{letters.map(({ cp: codepoint, strokes, transform }) => (
				<g transform={transform} key={codepoint}>
					{strokes.map((stroke) => (
						<path d={strokePath(stroke)} key={stroke.id} />
					))}
				</g>
			))}
		</svg>
	);
}
export { ProjectSample };
