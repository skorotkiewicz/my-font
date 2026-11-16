function signedArea(polygon) {
  let area = 0;
  for (let value = 0, value2 = polygon.length - 1; value < polygon.length; value2 = value++) {
    area += (polygon[value2][0] - polygon[value][0]) * (polygon[value2][1] + polygon[value][1]);
  }
  return area / 2;
}
function polygonBounds(polygons) {
  let [minX, minY, maxX, maxY] = [Infinity, Infinity, -Infinity, -Infinity];
  for (let value of polygons) {
    for (let [value2, value3] of value) {
      if (value2 < minX) {
        minX = value2;
      }
      if (value3 < minY) {
        minY = value3;
      }
      if (value2 > maxX) {
        maxX = value2;
      }
      if (value3 > maxY) {
        maxY = value3;
      }
    }
  }
  if (minX === Infinity) {
    return null;
  } else {
    return {
      xMin: minX,
      yMin: minY,
      xMax: maxX,
      yMax: maxY
    };
  }
}
var clamp = (argument, argument2, argument3) => Math.min(argument3, Math.max(argument2, argument));
function median(numbers) {
  let sorted = numbers.toSorted((argument, argument2) => argument - argument2);
  let middle = sorted.length >> 1;
  if (sorted.length % 2) {
    return sorted[middle];
  } else {
    return (sorted[middle - 1] + sorted[middle]) / 2;
  }
}
export { signedArea, polygonBounds, clamp, median };
