function signedArea(polygon) {
	let area = 0;
	for (
		let vertexIndex = 0, previousVertexIndex = polygon.length - 1;
		vertexIndex < polygon.length;
		previousVertexIndex = vertexIndex++
	) {
		area +=
			(polygon[previousVertexIndex][0] - polygon[vertexIndex][0]) *
			(polygon[previousVertexIndex][1] + polygon[vertexIndex][1]);
	}
	return area / 2;
}
function polygonBounds(polygons) {
	let [minX, minY, maxX, maxY] = [Infinity, Infinity, -Infinity, -Infinity];
	for (const polygon of polygons) {
		for (const [pointX, pointY] of polygon) {
			if (pointX < minX) {
				minX = pointX;
			}
			if (pointY < minY) {
				minY = pointY;
			}
			if (pointX > maxX) {
				maxX = pointX;
			}
			if (pointY > maxY) {
				maxY = pointY;
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
			yMax: maxY,
		};
	}
}
var clamp = (number, lowerBound, upperBound) =>
	Math.min(upperBound, Math.max(lowerBound, number));
function median(numbers) {
	const sorted = numbers.toSorted(
		(leftNumber, rightNumber) => leftNumber - rightNumber,
	);
	const middle = sorted.length >> 1;
	if (sorted.length % 2) {
		return sorted[middle];
	} else {
		return (sorted[middle - 1] + sorted[middle]) / 2;
	}
}
export { signedArea, polygonBounds, clamp, median };
