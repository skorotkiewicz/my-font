import { allCodepoints, characterFor } from "../data/characters.jsx";
import { defaultFix } from "../lib/project.jsx";
import { inkBounds } from "../lib/alignment.jsx";
import { useWrite } from "../state/WriteProvider.jsx";
import { Panel } from "./ui/Sheet.jsx";
import { adjustmentLimits, AlignmentPreview } from "./AlignmentPreview.jsx";
import { ToolButton } from "./ui/Buttons.jsx";
var scaleFraction = (scale) =>
	(scale - adjustmentLimits.minScale) /
	(adjustmentLimits.maxScale - adjustmentLimits.minScale);
var sliderThumbSize = 24;
var scaleSnapThreshold = 0.02;
function AdjustmentControls() {
	let { state, actions } = useWrite();
	let { project, alignment, picked: pickedCodepoint } = state;
	let letters = allCodepoints.flatMap((glyphCodepoint) => {
		let drawing = project.glyphs[glyphCodepoint]?.drawings[0];
		let glyphInk = drawing && inkBounds(glyphCodepoint, drawing);
		let glyphPlacement = alignment.place.get(glyphCodepoint);
		if (drawing && glyphInk && glyphPlacement) {
			return [
				{
					cp: glyphCodepoint,
					strokes: drawing.strokes,
					ink: glyphInk,
					place: glyphPlacement,
					fix: drawing.fix,
				},
			];
		} else {
			return [];
		}
	});
	let selectedLetter =
		letters.find((candidateLetter) => candidateLetter.cp === pickedCodepoint) ??
		letters[0];
	if (!selectedLetter) {
		return (
			<p className="px-5 pb-2 text-[0.9375rem] leading-5 text-pretty text-paper/90 lg:px-6">{`Write a letter first. Your letters line up here, ready to adjust.`}</p>
		);
	}
	let { fix: selectedFix } = selectedLetter;
	let selectedCharacter = characterFor(selectedLetter.cp);
	return (
		<div className="flex flex-col gap-3.5 px-5 pt-1.5 pb-4 lg:px-6">
			<AlignmentPreview
				letters={letters}
				xHeight={alignment.lines.xHeight}
				picked={selectedLetter.cp}
				onPick={actions.pick}
				onFix={actions.setFix}
			/>
			<p className="text-caption text-pretty text-paper/90">
				{`Drag `}
				<span className="font-bold text-paper">{selectedCharacter}</span>
				{` up or down. Tap another letter to adjust it instead.`}
			</p>
			<label className="flex items-center gap-3.5">
				<span className="w-8.5 shrink-0 text-[0.9375rem] font-medium">{`Size`}</span>
				<span className="relative flex min-w-0 flex-1">
					<span
						aria-hidden={true}
						className="absolute top-1/2 h-3 w-0.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-paper/60"
						style={{
							left: `calc(${sliderThumbSize / 2}px + (100% - ${sliderThumbSize}px) * ${scaleFraction(1).toFixed(4)})`,
						}}
					/>
					<input
						type="range"
						min={adjustmentLimits.minScale}
						max={adjustmentLimits.maxScale}
						step={0.01}
						value={selectedFix.scale}
						onChange={(event) => {
							let nextScale = Number(event.target.value);
							actions.setFix(selectedLetter.cp, {
								...selectedFix,
								scale:
									Math.abs(nextScale - 1) < scaleSnapThreshold ? 1 : nextScale,
							});
						}}
						className="range relative min-w-0 flex-1"
						style={{
							"--fill": `${scaleFraction(selectedFix.scale) * 100}%`,
						}}
					/>
				</span>
				<output className="w-11 shrink-0 text-right text-caption text-paper/90 tabular-nums">
					{Math.round(selectedFix.scale * 100)}
					{`%`}
				</output>
			</label>
			<div className="grid grid-cols-2 gap-2">
				<ToolButton
					onClick={() => actions.setFix(selectedLetter.cp, defaultFix)}
					disabled={selectedFix.dy === 0 && selectedFix.scale === 1}
					className="justify-center"
				>
					{`Reset `}
					{selectedCharacter}
				</ToolButton>
				<ToolButton
					onClick={() => {
						actions.go(selectedLetter.cp, `jump`);
						actions.closeSheet();
					}}
					className="justify-center"
				>
					{`Redraw `}
					{selectedCharacter}
				</ToolButton>
			</div>
		</div>
	);
}
function AdjustSheet() {
	let { state, actions } = useWrite();
	return (
		<Panel
			open={state.sheet === `adjust`}
			onClose={actions.closeSheet}
			title="Adjust letters"
			anchor={`[data-anchor="actions"]`}
		>
			<AdjustmentControls />
			<label className="flex min-h-11 items-center gap-4 px-5 pt-2 lg:px-6">
				<span className="flex flex-1 flex-col gap-0.5">
					<span className="text-[0.9375rem] leading-5 font-semibold">{`Line up letters for me`}</span>
					<span className="text-caption text-pretty text-paper/90">{`Evens out baseline and size. Off keeps every letter exactly as drawn.`}</span>
				</span>
				<input
					type="checkbox"
					role="switch"
					checked={state.project.settings.tidy}
					onChange={(event) => actions.setTidy(event.target.checked)}
					className="switch shrink-0"
				/>
			</label>
		</Panel>
	);
}
export { AdjustSheet };
