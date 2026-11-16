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
var stagePercent = (argument) =>
	`${((argument / stageHeight) * 100).toFixed(3)}%`;
var stagePixels = (argument) => `calc(var(--u) * ${argument.toFixed(0)})`;
function WrittenNeighbour({
	strokes: argument,
	ink: bounds,
	place: argument2,
}) {
	let value = Math.max(1, (bounds.xMax - bounds.xMin) * argument2.scale);
	return (
		<svg
			viewBox={`0 0 ${value.toFixed(0)} ${stageHeight}`}
			className="block h-full shrink-0 fill-hand"
			style={{
				width: stagePixels(value),
			}}
		>
			<g
				transform={placementTransform(
					argument2,
					-bounds.xMin * argument2.scale,
				)}
			>
				{argument.map((argument3) => (
					<path d={strokePath(argument3)} key={argument3.id} />
				))}
			</g>
		</svg>
	);
}
function PlaceholderNeighbour({ char: argument, lines: argument2 }) {
	return (
		<span
			className="relative block h-full shrink-0 font-display font-normal"
			style={{
				fontSize: stagePixels(placeholderScale(argument, argument2) * 1000),
			}}
		>
			<span className="invisible block h-0 leading-none whitespace-pre">
				{argument}
			</span>
			<svg className="absolute inset-0 size-full overflow-visible fill-placeholder">
				<text y={stagePercent(stageYFor(0))}>{argument}</text>
			</svg>
		</span>
	);
}
function TapeNeighbours({ cps: argument, side: argument2 }) {
	let { state: value, actions: value2 } = useWrite();
	let { project, alignment: value3 } = value;
	let value4 = `calc(50% + var(--tape-slot) / 2 + ${stagePixels(neighbourOffset)})`;
	return (
		<div
			aria-hidden={true}
			className={`absolute inset-y-0 flex ${argument2 === `before` ? `flex-row-reverse` : ``}`}
			style={{
				[argument2 === `before` ? `right` : `left`]: value4,
				gap: stagePixels(neighbourGap),
			}}
		>
			{argument.map((argument3) => {
				let drawing = project.glyphs[argument3]?.drawings[0];
				let value5 = drawing?.strokes.length
					? inkBounds(argument3, drawing)
					: null;
				let value6 = value3.place.get(argument3);
				return (
					<button
						type="button"
						tabIndex={-1}
						onClick={() => value2.go(argument3)}
						className="pressable flex h-full min-w-11 shrink-0 justify-center rounded-2xl hover:bg-paper/6 max-md:pointer-events-none"
						key={argument3}
					>
						{drawing && value5 && value6 ? (
							<WrittenNeighbour
								strokes={drawing.strokes}
								ink={value5}
								place={value6}
							/>
						) : (
							<PlaceholderNeighbour
								char={characterFor(argument3)}
								lines={value3.lines}
							/>
						)}
					</button>
				);
			})}
		</div>
	);
}
function DrawingPrompt({ cp: argument, zone: argument2 }) {
	return (
		<p
			aria-hidden={true}
			className="pointer-events-none absolute left-1/2 z-20 w-(--tape-slot) -translate-x-1/2 -translate-y-1/2 px-3 text-center text-[0.9375rem] leading-5 font-medium text-balance lg:text-lg lg:leading-6"
			style={{
				top: stagePercent(stageYFor((argument2.top + argument2.bottom) / 2)),
			}}
		>
			{`Write your `}
			<span className="font-bold">{characterFor(argument)}</span>
			{` here`}
			<span className="pointer-fine:hidden">{`, with a finger or pen`}</span>
			<span className="hidden pointer-fine:inline">{`. A mouse, trackpad or pen will do.`}</span>
		</p>
	);
}
function GlyphPicker() {
	let { state: value, actions: value2 } = useWrite();
	let { cp: value3, set: characterSet } = value;
	let value4 = characterSet.codepoints.indexOf(value3) + 1;
	return (
		<div className="flex shrink-0 items-center justify-between gap-3 px-5 pb-3 compact:px-4 short-landscape:pt-2 md:mx-auto md:w-(--tape-stage) md:px-0 lg:pb-2">
			<div className="flex min-w-0 items-center gap-3 lg:gap-3.5">
				<span
					aria-hidden={true}
					className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-paper pb-0.5 font-wide text-[1.625rem] leading-none text-carbon lg:size-13 lg:rounded-[0.875rem] lg:text-3xl"
				>
					{characterFor(value3)}
				</span>
				<h1 className="truncate text-base leading-5.5 font-medium lg:text-lg lg:leading-6">
					{`Write `}
					{describeCharacter(value3)}
				</h1>
			</div>
			<button
				type="button"
				data-anchor="picker"
				aria-haspopup="dialog"
				onClick={() => value2.openSheet(`glyphs`)}
				aria-label={`${characterSet.label}, ${value4} of ${characterSet.codepoints.length}. Show all glyphs`}
				className="pressable flex h-11 shrink-0 items-center gap-2 rounded-full bg-paper/14 pr-2.5 pl-4 text-[0.9375rem] leading-5 hover:bg-paper/20 active:bg-paper/24 lg:pl-4.5"
			>
				<span className="hidden font-medium lg:inline">
					{characterSet.label}
				</span>
				<span className="font-medium tabular-nums lg:font-normal lg:text-paper/90">
					{value4}
					{` of `}
					{characterSet.codepoints.length}
				</span>
				<ChevronDownIcon />
			</button>
		</div>
	);
}
function WritingStrip() {
	let { state: value, actions: value2 } = useWrite();
	let {
		cp: value3,
		strokes: value4,
		status: value5,
		drawn: value6,
		arrival: value7,
	} = value;
	let value8 = zoneForCharacter(characterFor(value3));
	let [value9, value10] = React.useState(false);
	let value11 = allCodepoints.indexOf(value3);
	let value12 = allCodepoints
		.slice(Math.max(0, value11 - neighbourCount), value11)
		.reverse();
	let value13 = allCodepoints.slice(value11 + 1, value11 + 1 + neighbourCount);
	let value14 = value7.by === `press` && value7.from !== undefined;
	let value15 = value14 && allCodepoints.indexOf(value7.from) < value11;
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
						top: stagePercent(stageYFor(value8.top)),
						height: stagePercent(value8.top - value8.bottom),
					}}
				/>
				{guideLines.map((argument) => (
					<span
						aria-hidden={true}
						className={`pointer-events-none absolute inset-x-0 h-[1.5px] -translate-y-1/2 ${argument.id === `baseline` ? `bg-paper/65` : `bg-paper/22`}`}
						style={{
							top: stagePercent(argument.y),
						}}
						key={argument.id}
					/>
				))}
				<div
					className={`absolute inset-0 ${value14 ? `tape-arrive` : ``}`}
					style={{
						"--tape-from": stagePixels(value15 ? tapeArrivalOffset : -260),
					}}
					key={value3}
				>
					<TapeNeighbours cps={value12} side="before" />
					<TapeNeighbours cps={value13} side="after" />
				</div>
				<div
					aria-busy={value5 === `loading`}
					onPointerDownCapture={() => value10(true)}
					className={`absolute inset-y-0 left-1/2 z-10 w-(--tape-stage) -translate-x-1/2 ${value5 === `loading` ? `pointer-events-none` : ``}`}
				>
					<DrawingCanvas
						strokes={value4}
						onStroke={value2.addStroke}
						label={`Drawing area for ${characterFor(value3)}, a ${value8.name}`}
						key={value3}
					/>
				</div>
				{value5 !== `loading` && !value9 && value6.size === 0 ? (
					<DrawingPrompt cp={value3} zone={value8} />
				) : null}
			</div>
		</section>
	);
}
export { WritingStrip };
