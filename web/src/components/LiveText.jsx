import { useWrite } from "../state/WriteProvider.jsx";
var placeholderXHeight = 526;
var placeholderCapHeight = 686;
function placeholderScale(argument, argument2) {
  if (argument >= `a` && argument <= `z`) {
    return argument2.xHeight / placeholderXHeight;
  } else if (argument >= `0` && argument <= `9`) {
    return argument2.digitHeight / placeholderCapHeight;
  } else {
    return argument2.capHeight / placeholderCapHeight;
  }
}
function textRuns(argument, argument2, argument3, argument4 = 1) {
  let value = [];
  for (let value2 of argument) {
    let value3 = value2 === ` ` || argument2(value2);
    let value4 = value3 ? 1 : placeholderScale(value2, argument3) * argument4;
    let value5 = value[value.length - 1];
    if (value5 && value5.hand === value3 && value5.scale === value4) {
      value5.text += value2;
    } else {
      value.push({
        text: value2,
        hand: value3,
        scale: value4
      });
    }
  }
  return value;
}
function useTextStyle() {
  let {
    state: value
  } = useWrite();
  if (value.font) {
    return `"${value.font.family}", var(--font-display)`;
  } else {
    return `var(--font-display)`;
  }
}
function LiveText({
  text: argument,
  className: argument2,
  shrink: argument3 = 1
}) {
  let {
    state: value
  } = useWrite();
  let value2 = useTextStyle();
  let value3 = textRuns(argument, argument4 => value.drawn.has(argument4.charCodeAt(0)), value.alignment.lines, argument3);
  return <span className={argument2}><span className={`sr-only`}>{argument}</span><span aria-hidden={true}>{value3.map((argument4, argument5) => argument4.hand ? <span className={`text-hand`} style={{
        fontFamily: value2
      }} key={argument5}>{argument4.text}</span> : <span className={`font-display font-normal text-placeholder`} style={{
        fontSize: `${argument4.scale.toFixed(3)}em`
      }} key={argument5}>{argument4.text}</span>)}</span></span>;
}
export { placeholderScale, textRuns, useTextStyle, LiveText };
