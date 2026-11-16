import * as React from "react";
import { AnimatePresence, useMotionValue, useTransform, useReducedMotion, animate, motion } from "motion/react";
import { DownloadIcon, ShareIcon, CheckIcon } from "../icons.jsx";
import { paperStyles, rulingStyles, paperStyleFor } from "../../data/pictureStyles.jsx";
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
  damping: 32
};
var paperDeceleration = 0.998;
var paperMomentum = argument => argument / 1000 * paperDeceleration / 0.0020000000000000018;
var clampPaperIndex = (argument, argument2, argument3) => Math.min(argument3, Math.max(argument2, argument));
function PaperCard({
  paper: argument,
  at: argument2,
  x: argument3,
  input: argument4,
  onPick: argument5
}) {
  let value = useTransform(argument3, argument6 => 1 - paperCardShrink * Math.min(1, Math.abs(argument6 + argument2 * paperCardStep) / paperCardStep));
  return <motion.button type={`button`} tabIndex={-1} onClick={argument5} style={{
    left: argument2 * paperCardStep,
    scale: value
  }} className={`absolute top-0 size-62 cursor-[inherit] rounded-[1.375rem] shadow-[0_16px_40px_rgb(4_5_40/0.4)]`}><PictureCanvas input={argument4} paper={argument.id} pixels={paperCardPixels} className={`size-full rounded-[inherit] ${argument.id === `carbon` ? `outline-1 -outline-offset-1 outline-paper/20` : ``}`} /></motion.button>;
}
function PaperCarousel({
  input: argument,
  onPick: argument2
}) {
  let value = paperStyles.findIndex(argument3 => argument3.id === argument.style.paper);
  let value2 = paperStyles.length - 1;
  let value3 = useReducedMotion();
  let value4 = useMotionValue(-value * paperCardStep);
  let value5 = (0, React.useRef)(undefined);
  let value6 = (0, React.useRef)(false);
  let value7 = (0, React.useRef)(0);
  let value8 = argument3 => {
    value5.current?.stop();
    let value10 = value7.current;
    value7.current = 0;
    value5.current = animate(value4, -argument3 * paperCardStep, value3 ? {
      duration: 0
    } : {
      ...paperSpring,
      velocity: value10
    });
  };
  let value9 = (0, React.useEffectEvent)(value8);
  (0, React.useEffect)(() => {
    value9(value);
    return () => value5.current?.stop();
  }, [value]);
  return <div aria-hidden={true} onMouseDown={event => event.preventDefault()} className={`relative h-69 touch-pan-y`}><motion.div drag={`x`} style={{
      x: value4
    }} dragConstraints={{
      left: -value2 * paperCardStep,
      right: 0
    }} dragElastic={0.2} dragMomentum={false} onPointerDown={() => value6.current = false} onDragStart={() => value6.current = true} onDragEnd={(argument3, {
      velocity: argument4
    }) => {
      value7.current = argument4.x;
      let value10 = clampPaperIndex(Math.round(-(value4.get() + paperMomentum(argument4.x)) / paperCardStep), 0, value2);
      if (value10 === value) {
        value8(value);
      } else {
        argument2(paperStyles[value10].id);
      }
    }} onPointerUp={() => value6.current || value8(value)} className={`absolute top-2 left-1/2 -ml-31 size-62 cursor-grab active:cursor-grabbing`}>{paperStyles.map((argument3, argument4) => <PaperCard paper={argument3} at={argument4} x={value4} input={argument} onPick={() => value6.current || argument2(argument3.id)} key={argument3.id} />)}</motion.div></div>;
}
var paperLabelClass = `text-caption font-medium text-paper/90`;
function PaperSwatch({
  paper: argument
}) {
  return <span className={`relative font-normal`}><AnimatePresence mode={`popLayout`} initial={false}><motion.span initial={{
        opacity: 0,
        y: 6
      }} animate={{
        opacity: 1,
        y: 0
      }} exit={{
        opacity: 0,
        y: -6
      }} transition={{
        type: `spring`,
        duration: 0.25,
        bounce: 0
      }} className={`inline-block`} key={argument.id}>{argument.name}</motion.span></AnimatePresence></span>;
}
function PaperPicker({
  picked: argument,
  onPick: argument2
}) {
  let value = (0, React.useId)();
  return <div role={`radiogroup`} aria-labelledby={value} className={`flex flex-col gap-2 px-5 pb-4.5 lg:px-6`}><div className={`flex items-baseline justify-between ${paperLabelClass}`}><span id={value}>{`Colour`}</span><PaperSwatch paper={paperStyleFor(argument)} /></div><div className={`flex justify-between`}>{paperStyles.map(argument3 => <label className={`pressable relative grid size-11 cursor-pointer place-items-center rounded-full has-focus-visible:outline-2 has-focus-visible:outline-offset-4 has-focus-visible:outline-(--focus)`} key={argument3.id}><input type={`radio`} name={`picture-paper`} value={argument3.id} checked={argument3.id === argument} onChange={() => argument2(argument3.id)} className={`peer sr-only`} /><span className={`sr-only`}>{argument3.name}</span><span aria-hidden={true} className={`grid size-10 place-items-center rounded-full ${argument3.id === `carbon` ? `inset-ring-[1.5px] inset-ring-paper/45` : ``}`} style={{
          backgroundColor: argument3.ground
        }}><span className={`size-3.5 rounded-full`} style={{
            backgroundColor: argument3.hand
          }} /></span><span aria-hidden={true} className={`absolute -inset-0.5 scale-90 rounded-full border-2 border-paper opacity-0 transition-[opacity,scale] duration-200 ease-out peer-checked:scale-100 peer-checked:opacity-100 motion-reduce:transition-none`} /></label>)}</div></div>;
}
function RulingPicker({
  picked: argument,
  onPick: argument2
}) {
  let value = (0, React.useId)();
  let value2 = rulingStyles.findIndex(argument3 => argument3.id === argument);
  return <div role={`radiogroup`} aria-labelledby={value} className={`flex flex-col gap-2.5 px-5 pb-5.5 lg:px-6`}><span id={value} className={paperLabelClass}>{`Paper`}</span><div className={`relative grid h-11 grid-cols-4 rounded-full bg-paper/14 p-1`}><span aria-hidden={true} className={`absolute inset-y-1 left-1 w-[calc((100%-0.5rem)/4)] rounded-full bg-paper transition-transform duration-200 ease-out motion-reduce:transition-none`} style={{
        transform: `translateX(${value2 * 100}%)`
      }} />{rulingStyles.map(argument3 => <label className={`pressable relative grid cursor-pointer place-items-center rounded-full text-[0.9375rem] leading-5 font-medium text-paper transition-colors duration-200 has-checked:font-semibold has-checked:text-carbon has-focus-visible:outline-2 has-focus-visible:outline-offset-2 has-focus-visible:outline-(--focus)`} key={argument3.id}><input type={`radio`} name={`picture-ruling`} value={argument3.id} checked={argument3.id === argument} onChange={() => argument2(argument3.id)} className={`sr-only`} />{argument3.name}</label>)}</div></div>;
}
function PictureSaveButton({
  picture: argument
}) {
  let {
    shares: value,
    sent: value2,
    empty: value3,
    send: value4
  } = argument;
  return <SheetPrimaryButton onClick={value4} disabled={value3} className={`w-full disabled:opacity-40`}><span className={value2 ? `icon-in flex shrink-0` : `flex shrink-0`} key={String(value2)}>{value2 ? <CheckIcon /> : value ? <ShareIcon /> : <DownloadIcon />}</span><span role={`status`}>{value2 ? `Sent to your downloads` : value ? `Share picture` : `Save picture`}</span></SheetPrimaryButton>;
}
function PictureStyleView({
  input: argument,
  picture: argument2
}) {
  let {
    actions: value
  } = useWrite();
  let value2 = (0, React.useRef)(null);
  let {
    paper: value3,
    ruling: value4
  } = argument.style;
  (0, React.useEffect)(() => {
    value2.current?.querySelector(`input[name="picture-paper"]:checked`)?.focus({
      preventScroll: true
    });
  }, []);
  return <div ref={value2} className={`flex flex-col pb-1`}><PaperCarousel input={argument} onPick={argument3 => value.stylePicture({
      paper: argument3
    })} /><PaperPicker picked={value3} onPick={argument3 => value.stylePicture({
      paper: argument3
    })} /><RulingPicker picked={value4} onPick={argument3 => value.stylePicture({
      ruling: argument3
    })} /><div className={`px-5 lg:px-6`}><PictureSaveButton picture={argument2} /></div></div>;
}
export { PictureStyleView };
