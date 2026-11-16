import { allCodepoints, characterFor } from "../data/characters.jsx";
import { defaultFix } from "../lib/project.jsx";
import { inkBounds } from "../lib/alignment.jsx";
import { useWrite } from "../state/WriteProvider.jsx";
import { Panel } from "./ui/Sheet.jsx";
import { adjustmentLimits, AlignmentPreview } from "./AlignmentPreview.jsx";
import { ToolButton } from "./ui/Buttons.jsx";
var scaleFraction = argument => (argument - adjustmentLimits.minScale) / (adjustmentLimits.maxScale - adjustmentLimits.minScale);
var sliderThumbSize = 24;
var scaleSnapThreshold = 0.02;
function AdjustmentControls() {
  let {
    state: value,
    actions: value2
  } = useWrite();
  let {
    project: project,
    alignment: value3,
    picked: value4
  } = value;
  let value5 = allCodepoints.flatMap(argument => {
    let drawing = project.glyphs[argument]?.drawings[0];
    let value9 = drawing && inkBounds(argument, drawing);
    let value10 = value3.place.get(argument);
    if (drawing && value9 && value10) {
      return [{
        cp: argument,
        strokes: drawing.strokes,
        ink: value9,
        place: value10,
        fix: drawing.fix
      }];
    } else {
      return [];
    }
  });
  let value6 = value5.find(argument => argument.cp === value4) ?? value5[0];
  if (!value6) {
    return <p className={`px-5 pb-2 text-[0.9375rem] leading-5 text-pretty text-paper/90 lg:px-6`}>{`Write a letter first. Your letters line up here, ready to adjust.`}</p>;
  }
  let {
    fix: value7
  } = value6;
  let value8 = characterFor(value6.cp);
  return <div className={`flex flex-col gap-3.5 px-5 pt-1.5 pb-4 lg:px-6`}><AlignmentPreview letters={value5} xHeight={value3.lines.xHeight} picked={value6.cp} onPick={value2.pick} onFix={value2.setFix} /><p className={`text-caption text-pretty text-paper/90`}>{`Drag `}<span className={`font-bold text-paper`}>{value8}</span>{` up or down. Tap another letter to adjust it instead.`}</p><label className={`flex items-center gap-3.5`}><span className={`w-8.5 shrink-0 text-[0.9375rem] font-medium`}>{`Size`}</span><span className={`relative flex min-w-0 flex-1`}><span aria-hidden={true} className={`absolute top-1/2 h-3 w-0.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-paper/60`} style={{
          left: `calc(${sliderThumbSize / 2}px + (100% - ${sliderThumbSize}px) * ${scaleFraction(1).toFixed(4)})`
        }} /><input type={`range`} min={adjustmentLimits.minScale} max={adjustmentLimits.maxScale} step={0.01} value={value7.scale} onChange={event => {
          let value9 = Number(event.target.value);
          value2.setFix(value6.cp, {
            ...value7,
            scale: Math.abs(value9 - 1) < scaleSnapThreshold ? 1 : value9
          });
        }} className={`range relative min-w-0 flex-1`} style={{
          "--fill": `${scaleFraction(value7.scale) * 100}%`
        }} /></span><output className={`w-11 shrink-0 text-right text-caption text-paper/90 tabular-nums`}>{Math.round(value7.scale * 100)}{`%`}</output></label><div className={`grid grid-cols-2 gap-2`}><ToolButton onClick={() => value2.setFix(value6.cp, defaultFix)} disabled={value7.dy === 0 && value7.scale === 1} className={`justify-center`}>{`Reset `}{value8}</ToolButton><ToolButton onClick={() => {
        value2.go(value6.cp, `jump`);
        value2.closeSheet();
      }} className={`justify-center`}>{`Redraw `}{value8}</ToolButton></div></div>;
}
function AdjustSheet() {
  let {
    state: value,
    actions: value2
  } = useWrite();
  return <Panel open={value.sheet === `adjust`} onClose={value2.closeSheet} title={`Adjust letters`} anchor={`[data-anchor="actions"]`}><AdjustmentControls /><label className={`flex min-h-11 items-center gap-4 px-5 pt-2 lg:px-6`}><span className={`flex flex-1 flex-col gap-0.5`}><span className={`text-[0.9375rem] leading-5 font-semibold`}>{`Line up letters for me`}</span><span className={`text-caption text-pretty text-paper/90`}>{`Evens out baseline and size. Off keeps every letter exactly as drawn.`}</span></span><input type={`checkbox`} role={`switch`} checked={value.project.settings.tidy} onChange={event => value2.setTidy(event.target.checked)} className={`switch shrink-0`} /></label></Panel>;
}
export { AdjustSheet };
