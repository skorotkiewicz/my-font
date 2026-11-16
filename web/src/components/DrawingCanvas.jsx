import * as React from "react";
import { strokePolygons } from "../lib/strokes.jsx";
import { stageHeight, stageWidth } from "../data/metrics.jsx";
import { createId } from "../lib/project.jsx";
import { polygonsPath, strokePath } from "../lib/svgPaths.jsx";
var hasUsedPen = false;
var isIOS = typeof navigator < `u` && /iPad|iPhone/.test(navigator.userAgent);
var hasPenPressure = ({
  pointerType: argument,
  pressure: argument2
}) => argument === `pen` && argument2 !== 0 || argument2 > 0 && argument2 < 0.5 || argument2 > 0.5 && argument2 < 1;
var roundPrecision = (argument, argument2) => Math.round(argument * 10 ** argument2) / 10 ** argument2;
function DrawingCanvas({
  strokes: strokes,
  onStroke: onStroke,
  label: label,
  className: className,
  children: children
}) {
  let canvas = (0, React.useRef)(null);
  let livePath = (0, React.useRef)(null);
  let activeStroke = (0, React.useRef)(null);
  let animationFrame = (0, React.useRef)(0);
  (0, React.useEffect)(() => {
    let value = canvas.current;
    let value2 = event => event.preventDefault();
    value.addEventListener(`touchstart`, value2, {
      passive: false
    });
    value.addEventListener(`touchmove`, value2, {
      passive: false
    });
    return () => {
      value.removeEventListener(`touchstart`, value2);
      value.removeEventListener(`touchmove`, value2);
      cancelAnimationFrame(animationFrame.current);
    };
  }, []);
  let paintStroke = () => {
    animationFrame.current = 0;
    let stroke = activeStroke.current;
    livePath.current?.setAttribute(`d`, stroke ? polygonsPath(strokePolygons(stroke.pts, stroke.input, false)) : ``);
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
  let eventPoint = (event, {
    rect: argument,
    input: argument2
  }) => [roundPrecision((event.clientX - argument.left) / argument.width * stageWidth, 1), roundPrecision((event.clientY - argument.top) / argument.height * stageHeight, 1), argument2 === `pen` ? roundPrecision(event.pressure, 2) : 0.5];
  let appendPoint = (stroke, argument) => {
    let value = stroke.pts[stroke.pts.length - 1];
    if (stroke.input === `pen` && stroke.pts.length > 1 && Math.hypot(argument[0] - stroke.anchor[0], argument[1] - stroke.anchor[1]) < stroke.px) {
      stroke.pts[stroke.pts.length - 1] = [argument[0], argument[1], Math.max(value[2], argument[2])];
    } else if (argument[0] !== value[0] || argument[1] !== value[1]) {
      stroke.pts.push(argument);
      stroke.anchor = argument;
    }
  };
  return <svg ref={canvas} viewBox={`0 0 ${stageWidth} ${stageHeight}`} className={`block aspect-2/1 w-full touch-none select-none [-webkit-touch-callout:none] ${className ?? ``}`} onPointerDown={event => {
    let value = event.pointerType === `pen`;
    if (value) {
      hasUsedPen = true;
    }
    if (event.pointerType === `touch` && hasUsedPen || event.pointerType === `mouse` && event.button !== 0) {
      return;
    }
    if (activeStroke.current) {
      if (!value || activeStroke.current.pointerType === `pen`) {
        return;
      }
      cancelStroke();
    }
    event.currentTarget.setPointerCapture(event.pointerId);
    let value2 = event.currentTarget.getBoundingClientRect();
    let value3 = hasPenPressure(event.nativeEvent) ? `pen` : event.pointerType === `touch` ? `touch` : `mouse`;
    let value4 = eventPoint(event.nativeEvent, {
      rect: value2,
      input: value3
    });
    let {
      pointerId: value5,
      pointerType: value6
    } = event;
    activeStroke.current = {
      pointerId: value5,
      pointerType: value6,
      input: value3,
      rect: value2,
      px: stageWidth / value2.width,
      pts: [value4],
      anchor: value4
    };
    schedulePaint();
  }} onPointerMove={event => {
    let event2 = activeStroke.current;
    if (!event2 || event.pointerId !== event2.pointerId) {
      return;
    }
    let value = isIOS ? [] : event.nativeEvent.getCoalescedEvents?.() ?? [];
    for (let value2 of value.length ? value : [event.nativeEvent]) {
      appendPoint(event2, eventPoint(value2, event2));
    }
    schedulePaint();
  }} onPointerUp={event => {
    let event2 = activeStroke.current;
    if (event2 && event.pointerId === event2.pointerId) {
      cancelStroke();
      onStroke({
        id: createId(),
        input: event2.input,
        pts: event2.pts
      });
    }
  }} onPointerCancel={event => {
    if (activeStroke.current?.pointerId === event.pointerId) {
      cancelStroke();
    }
  }} onContextMenu={event => event.preventDefault()} role={`img`} aria-label={label}>{children}<g className={`fill-hand`}>{strokes.map(argument => <path d={strokePath(argument)} key={argument.id} />)}<path ref={livePath} /></g></svg>;
}
export { DrawingCanvas };
