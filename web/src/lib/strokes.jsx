import { freehandStroke } from "./freehand.jsx";
var penSize = 40;
var pressureEasing = (pressure) => Math.sin((pressure * Math.PI) / 2);
var strokeCaps = {
	start: {
		cap: true,
		taper: 0,
	},
	end: {
		cap: true,
		taper: 0,
	},
};
var mouseStrokeOptions = {
	...strokeCaps,
	size: penSize,
	thinning: 0.25,
	smoothing: 0.62,
	streamline: 0.64,
	easing: pressureEasing,
	simulatePressure: true,
};
var penStrokeOptions = {
	...strokeCaps,
	size: penSize * 1.2,
	thinning: 0.4,
	smoothing: 0.62,
	streamline: 0.62,
	easing: (pressure) => pressure * 0.65 + pressureEasing(pressure) * 0.35,
	simulatePressure: false,
};
var pressureMultiplier = 1.25;
var optionsForInput = (inputType) =>
	inputType === `pen` ? penStrokeOptions : mouseStrokeOptions;
var pressureThresholds = {
	real: 0.68,
	simulated: 0.76,
};
var thresholdForInput = (inputType) =>
	inputType === `pen` ? pressureThresholds.real : pressureThresholds.simulated;
var cornerThreshold = 0.275;
var maxSegmentLength = 250;
var samplingStep = 0.2;
var pointDistance = (startPoint, endPoint) =>
	Math.hypot(startPoint[0] - endPoint[0], startPoint[1] - endPoint[1]);
