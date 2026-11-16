import * as React from "react";
import { clamp } from "../lib/geometry.jsx";
import { stageHeight } from "../data/metrics.jsx";
import { placementTransform } from "../lib/alignment.jsx";
import { strokePath } from "../lib/svgPaths.jsx";
var capitalize = (argument) => argument[0].toUpperCase() + argument.slice(1);
var adjustmentLimits = {
	dy: 300,
	minScale: 0.7,
	maxScale: 1.4,
};
var alignmentTouchHeight = Math.ceil((stageHeight * 44) / 144);
var alignmentGap = 4;
var alignmentPadding = 10;
function AlignmentPreview({
	letters: argument,
	xHeight: argument2,
	picked: argument3,
	onPick: argument4,
	onFix: argument5,
}) {
	let value = React.useRef(null);
	React.useEffect(() => {
		value.current?.scrollIntoView({
			inline: `nearest`,
			block: `nearest`,
		});
	}, [argument3]);
	return (
		<div className="strip-edges overflow-hidden rounded-[1.125rem] bg-(--strip-surface)">
			<div
				role="group"
				aria-label="Your letters on one line"
				className="strip-scroller flex h-36 overflow-x-auto"
			>
				{argument.map((argument6, argument7) => (
					<AlignmentLetter
						ref={argument6.cp === argument3 ? value : undefined}
						letter={argument6}
						xHeight={argument2}
						picked={argument6.cp === argument3}
						onPick={argument4}
						onFix={argument5}
						before={argument[argument7 - 1]?.cp}
						after={argument[argument7 + 1]?.cp}
						key={argument6.cp}
					/>
				))}
			</div>
		</div>
	);
}
function AlignmentHandle({ width: argument }) {
	let value = argument / 2;
	return (
		<g
			className="stroke-(color:--accent)"
			fill="none"
			strokeWidth={16}
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d={`M${value - 46} 144L${value} 98L${value + 46} 144`} />
			<path d={`M${value - 46} 1086L${value} 1132L${value + 46} 1086`} />
		</g>
	);
}
function AlignmentLetter({
	ref: argument,
	letter: {
		cp: argument8,
		strokes: argument9,
		ink: bounds,
		place: argument10,
		fix: argument11,
	},
	xHeight: argument2,
	picked: argument3,
	onPick: argument4,
	onFix: argument5,
	before: argument6,
	after: argument7,
}) {
	let value = React.useRef(null);
	let value2 = React.useRef(null);
	let value3 = String.fromCodePoint(argument8);
	let value4 = (bounds.xMax - bounds.xMin) * argument10.scale;
	let value5 = Math.max(alignmentTouchHeight, value4 + 110);
	let value6 = (value5 - value4) / 2;
	let value7 = (argument12) =>
		argument5(argument8, {
			...argument11,
			dy: clamp(
				Math.round(argument11.dy + argument12),
				-adjustmentLimits.dy,
				adjustmentLimits.dy,
			),
		});
	let value8 = (event) => {
		if (
			!argument3 ||
			value2.current ||
			(event.pointerType === `mouse` && event.button !== 0)
		) {
			return;
		}
		event.currentTarget.setPointerCapture(event.pointerId);
		let value11 =
			stageHeight / event.currentTarget.getBoundingClientRect().height;
		value2.current = {
			pointerId: event.pointerId,
			startY: event.clientY,
			unitsPerPx: value11,
			moved: 0,
		};
	};
	let value9 = (event) => {
		let event2 = value2.current;
		if (!event2 || event.pointerId !== event2.pointerId) {
			return;
		}
		let value11 = event.clientY - event2.startY;
		let value12 =
			Math.abs(value11) <= alignmentGap
				? 0
				: (value11 - Math.sign(value11) * alignmentGap) * event2.unitsPerPx;
		event2.moved =
			clamp(
				argument11.dy + value12,
				-adjustmentLimits.dy,
				adjustmentLimits.dy,
			) - argument11.dy;
		value.current?.setAttribute(
			`transform`,
			`translate(0 ${event2.moved.toFixed(1)})`,
		);
	};
	let value10 = (event, argument12) => {
		let event2 = value2.current;
		if (event2 && event.pointerId === event2.pointerId) {
			value2.current = null;
			value.current?.removeAttribute(`transform`);
			if (argument12 && event2.moved) {
				value7(event2.moved);
			}
		}
	};
	return (
		<button
			ref={argument}
			type="button"
			tabIndex={argument3 ? 0 : -1}
			aria-pressed={argument3}
			aria-label={
				argument3
					? `${value3}, selected. Drag or use the arrow keys to move it up or down`
					: `Adjust ${value3}`
			}
			onClick={() => argument4(argument8)}
			onPointerDown={value8}
			onPointerMove={value9}
			onPointerUp={(argument12) => value10(argument12, true)}
			onPointerCancel={(argument12) => value10(argument12, false)}
			onKeyDown={(event) => {
				let value11 =
					event.key === `ArrowLeft`
						? argument6
						: event.key === `ArrowRight`
							? argument7
							: undefined;
				if (value11 !== undefined) {
					argument4(value11);
					(event.key === `ArrowLeft`
						? event.currentTarget.previousElementSibling
						: event.currentTarget.nextElementSibling
					)?.focus();
				} else if (argument3 && event.key === `ArrowUp`) {
					value7(-10);
				} else if (argument3 && event.key === `ArrowDown`) {
					value7(alignmentPadding);
				} else {
					return;
				}
				event.preventDefault();
			}}
			style={{
				aspectRatio: `${value5.toFixed(0)} / ${stageHeight}`,
				touchAction: argument3 ? `none` : undefined,
			}}
			className={`h-full shrink-0 -outline-offset-2 focus-visible:outline-2 focus-visible:outline-(color:--focus) ${argument3 ? `cursor-ns-resize bg-(--strip-picked)` : ``}`}
		>
			<svg
				viewBox={`0 0 ${value5.toFixed(0)} ${stageHeight}`}
				className="block size-full"
				aria-hidden={true}
			>
				<line
					x2={value5}
					y1={920 - argument2}
					y2={920 - argument2}
					stroke="currentColor"
					strokeOpacity={0.22}
					strokeDasharray="5 4"
					vectorEffect="non-scaling-stroke"
				/>
				<line
					x2={value5}
					y1={920}
					y2={920}
					stroke="currentColor"
					strokeOpacity={0.45}
					vectorEffect="non-scaling-stroke"
				/>
				<g ref={value}>
					{argument3 && <AlignmentHandle width={value5} />}
					<g
						className="fill-hand"
						transform={placementTransform(
							argument10,
							value6 - bounds.xMin * argument10.scale,
						)}
					>
						{argument9.map((argument12) => (
							<path d={strokePath(argument12)} key={argument12.id} />
						))}
					</g>
				</g>
			</svg>
		</button>
	);
}
export { capitalize, adjustmentLimits, AlignmentPreview };
