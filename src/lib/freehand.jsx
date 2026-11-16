var { PI: pi } = Math;
var almostPi = pi + 0.0001;
var defaultPressure = 0.5;
var unitOffset = [1, 1];
function strokeRadius(
	size,
	thinning,
	pressure,
	easing = (easingFraction) => easingFraction,
) {
	return size * easing(0.5 - thinning * (0.5 - pressure));
}
var { min: minimum } = Math;
function simulatePressure(previousPressure, distance, size) {
	const distanceFraction = minimum(1, distance / size);
	return minimum(
		1,
		previousPressure +
			(minimum(1, 1 - distanceFraction) - previousPressure) *
				(distanceFraction * 0.275),
	);
}
function negateVector(vector) {
	return [-vector[0], -vector[1]];
}
function addVectors(leftVector, rightVector) {
	return [leftVector[0] + rightVector[0], leftVector[1] + rightVector[1]];
}
function addVectorsInto(target, leftVector, rightVector) {
	target[0] = leftVector[0] + rightVector[0];
	target[1] = leftVector[1] + rightVector[1];
	return target;
}
function subtractVectors(leftVector, rightVector) {
	return [leftVector[0] - rightVector[0], leftVector[1] - rightVector[1]];
}
function subtractVectorsInto(target, leftVector, rightVector) {
	target[0] = leftVector[0] - rightVector[0];
	target[1] = leftVector[1] - rightVector[1];
	return target;
}
function scaleVector(vector, scale) {
	return [vector[0] * scale, vector[1] * scale];
}
function scaleVectorInto(target, vector, scale) {
	target[0] = vector[0] * scale;
	target[1] = vector[1] * scale;
	return target;
}
function divideVector(vector, divisor) {
	return [vector[0] / divisor, vector[1] / divisor];
}
function perpendicularVector(vector) {
	return [vector[1], -vector[0]];
}
function perpendicularVectorInto(target, vector) {
	const originalX = vector[0];
	target[0] = vector[1];
	target[1] = -originalX;
	return target;
}
function dotProduct(leftVector, rightVector) {
	return leftVector[0] * rightVector[0] + leftVector[1] * rightVector[1];
}
function equalVectors(leftVector, rightVector) {
	return leftVector[0] === rightVector[0] && leftVector[1] === rightVector[1];
}
function vectorLength(vector) {
	return Math.hypot(vector[0], vector[1]);
}
function squaredDistance(startPoint, endPoint) {
	const deltaX = startPoint[0] - endPoint[0];
	const deltaY = startPoint[1] - endPoint[1];
	return deltaX * deltaX + deltaY * deltaY;
}
function normalizeVector(vector) {
	return divideVector(vector, vectorLength(vector));
}
function vectorDistance(startPoint, endPoint) {
	return Math.hypot(startPoint[1] - endPoint[1], startPoint[0] - endPoint[0]);
}
function rotatePoint(point, centerPoint, rotationRadians) {
	const sine = Math.sin(rotationRadians);
	const cosine = Math.cos(rotationRadians);
	const relativeX = point[0] - centerPoint[0];
	const relativeY = point[1] - centerPoint[1];
	const rotatedX = relativeX * cosine - relativeY * sine;
	const rotatedY = relativeX * sine + relativeY * cosine;
	return [rotatedX + centerPoint[0], rotatedY + centerPoint[1]];
}
function rotatePointInto(target, point, centerPoint, rotationRadians) {
	const sine = Math.sin(rotationRadians);
	const cosine = Math.cos(rotationRadians);
	const relativeX = point[0] - centerPoint[0];
	const relativeY = point[1] - centerPoint[1];
	const rotatedX = relativeX * cosine - relativeY * sine;
	const rotatedY = relativeX * sine + relativeY * cosine;
	target[0] = rotatedX + centerPoint[0];
	target[1] = rotatedY + centerPoint[1];
	return target;
}
function lerpVector(startVector, endVector, interpolationFraction) {
	return addVectors(
		startVector,
		scaleVector(subtractVectors(endVector, startVector), interpolationFraction),
	);
}
function lerpVectorInto(target, startVector, endVector, interpolationFraction) {
	const deltaX = endVector[0] - startVector[0];
	const deltaY = endVector[1] - startVector[1];
	target[0] = startVector[0] + deltaX * interpolationFraction;
	target[1] = startVector[1] + deltaY * interpolationFraction;
	return target;
}
function projectVector(point, direction, distance) {
	return addVectors(point, scaleVector(direction, distance));
}
var normalScratch = [0, 0];
var leftScratch = [0, 0];
var rightScratch = [0, 0];
function dotOutline(centerPoint, outlineRadius) {
	const firstOutlinePoint = projectVector(
		centerPoint,
		normalizeVector(
			perpendicularVector(
				subtractVectors(centerPoint, addVectors(centerPoint, [1, 1])),
			),
		),
		-outlineRadius,
	);
	const outlinePoints = [];
	const angleStep = 1 / 13;
	for (
		let rotationFraction = angleStep;
		rotationFraction <= 1;
		rotationFraction += angleStep
	) {
		outlinePoints.push(
			rotatePoint(
				firstOutlinePoint,
				centerPoint,
				almostPi * 2 * rotationFraction,
			),
		);
	}
	return outlinePoints;
}
function roundStartCap(centerPoint, edgePoint, segmentCount) {
	const capPoints = [];
	const angleStep = 1 / segmentCount;
	for (
		let rotationFraction = angleStep;
		rotationFraction <= 1;
		rotationFraction += angleStep
	) {
		capPoints.push(
			rotatePoint(edgePoint, centerPoint, almostPi * rotationFraction),
		);
	}
	return capPoints;
}
function flatStartCap(centerPoint, leftEdge, rightEdge) {
	const edgeSpan = subtractVectors(leftEdge, rightEdge);
	const halfSpan = scaleVector(edgeSpan, 0.5);
	const extendedHalfSpan = scaleVector(edgeSpan, 0.51);
	return [
		subtractVectors(centerPoint, halfSpan),
		subtractVectors(centerPoint, extendedHalfSpan),
		addVectors(centerPoint, extendedHalfSpan),
		addVectors(centerPoint, halfSpan),
	];
}
function roundEndCap(centerPoint, normal, outlineRadius, segmentCount) {
	const capPoints = [];
	const firstCapPoint = projectVector(centerPoint, normal, outlineRadius);
	const angleStep = 1 / segmentCount;
	for (
		let rotationFraction = angleStep;
		rotationFraction < 1;
		rotationFraction += angleStep
	) {
		capPoints.push(
			rotatePoint(firstCapPoint, centerPoint, almostPi * 3 * rotationFraction),
		);
	}
	return capPoints;
}
function flatEndCap(centerPoint, normal, outlineRadius) {
	return [
		addVectors(centerPoint, scaleVector(normal, outlineRadius)),
		addVectors(centerPoint, scaleVector(normal, outlineRadius * 0.99)),
		subtractVectors(centerPoint, scaleVector(normal, outlineRadius * 0.99)),
		subtractVectors(centerPoint, scaleVector(normal, outlineRadius)),
	];
}
function taperLength(taper, size, totalLength) {
	if (taper === false || taper === undefined) {
		return 0;
	} else if (taper === true) {
		return Math.max(size, totalLength);
	} else {
		return taper;
	}
}
function initialPressure(points, shouldSimulatePressure, size) {
	return points.slice(0, 10).reduce((previousPressure, strokePoint) => {
		let pressure = strokePoint.pressure;
		if (shouldSimulatePressure) {
			pressure = simulatePressure(previousPressure, strokePoint.distance, size);
		}
		return (previousPressure + pressure) / 2;
	}, points[0].pressure);
}
function strokeOutline(points, options = {}) {
	const {
		size = 16,
		smoothing = 0.5,
		thinning = 0.5,
		simulatePressure: shouldSimulatePressure = true,
		easing = (pressureFraction) => pressureFraction,
		start: startOptions = {},
		end: endOptions = {},
		last: isComplete = false,
	} = options;
	const {
		cap: capStart = true,
		easing: startEasing = (startFraction) =>
			startFraction * (2 - startFraction),
	} = startOptions;
	const {
		cap: capEnd = true,
		easing: endEasing = (endFraction) =>
			--endFraction * endFraction * endFraction + 1,
	} = endOptions;
	if (points.length === 0 || size <= 0) {
		return [];
	}
	const totalLength = points[points.length - 1].runningLength;
	const startTaper = taperLength(startOptions.taper, size, totalLength);
	const endTaper = taperLength(endOptions.taper, size, totalLength);
	const minimumDistanceSquared = (size * smoothing) ** 2;
	const leftEdge = [];
	const rightEdge = [];
	let previousPressure = initialPressure(points, shouldSimulatePressure, size);
	let outlineRadius = strokeRadius(
		size,
		thinning,
		points[points.length - 1].pressure,
		easing,
	);
	let initialRadius;
	let previousVector = points[0].vector;
	let previousLeftPoint = points[0].point;
	let previousRightPoint = previousLeftPoint;
	let leftPoint = previousLeftPoint;
	let rightPoint = previousRightPoint;
	let previousWasSharpCorner = false;
	for (let pointIndex = 0; pointIndex < points.length; pointIndex++) {
		let { pressure } = points[pointIndex];
		const {
			point: centerPoint,
			vector: direction,
			distance,
			runningLength,
		} = points[pointIndex];
		const isLastPoint = pointIndex === points.length - 1;
		if (!isLastPoint && totalLength - runningLength < 3) {
			continue;
		}
		if (thinning) {
			if (shouldSimulatePressure) {
				pressure = simulatePressure(previousPressure, distance, size);
			}
			outlineRadius = strokeRadius(size, thinning, pressure, easing);
		} else {
			outlineRadius = size / 2;
		}
		if (initialRadius === undefined) {
			initialRadius = outlineRadius;
		}
		const startTaperStrength =
			runningLength < startTaper ? startEasing(runningLength / startTaper) : 1;
		const endTaperStrength =
			totalLength - runningLength < endTaper
				? endEasing((totalLength - runningLength) / endTaper)
				: 1;
		outlineRadius = Math.max(
			0.01,
			outlineRadius * Math.min(startTaperStrength, endTaperStrength),
		);
		const nextVector = (
			isLastPoint ? points[pointIndex] : points[pointIndex + 1]
		).vector;
		const nextDirectionDot = isLastPoint
			? 1
			: dotProduct(direction, nextVector);
		const isPreviousSharpCorner =
			dotProduct(direction, previousVector) < 0 && !previousWasSharpCorner;
		const isNextSharpCorner = nextDirectionDot !== null && nextDirectionDot < 0;
		if (isPreviousSharpCorner || isNextSharpCorner) {
			perpendicularVectorInto(normalScratch, previousVector);
			scaleVectorInto(normalScratch, normalScratch, outlineRadius);
			for (
				let rotationFraction = 0;
				rotationFraction <= 1;
				rotationFraction += 0.07692307692307693
			) {
				subtractVectorsInto(leftScratch, centerPoint, normalScratch);
				rotatePointInto(
					leftScratch,
					leftScratch,
					centerPoint,
					almostPi * rotationFraction,
				);
				leftPoint = [leftScratch[0], leftScratch[1]];
				leftEdge.push(leftPoint);
				addVectorsInto(rightScratch, centerPoint, normalScratch);
				rotatePointInto(
					rightScratch,
					rightScratch,
					centerPoint,
					almostPi * -rotationFraction,
				);
				rightPoint = [rightScratch[0], rightScratch[1]];
				rightEdge.push(rightPoint);
			}
			previousLeftPoint = leftPoint;
			previousRightPoint = rightPoint;
			if (isNextSharpCorner) {
				previousWasSharpCorner = true;
			}
		} else {
			previousWasSharpCorner = false;
			if (isLastPoint) {
				perpendicularVectorInto(normalScratch, direction);
				scaleVectorInto(normalScratch, normalScratch, outlineRadius);
				leftEdge.push(subtractVectors(centerPoint, normalScratch));
				rightEdge.push(addVectors(centerPoint, normalScratch));
			} else {
				lerpVectorInto(normalScratch, nextVector, direction, nextDirectionDot);
				perpendicularVectorInto(normalScratch, normalScratch);
				scaleVectorInto(normalScratch, normalScratch, outlineRadius);
				subtractVectorsInto(leftScratch, centerPoint, normalScratch);
				leftPoint = [leftScratch[0], leftScratch[1]];
				if (
					pointIndex <= 1 ||
					squaredDistance(previousLeftPoint, leftPoint) > minimumDistanceSquared
				) {
					leftEdge.push(leftPoint);
					previousLeftPoint = leftPoint;
				}
				addVectorsInto(rightScratch, centerPoint, normalScratch);
				rightPoint = [rightScratch[0], rightScratch[1]];
				if (
					pointIndex <= 1 ||
					squaredDistance(previousRightPoint, rightPoint) >
						minimumDistanceSquared
				) {
					rightEdge.push(rightPoint);
					previousRightPoint = rightPoint;
				}
				previousPressure = pressure;
				previousVector = direction;
			}
		}
	}
	const startPoint = [points[0].point[0], points[0].point[1]];
	const endPoint =
		points.length > 1
			? [points[points.length - 1].point[0], points[points.length - 1].point[1]]
			: addVectors(points[0].point, [1, 1]);
	const startCapPoints = [];
	const endCapPoints = [];
	if (points.length === 1) {
		if ((!startTaper && !endTaper) || isComplete) {
			return dotOutline(startPoint, initialRadius || outlineRadius);
		}
	} else {
		if (!startTaper && (!endTaper || points.length !== 1)) {
			if (capStart) {
				startCapPoints.push(...roundStartCap(startPoint, rightEdge[0], 13));
			} else {
				startCapPoints.push(
					...flatStartCap(startPoint, leftEdge[0], rightEdge[0]),
				);
			}
		}
		const endNormal = perpendicularVector(
			negateVector(points[points.length - 1].vector),
		);
		if (endTaper || (startTaper && points.length === 1)) {
			endCapPoints.push(endPoint);
		} else if (capEnd) {
			endCapPoints.push(...roundEndCap(endPoint, endNormal, outlineRadius, 29));
		} else {
			endCapPoints.push(...flatEndCap(endPoint, endNormal, outlineRadius));
		}
	}
	return leftEdge.concat(endCapPoints, rightEdge.reverse(), startCapPoints);
}
var directionScratch = [0, 0];
function hasPressure(pressure) {
	return pressure != null && pressure >= 0;
}
function strokePoints(inputPoints, options = {}) {
	const { streamline = 0.5, size = 16, last: isComplete = false } = options;
	if (inputPoints.length === 0) {
		return [];
	}
	const interpolationFraction = 0.15 + (1 - streamline) * 0.85;
	let normalizedPoints = Array.isArray(inputPoints[0])
		? inputPoints
		: inputPoints.map(
				({ x: pointX, y: pointY, pressure = defaultPressure }) => [
					pointX,
					pointY,
					pressure,
				],
			);
	if (normalizedPoints.length === 2) {
		const endPoint = normalizedPoints[1];
		normalizedPoints = normalizedPoints.slice(0, -1);
		for (let subdivisionIndex = 1; subdivisionIndex < 5; subdivisionIndex++) {
			normalizedPoints.push(
				lerpVector(normalizedPoints[0], endPoint, subdivisionIndex / 4),
			);
		}
	}
	if (normalizedPoints.length === 1) {
		normalizedPoints = [
			...normalizedPoints,
			[
				...addVectors(normalizedPoints[0], unitOffset),
				...normalizedPoints[0].slice(2),
			],
		];
	}
	const points = [
		{
			point: [normalizedPoints[0][0], normalizedPoints[0][1]],
			pressure: hasPressure(normalizedPoints[0][2])
				? normalizedPoints[0][2]
				: 0.25,
			vector: [...unitOffset],
			distance: 0,
			runningLength: 0,
		},
	];
	let hasReachedMinimumLength = false;
	let runningLength = 0;
	let previousPoint = points[0];
	const lastPointIndex = normalizedPoints.length - 1;
	for (let pointIndex = 1; pointIndex < normalizedPoints.length; pointIndex++) {
		const point =
			isComplete && pointIndex === lastPointIndex
				? [normalizedPoints[pointIndex][0], normalizedPoints[pointIndex][1]]
				: lerpVector(
						previousPoint.point,
						normalizedPoints[pointIndex],
						interpolationFraction,
					);
		if (equalVectors(previousPoint.point, point)) {
			continue;
		}
		const distance = vectorDistance(point, previousPoint.point);
		runningLength += distance;
		if (pointIndex < lastPointIndex && !hasReachedMinimumLength) {
			if (runningLength < size) {
				continue;
			}
			hasReachedMinimumLength = true;
		}
		subtractVectorsInto(directionScratch, previousPoint.point, point);
		previousPoint = {
			point: point,
			pressure: hasPressure(normalizedPoints[pointIndex][2])
				? normalizedPoints[pointIndex][2]
				: defaultPressure,
			vector: normalizeVector(directionScratch),
			distance: distance,
			runningLength: runningLength,
		};
		points.push(previousPoint);
	}
	points[0].vector = points[1]?.vector || [0, 0];
	return points;
}
function freehandStroke(points, options = {}) {
	return strokeOutline(strokePoints(points, options), options);
}
export { freehandStroke };
