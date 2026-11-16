import * as React from "react";
import { useWrite } from "../state/WriteProvider.jsx";
function closestGridCell(argument, argument2, argument3) {
  let value = argument2.getBoundingClientRect();
  let value2;
  let value3 = Infinity;
  let value4 = Infinity;
  for (let value5 of argument) {
    let value6 = value5.getBoundingClientRect();
    let value7 = (value6.top - value.top) * argument3;
    if (value7 < 1) {
      continue;
    }
    let value8 = Math.abs(value6.left - value.left);
    if (value7 < value3 - 1 || Math.abs(value7 - value3) <= 1 && value8 < value4) {
      value2 = value5;
      value3 = value7;
      value4 = value8;
    }
  }
  return value2;
}
function GlyphGrid({
  set: argument,
  onSelect: argument2,
  Tile: _Component1,
  className: argument3,
  tileClassName: argument4
}) {
  let {
    state: value
  } = useWrite();
  let {
    codepoints: value2
  } = argument;
  let [value3, value4] = (0, React.useState)();
  let value5 = value3 ?? (value2.includes(value.cp) ? value.cp : value2[0]);
  return <div role={`group`} aria-label={`${argument.label} glyphs`} onKeyDown={event => {
    let value6 = document.activeElement;
    if (!(value6 instanceof HTMLElement) || value6.parentElement !== event.currentTarget) {
      return;
    }
    let value7 = [...event.currentTarget.children];
    let value8 = value7.indexOf(value6);
    let value9 = event.key === `ArrowLeft` ? value7[value8 - 1] : event.key === `ArrowRight` ? value7[value8 + 1] : event.key === `ArrowUp` ? closestGridCell(value7, value6, -1) : event.key === `ArrowDown` ? closestGridCell(value7, value6, 1) : event.key === `Home` ? value7[0] : event.key === `End` ? value7[value7.length - 1] : null;
    if (value9 !== null) {
      event.preventDefault();
      event.stopPropagation();
      value9?.focus();
    }
  }} onFocus={event => value4(Number(event.target.dataset.cp))} onBlur={event => {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      value4(undefined);
    }
  }} className={argument3}>{value2.map(argument5 => <_Component1 cp={argument5} drawn={value.drawn.has(argument5)} current={argument5 === value.cp} tabIndex={argument5 === value5 ? 0 : -1} onSelect={argument2} className={argument4} key={argument5} />)}</div>;
}
export { GlyphGrid };
