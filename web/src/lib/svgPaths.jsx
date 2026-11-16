import { signedArea } from "./geometry.jsx";
import { polygonsForStroke } from "./strokes.jsx";
var roundTenth = (argument) => Math.round(argument * 10) / 10;
function polygonPath(polygon) {
	let count = polygon.length;
	if (count < 3) {
		return ``;
	}
	let path = (argument) => {
		let [value, value2] = [
			polygon[argument % count],
			polygon[(argument + 1) % count],
		];
		return `${roundTenth((value[0] + value2[0]) / 2)} ${roundTenth((value[1] + value2[1]) / 2)}`;
	};
	let index = `M${path(count - 1)}`;
	for (let value = 0; value < count; value++) {
		index += `Q${roundTenth(polygon[value][0])} ${roundTenth(polygon[value][1])} ${path(value)}`;
	}
	return `${index}Z`;
}
var polygonsPath = (argument) =>
	argument
		.map((argument2) =>
			polygonPath(
				signedArea(argument2) < 0 ? [...argument2].reverse() : argument2,
			),
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
