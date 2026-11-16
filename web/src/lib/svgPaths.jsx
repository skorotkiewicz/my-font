import { signedArea } from "./geometry.jsx";
import { polygonsForStroke } from "./strokes.jsx";
var roundTenth = (number) => Math.round(number * 10) / 10;
function polygonPath(polygon) {
	let count = polygon.length;
	if (count < 3) {
		return ``;
	}
	let path = (vertexIndex) => {
		let [currentVertex, nextVertex] = [
			polygon[vertexIndex % count],
			polygon[(vertexIndex + 1) % count],
		];
		return `${roundTenth((currentVertex[0] + nextVertex[0]) / 2)} ${roundTenth((currentVertex[1] + nextVertex[1]) / 2)}`;
	};
	let index = `M${path(count - 1)}`;
	for (
		let controlPointIndex = 0;
		controlPointIndex < count;
		controlPointIndex++
	) {
		index += `Q${roundTenth(polygon[controlPointIndex][0])} ${roundTenth(polygon[controlPointIndex][1])} ${path(controlPointIndex)}`;
	}
	return `${index}Z`;
}
var polygonsPath = (polygons) =>
	polygons
		.map((polygon) =>
			polygonPath(signedArea(polygon) < 0 ? [...polygon].reverse() : polygon),
		)
		.join(``);
var pathCache = new WeakMap();
function strokePath(stroke) {
	let path = pathCache.get(stroke);
	if (path === undefined) {
		pathCache.set(stroke, (path = polygonsPath(polygonsForStroke(stroke))));
	}
	return path;
}
export { polygonsPath, strokePath };
