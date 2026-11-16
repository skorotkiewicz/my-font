import * as React from "react";
var closeDialog = (element) => element.closest(`dialog`)?.close();
var sheetCloseThreshold = 0.25;
var sheetVelocityThreshold = 0.11;
var sheetDragThreshold = 6;
var sheetSwipeDistance = 100;
var sheetTransitionMs = 400;
var rubberBand = (distance, dimension) =>
	(distance * dimension * 0.55) / (dimension + distance * 0.55);
var isDesktop = () => matchMedia(`(min-width: 64rem)`).matches;
var desktopPanelWidth = 352;
var panelGap = 8;
var panelMargin = 24;
function Sheet({
	open,
	onClose,
	surface,
	wide,
	role,
	labelledBy,
	describedBy,
	initialFocus,
	anchor,
	children,
}) {
	let dialogRef = React.useRef(null);
	let dragRef = React.useRef(null);
	let suppressClickRef = React.useRef(false);
	let openedAtRef = React.useRef(0);
	let [keepContent, setKeepContent] = React.useState(open);
	if (open && !keepContent) {
		setKeepContent(true);
	}
	React.useEffect(() => {
		let dialogElement = dialogRef.current;
		if (open && !dialogElement.open) {
			dialogElement.showModal();
			openedAtRef.current = performance.now();
			let focusTarget = dialogElement.querySelector(
				initialFocus ?? `[data-autofocus]`,
			);
			focusTarget?.scrollIntoView({
				block: `center`,
			});
			focusTarget?.focus({
				preventScroll: true,
			});
		} else if (!open && dialogElement.open) {
			dialogElement.close();
		}
	}, [open, initialFocus]);
	React.useEffect(() => {
		if (!open || !anchor) {
			return;
		}
		let dialogElement = dialogRef.current;
		let positionPanel = () => {
			let anchorRect = isDesktop()
				? document.querySelector(anchor)?.getBoundingClientRect()
				: undefined;
			if (!anchorRect) {
				dialogElement.style.removeProperty(`--panel-top`);
				dialogElement.style.removeProperty(`--panel-right`);
				return;
			}
			let panelTop = Math.max(
				panelMargin,
				Math.min(
					anchorRect.bottom + panelGap,
					innerHeight - desktopPanelWidth - panelMargin,
				),
			);
			dialogElement.style.setProperty(
				`--panel-top`,
				`${panelTop.toFixed(0)}px`,
			);
			dialogElement.style.setProperty(
				`--panel-right`,
				`${Math.max(panelMargin, innerWidth - anchorRect.right).toFixed(0)}px`,
			);
		};
		positionPanel();
		window.addEventListener(`resize`, positionPanel);
		return () => window.removeEventListener(`resize`, positionPanel);
	}, [open, anchor]);
	let handlePointerDown = (event) => {
		let target = event.target;
		if (
			dragRef.current ||
			(event.pointerType === `mouse` && event.button !== 0) ||
			isDesktop() ||
			!target.closest(`[data-sheet-handle]`) ||
			target.closest(`button, a, input, textarea, select, label`)
		) {
			return;
		}
		let { clientY, timeStamp, pointerId } = event;
		dragRef.current = {
			pointerId: pointerId,
			startY: clientY,
			height: event.currentTarget.offsetHeight,
			moving: false,
			dy: 0,
			lastY: clientY,
			lastT: timeStamp,
			velocity: 0,
		};
	};
	let handlePointerMove = (event) => {
		let event2 = dragRef.current;
		if (!event2 || event.pointerId !== event2.pointerId) {
			return;
		}
		if (!event2.moving) {
			if (Math.abs(event.clientY - event2.startY) < sheetDragThreshold) {
				return;
			}
			event2.moving = true;
			event2.startY = event.clientY;
			event.currentTarget.setPointerCapture(event.pointerId);
			event.currentTarget.style.transition = `none`;
		}
		let elapsedMs = event.timeStamp - event2.lastT;
		if (elapsedMs > 0) {
			event2.velocity = (event.clientY - event2.lastY) / elapsedMs;
		}
		event2.lastY = event.clientY;
		event2.lastT = event.timeStamp;
		let deltaY = event.clientY - event2.startY;
		event2.dy = deltaY >= 0 ? deltaY : -rubberBand(-deltaY, event2.height / 4);
		event.currentTarget.style.transform = `translateY(${event2.dy.toFixed(1)}px)`;
	};
	let finishDrag = (event, shouldClose) => {
		let event2 = dragRef.current;
		if (
			!event2 ||
			event.pointerId !== event2.pointerId ||
			((dragRef.current = null), !event2.moving)
		) {
			return;
		}
		let dialogElement = event.currentTarget;
		suppressClickRef.current = true;
		setTimeout(() => (suppressClickRef.current = false));
		dialogElement.style.transition = ``;
		dialogElement.style.transform = ``;
		let isFastSwipe =
			event.timeStamp - event2.lastT < sheetSwipeDistance &&
			event2.velocity > sheetVelocityThreshold;
		if (
			shouldClose &&
			event2.dy > 0 &&
			(event2.dy > event2.height * sheetCloseThreshold || isFastSwipe)
		) {
			dialogElement.close();
		}
	};
	return (
		<dialog
			ref={dialogRef}
			role={role}
			data-wide={wide}
			aria-labelledby={labelledBy}
			aria-describedby={describedBy}
			onClose={onClose}
			onClick={(event) => {
				if (
					event.target === event.currentTarget &&
					!suppressClickRef.current &&
					event.timeStamp - openedAtRef.current > sheetTransitionMs
				) {
					event.currentTarget.close();
				}
			}}
			onTransitionEnd={(event) =>
				event.target === event.currentTarget && !open && setKeepContent(false)
			}
			onPointerDown={handlePointerDown}
			onPointerMove={handlePointerMove}
			onPointerUp={(pointerUpEvent) => finishDrag(pointerUpEvent, true)}
			onPointerCancel={(pointerCancelEvent) =>
				finishDrag(pointerCancelEvent, false)
			}
			className={`sheet inset-x-0 top-auto bottom-0 mx-auto mb-0 max-h-[85dvh] w-full max-w-lg flex-col overflow-visible rounded-t-[1.75rem] p-0 open:flex ${surface}`}
		>
			{keepContent ? (
				<React.Fragment>
					<div
						data-sheet-handle={true}
						aria-hidden={true}
						className="absolute inset-x-0 top-0 z-10 flex h-6 touch-none justify-center pt-2 lg:hidden"
					>
						<span className="h-1.25 w-9 rounded-full bg-current opacity-(--grabber)" />
					</div>
					{children}
				</React.Fragment>
			) : null}
		</dialog>
	);
}
function SheetHandle({ className, children }) {
	return (
		<div className="scroll-edges flex min-h-0 flex-col">
			<div
				className={`edge-scroller relative min-h-0 overflow-y-auto overscroll-contain ${className}`}
			>
				{children}
			</div>
		</div>
	);
}
var sheetSurface = `bg-carbon text-paper shadow-[inset_0_1px_0_rgb(255_255_255/0.2),0_-12px_48px_rgb(4_5_40/0.4)] lg:shadow-[inset_0_0_0_1px_rgb(255_255_255/0.18),0_24px_64px_rgb(4_5_40/0.5)]`;
function Panel({
	open,
	onClose,
	title,
	onDone,
	initialFocus,
	anchor,
	children,
}) {
	let titleId = React.useId();
	return (
		<Sheet
			open={open}
			onClose={onClose}
			surface={sheetSurface}
			wide="panel"
			labelledBy={titleId}
			initialFocus={initialFocus}
			anchor={anchor}
		>
			<div
				data-sheet-handle={true}
				className="flex touch-none items-center justify-between pt-5.5 pr-2 pb-2 pl-5 lg:pt-3.5 lg:pr-3 lg:pl-6"
			>
				<h2 id={titleId} className="text-lg leading-6 font-semibold">
					{title}
				</h2>
				<button
					type="button"
					onClick={(event) =>
						onDone ? onDone() : closeDialog(event.currentTarget)
					}
					className="pressable min-h-11 rounded-full px-3 text-[0.9375rem] font-semibold hover:bg-paper/10 active:bg-paper/14"
				>{`Done`}</button>
			</div>
			<SheetHandle className="pb-[calc(env(safe-area-inset-bottom)+1.5rem)]">
				{children}
			</SheetHandle>
		</Sheet>
	);
}
function Alert({ open, onClose, title, message, children }) {
	let titleId = React.useId();
	let descriptionId = React.useId();
	return (
		<Sheet
			open={open}
			onClose={onClose}
			surface={sheetSurface}
			wide="alert"
			role="alertdialog"
			labelledBy={titleId}
			describedBy={descriptionId}
		>
			<SheetHandle className="pt-8 pb-[calc(env(safe-area-inset-bottom)+1.75rem)] lg:pt-7">
				<div className="flex flex-col gap-2 px-5 lg:px-7">
					<h2
						id={titleId}
						className="text-[1.375rem] leading-7 font-semibold tracking-[-0.01em] text-balance"
					>
						{title}
					</h2>
					<p
						id={descriptionId}
						className="text-[0.9375rem] leading-5 text-pretty text-paper/90"
					>
						{message}
					</p>
				</div>
				{children}
			</SheetHandle>
		</Sheet>
	);
}
function SheetActions({ children }) {
	return (
		<div className="flex flex-col gap-2.5 px-5 pt-5.5 lg:px-7">{children}</div>
	);
}
var sheetButtonClass = `pressable flex h-12 shrink-0 items-center justify-center gap-2 rounded-full px-5 text-[0.9375rem] leading-5`;
var SheetPrimaryButton = ({ className = ``, ...buttonProps }) => (
	<button
		type="button"
		{...buttonProps}
		className={`${sheetButtonClass} bg-paper font-semibold text-carbon hover:bg-paper/92 ${className}`}
	/>
);
var SheetDangerButton = ({ className = ``, ...buttonProps }) => (
	<button
		type="button"
		{...buttonProps}
		className={`${sheetButtonClass} bg-paper font-semibold text-danger hover:bg-paper/92 ${className}`}
	/>
);
var SheetSecondaryButton = ({ className = ``, ...buttonProps }) => (
	<button
		type="button"
		{...buttonProps}
		className={`${sheetButtonClass} bg-paper/14 font-medium text-paper hover:bg-paper/20 active:bg-paper/24 ${className}`}
	/>
);
var SheetCloseButton = ({ onClick, ...buttonProps }) => (
	<SheetSecondaryButton
		data-autofocus={true}
		{...buttonProps}
		onClick={(event) => {
			onClick?.(event);
			closeDialog(event.currentTarget);
		}}
	/>
);
export {
	closeDialog,
	Panel,
	Alert,
	SheetActions,
	SheetPrimaryButton,
	SheetDangerButton,
	SheetSecondaryButton,
	SheetCloseButton,
};
