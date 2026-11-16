import * as React from "react";
var closeDialog = argument => argument.closest(`dialog`)?.close();
var sheetCloseThreshold = 0.25;
var sheetVelocityThreshold = 0.11;
var sheetDragThreshold = 6;
var sheetSwipeDistance = 100;
var sheetTransitionMs = 400;
var rubberBand = (argument, argument2) => argument * argument2 * 0.55 / (argument2 + argument * 0.55);
var isDesktop = () => matchMedia(`(min-width: 64rem)`).matches;
var desktopPanelWidth = 352;
var panelGap = 8;
var panelMargin = 24;
function Sheet({
  open: argument,
  onClose: argument2,
  surface: argument3,
  wide: argument4,
  role: argument5,
  labelledBy: argument6,
  describedBy: argument7,
  initialFocus: argument8,
  anchor: argument9,
  children: argument10
}) {
  let value = (0, React.useRef)(null);
  let value2 = (0, React.useRef)(null);
  let value3 = (0, React.useRef)(false);
  let value4 = (0, React.useRef)(0);
  let [value5, value6] = (0, React.useState)(argument);
  if (argument && !value5) {
    value6(true);
  }
  (0, React.useEffect)(() => {
    let value10 = value.current;
    if (argument && !value10.open) {
      value10.showModal();
      value4.current = performance.now();
      let value11 = value10.querySelector(argument8 ?? `[data-autofocus]`);
      value11?.scrollIntoView({
        block: `center`
      });
      value11?.focus({
        preventScroll: true
      });
    } else if (!argument && value10.open) {
      value10.close();
    }
  }, [argument, argument8]);
  (0, React.useEffect)(() => {
    if (!argument || !argument9) {
      return;
    }
    let value10 = value.current;
    let value11 = () => {
      let value12 = isDesktop() ? document.querySelector(argument9)?.getBoundingClientRect() : undefined;
      if (!value12) {
        value10.style.removeProperty(`--panel-top`);
        value10.style.removeProperty(`--panel-right`);
        return;
      }
      let value13 = Math.max(panelMargin, Math.min(value12.bottom + panelGap, innerHeight - desktopPanelWidth - panelMargin));
      value10.style.setProperty(`--panel-top`, `${value13.toFixed(0)}px`);
      value10.style.setProperty(`--panel-right`, `${Math.max(panelMargin, innerWidth - value12.right).toFixed(0)}px`);
    };
    value11();
    window.addEventListener(`resize`, value11);
    return () => window.removeEventListener(`resize`, value11);
  }, [argument, argument9]);
  let value7 = event => {
    let value10 = event.target;
    if (value2.current || event.pointerType === `mouse` && event.button !== 0 || isDesktop() || !value10.closest(`[data-sheet-handle]`) || value10.closest(`button, a, input, textarea, select, label`)) {
      return;
    }
    let {
      clientY: value11,
      timeStamp: value12,
      pointerId: value13
    } = event;
    value2.current = {
      pointerId: value13,
      startY: value11,
      height: event.currentTarget.offsetHeight,
      moving: false,
      dy: 0,
      lastY: value11,
      lastT: value12,
      velocity: 0
    };
  };
  let value8 = event => {
    let event2 = value2.current;
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
    let value10 = event.timeStamp - event2.lastT;
    if (value10 > 0) {
      event2.velocity = (event.clientY - event2.lastY) / value10;
    }
    event2.lastY = event.clientY;
    event2.lastT = event.timeStamp;
    let value11 = event.clientY - event2.startY;
    event2.dy = value11 >= 0 ? value11 : -rubberBand(-value11, event2.height / 4);
    event.currentTarget.style.transform = `translateY(${event2.dy.toFixed(1)}px)`;
  };
  let value9 = (event, argument11) => {
    let event2 = value2.current;
    if (!event2 || event.pointerId !== event2.pointerId || (value2.current = null, !event2.moving)) {
      return;
    }
    let value10 = event.currentTarget;
    value3.current = true;
    setTimeout(() => value3.current = false);
    value10.style.transition = ``;
    value10.style.transform = ``;
    let value11 = event.timeStamp - event2.lastT < sheetSwipeDistance && event2.velocity > sheetVelocityThreshold;
    if (argument11 && event2.dy > 0 && (event2.dy > event2.height * sheetCloseThreshold || value11)) {
      value10.close();
    }
  };
  return <dialog ref={value} role={argument5} data-wide={argument4} aria-labelledby={argument6} aria-describedby={argument7} onClose={argument2} onClick={event => {
    if (event.target === event.currentTarget && !value3.current && event.timeStamp - value4.current > sheetTransitionMs) {
      event.currentTarget.close();
    }
  }} onTransitionEnd={event => event.target === event.currentTarget && !argument && value6(false)} onPointerDown={value7} onPointerMove={value8} onPointerUp={argument11 => value9(argument11, true)} onPointerCancel={argument11 => value9(argument11, false)} className={`sheet inset-x-0 top-auto bottom-0 mx-auto mb-0 max-h-[85dvh] w-full max-w-lg flex-col overflow-visible rounded-t-[1.75rem] p-0 open:flex ${argument3}`}>{value5 ? <React.Fragment><div data-sheet-handle={true} aria-hidden={true} className={`absolute inset-x-0 top-0 z-10 flex h-6 touch-none justify-center pt-2 lg:hidden`}><span className={`h-1.25 w-9 rounded-full bg-current opacity-(--grabber)`} /></div>{argument10}</React.Fragment> : null}</dialog>;
}
function SheetHandle({
  className: argument,
  children: argument2
}) {
  return <div className={`scroll-edges flex min-h-0 flex-col`}><div className={`edge-scroller relative min-h-0 overflow-y-auto overscroll-contain ${argument}`}>{argument2}</div></div>;
}
var sheetSurface = `bg-carbon text-paper shadow-[inset_0_1px_0_rgb(255_255_255/0.2),0_-12px_48px_rgb(4_5_40/0.4)] lg:shadow-[inset_0_0_0_1px_rgb(255_255_255/0.18),0_24px_64px_rgb(4_5_40/0.5)]`;
function Panel({
  open: argument,
  onClose: argument2,
  title: argument3,
  onDone: argument4,
  initialFocus: argument5,
  anchor: argument6,
  children: argument7
}) {
  let value = (0, React.useId)();
  return <Sheet open={argument} onClose={argument2} surface={sheetSurface} wide={`panel`} labelledBy={value} initialFocus={argument5} anchor={argument6}><div data-sheet-handle={true} className={`flex touch-none items-center justify-between pt-5.5 pr-2 pb-2 pl-5 lg:pt-3.5 lg:pr-3 lg:pl-6`}><h2 id={value} className={`text-lg leading-6 font-semibold`}>{argument3}</h2><button type={`button`} onClick={event => argument4 ? argument4() : closeDialog(event.currentTarget)} className={`pressable min-h-11 rounded-full px-3 text-[0.9375rem] font-semibold hover:bg-paper/10 active:bg-paper/14`}>{`Done`}</button></div><SheetHandle className={`pb-[calc(env(safe-area-inset-bottom)+1.5rem)]`}>{argument7}</SheetHandle></Sheet>;
}
function Alert({
  open: argument,
  onClose: argument2,
  title: argument3,
  message: argument4,
  children: argument5
}) {
  let value = (0, React.useId)();
  let value2 = (0, React.useId)();
  return <Sheet open={argument} onClose={argument2} surface={sheetSurface} wide={`alert`} role={`alertdialog`} labelledBy={value} describedBy={value2}><SheetHandle className={`pt-8 pb-[calc(env(safe-area-inset-bottom)+1.75rem)] lg:pt-7`}><div className={`flex flex-col gap-2 px-5 lg:px-7`}><h2 id={value} className={`text-[1.375rem] leading-7 font-semibold tracking-[-0.01em] text-balance`}>{argument3}</h2><p id={value2} className={`text-[0.9375rem] leading-5 text-pretty text-paper/90`}>{argument4}</p></div>{argument5}</SheetHandle></Sheet>;
}
function SheetActions({
  children: argument
}) {
  return <div className={`flex flex-col gap-2.5 px-5 pt-5.5 lg:px-7`}>{argument}</div>;
}
var sheetButtonClass = `pressable flex h-12 shrink-0 items-center justify-center gap-2 rounded-full px-5 text-[0.9375rem] leading-5`;
var SheetPrimaryButton = ({
  className: argument2 = ``,
  ...argument
}) => <button type={`button`} {...argument} className={`${sheetButtonClass} bg-paper font-semibold text-carbon hover:bg-paper/92 ${argument2}`} />;
var SheetDangerButton = ({
  className: argument2 = ``,
  ...argument
}) => <button type={`button`} {...argument} className={`${sheetButtonClass} bg-paper font-semibold text-danger hover:bg-paper/92 ${argument2}`} />;
var SheetSecondaryButton = ({
  className: argument2 = ``,
  ...argument
}) => <button type={`button`} {...argument} className={`${sheetButtonClass} bg-paper/14 font-medium text-paper hover:bg-paper/20 active:bg-paper/24 ${argument2}`} />;
var SheetCloseButton = ({
  onClick: argument,
  ...argument2
}) => <SheetSecondaryButton data-autofocus={true} {...argument2} onClick={event => {
  argument?.(event);
  closeDialog(event.currentTarget);
}} />;
export { closeDialog, Panel, Alert, SheetActions, SheetPrimaryButton, SheetDangerButton, SheetSecondaryButton, SheetCloseButton };
