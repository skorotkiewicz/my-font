import * as React from "react";
import { familyName } from "../lib/fontNames.jsx";
import { useWrite } from "../state/WriteProvider.jsx";
var quoteAliases = {
  39: [8216, 8217],
  34: [8220, 8221],
  45: [8208, 8209, 8722]
};
var dashAliases = [{
  cp: 8211,
  stretch: 1.6
}, {
  cp: 8212,
  stretch: 2.4
}];
var ellipsisCodepoint = 8230;
var spaceCodepoints = [32, 160];
var pictureAliases = new Map([...Object.entries(quoteAliases).flatMap(([argument, argument2]) => argument2.map(argument3 => [argument3, Number(argument)])), ...dashAliases.map(({
  cp: argument
}) => [argument, 45]), [ellipsisCodepoint, 46]]);
var canRenderCodepoint = (argument, argument2) => spaceCodepoints.includes(argument) || argument2.has(pictureAliases.get(argument) ?? argument);
function usePictureInput(argument) {
  let {
    state: value
  } = useWrite();
  let {
    drawn: value2,
    picture: value3
  } = value;
  let value4 = familyName(value.project.name);
  let value5 = value.font?.family;
  let value6 = value.alignment.lines;
  return (0, React.useMemo)(() => ({
    text: argument,
    name: value4,
    family: value5,
    lines: value6,
    style: value3,
    isDrawn: argument2 => canRenderCodepoint(argument2.codePointAt(0), value2)
  }), [argument, value4, value5, value6, value3, value2]);
}
export { usePictureInput };
