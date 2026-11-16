var {
  PI: pi
} = Math;
var almostPi = pi + 0.0001;
var defaultPressure = 0.5;
var unitOffset = [1, 1];
function strokeRadius(argument, argument2, argument3, argument4 = argument5 => argument5) {
  return argument * argument4(0.5 - argument2 * (0.5 - argument3));
}
var {
  min: minimum
} = Math;
function simulatePressure(argument, argument2, argument3) {
  let value = minimum(1, argument2 / argument3);
  return minimum(1, argument + (minimum(1, 1 - value) - argument) * (value * 0.275));
}
function negateVector(argument) {
  return [-argument[0], -argument[1]];
}
function addVectors(argument, argument2) {
  return [argument[0] + argument2[0], argument[1] + argument2[1]];
}
function addVectorsInto(argument, argument2, argument3) {
  argument[0] = argument2[0] + argument3[0];
  argument[1] = argument2[1] + argument3[1];
  return argument;
}
function subtractVectors(argument, argument2) {
  return [argument[0] - argument2[0], argument[1] - argument2[1]];
}
function subtractVectorsInto(argument, argument2, argument3) {
  argument[0] = argument2[0] - argument3[0];
  argument[1] = argument2[1] - argument3[1];
  return argument;
}
function scaleVector(argument, argument2) {
  return [argument[0] * argument2, argument[1] * argument2];
}
function scaleVectorInto(argument, argument2, argument3) {
  argument[0] = argument2[0] * argument3;
  argument[1] = argument2[1] * argument3;
  return argument;
}
function divideVector(argument, argument2) {
  return [argument[0] / argument2, argument[1] / argument2];
}
function perpendicularVector(argument) {
  return [argument[1], -argument[0]];
}
function perpendicularVectorInto(argument, argument2) {
  let value = argument2[0];
  argument[0] = argument2[1];
  argument[1] = -value;
  return argument;
}
function dotProduct(argument, argument2) {
  return argument[0] * argument2[0] + argument[1] * argument2[1];
}
function equalVectors(argument, argument2) {
  return argument[0] === argument2[0] && argument[1] === argument2[1];
}
function vectorLength(argument) {
  return Math.hypot(argument[0], argument[1]);
}
function squaredDistance(argument, argument2) {
  let value = argument[0] - argument2[0];
  let value2 = argument[1] - argument2[1];
  return value * value + value2 * value2;
}
function normalizeVector(argument) {
  return divideVector(argument, vectorLength(argument));
}
function vectorDistance(argument, argument2) {
  return Math.hypot(argument[1] - argument2[1], argument[0] - argument2[0]);
}
function rotatePoint(argument, argument2, argument3) {
  let value = Math.sin(argument3);
  let value2 = Math.cos(argument3);
  let value3 = argument[0] - argument2[0];
  let value4 = argument[1] - argument2[1];
  let value5 = value3 * value2 - value4 * value;
  let value6 = value3 * value + value4 * value2;
  return [value5 + argument2[0], value6 + argument2[1]];
}
function rotatePointInto(argument, argument2, argument3, argument4) {
  let value = Math.sin(argument4);
  let value2 = Math.cos(argument4);
  let value3 = argument2[0] - argument3[0];
  let value4 = argument2[1] - argument3[1];
  let value5 = value3 * value2 - value4 * value;
  let value6 = value3 * value + value4 * value2;
  argument[0] = value5 + argument3[0];
  argument[1] = value6 + argument3[1];
  return argument;
}
function lerpVector(argument, argument2, argument3) {
  return addVectors(argument, scaleVector(subtractVectors(argument2, argument), argument3));
}
function lerpVectorInto(argument, argument2, argument3, argument4) {
  let value = argument3[0] - argument2[0];
  let value2 = argument3[1] - argument2[1];
  argument[0] = argument2[0] + value * argument4;
  argument[1] = argument2[1] + value2 * argument4;
  return argument;
}
function projectVector(argument, argument2, argument3) {
  return addVectors(argument, scaleVector(argument2, argument3));
}
var normalScratch = [0, 0];
var leftScratch = [0, 0];
var rightScratch = [0, 0];
function dotOutline(argument, argument2) {
  let value = projectVector(argument, normalizeVector(perpendicularVector(subtractVectors(argument, addVectors(argument, [1, 1])))), -argument2);
  let value2 = [];
  let value3 = 1 / 13;
  for (let value4 = value3; value4 <= 1; value4 += value3) {
    value2.push(rotatePoint(value, argument, almostPi * 2 * value4));
  }
  return value2;
}
function roundStartCap(argument, argument2, argument3) {
  let value = [];
  let value2 = 1 / argument3;
  for (let value3 = value2; value3 <= 1; value3 += value2) {
    value.push(rotatePoint(argument2, argument, almostPi * value3));
  }
  return value;
}
function flatStartCap(argument, argument2, argument3) {
  let value = subtractVectors(argument2, argument3);
  let value2 = scaleVector(value, 0.5);
  let value3 = scaleVector(value, 0.51);
  return [subtractVectors(argument, value2), subtractVectors(argument, value3), addVectors(argument, value3), addVectors(argument, value2)];
}
function roundEndCap(argument, argument2, argument3, argument4) {
  let value = [];
  let value2 = projectVector(argument, argument2, argument3);
  let value3 = 1 / argument4;
  for (let value4 = value3; value4 < 1; value4 += value3) {
    value.push(rotatePoint(value2, argument, almostPi * 3 * value4));
  }
  return value;
}
function flatEndCap(argument, argument2, argument3) {
  return [addVectors(argument, scaleVector(argument2, argument3)), addVectors(argument, scaleVector(argument2, argument3 * 0.99)), subtractVectors(argument, scaleVector(argument2, argument3 * 0.99)), subtractVectors(argument, scaleVector(argument2, argument3))];
}
function taperLength(argument, argument2, argument3) {
  if (argument === false || argument === undefined) {
    return 0;
  } else if (argument === true) {
    return Math.max(argument2, argument3);
  } else {
    return argument;
  }
}
function initialPressure(argument, argument2, argument3) {
  return argument.slice(0, 10).reduce((argument4, argument5) => {
    let value = argument5.pressure;
    if (argument2) {
      value = simulatePressure(argument4, argument5.distance, argument3);
    }
    return (argument4 + value) / 2;
  }, argument[0].pressure);
}
function strokeOutline(argument, argument2 = {}) {
  let {
    size: value = 16,
    smoothing: value2 = 0.5,
    thinning: value3 = 0.5,
    simulatePressure: value4 = true,
    easing: value5 = argument3 => argument3,
    start: value6 = {},
    end: value7 = {},
    last: value8 = false
  } = argument2;
  let {
    cap: value9 = true,
    easing: value10 = argument3 => argument3 * (2 - argument3)
  } = value6;
  let {
    cap: value11 = true,
    easing: value12 = argument3 => --argument3 * argument3 * argument3 + 1
  } = value7;
  if (argument.length === 0 || value <= 0) {
    return [];
  }
  let value13 = argument[argument.length - 1].runningLength;
  let value14 = taperLength(value6.taper, value, value13);
  let value15 = taperLength(value7.taper, value, value13);
  let value16 = (value * value2) ** 2;
  let value17 = [];
  let value18 = [];
  let value19 = initialPressure(argument, value4, value);
  let value20 = strokeRadius(value, value3, argument[argument.length - 1].pressure, value5);
  let value21;
  let value22 = argument[0].vector;
  let value23 = argument[0].point;
  let value24 = value23;
  let value25 = value23;
  let value26 = value24;
  let value27 = false;
  for (let value32 = 0; value32 < argument.length; value32++) {
    let {
      pressure: value33
    } = argument[value32];
    let {
      point: value34,
      vector: value35,
      distance: value36,
      runningLength: value37
    } = argument[value32];
    let value38 = value32 === argument.length - 1;
    if (!value38 && value13 - value37 < 3) {
      continue;
    }
    if (value3) {
      if (value4) {
        value33 = simulatePressure(value19, value36, value);
      }
      value20 = strokeRadius(value, value3, value33, value5);
    } else {
      value20 = value / 2;
    }
    if (value21 === undefined) {
      value21 = value20;
    }
    let value39 = value37 < value14 ? value10(value37 / value14) : 1;
    let value40 = value13 - value37 < value15 ? value12((value13 - value37) / value15) : 1;
    value20 = Math.max(0.01, value20 * Math.min(value39, value40));
    let value41 = (value38 ? argument[value32] : argument[value32 + 1]).vector;
    let value42 = value38 ? 1 : dotProduct(value35, value41);
    let value43 = dotProduct(value35, value22) < 0 && !value27;
    let value44 = value42 !== null && value42 < 0;
    if (value43 || value44) {
      perpendicularVectorInto(normalScratch, value22);
      scaleVectorInto(normalScratch, normalScratch, value20);
      for (let value45 = 0; value45 <= 1; value45 += 0.07692307692307693) {
        subtractVectorsInto(leftScratch, value34, normalScratch);
        rotatePointInto(leftScratch, leftScratch, value34, almostPi * value45);
        value25 = [leftScratch[0], leftScratch[1]];
        value17.push(value25);
        addVectorsInto(rightScratch, value34, normalScratch);
        rotatePointInto(rightScratch, rightScratch, value34, almostPi * -value45);
        value26 = [rightScratch[0], rightScratch[1]];
        value18.push(value26);
      }
      value23 = value25;
      value24 = value26;
      if (value44) {
        value27 = true;
      }
    } else {
      value27 = false;
      if (value38) {
        perpendicularVectorInto(normalScratch, value35);
        scaleVectorInto(normalScratch, normalScratch, value20);
        value17.push(subtractVectors(value34, normalScratch));
        value18.push(addVectors(value34, normalScratch));
      } else {
        lerpVectorInto(normalScratch, value41, value35, value42);
        perpendicularVectorInto(normalScratch, normalScratch);
        scaleVectorInto(normalScratch, normalScratch, value20);
        subtractVectorsInto(leftScratch, value34, normalScratch);
        value25 = [leftScratch[0], leftScratch[1]];
        if (value32 <= 1 || squaredDistance(value23, value25) > value16) {
          value17.push(value25);
          value23 = value25;
        }
        addVectorsInto(rightScratch, value34, normalScratch);
        value26 = [rightScratch[0], rightScratch[1]];
        if (value32 <= 1 || squaredDistance(value24, value26) > value16) {
          value18.push(value26);
          value24 = value26;
        }
        value19 = value33;
        value22 = value35;
      }
    }
  }
  let value28 = [argument[0].point[0], argument[0].point[1]];
  let value29 = argument.length > 1 ? [argument[argument.length - 1].point[0], argument[argument.length - 1].point[1]] : addVectors(argument[0].point, [1, 1]);
  let value30 = [];
  let value31 = [];
  if (argument.length === 1) {
    if (!value14 && !value15 || value8) {
      return dotOutline(value28, value21 || value20);
    }
  } else {
    if (!value14 && (!value15 || argument.length !== 1)) {
      if (value9) {
        value30.push(...roundStartCap(value28, value18[0], 13));
      } else {
        value30.push(...flatStartCap(value28, value17[0], value18[0]));
      }
    }
    let value32 = perpendicularVector(negateVector(argument[argument.length - 1].vector));
    if (value15 || value14 && argument.length === 1) {
      value31.push(value29);
    } else if (value11) {
      value31.push(...roundEndCap(value29, value32, value20, 29));
    } else {
      value31.push(...flatEndCap(value29, value32, value20));
    }
  }
  return value17.concat(value31, value18.reverse(), value30);
}
var directionScratch = [0, 0];
function hasPressure(argument) {
  return argument != null && argument >= 0;
}
function strokePoints(argument, argument2 = {}) {
  let {
    streamline: value = 0.5,
    size: value2 = 16,
    last: value3 = false
  } = argument2;
  if (argument.length === 0) {
    return [];
  }
  let value4 = 0.15 + (1 - value) * 0.85;
  let value5 = Array.isArray(argument[0]) ? argument : argument.map(({
    x: argument3,
    y: argument4,
    pressure: argument5 = defaultPressure
  }) => [argument3, argument4, argument5]);
  if (value5.length === 2) {
    let value11 = value5[1];
    value5 = value5.slice(0, -1);
    for (let value12 = 1; value12 < 5; value12++) {
      value5.push(lerpVector(value5[0], value11, value12 / 4));
    }
  }
  if (value5.length === 1) {
    value5 = [...value5, [...addVectors(value5[0], unitOffset), ...value5[0].slice(2)]];
  }
  let value6 = [{
    point: [value5[0][0], value5[0][1]],
    pressure: hasPressure(value5[0][2]) ? value5[0][2] : 0.25,
    vector: [...unitOffset],
    distance: 0,
    runningLength: 0
  }];
  let value7 = false;
  let value8 = 0;
  let value9 = value6[0];
  let value10 = value5.length - 1;
  for (let value11 = 1; value11 < value5.length; value11++) {
    let value12 = value3 && value11 === value10 ? [value5[value11][0], value5[value11][1]] : lerpVector(value9.point, value5[value11], value4);
    if (equalVectors(value9.point, value12)) {
      continue;
    }
    let value13 = vectorDistance(value12, value9.point);
    value8 += value13;
    if (value11 < value10 && !value7) {
      if (value8 < value2) {
        continue;
      }
      value7 = true;
    }
    subtractVectorsInto(directionScratch, value9.point, value12);
    value9 = {
      point: value12,
      pressure: hasPressure(value5[value11][2]) ? value5[value11][2] : defaultPressure,
      vector: normalizeVector(directionScratch),
      distance: value13,
      runningLength: value8
    };
    value6.push(value9);
  }
  value6[0].vector = value6[1]?.vector || [0, 0];
  return value6;
}
function freehandStroke(argument, argument2 = {}) {
  return strokeOutline(strokePoints(argument, argument2), argument2);
}
export { freehandStroke };
