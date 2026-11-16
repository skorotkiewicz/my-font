import polygonClipping from "polygon-clipping";
import { signedArea } from "../geometry.jsx";
import { polygonsForStroke } from "../strokes.jsx";
const stageYToFont = (stageY) => 920 - stageY;
function pointLineDistance(
	[pointX, pointY],
	[lineStartX, lineStartY],
	[lineEndX, lineEndY],
) {
	const lineDeltaX = lineEndX - lineStartX;
	const lineDeltaY = lineEndY - lineStartY;
	const lineLength = Math.hypot(lineDeltaX, lineDeltaY);
	if (lineLength === 0) {
		return Math.hypot(pointX - lineStartX, pointY - lineStartY);
	} else {
		return (
			Math.abs(
				lineDeltaY * pointX -
					lineDeltaX * pointY +
					lineEndX * lineStartY -
					lineEndY * lineStartX,
			) / lineLength
		);
	}
}
function simplifyPolyline(points, tolerance) {
	if (points.length < 3) {
		return points;
	}
	let farthestPointIndex = 0;
	let maximumDistance = 0;
	const lastPointIndex = points.length - 1;
	for (let pointIndex = 1; pointIndex < lastPointIndex; pointIndex++) {
		const distanceFromLine = pointLineDistance(
			points[pointIndex],
			points[0],
			points[lastPointIndex],
		);
		if (distanceFromLine > maximumDistance) {
			[farthestPointIndex, maximumDistance] = [pointIndex, distanceFromLine];
		}
	}
	if (maximumDistance <= tolerance) {
		return [points[0], points[lastPointIndex]];
	} else {
		return [
			...simplifyPolyline(
				points.slice(0, farthestPointIndex + 1),
				tolerance,
			).slice(0, -1),
			...simplifyPolyline(points.slice(farthestPointIndex), tolerance),
		];
	}
}
function simplifyPolygon(polygon, tolerance = 1.5) {
	if (polygon.length < 4) {
		return polygon;
	}
	let splitIndex = 0;
	let maximumDistance = 0;
	polygon.forEach((point, pointIndex) => {
		const distanceFromStart = Math.hypot(
			point[0] - polygon[0][0],
			point[1] - polygon[0][1],
		);
		if (distanceFromStart > maximumDistance) {
			[splitIndex, maximumDistance] = [pointIndex, distanceFromStart];
		}
	});
	const firstArc = simplifyPolyline(polygon.slice(0, splitIndex + 1), tolerance);
	const secondArc = simplifyPolyline(
		[...polygon.slice(splitIndex), polygon[0]],
		tolerance,
	);
	return [...firstArc.slice(0, -1), ...secondArc.slice(0, -1)];
}
function drawingContours(drawing) {
	const strokePolygons = drawing.strokes.flatMap(polygonsForStroke);
	if (!strokePolygons.length) {
		return [];
	}
	const [firstPolygon, ...remainingPolygons] = strokePolygons.map(
		(strokePolygon) => [strokePolygon],
	);
	const mergedPolygons = polygonClipping.union(
		firstPolygon,
		...remainingPolygons,
	);
	const contours = [];
	for (const mergedPolygon of mergedPolygons) {
		mergedPolygon.forEach((ring, ringIndex) => {
			let contour = simplifyPolygon(
				ring
					.slice(0, -1)
					.map(([pointX, stageY]) => [pointX, stageYToFont(stageY)]),
			);
			const area = signedArea(contour);
			if (!(contour.length < 3) && !(Math.abs(area) < 25)) {
				if (area > 0 !== (ringIndex === 0)) {
					contour = contour.reverse();
				}
				contours.push(contour);
			}
		});
	}
	return contours;
}
const placeContours = (contours, { scale, dy: verticalOffset }) =>
	scale === 1 && verticalOffset === 0
		? contours
		: contours.map((contour) =>
				contour.map(([pointX, pointY]) => [
					pointX * scale,
					pointY * scale + verticalOffset,
				]),
			);
export { drawingContours, placeContours };
