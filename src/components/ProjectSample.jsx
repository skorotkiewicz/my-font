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
	const { place: placements, lines } = alignProject(project);
	const drawingForCodepoint = (glyphCodepoint) =>
		firstDrawing(project.glyphs[glyphCodepoint]);
	const sampleCodepoints = [...sampleCharacters]
		.map((character) => character.charCodeAt(0))
		.filter(drawingForCodepoint);
	const selectedCodepoints = (
		sampleCodepoints.length >= 5
			? sampleCodepoints
			: allCodepoints.filter(drawingForCodepoint)
	).slice(0, sampleCount);
	let cursorX = 0;
	const letters = [];
	for (const glyphCodepoint of selectedCodepoints) {
		const drawing = drawingForCodepoint(glyphCodepoint);
		const bounds = inkBounds(glyphCodepoint, drawing);
		const placement = placements.get(glyphCodepoint);
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
	const top = 920 - Math.max(lines.ascender, lines.capHeight) - 60;
	return {
		letters: letters,
		width: Math.max(1, cursorX - sampleSpacing),
		top: top,
		bottom: 1180,
	};
}
function ProjectSample({ project, label }) {
	const { letters, width, top, bottom } = React.useMemo(
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
