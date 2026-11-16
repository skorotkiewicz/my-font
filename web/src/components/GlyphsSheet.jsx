import { CheckCircleIcon } from "./icons.jsx";
import { characterSets, characterFor, describeCharacter } from "../data/characters.jsx";
import { useWrite } from "../state/WriteProvider.jsx";
import { Panel } from "./ui/Sheet.jsx";
import { LiveText } from "./LiveText.jsx";
import { GlyphGrid } from "./GlyphGrid.jsx";
function GlyphTile({
  cp: argument,
  drawn: argument2,
  current: argument3,
  tabIndex: argument4,
  onSelect: argument5,
  className: argument6
}) {
  let value = argument3 ? `bg-paper [--color-hand:var(--color-carbon)] [--color-placeholder:var(--color-carbon)]` : argument2 ? `bg-paper/14 hover:bg-paper/20` : `inset-ring-[1.5px] inset-ring-paper/35 hover:bg-paper/8`;
  return <button type={`button`} data-cp={argument} tabIndex={argument4} onClick={() => argument5(argument)} aria-current={argument3 ? `true` : undefined} aria-label={`${describeCharacter(argument)}${argument2 ? `, written` : ``}`} className={`pressable flex aspect-square items-center justify-center leading-none ${value} ${argument6}`}><LiveText text={characterFor(argument)} shrink={0.72} /></button>;
}
function GlyphCount({
  written: argument,
  total: argument2
}) {
  return <span className={`flex shrink-0 items-center gap-1.5 text-caption text-paper/90 tabular-nums`}>{argument === argument2 ? <CheckCircleIcon className={`size-4.5 shrink-0 text-paper`} /> : null}{argument}{` of `}{argument2}</span>;
}
function GlyphsSheet() {
  let {
    state: value,
    actions: value2
  } = useWrite();
  let value3 = argument => {
    value2.go(argument, `jump`);
    value2.closeSheet();
  };
  return <Panel open={value.sheet === `glyphs`} onClose={value2.closeSheet} title={`All glyphs`} initialFocus={`[aria-current="true"]`} anchor={`[data-anchor="picker"]`}><div className={`flex flex-col gap-7 px-5 pt-1.5 lg:px-6`}>{characterSets.map(characterSet => <section aria-labelledby={`set-${characterSet.id}`} className={`flex flex-col gap-2.5`} key={characterSet.id}><div className={`flex items-baseline justify-between`}><h3 id={`set-${characterSet.id}`} className={`text-[0.9375rem] leading-5 font-semibold`}>{characterSet.label}</h3><GlyphCount written={characterSet.codepoints.filter(argument => value.drawn.has(argument)).length} total={characterSet.codepoints.length} /></div><GlyphGrid set={characterSet} onSelect={value3} Tile={GlyphTile} className={`grid grid-cols-[repeat(auto-fill,minmax(3.125rem,1fr))] gap-2.5 lg:gap-2`} tileClassName={`rounded-xl text-[2.5rem]`} /></section>)}</div></Panel>;
}
export { GlyphsSheet };
