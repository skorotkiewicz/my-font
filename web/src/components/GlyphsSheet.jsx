import { CheckCircleIcon } from "./icons.jsx";
import {
	characterSets,
	characterFor,
	describeCharacter,
} from "../data/characters.jsx";
import { useWrite } from "../state/WriteProvider.jsx";
import { Panel } from "./ui/Sheet.jsx";
import { LiveText } from "./LiveText.jsx";
import { GlyphGrid } from "./GlyphGrid.jsx";
function GlyphTile({
	cp: codepoint,
	drawn: isDrawn,
	current: isCurrent,
	tabIndex,
	onSelect,
	className,
}) {
	let tileSurface = isCurrent
		? `bg-paper [--color-hand:var(--color-carbon)] [--color-placeholder:var(--color-carbon)]`
		: isDrawn
			? `bg-paper/14 hover:bg-paper/20`
			: `inset-ring-[1.5px] inset-ring-paper/35 hover:bg-paper/8`;
	return (
		<button
			type="button"
			data-cp={codepoint}
			tabIndex={tabIndex}
			onClick={() => onSelect(codepoint)}
			aria-current={isCurrent ? `true` : undefined}
			aria-label={`${describeCharacter(codepoint)}${isDrawn ? `, written` : ``}`}
			className={`pressable flex aspect-square items-center justify-center leading-none ${tileSurface} ${className}`}
		>
			<LiveText text={characterFor(codepoint)} shrink={0.72} />
		</button>
	);
}
function GlyphCount({ written: writtenCount, total: totalCount }) {
	return (
		<span className="flex shrink-0 items-center gap-1.5 text-caption text-paper/90 tabular-nums">
			{writtenCount === totalCount ? (
				<CheckCircleIcon className="size-4.5 shrink-0 text-paper" />
			) : null}
			{writtenCount}
			{` of `}
			{totalCount}
		</span>
	);
}
function GlyphsSheet() {
	let { state, actions } = useWrite();
	let selectGlyph = (selectedCodepoint) => {
		actions.go(selectedCodepoint, `jump`);
		actions.closeSheet();
	};
	return (
		<Panel
			open={state.sheet === `glyphs`}
			onClose={actions.closeSheet}
			title="All glyphs"
			initialFocus={`[aria-current="true"]`}
			anchor={`[data-anchor="picker"]`}
		>
			<div className="flex flex-col gap-7 px-5 pt-1.5 lg:px-6">
				{characterSets.map((characterSet) => (
					<section
						aria-labelledby={`set-${characterSet.id}`}
						className="flex flex-col gap-2.5"
						key={characterSet.id}
					>
						<div className="flex items-baseline justify-between">
							<h3
								id={`set-${characterSet.id}`}
								className="text-[0.9375rem] leading-5 font-semibold"
							>
								{characterSet.label}
							</h3>
							<GlyphCount
								written={
									characterSet.codepoints.filter((glyphCodepoint) =>
										state.drawn.has(glyphCodepoint),
									).length
								}
								total={characterSet.codepoints.length}
							/>
						</div>
						<GlyphGrid
							set={characterSet}
							onSelect={selectGlyph}
							Tile={GlyphTile}
							className="grid grid-cols-[repeat(auto-fill,minmax(3.125rem,1fr))] gap-2.5 lg:gap-2"
							tileClassName="rounded-xl text-[2.5rem]"
						/>
					</section>
				))}
			</div>
		</Panel>
	);
}
export { GlyphsSheet };