function cornerCosine(previousPoint, cornerPoint, nextPoint) {
	let [incomingX, incomingY, outgoingX, outgoingY] = [
		cornerPoint[0] - previousPoint[0],
		cornerPoint[1] - previousPoint[1],
		nextPoint[0] - cornerPoint[0],
		nextPoint[1] - cornerPoint[1],
	];
	let lengthProduct =
		Math.hypot(incomingX, incomingY) * Math.hypot(outgoingX, outgoingY);
	if (lengthProduct) {
		return (incomingX * outgoingX + incomingY * outgoingY) / lengthProduct;
	} else {
		return 1;
	}
}
function trimStrokeEnds(points, size) {
	let trimDistance = size / 3;
	let pointCount = points.length;
	let firstKeptIndex = 1;
	let startPressure = points[0][2];
	while (
		firstKeptIndex < pointCount - 1 &&
		pointDistance(points[firstKeptIndex], points[0]) <= trimDistance
	) {
		startPressure = Math.max(startPressure, points[firstKeptIndex++][2]);
	}
	let lastKeptIndex = pointCount - 2;
	while (
		lastKeptIndex >= firstKeptIndex &&
		pointDistance(points[lastKeptIndex], points[pointCount - 1]) <= trimDistance
	) {
		lastKeptIndex--;
	}
	let trimmedPoints = [
		[points[0][0], points[0][1], startPressure],
		...points.slice(firstKeptIndex, lastKeptIndex + 1),
	];
	if (pointCount > 1) {
		trimmedPoints.push(points[pointCount - 1]);
	}
	return {
		pts: trimmedPoints,
		trimmedEnd: lastKeptIndex < pointCount - 2,
	};
}
function strokeTaper(points, options, targetPressure) {
	let size = options.size;
	let pointCount = points.length;
	let pressureAt = (pressureIndex) =>
		options.simulatePressure
			? 0.5
			: Math.min(1, points[pressureIndex][2] * pressureMultiplier);
	let totalDistance = 0;
	for (let lengthIndex = 1; lengthIndex < pointCount; lengthIndex++) {
		totalDistance += pointDistance(
			points[lengthIndex - 1],
			points[lengthIndex],
		);
	}
	if (totalDistance < size) {
		return points.map(() => targetPressure);
	}
	let advancePressure = (previousPressure, nextIndex) => {
		let distanceFraction = Math.min(
			1,
			pointDistance(points[nextIndex - 1], points[nextIndex]) / size,
		);
		let targetNextPressure = options.simulatePressure
			? 1 - distanceFraction
			: pressureAt(nextIndex);
		return Math.min(
			1,
			previousPressure +
				(targetNextPressure - previousPressure) *
					distanceFraction *
					cornerThreshold,
		);
	};
	let smoothedPressure = pressureAt(0);
	for (
		let warmupIndex = 1, warmupDistance = 0;
		warmupIndex < pointCount && warmupDistance < size * 5;
		warmupIndex++
	) {
		warmupDistance += pointDistance(
			points[warmupIndex - 1],
			points[warmupIndex],
		);
		smoothedPressure =
			(smoothedPressure + advancePressure(smoothedPressure, warmupIndex)) / 2;
	}
	let pressures = [smoothedPressure];
	for (let pressureIndex = 1; pressureIndex < pointCount; pressureIndex++) {
		pressures.push(
			(smoothedPressure = advancePressure(smoothedPressure, pressureIndex)),
		);
	}
	let [weightedPressureSum, sampleDistance] = [0, 0];
	for (
		let averageIndex = 1;
		averageIndex < pointCount && sampleDistance < size * 5;
		averageIndex++
	) {
		let segmentDistance = pointDistance(
			points[averageIndex - 1],
			points[averageIndex],
		);
		weightedPressureSum += pressures[averageIndex] * segmentDistance;
		sampleDistance += segmentDistance;
	}
	let baselinePressure = weightedPressureSum / sampleDistance;
	return pressures.map((pointPressure, pointIndex) => {
		if (pointIndex) {
			baselinePressure +=
				(pointPressure - baselinePressure) *
				(1 -
					Math.exp(
						-pointDistance(points[pointIndex - 1], points[pointIndex]) /
							maxSegmentLength,
					));
		}
		return Math.min(
			1,
			Math.max(0, targetPressure + pointPressure - baselinePressure),
		);
	});
}
function resamplePoints(points, cornerDistance) {
	let pointCount = points.length;
	let cumulativeDistances = [0];
	for (let distanceIndex = 1; distanceIndex < pointCount; distanceIndex++) {
		cumulativeDistances.push(
			cumulativeDistances[distanceIndex - 1] +
				pointDistance(points[distanceIndex - 1], points[distanceIndex]),
		);
	}
	let cornerIndices = [];
	let candidateIndex = -1;
	let candidateCosine = samplingStep;
	for (
		let pointIndex = 1, previousIndex = 0, nextIndex = 1;
		pointIndex < pointCount - 1;
		pointIndex++
	) {
		while (
			previousIndex + 1 < pointIndex &&
			cumulativeDistances[pointIndex] -
				cumulativeDistances[previousIndex + 1] >=
				cornerDistance
		) {
			previousIndex++;
		}
		while (
			nextIndex < pointCount - 1 &&
			cumulativeDistances[nextIndex] - cumulativeDistances[pointIndex] <
				cornerDistance
		) {
			nextIndex++;
		}
		if (
			cumulativeDistances[pointIndex] - cumulativeDistances[previousIndex] <
			cornerDistance
		) {
			continue;
		}
		if (
			cumulativeDistances[nextIndex] - cumulativeDistances[pointIndex] <
			cornerDistance
		) {
			break;
		}
		let turnCosine = cornerCosine(
			points[previousIndex],
			points[pointIndex],
			points[nextIndex],
		);
		if (turnCosine < candidateCosine) {
			[candidateIndex, candidateCosine] = [pointIndex, turnCosine];
		}
		if (
			candidateIndex >= 0 &&
			cumulativeDistances[pointIndex] - cumulativeDistances[candidateIndex] >=
				cornerDistance
		) {
			cornerIndices.push(candidateIndex);
			[candidateIndex, candidateCosine] = [-1, samplingStep];
		}
	}
	if (candidateIndex >= 0) {
		cornerIndices.push(candidateIndex);
	}
	return cornerIndices;
}
function strokePolygons(points, inputType, isComplete = true) {
	if (!points.length) {
		return [];
	}
	let options = optionsForInput(inputType);
	let size = options.size;
	let { pts: trimmedPoints, trimmedEnd } = trimStrokeEnds(points, size);
	let pressures = strokeTaper(
		trimmedPoints,
		options,
		thresholdForInput(inputType),
	);
	let pointCount = trimmedPoints.length;
	let completeLastSegment =
		isComplete ||
		!options.simulatePressure ||
		trimmedEnd ||
		pointCount < 2 ||
		pointDistance(
			trimmedPoints[pointCount - 2],
			trimmedPoints[pointCount - 1],
		) < size;
	let segmentBoundaries = [
		0,
		...resamplePoints(trimmedPoints, size / 2),
		pointCount - 1,
	];
	let polygons = [];
	for (
		let segmentIndex = 1;
		segmentIndex < segmentBoundaries.length;
		segmentIndex++
	) {
		let segmentPoints = [];
		for (
			let pointIndex = segmentBoundaries[segmentIndex - 1];
			pointIndex <= segmentBoundaries[segmentIndex];
			pointIndex++
		) {
			segmentPoints.push([
				trimmedPoints[pointIndex][0],
				trimmedPoints[pointIndex][1],
				pressures[pointIndex],
			]);
		}
		let outline = freehandStroke(segmentPoints, {
			...options,
			simulatePressure: false,
			last: segmentIndex < segmentBoundaries.length - 1 || completeLastSegment,
		});
		if (outline.length >= 3) {
			polygons.push(outline);
		}
	}
	return polygons;
}
var polygonCache = new WeakMap();
function polygonsForStroke(stroke) {
	let polygons = polygonCache.get(stroke);
	if (!polygons) {
		polygonCache.set(
			stroke,
			(polygons = strokePolygons(stroke.pts, stroke.input)),
		);
	}
	return polygons;
}
export { strokePolygons, polygonsForStroke };
