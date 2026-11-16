import * as React from "react";
import { ChevronDownIcon } from "./icons.jsx";
import {
	allCodepoints,
	characterFor,
	describeCharacter,
} from "../data/characters.jsx";
import { stageHeight, stageYFor, guideLines } from "../data/metrics.jsx";
import { placementTransform, inkBounds } from "../lib/alignment.jsx";
import { useWrite } from "../state/WriteProvider.jsx";
import { strokePath } from "../lib/svgPaths.jsx";
import { placeholderScale } from "./LiveText.jsx";
import { zoneForCharacter } from "../data/glyphZones.jsx";
import { DrawingCanvas } from "./DrawingCanvas.jsx";
var neighbourCount = 8;
var neighbourGap = 150;
var neighbourOffset = 100;
var tapeArrivalOffset = 260;
var stagePercent = (stageUnits) =>
	`${((stageUnits / stageHeight) * 100).toFixed(3)}%`;
var stagePixels = (stageUnits) => `calc(var(--u) * ${stageUnits.toFixed(0)})`;
function WrittenNeighbour({ strokes, ink: bounds, place: placement }) {
	const inkWidth = Math.max(1, (bounds.xMax - bounds.xMin) * placement.scale);
	return (
		<svg
			aria-hidden={true}
			viewBox={`0 0 ${inkWidth.toFixed(0)} ${stageHeight}`}
			className="block h-full shrink-0 fill-hand"
			style={{
				width: stagePixels(inkWidth),
			}}
		>
			<g
				transform={placementTransform(
					placement,
					-bounds.xMin * placement.scale,
				)}
			>
				{strokes.map((stroke) => (
					<path d={strokePath(stroke)} key={stroke.id} />
				))}
			</g>
		</svg>
	);
}
function PlaceholderNeighbour({ char: character, lines }) {
	return (
		<span
			className="relative block h-full shrink-0 font-display font-normal"
			style={{
				fontSize: stagePixels(placeholderScale(character, lines) * 1000),
			}}
		>
			<span className="invisible block h-0 leading-none whitespace-pre">
				{character}
			</span>
			<svg
				aria-hidden={true}
				className="absolute inset-0 size-full overflow-visible fill-placeholder"
			>
				<text y={stagePercent(stageYFor(0))}>{character}</text>
			</svg>
		</span>
	);
}
function TapeNeighbours({ cps: codepoints, side }) {
	const { state, actions } = useWrite();
	const { project, alignment } = state;
	const tapeOffset = `calc(50% + var(--tape-slot) / 2 + ${stagePixels(neighbourOffset)})`;
	return (
		<div
			aria-hidden={true}
			className={`absolute inset-y-0 flex ${side === `before` ? `flex-row-reverse` : ``}`}
			style={{
				[side === `before` ? `right` : `left`]: tapeOffset,
				gap: stagePixels(neighbourGap),
			}}
		>
			{codepoints.map((glyphCodepoint) => {
				const drawing = project.glyphs[glyphCodepoint]?.drawings[0];
				const glyphInk = drawing?.strokes.length
					? inkBounds(glyphCodepoint, drawing)
					: null;
				const glyphPlacement = alignment.place.get(glyphCodepoint);
				return (
					<button
						type="button"
						tabIndex={-1}
						onClick={() => actions.go(glyphCodepoint)}
						className="pressable flex h-full min-w-11 shrink-0 justify-center rounded-2xl hover:bg-paper/6 max-md:pointer-events-none"
						key={glyphCodepoint}
					>
						{drawing && glyphInk && glyphPlacement ? (
							<WrittenNeighbour
								strokes={drawing.strokes}
								ink={glyphInk}
								place={glyphPlacement}
							/>
						) : (
							<PlaceholderNeighbour
								char={characterFor(glyphCodepoint)}
								lines={alignment.lines}
							/>
						)}
					</button>
				);
			})}
		</div>
	);
}
function DrawingPrompt({ cp: codepoint, zone }) {
	return (
		<p
			aria-hidden={true}
			className="pointer-events-none absolute left-1/2 z-20 w-(--tape-slot) -translate-x-1/2 -translate-y-1/2 px-3 text-center text-[0.9375rem] leading-5 font-medium text-balance lg:text-lg lg:leading-6"
			style={{
				top: stagePercent(stageYFor((zone.top + zone.bottom) / 2)),
			}}
		>
			{`Write your `}
			<span className="font-bold">{characterFor(codepoint)}</span>
			{` here`}
			<span className="pointer-fine:hidden">{`, with a finger or pen`}</span>
			<span className="hidden pointer-fine:inline">{`. A mouse, trackpad or pen will do.`}</span>
		</p>
	);
}
function GlyphPicker() {
	const { state, actions } = useWrite();
	const { cp: codepoint, set: characterSet } = state;
	const glyphOrdinal = characterSet.codepoints.indexOf(codepoint) + 1;
	return (
		<div className="flex shrink-0 items-center justify-between gap-3 px-5 pb-3 compact:px-4 short-landscape:pt-2 md:mx-auto md:w-(--tape-stage) md:px-0 lg:pb-2">
			<div className="flex min-w-0 items-center gap-3 lg:gap-3.5">
				<span
					aria-hidden={true}
					className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-paper pb-0.5 font-wide text-[1.625rem] leading-none text-carbon lg:size-13 lg:rounded-[0.875rem] lg:text-3xl"
				>
					{characterFor(codepoint)}
				</span>
				<h1 className="truncate text-base leading-5.5 font-medium lg:text-lg lg:leading-6">
					{`Write `}
					{describeCharacter(codepoint)}
				</h1>
			</div>
			<button
				type="button"
				data-anchor="picker"
				aria-haspopup="dialog"
				onClick={() => actions.openSheet(`glyphs`)}
				aria-label={`${characterSet.label}, ${glyphOrdinal} of ${characterSet.codepoints.length}. Show all glyphs`}
				className="pressable flex h-11 shrink-0 items-center gap-2 rounded-full bg-paper/14 pr-2.5 pl-4 text-[0.9375rem] leading-5 hover:bg-paper/20 active:bg-paper/24 lg:pl-4.5"
			>
				<span className="hidden font-medium lg:inline">
					{characterSet.label}
				</span>
				<span className="font-medium tabular-nums lg:font-normal lg:text-paper/90">
					{glyphOrdinal}
					{` of `}
					{characterSet.codepoints.length}
				</span>
				<ChevronDownIcon />
			</button>
		</div>
	);
}
function WritingStrip() {
	const { state, actions } = useWrite();
	const { cp: codepoint, strokes, status, drawn, arrival } = state;
	const zone = zoneForCharacter(characterFor(codepoint));
	const [hasStartedDrawing, setHasStartedDrawing] = React.useState(false);
	const codepointIndex = allCodepoints.indexOf(codepoint);
	const previousCodepoints = allCodepoints
		.slice(Math.max(0, codepointIndex - neighbourCount), codepointIndex)
		.reverse();
	const nextCodepoints = allCodepoints.slice(
		codepointIndex + 1,
		codepointIndex + 1 + neighbourCount,
	);
	const shouldAnimateArrival =
		arrival.by === `press` && arrival.from !== undefined;
	const isForwardArrival =
		shouldAnimateArrival &&
		allCodepoints.indexOf(arrival.from) < codepointIndex;
	return (
		<section
			aria-label="Writing strip"
			className="flex shrink-0 flex-col lg:bg-paper/6 lg:pt-4 lg:pb-4"
		>
			<GlyphPicker />
			<div className="relative h-[calc(var(--tape-stage)/2)] overflow-hidden bg-paper/6 lg:bg-transparent">
				<span
					aria-hidden={true}
					className="pointer-events-none absolute left-1/2 w-(--tape-slot) -translate-x-1/2 bg-paper/10"
					style={{
						top: stagePercent(stageYFor(zone.top)),
						height: stagePercent(zone.top - zone.bottom),
					}}
				/>
				{guideLines.map((guideLine) => (
					<span
						aria-hidden={true}
						className={`pointer-events-none absolute inset-x-0 h-[1.5px] -translate-y-1/2 ${guideLine.id === `baseline` ? `bg-paper/65` : `bg-paper/22`}`}
						style={{
							top: stagePercent(guideLine.y),
						}}
						key={guideLine.id}
					/>
				))}
				<div
					className={`absolute inset-0 ${shouldAnimateArrival ? `tape-arrive` : ``}`}
					style={{
						"--tape-from": stagePixels(
							isForwardArrival ? tapeArrivalOffset : -260,
						),
					}}
					key={codepoint}
				>
					<TapeNeighbours cps={previousCodepoints} side="before" />
					<TapeNeighbours cps={nextCodepoints} side="after" />
				</div>
				<div
					aria-busy={status === `loading`}
					onPointerDownCapture={() => setHasStartedDrawing(true)}
					className={`absolute inset-y-0 left-1/2 z-10 w-(--tape-stage) -translate-x-1/2 ${status === `loading` ? `pointer-events-none` : ``}`}
				>
					<DrawingCanvas
						strokes={strokes}
						onStroke={actions.addStroke}
						label={`Drawing area for ${characterFor(codepoint)}, a ${zone.name}`}
						key={codepoint}
					/>
				</div>
				{status !== `loading` && !hasStartedDrawing && drawn.size === 0 ? (
					<DrawingPrompt cp={codepoint} zone={zone} />
				) : null}
			</div>
		</section>
	);
}
export { WritingStrip };
