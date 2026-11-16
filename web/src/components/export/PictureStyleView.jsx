import * as React from "react";
import {
	AnimatePresence,
	useMotionValue,
	useTransform,
	useReducedMotion,
	animate,
	motion,
} from "motion/react";
import { DownloadIcon, ShareIcon, CheckIcon } from "../icons.jsx";
import {
	paperStyles,
	rulingStyles,
	paperStyleFor,
} from "../../data/pictureStyles.jsx";
import { useWrite } from "../../state/WriteProvider.jsx";
import { SheetPrimaryButton } from "../ui/Sheet.jsx";
import { PictureCanvas } from "./PictureCanvas.jsx";
var paperCardSize = 248;
var paperCardMinSize = 200;
var paperCardStep = 240;
var paperCardShrink = 1 - paperCardMinSize / paperCardSize;
var paperCardPixels = 720;
var paperSpring = {
	type: `spring`,
	stiffness: 300,
	damping: 32,
};
var paperDeceleration = 0.998;
var paperMomentum = (velocity) =>
	((velocity / 1000) * paperDeceleration) / 0.0020000000000000018;
var clampPaperIndex = (index, minIndex, maxIndex) =>
	Math.min(maxIndex, Math.max(minIndex, index));
function PaperCard({ paper, at: cardIndex, x, input: pictureInput, onPick }) {
	let scale = useTransform(
		x,
		(offsetX) =>
			1 -
			paperCardShrink *
				Math.min(
					1,
					Math.abs(offsetX + cardIndex * paperCardStep) / paperCardStep,
				),
	);
	return (
		<motion.button
			type="button"
			tabIndex={-1}
			onClick={onPick}
			style={{
				left: cardIndex * paperCardStep,
				scale: scale,
			}}
			className="absolute top-0 size-62 cursor-[inherit] rounded-[1.375rem] shadow-[0_16px_40px_rgb(4_5_40/0.4)]"
		>
			<PictureCanvas
				input={pictureInput}
				paper={paper.id}
				pixels={paperCardPixels}
				className={`size-full rounded-[inherit] ${paper.id === `carbon` ? `outline-1 -outline-offset-1 outline-paper/20` : ``}`}
			/>
		</motion.button>
	);
}
function PaperCarousel({ input: pictureInput, onPick }) {
	let selectedIndex = paperStyles.findIndex(
		(paperStyle) => paperStyle.id === pictureInput.style.paper,
	);
	let maxIndex = paperStyles.length - 1;
	let reduceMotion = useReducedMotion();
	let x = useMotionValue(-selectedIndex * paperCardStep);
	let animationRef = React.useRef(undefined);
	let wasDraggedRef = React.useRef(false);
	let velocityRef = React.useRef(0);
	let animateToIndex = (nextIndex) => {
		animationRef.current?.stop();
		let initialVelocity = velocityRef.current;
		velocityRef.current = 0;
		animationRef.current = animate(
			x,
			-nextIndex * paperCardStep,
			reduceMotion
				? {
						duration: 0,
					}
				: {
						...paperSpring,
						velocity: initialVelocity,
					},
		);
	};
	let animateSelectedIndex = React.useEffectEvent(animateToIndex);
	React.useEffect(() => {
		animateSelectedIndex(selectedIndex);
		return () => animationRef.current?.stop();
	}, [selectedIndex]);
	return (
		<div
			aria-hidden={true}
			onMouseDown={(event) => event.preventDefault()}
			className="relative h-69 touch-pan-y"
		>
			<motion.div
				drag="x"
				style={{
					x: x,
				}}
				dragConstraints={{
					left: -maxIndex * paperCardStep,
					right: 0,
				}}
				dragElastic={0.2}
				dragMomentum={false}
				onPointerDown={() => (wasDraggedRef.current = false)}
				onDragStart={() => (wasDraggedRef.current = true)}
				onDragEnd={(dragEvent, { velocity: dragVelocity }) => {
					velocityRef.current = dragVelocity.x;
					let projectedIndex = clampPaperIndex(
						Math.round(
							-(x.get() + paperMomentum(dragVelocity.x)) / paperCardStep,
						),
						0,
						maxIndex,
					);
					if (projectedIndex === selectedIndex) {
						animateToIndex(selectedIndex);
					} else {
						onPick(paperStyles[projectedIndex].id);
					}
				}}
				onPointerUp={() =>
					wasDraggedRef.current || animateToIndex(selectedIndex)
				}
				className="absolute top-2 left-1/2 -ml-31 size-62 cursor-grab active:cursor-grabbing"
			>
				{paperStyles.map((paper, cardIndex) => (
					<PaperCard
						paper={paper}
						at={cardIndex}
						x={x}
						input={pictureInput}
						onPick={() => wasDraggedRef.current || onPick(paper.id)}
						key={paper.id}
					/>
				))}
			</motion.div>
		</div>
	);
}
var paperLabelClass = `text-caption font-medium text-paper/90`;
function PaperSwatch({ paper }) {
	return (
		<span className="relative font-normal">
			<AnimatePresence mode="popLayout" initial={false}>
				<motion.span
					initial={{
						opacity: 0,
						y: 6,
					}}
					animate={{
						opacity: 1,
						y: 0,
					}}
					exit={{
						opacity: 0,
						y: -6,
					}}
					transition={{
						type: `spring`,
						duration: 0.25,
						bounce: 0,
					}}
					className="inline-block"
					key={paper.id}
				>
					{paper.name}
				</motion.span>
			</AnimatePresence>
		</span>
	);
}
function PaperPicker({ picked: pickedPaper, onPick }) {
	let labelId = React.useId();
	return (
		<div
			role="radiogroup"
			aria-labelledby={labelId}
			className="flex flex-col gap-2 px-5 pb-4.5 lg:px-6"
		>
			<div className={`flex items-baseline justify-between ${paperLabelClass}`}>
				<span id={labelId}>{`Colour`}</span>
				<PaperSwatch paper={paperStyleFor(pickedPaper)} />
			</div>
			<div className="flex justify-between">
				{paperStyles.map((paper) => (
					<label
						className="pressable relative grid size-11 cursor-pointer place-items-center rounded-full has-focus-visible:outline-2 has-focus-visible:outline-offset-4 has-focus-visible:outline-(--focus)"
						key={paper.id}
					>
						<input
							type="radio"
							name="picture-paper"
							value={paper.id}
							checked={paper.id === pickedPaper}
							onChange={() => onPick(paper.id)}
							className="peer sr-only"
						/>
						<span className="sr-only">{paper.name}</span>
						<span
							aria-hidden={true}
							className={`grid size-10 place-items-center rounded-full ${paper.id === `carbon` ? `inset-ring-[1.5px] inset-ring-paper/45` : ``}`}
							style={{
								backgroundColor: paper.ground,
							}}
						>
							<span
								className="size-3.5 rounded-full"
								style={{
									backgroundColor: paper.hand,
								}}
							/>
						</span>
						<span
							aria-hidden={true}
							className="absolute -inset-0.5 scale-90 rounded-full border-2 border-paper opacity-0 transition-[opacity,scale] duration-200 ease-out peer-checked:scale-100 peer-checked:opacity-100 motion-reduce:transition-none"
						/>
					</label>
				))}
			</div>
		</div>
	);
}
function RulingPicker({ picked: pickedRuling, onPick }) {
	let labelId = React.useId();
	let selectedIndex = rulingStyles.findIndex(
		(ruling) => ruling.id === pickedRuling,
	);
	return (
		<div
			role="radiogroup"
			aria-labelledby={labelId}
			className="flex flex-col gap-2.5 px-5 pb-5.5 lg:px-6"
		>
			<span id={labelId} className={paperLabelClass}>{`Paper`}</span>
			<div className="relative grid h-11 grid-cols-4 rounded-full bg-paper/14 p-1">
				<span
					aria-hidden={true}
					className="absolute inset-y-1 left-1 w-[calc((100%-0.5rem)/4)] rounded-full bg-paper transition-transform duration-200 ease-out motion-reduce:transition-none"
					style={{
						transform: `translateX(${selectedIndex * 100}%)`,
					}}
				/>
				{rulingStyles.map((ruling) => (
					<label
						className="pressable relative grid cursor-pointer place-items-center rounded-full text-[0.9375rem] leading-5 font-medium text-paper transition-colors duration-200 has-checked:font-semibold has-checked:text-carbon has-focus-visible:outline-2 has-focus-visible:outline-offset-2 has-focus-visible:outline-(--focus)"
						key={ruling.id}
					>
						<input
							type="radio"
							name="picture-ruling"
							value={ruling.id}
							checked={ruling.id === pickedRuling}
							onChange={() => onPick(ruling.id)}
							className="sr-only"
						/>
						{ruling.name}
					</label>
				))}
			</div>
		</div>
	);
}
function PictureSaveButton({ picture: pictureDownload }) {
	let { shares, sent, empty, send } = pictureDownload;
	return (
		<SheetPrimaryButton
			onClick={send}
			disabled={empty}
			className="w-full disabled:opacity-40"
		>
			<span
				className={sent ? `icon-in flex shrink-0` : `flex shrink-0`}
				key={String(sent)}
			>
				{sent ? <CheckIcon /> : shares ? <ShareIcon /> : <DownloadIcon />}
			</span>
			<span role="status">
				{sent
					? `Sent to your downloads`
					: shares
						? `Share picture`
						: `Save picture`}
			</span>
		</SheetPrimaryButton>
	);
}
function PictureStyleView({ input: pictureInput, picture: pictureDownload }) {
	let { actions } = useWrite();
	let containerRef = React.useRef(null);
	let { paper, ruling } = pictureInput.style;
	React.useEffect(() => {
		containerRef.current
			?.querySelector(`input[name="picture-paper"]:checked`)
			?.focus({
				preventScroll: true,
			});
	}, []);
	return (
		<div ref={containerRef} className="flex flex-col pb-1">
			<PaperCarousel
				input={pictureInput}
				onPick={(nextPaper) =>
					actions.stylePicture({
						paper: nextPaper,
					})
				}
			/>
			<PaperPicker
				picked={paper}
				onPick={(nextPaper) =>
					actions.stylePicture({
						paper: nextPaper,
					})
				}
			/>
			<RulingPicker
				picked={ruling}
				onPick={(nextRuling) =>
					actions.stylePicture({
						ruling: nextRuling,
					})
				}
			/>
			<div className="px-5 lg:px-6">
				<PictureSaveButton picture={pictureDownload} />
			</div>
		</div>
	);
}
export { PictureStyleView };
