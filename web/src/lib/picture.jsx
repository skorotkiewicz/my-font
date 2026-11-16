import { pictureOpacity, paperStyleFor } from "../data/pictureStyles.jsx";
import { textRuns } from "../components/LiveText.jsx";
import { wordmarkShape } from "../components/Wordmark.jsx";
var pictureLineHeight = 1.2;
var pictureFontScale = 0.92;
var pictureFontSizes = [200, 176, 154, 136, 120, 106, 94, 84, 74, 66, 58];
function measureSpacedText(argument, argument2, argument3) {
  let value = [...argument];
  let value2 = 1;
  while (value2 < value.length && argument3(value.slice(0, value2 + 1).join(``)) <= argument2) {
    value2++;
  }
  return value.slice(0, value2).join(``);
}
function wrapPictureText(argument, argument2, argument3) {
  let value = [];
  for (let value2 of argument.split(`
`)) {
    let value3 = ``;
    for (let value4 of value2.split(/\s+/).filter(Boolean)) {
      let value5 = value3 ? `${value3} ${value4}` : value4;
      if (argument3(value5) <= argument2) {
        value3 = value5;
        continue;
      }
      if (value3) {
        value.push(value3);
      }
      let value6 = value4;
      for (let value7 = measureSpacedText(value6, argument2, argument3); value7.length < value6.length; value7 = measureSpacedText(value6, argument2, argument3)) {
        value.push(value7);
        value6 = value6.slice(value7.length);
      }
      value3 = value6;
    }
    value.push(value3);
  }
  return value;
}
function truncatePictureText(argument, argument2, argument3, argument4) {
  let value = argument.slice(0, argument2);
  let value2 = [...value[argument2 - 1]];
  while (value2.length && argument4(`${value2.join(``)}…`) > argument3) {
    value2 = value2.slice(0, -1);
  }
  value[argument2 - 1] = `${value2.join(``).trimEnd()}…`;
  return value;
}
function fitPictureText(argument, argument2, argument3) {
  let value = pictureFontSizes[pictureFontSizes.length - 1];
  for (let value2 of pictureFontSizes) {
    let value3 = Math.floor(argument2.height / (value2 * pictureLineHeight));
    let value4 = argument2.width / value2;
    let value5 = wrapPictureText(argument.trim(), value4, argument3);
    let value6 = value5.length <= value3;
    if (!value6 && value2 !== value) {
      continue;
    }
    let value7 = value6 ? value5 : truncatePictureText(value5, value3, value4, argument3);
    return {
      size: value2,
      rows: value3,
      first: Math.floor((value3 - value7.length) / 2),
      lines: value7
    };
  }
  throw Error(`unreachable: the smallest size always sets a page`);
}
var pictureSize = 1080;
var pictureTextBox = {
  x: 96,
  y: 100,
  width: 888,
  height: 760
};
var pictureFooter = {
  baseline: 984,
  edge: 96
};
var pictureTitleSize = 54;
var pictureCaptionSize = 34;
var pictureRuleWidth = 3;
var pictureGridWidth = 4;
var pictureLineSpacing = 100;
function pictureFonts() {
  let value = getComputedStyle(document.documentElement);
  return {
    display: value.getPropertyValue(`--font-display`).trim(),
    sans: value.getPropertyValue(`--font-sans`).trim()
  };
}
function paintWordmark(argument, argument2, argument3, argument4, argument5, argument6) {
  argument.font = `900 expanded ${argument4}px ${argument5}`;
  argument.fillStyle = argument6.type;
  let {
    fontBoundingBoxAscent: value,
    fontBoundingBoxDescent: value2
  } = argument.measureText(`duc`);
  for (let value10 of `duc`) {
    argument.fillText(value10, argument2, argument3);
    argument2 += argument.measureText(value10).width + wordmarkShape.tracking * argument4;
  }
  let value3 = argument3 + value2 + (argument4 - value - value2) / 2;
  let {
    hand: value4,
    viewBox: value5,
    paths: value6
  } = wordmarkShape;
  let value7 = Math.min(value4.width * argument4 / value5.width, value4.height * argument4 / value5.height);
  let value8 = argument2 + value4.before * argument4 + (value4.width * argument4 - value5.width * value7) / 2;
  let value9 = value3 - (value4.lift + value4.height) * argument4 + (value4.height * argument4 - value5.height * value7) / 2;
  argument.save();
  argument.translate(value8 - value5.x * value7, value9 - value5.y * value7);
  argument.scale(value7, value7);
  argument.fillStyle = argument6.hand;
  for (let value10 of value6) {
    argument.fill(new Path2D(value10));
  }
  argument.restore();
}
function paintRuling(argument, argument2, argument3, argument4, argument5) {
  if (argument2 === `plain`) {
    return;
  }
  argument.fillStyle = argument3.type;
  if (argument2 === `lines`) {
    argument.globalAlpha = argument3.rule;
    for (let value5 = 0; value5 < argument4.rows; value5++) {
      argument.fillRect(0, argument5(value5) - pictureRuleWidth / 2, pictureSize, pictureRuleWidth);
    }
    argument.globalAlpha = 1;
    return;
  }
  let value = argument4.size * pictureLineHeight / pictureGridWidth;
  let value2 = argument5(argument4.rows - 1) + value;
  let value3 = [];
  for (let value5 = argument5(0) % value; value5 <= value2 + 0.5; value5 += value) {
    value3.push(Math.round(value5));
  }
  let value4 = [];
  for (let value5 = pictureTextBox.x % value; value5 < pictureSize; value5 += value) {
    value4.push(Math.round(value5));
  }
  if (argument2 === `grid`) {
    argument.globalAlpha = argument3.rule * 0.75;
    for (let value5 of value3) {
      argument.fillRect(0, value5 - 1, pictureSize, 2);
    }
    for (let value5 of value4) {
      argument.fillRect(value5 - 1, 0, 2, value2);
    }
  } else {
    argument.globalAlpha = Math.min(1, argument3.rule * 1.6);
    let value5 = Math.max(3, value / 15);
    argument.beginPath();
    for (let value6 of value3) {
      for (let value7 of value4) {
        argument.moveTo(value7 + value5, value6);
        argument.arc(value7, value6, value5, 0, Math.PI * 2);
      }
    }
    argument.fill();
  }
  argument.globalAlpha = 1;
}
function paintPicture(argument, {
  text: argument2,
  name: argument3,
  family: argument4,
  isDrawn: argument5,
  lines: argument6,
  style: argument7
}) {
  let value = argument.getContext(`2d`);
  if (!value) {
    return;
  }
  let value2 = paperStyleFor(argument7.paper);
  let value3 = pictureFonts();
  let value4 = argument.width / pictureSize;
  value.setTransform(value4, 0, 0, value4, 0, 0);
  let value5 = argument4 ? `"${argument4}", ${value3.display}` : value3.display;
  let value6 = (argument8, argument9) => argument8.hand ? `${argument9}px ${value5}` : `400 ${(argument9 * argument8.scale).toFixed(2)}px ${value3.display}`;
  let value7 = new Map();
  let value8 = argument8 => {
    let value13 = value7.get(argument8);
    if (value13 === undefined) {
      value13 = 0;
      for (let value14 of textRuns(argument8, argument5, argument6)) {
        value.font = value6(value14, pictureLineSpacing);
        value13 += value.measureText(value14.text).width / pictureLineSpacing;
      }
      value7.set(argument8, value13);
    }
    return value13;
  };
  value.globalAlpha = 1;
  value.textAlign = `left`;
  value.textBaseline = `alphabetic`;
  value.fillStyle = value2.ground;
  value.fillRect(0, 0, pictureSize, pictureSize);
  let value9 = fitPictureText(argument2, pictureTextBox, value8);
  let value10 = value9.size * pictureLineHeight;
  let value11 = pictureTextBox.y + (pictureTextBox.height - value9.rows * value10) / 2;
  let value12 = argument8 => Math.round(value11 + argument8 * value10 + value9.size * pictureFontScale);
  paintRuling(value, argument7.ruling, value2, value9, value12);
  value9.lines.forEach((argument8, argument9) => {
    let value13 = pictureTextBox.x;
    for (let value14 of textRuns(argument8, argument5, argument6)) {
      value.font = value6(value14, value9.size);
      value.fillStyle = value14.hand ? value2.hand : value2.type;
      value.globalAlpha = value14.hand ? 1 : pictureOpacity;
      value.fillText(value14.text, value13, value12(value9.first + argument9));
      value13 += value.measureText(value14.text).width;
    }
  });
  value.globalAlpha = 1;
  paintWordmark(value, pictureFooter.edge, pictureFooter.baseline, pictureTitleSize, value3.display, value2);
  value.font = `500 ${pictureCaptionSize}px ${value3.sans}`;
  value.fillStyle = value2.type;
  value.globalAlpha = 0.9;
  value.textAlign = `right`;
  value.fillText(argument3, pictureSize - pictureFooter.edge, pictureFooter.baseline);
  value.globalAlpha = 1;
}
function pictureBlob(argument, argument2) {
  let value = document.createElement(`canvas`);
  value.width = value.height = pictureSize;
  paintPicture(value, argument);
  return new Promise((argument3, argument4) => value.toBlob(argument5 => argument5 ? argument3(new File([argument5], argument2, {
    type: `image/png`
  })) : argument4(Error(`No picture`)), `image/png`));
}
export { paintPicture, pictureBlob };
