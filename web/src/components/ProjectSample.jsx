import * as React from "react";
import { allCodepoints } from "../data/characters.jsx";
import { firstDrawing } from "../lib/project.jsx";
import { placementTransform, inkBounds, alignProject } from "../lib/alignment.jsx";
import { strokePath } from "../lib/svgPaths.jsx";
var sampleCharacters = `hamburgefonstiv`;
var sampleCount = 14;
var sampleSpacing = 90;
function projectSampleLayout(project) {
  let {
    place: value,
    lines: value2
  } = alignProject(project);
  let value3 = argument => firstDrawing(project.glyphs[argument]);
  let value4 = [...sampleCharacters].map(argument => argument.charCodeAt(0)).filter(value3);
  let value5 = (value4.length >= 5 ? value4 : allCodepoints.filter(value3)).slice(0, sampleCount);
  let value6 = 0;
  let value7 = [];
  for (let value9 of value5) {
    let drawing = value3(value9);
    let bounds = inkBounds(value9, drawing);
    let value10 = value.get(value9);
    if (bounds && value10) {
      value7.push({
        cp: value9,
        strokes: drawing.strokes,
        transform: placementTransform(value10, value6 - bounds.xMin * value10.scale)
      });
      value6 += (bounds.xMax - bounds.xMin) * value10.scale + sampleSpacing;
    }
  }
  let value8 = 920 - Math.max(value2.ascender, value2.capHeight) - 60;
  return {
    letters: value7,
    width: Math.max(1, value6 - sampleSpacing),
    top: value8,
    bottom: 1180
  };
}
function ProjectSample({
  project: argument,
  label: argument2
}) {
  let {
    letters: value,
    width: value2,
    top: value3,
    bottom: value4
  } = (0, React.useMemo)(() => projectSampleLayout(argument), [argument]);
  return <svg role={`img`} aria-label={argument2} viewBox={`0 ${value3.toFixed(0)} ${value2.toFixed(0)} ${(value4 - value3).toFixed(0)}`} preserveAspectRatio={`xMinYMid meet`} className={`block h-11.5 w-full fill-hand`}>{value.map(({
      cp: argument3,
      strokes: argument4,
      transform: argument5
    }) => <g transform={argument5} key={argument3}>{argument4.map(argument6 => <path d={strokePath(argument6)} key={argument6.id} />)}</g>)}</svg>;
}
export { ProjectSample };
