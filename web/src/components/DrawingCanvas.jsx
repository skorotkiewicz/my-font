import * as React from "react";
import { strokePolygons } from "../lib/strokes.jsx";
import { stageHeight, stageWidth } from "../data/metrics.jsx";
import { createId } from "../lib/project.jsx";
import { polygonsPath, strokePath } from "../lib/svgPaths.jsx";
var hasUsedPen = false;
var isIOS = typeof navigator < `u` && /iPad|iPhone/.test(navigator.userAgent);
var hasPenPressure = ({ pointerType, pressure }) =>
	(pointerType === `pen` && pressure !== 0) ||
	(pressure > 0 && pressure < 0.5) ||
	(pressure > 0.5 && pressure < 1);
var roundPrecision = (number, decimalPlaces) =>
	Math.round(number * 10 ** decimalPlaces) / 10 ** decimalPlaces;
function DrawingCanvas({ strokes, onStroke, label, className, children }) {
	let canvas = React.useRef(null);
	let livePath = React.useRef(null);
	let activeStroke = React.useRef(null);
	let animationFrame = React.useRef(0);
	React.useEffect(() => {
		let canvasElement = canvas.current;
		let preventTouchDefault = (event) => event.preventDefault();
		canvasElement.addEventListener(`touchstart`, preventTouchDefault, {
			passive: false,
		});
		canvasElement.addEventListener(`touchmove`, preventTouchDefault, {
			passive: false,
		});
		return () => {
			canvasElement.removeEventListener(`touchstart`, preventTouchDefault);
			canvasElement.removeEventListener(`touchmove`, preventTouchDefault);
			cancelAnimationFrame(animationFrame.current);
		};
	}, []);
	let paintStroke = () => {
		animationFrame.current = 0;
		let stroke = activeStroke.current;
		livePath.current?.setAttribute(
			`d`,
			stroke
				? polygonsPath(strokePolygons(stroke.pts, stroke.input, false))
				: ``,
		);
	};
	let schedulePaint = () => {
		animationFrame.current ||= requestAnimationFrame(paintStroke);
	};
	let cancelStroke = () => {
		activeStroke.current = null;
		cancelAnimationFrame(animationFrame.current);
		animationFrame.current = 0;
		livePath.current?.setAttribute(`d`, ``);
	};
	let eventPoint = (event, { rect, input }) => [
		roundPrecision(((event.clientX - rect.left) / rect.width) * stageWidth, 1),
		roundPrecision(((event.clientY - rect.top) / rect.height) * stageHeight, 1),
		input === `pen` ? roundPrecision(event.pressure, 2) : 0.5,
	];
	let appendPoint = (stroke, point) => {
		let lastPoint = stroke.pts[stroke.pts.length - 1];
		if (
			stroke.input === `pen` &&
			stroke.pts.length > 1 &&
			Math.hypot(point[0] - stroke.anchor[0], point[1] - stroke.anchor[1]) <
				stroke.px
		) {
			stroke.pts[stroke.pts.length - 1] = [
				point[0],
				point[1],
				Math.max(lastPoint[2], point[2]),
			];
		} else if (point[0] !== lastPoint[0] || point[1] !== lastPoint[1]) {
			stroke.pts.push(point);
			stroke.anchor = point;
		}
	};
	return (
		<svg
			ref={canvas}
			viewBox={`0 0 ${stageWidth} ${stageHeight}`}
			className={`block aspect-2/1 w-full touch-none select-none [-webkit-touch-callout:none] ${className ?? ``}`}
			onPointerDown={(event) => {
				let isPen = event.pointerType === `pen`;
				if (isPen) {
					hasUsedPen = true;
				}
				if (
					(event.pointerType === `touch` && hasUsedPen) ||
					(event.pointerType === `mouse` && event.button !== 0)
				) {
					return;
				}
				if (activeStroke.current) {
					if (!isPen || activeStroke.current.pointerType === `pen`) {
						return;
					}
					cancelStroke();
				}
				event.currentTarget.setPointerCapture(event.pointerId);
				let canvasRect = event.currentTarget.getBoundingClientRect();
				let strokeInput = hasPenPressure(event.nativeEvent)
					? `pen`
					: event.pointerType === `touch`
						? `touch`
						: `mouse`;
				let firstPoint = eventPoint(event.nativeEvent, {
					rect: canvasRect,
					input: strokeInput,
				});
				let { pointerId, pointerType } = event;
				activeStroke.current = {
					pointerId: pointerId,
					pointerType: pointerType,
					input: strokeInput,
					rect: canvasRect,
					px: stageWidth / canvasRect.width,
					pts: [firstPoint],
					anchor: firstPoint,
				};
				schedulePaint();
			}}
			onPointerMove={(event) => {
				let event2 = activeStroke.current;
				if (!event2 || event.pointerId !== event2.pointerId) {
					return;
				}
				let coalescedEvents = isIOS
					? []
					: (event.nativeEvent.getCoalescedEvents?.() ?? []);
				for (let pointerEvent of coalescedEvents.length
					? coalescedEvents
					: [event.nativeEvent]) {
					appendPoint(event2, eventPoint(pointerEvent, event2));
				}
				schedulePaint();
			}}
			onPointerUp={(event) => {
				let event2 = activeStroke.current;
				if (event2 && event.pointerId === event2.pointerId) {
					cancelStroke();
					onStroke({
						id: createId(),
						input: event2.input,
						pts: event2.pts,
					});
				}
			}}
			onPointerCancel={(event) => {
				if (activeStroke.current?.pointerId === event.pointerId) {
					cancelStroke();
				}
			}}
			onContextMenu={(event) => event.preventDefault()}
			role="img"
			aria-label={label}
		>
			{children}
			<g className="fill-hand">
				{strokes.map((stroke) => (
					<path d={strokePath(stroke)} key={stroke.id} />
				))}
				<path ref={livePath} />
			</g>
		</svg>
	);
}
export { DrawingCanvas };
