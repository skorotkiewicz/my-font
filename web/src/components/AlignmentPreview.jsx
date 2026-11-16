import * as React from "react";
import { clamp } from "../lib/geometry.jsx";
import { stageHeight } from "../data/metrics.jsx";
import { placementTransform } from "../lib/alignment.jsx";
import { strokePath } from "../lib/svgPaths.jsx";
var capitalize = (text) => text[0].toUpperCase() + text.slice(1);
var adjustmentLimits = {
	dy: 300,
	minScale: 0.7,
	maxScale: 1.4,
};
var alignmentTouchHeight = Math.ceil((stageHeight * 44) / 144);
var alignmentGap = 4;
var alignmentPadding = 10;
function AlignmentPreview({
	letters,
	xHeight,
	picked: pickedCodepoint,
	onPick,
	onFix,
}) {
	let selectedLetterRef = React.useRef(null);
	React.useEffect(() => {
		selectedLetterRef.current?.scrollIntoView({
			inline: `nearest`,
			block: `nearest`,
		});
	}, [pickedCodepoint]);
	return (
		<div className="strip-edges overflow-hidden rounded-[1.125rem] bg-(--strip-surface)">
			<div
				role="group"
				aria-label="Your letters on one line"
				className="strip-scroller flex h-36 overflow-x-auto"
			>
				{letters.map((letter, letterIndex) => (
					<AlignmentLetter
						ref={letter.cp === pickedCodepoint ? selectedLetterRef : undefined}
						letter={letter}
						xHeight={xHeight}
						picked={letter.cp === pickedCodepoint}
						onPick={onPick}
						onFix={onFix}
						before={letters[letterIndex - 1]?.cp}
						after={letters[letterIndex + 1]?.cp}
						key={letter.cp}
					/>
				))}
			</div>
		</div>
	);
}
function AlignmentHandle({ width }) {
	let centerX = width / 2;
	return (
		<g
			className="stroke-(color:--accent)"
			fill="none"
			strokeWidth={16}
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d={`M${centerX - 46} 144L${centerX} 98L${centerX + 46} 144`} />
			<path d={`M${centerX - 46} 1086L${centerX} 1132L${centerX + 46} 1086`} />
		</g>
	);
}
function AlignmentLetter({
	ref: buttonRef,
	letter: { cp: glyphCodepoint, strokes, ink: bounds, place: placement, fix },
	xHeight,
	picked: isPicked,
	onPick,
	onFix,
	before: previousCodepoint,
	after: nextCodepoint,
}) {
	let transformRef = React.useRef(null);
	let dragRef = React.useRef(null);
	let character = String.fromCodePoint(glyphCodepoint);
	let inkWidth = (bounds.xMax - bounds.xMin) * placement.scale;
	let cellWidth = Math.max(alignmentTouchHeight, inkWidth + 110);
	let horizontalPadding = (cellWidth - inkWidth) / 2;
	let moveLetter = (deltaY) =>
		onFix(glyphCodepoint, {
			...fix,
			dy: clamp(
				Math.round(fix.dy + deltaY),
				-adjustmentLimits.dy,
				adjustmentLimits.dy,
			),
		});
	let handlePointerDown = (event) => {
		if (
			!isPicked ||
			dragRef.current ||
			(event.pointerType === `mouse` && event.button !== 0)
		) {
			return;
		}
		event.currentTarget.setPointerCapture(event.pointerId);
		let unitsPerPixel =
			stageHeight / event.currentTarget.getBoundingClientRect().height;
		dragRef.current = {
			pointerId: event.pointerId,
			startY: event.clientY,
			unitsPerPx: unitsPerPixel,
			moved: 0,
		};
	};
	let handlePointerMove = (event) => {
		let event2 = dragRef.current;
		if (!event2 || event.pointerId !== event2.pointerId) {
			return;
		}
		let pointerDeltaY = event.clientY - event2.startY;
		let adjustmentDeltaY =
			Math.abs(pointerDeltaY) <= alignmentGap
				? 0
				: (pointerDeltaY - Math.sign(pointerDeltaY) * alignmentGap) *
					event2.unitsPerPx;
		event2.moved =
			clamp(
				fix.dy + adjustmentDeltaY,
				-adjustmentLimits.dy,
				adjustmentLimits.dy,
			) - fix.dy;
		transformRef.current?.setAttribute(
			`transform`,
			`translate(0 ${event2.moved.toFixed(1)})`,
		);
	};
	let finishDrag = (event, shouldCommit) => {
		let event2 = dragRef.current;
		if (event2 && event.pointerId === event2.pointerId) {
			dragRef.current = null;
			transformRef.current?.removeAttribute(`transform`);
			if (shouldCommit && event2.moved) {
				moveLetter(event2.moved);
			}
		}
	};
	return (
		<button
			ref={buttonRef}
			type="button"
			tabIndex={isPicked ? 0 : -1}
			aria-pressed={isPicked}
			aria-label={
				isPicked
					? `${character}, selected. Drag or use the arrow keys to move it up or down`
					: `Adjust ${character}`
			}
			onClick={() => onPick(glyphCodepoint)}
			onPointerDown={handlePointerDown}
			onPointerMove={handlePointerMove}
			onPointerUp={(pointerUpEvent) => finishDrag(pointerUpEvent, true)}
			onPointerCancel={(pointerCancelEvent) =>
				finishDrag(pointerCancelEvent, false)
			}
			onKeyDown={(event) => {
				let neighbourCodepoint =
					event.key === `ArrowLeft`
						? previousCodepoint
						: event.key === `ArrowRight`
							? nextCodepoint
							: undefined;
				if (neighbourCodepoint !== undefined) {
					onPick(neighbourCodepoint);
					(event.key === `ArrowLeft`
						? event.currentTarget.previousElementSibling
						: event.currentTarget.nextElementSibling
					)?.focus();
				} else if (isPicked && event.key === `ArrowUp`) {
					moveLetter(-10);
				} else if (isPicked && event.key === `ArrowDown`) {
					moveLetter(alignmentPadding);
				} else {
					return;
				}
				event.preventDefault();
			}}
			style={{
				aspectRatio: `${cellWidth.toFixed(0)} / ${stageHeight}`,
				touchAction: isPicked ? `none` : undefined,
			}}
			className={`h-full shrink-0 -outline-offset-2 focus-visible:outline-2 focus-visible:outline-(color:--focus) ${isPicked ? `cursor-ns-resize bg-(--strip-picked)` : ``}`}
		>
			<svg
				viewBox={`0 0 ${cellWidth.toFixed(0)} ${stageHeight}`}
				className="block size-full"
				aria-hidden={true}
			>
				<line
					x2={cellWidth}
					y1={920 - xHeight}
					y2={920 - xHeight}
					stroke="currentColor"
					strokeOpacity={0.22}
					strokeDasharray="5 4"
					vectorEffect="non-scaling-stroke"
				/>
				<line
					x2={cellWidth}
					y1={920}
					y2={920}
					stroke="currentColor"
					strokeOpacity={0.45}
					vectorEffect="non-scaling-stroke"
				/>
				<g ref={transformRef}>
					{isPicked && <AlignmentHandle width={cellWidth} />}
					<g
						className="fill-hand"
						transform={placementTransform(
							placement,
							horizontalPadding - bounds.xMin * placement.scale,
						)}
					>
						{strokes.map((stroke) => (
							<path d={strokePath(stroke)} key={stroke.id} />
						))}
					</g>
				</g>
			</svg>
		</button>
	);
}
export { capitalize, adjustmentLimits, AlignmentPreview };
