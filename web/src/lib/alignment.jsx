import { polygonBounds, clamp, median } from "./geometry.jsx";
import { polygonsForStroke } from "./strokes.jsx";
import { fontYToStage } from "../data/metrics.jsx";
import { writtenDrawings } from "./project.jsx";
var defaultPlacement = {
  scale: 1,
  dy: 0
};
var roundHundredths = argument => Math.round(argument * 100) / 100;
var placementTransform = ({
  scale: argument,
  dy: argument2
}, argument3 = 0) => `translate(${roundHundredths(argument3)} ${roundHundredths((1 - argument) * 920 - argument2)}) scale(${roundHundredths(argument)})`;
var defaultMetrics = {
  xHeight: 500,
  ascender: 700,
  capHeight: 700,
  digitHeight: 700
};
var minimumInkScale = 0.85;
var verticalTolerance = 130;
var baselineTolerance = 70;
var minimumInkHeight = 50;
var metricSampleCount = 4;
var characterRules = new Map();
var addCharacterRules = (argument, argument2) => [...argument].forEach(argument3 => characterRules.set(argument3.codePointAt(0), argument2));
addCharacterRules(`acemnorsuvwxz`, {
  top: `xHeight`,
  stands: true
});
addCharacterRules(`i`, {
  top: `xHeight`,
  stands: true,
  stem: true
});
addCharacterRules(`bdfhkl`, {
  top: `ascender`,
  stands: true
});
addCharacterRules(`t`, {
  stands: true
});
addCharacterRules(`gpqy`, {
  top: `xHeight`
});
addCharacterRules(`j`, {
  top: `xHeight`,
  stem: true,
  topReach: minimumInkHeight
});
addCharacterRules(`ABCDEFGHIKLMNOPRSTUVWXYZ`, {
  top: `capHeight`,
  stands: true
});
addCharacterRules(`JQ`, {
  top: `capHeight`
});
addCharacterRules(`0123456789`, {
  top: `digitHeight`,
  stands: true
});
function strokeInkBounds(argument) {
  let bounds = polygonBounds(polygonsForStroke(argument));
  return bounds && {
    xMin: bounds.xMin,
    xMax: bounds.xMax,
    yMin: fontYToStage(bounds.yMax),
    yMax: fontYToStage(bounds.yMin)
  };
}
var drawingBoundsCache = new WeakMap();
function drawingBounds(argument, drawing) {
  let value = drawingBoundsCache.get(drawing);
  if (value !== undefined) {
    return value;
  }
  let value2 = drawing.strokes.flatMap(argument2 => strokeInkBounds(argument2) ?? []);
  if (value2.length) {
    let value3 = value2.reduce((bounds, bounds2) => ({
      xMin: Math.min(bounds.xMin, bounds2.xMin),
      xMax: Math.max(bounds.xMax, bounds2.xMax),
      yMin: Math.min(bounds.yMin, bounds2.yMin),
      yMax: Math.max(bounds.yMax, bounds2.yMax)
    }));
    let value4 = argument2 => argument2.yMax - argument2.yMin;
    let value5 = characterRules.get(argument)?.stem ? value2.reduce((argument2, argument3) => value4(argument3) > value4(argument2) ? argument3 : argument2) : value3;
    value = {
      ink: value3,
      body: {
        yMin: value5.yMin,
        yMax: value5.yMax
      }
    };
  } else {
    value = null;
  }
  drawingBoundsCache.set(drawing, value);
  return value;
}
var inkBounds = (argument, argument2) => drawingBounds(argument, argument2)?.ink ?? null;
var blendMedian = (argument, argument2) => argument.length ? argument2 + (median(argument) - argument2) * Math.min(1, argument.length / metricSampleCount) : argument2;
function placementFor(argument, argument2, argument3, argument4) {
  if (!argument || argument2.yMax - argument2.yMin < 1) {
    return defaultPlacement;
  }
  let value = argument.top ? argument3 + argument4[argument.top] - argument2.yMax : NaN;
  let value2 = argument.stands ? argument3 - argument2.yMin : NaN;
  let value3 = Math.abs(value) <= (argument.topReach ?? verticalTolerance);
  let value4 = value2 <= baselineTolerance && value2 >= -130;
  if (value3 && value4) {
    let value5 = argument2.yMax + value * minimumInkScale;
    let value6 = argument2.yMin + value2 * minimumInkScale;
    let value7 = clamp((value5 - value6) / (argument2.yMax - argument2.yMin), 0.88, 1.12);
    return {
      scale: value7,
      dy: value6 - argument2.yMin * value7
    };
  }
  if (value4) {
    return {
      scale: 1,
      dy: value2 * minimumInkScale
    };
  } else if (value3) {
    return {
      scale: 1,
      dy: value * minimumInkScale
    };
  } else {
    return defaultPlacement;
  }
}
function applyDrawingFix(argument, argument2, {
  scale: argument3,
  dy: argument4
}) {
  if (argument3 === 1 && argument4 === 0) {
    return argument;
  }
  let value = argument.scale * (argument2.yMin + argument2.yMax) / 2 + argument.dy;
  return {
    scale: argument.scale * argument3,
    dy: argument.dy * argument3 + value * (1 - argument3) - argument4
  };
}
function alignDrawings(argument, argument2) {
  let value = argument.flatMap(({
    cp: argument3,
    drawing: argument4
  }) => {
    let value6 = drawingBounds(argument3, argument4);
    if (value6) {
      return [{
        cp: argument3,
        drawing: argument4,
        rule: characterRules.get(argument3),
        ...value6
      }];
    } else {
      return [];
    }
  });
  let value2 = new Map();
  if (!argument2) {
    for (let value6 of value) {
      value2.set(value6.cp, applyDrawingFix(defaultPlacement, value6.ink, value6.drawing.fix));
    }
    return {
      place: value2,
      lines: defaultMetrics
    };
  }
  let value3 = blendMedian(value.flatMap(argument3 => argument3.rule?.stands ? [argument3.body.yMin] : []), 0);
  let value4 = argument3 => blendMedian(value.flatMap(argument4 => argument4.rule?.top === argument3 ? [argument4.body.yMax - value3] : []), defaultMetrics[argument3]);
  let value5 = {
    xHeight: value4(`xHeight`),
    ascender: value4(`ascender`),
    capHeight: value4(`capHeight`),
    digitHeight: value4(`digitHeight`)
  };
  for (let value6 of value) {
    let value7 = placementFor(value6.rule, value6.body, value3, value5);
    value2.set(value6.cp, applyDrawingFix({
      scale: value7.scale,
      dy: value7.dy - value3
    }, value6.ink, value6.drawing.fix));
  }
  return {
    place: value2,
    lines: value5
  };
}
var alignProject = argument => alignDrawings(writtenDrawings(argument), argument.settings.tidy);
export { defaultPlacement, placementTransform, inkBounds, alignProject };
