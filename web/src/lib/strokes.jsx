import { freehandStroke } from "./freehand.jsx";
var penSize = 40;
var pressureEasing = (argument) => Math.sin((argument * Math.PI) / 2);
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
	easing: (argument) => argument * 0.65 + pressureEasing(argument) * 0.35,
	simulatePressure: false,
};
var pressureMultiplier = 1.25;
var optionsForInput = (argument) =>
	argument === `pen` ? penStrokeOptions : mouseStrokeOptions;
var pressureThresholds = {
	real: 0.68,
	simulated: 0.76,
};
var thresholdForInput = (argument) =>
	argument === `pen` ? pressureThresholds.real : pressureThresholds.simulated;
var cornerThreshold = 0.275;
var maxSegmentLength = 250;
var samplingStep = 0.2;
var pointDistance = (argument, argument2) =>
	Math.hypot(argument[0] - argument2[0], argument[1] - argument2[1]);
function cornerCosine(argument, argument2, argument3) {
	let [value, value2, value3, value4] = [
		argument2[0] - argument[0],
		argument2[1] - argument[1],
		argument3[0] - argument2[0],
		argument3[1] - argument2[1],
	];
	let value5 = Math.hypot(value, value2) * Math.hypot(value3, value4);
	if (value5) {
		return (value * value3 + value2 * value4) / value5;
	} else {
		return 1;
	}
}
function trimStrokeEnds(argument, argument2) {
	let value = argument2 / 3;
	let value2 = argument.length;
	let value3 = 1;
	let value4 = argument[0][2];
	while (
		value3 < value2 - 1 &&
		pointDistance(argument[value3], argument[0]) <= value
	) {
		value4 = Math.max(value4, argument[value3++][2]);
	}
	let value5 = value2 - 2;
	while (
		value5 >= value3 &&
		pointDistance(argument[value5], argument[value2 - 1]) <= value
	) {
		value5--;
	}
	let value6 = [
		[argument[0][0], argument[0][1], value4],
		...argument.slice(value3, value5 + 1),
	];
	if (value2 > 1) {
		value6.push(argument[value2 - 1]);
	}
	return {
		pts: value6,
		trimmedEnd: value5 < value2 - 2,
	};
}
function strokeTaper(argument, argument2, argument3) {
	let value = argument2.size;
	let value2 = argument.length;
	let value3 = (argument4) =>
		argument2.simulatePressure
			? 0.5
			: Math.min(1, argument[argument4][2] * pressureMultiplier);
	let value4 = 0;
	for (let value11 = 1; value11 < value2; value11++) {
		value4 += pointDistance(argument[value11 - 1], argument[value11]);
	}
	if (value4 < value) {
		return argument.map(() => argument3);
	}
	let value5 = (argument4, argument5) => {
		let value11 = Math.min(
			1,
			pointDistance(argument[argument5 - 1], argument[argument5]) / value,
		);
		let value12 = argument2.simulatePressure ? 1 - value11 : value3(argument5);
		return Math.min(
			1,
			argument4 + (value12 - argument4) * value11 * cornerThreshold,
		);
	};
	let value6 = value3(0);
	for (
		let value11 = 1, value12 = 0;
		value11 < value2 && value12 < value * 5;
		value11++
	) {
		value12 += pointDistance(argument[value11 - 1], argument[value11]);
		value6 = (value6 + value5(value6, value11)) / 2;
	}
	let value7 = [value6];
	for (let value11 = 1; value11 < value2; value11++) {
		value7.push((value6 = value5(value6, value11)));
	}
	let [value8, value9] = [0, 0];
	for (let value11 = 1; value11 < value2 && value9 < value * 5; value11++) {
		let value12 = pointDistance(argument[value11 - 1], argument[value11]);
		value8 += value7[value11] * value12;
		value9 += value12;
	}
	let value10 = value8 / value9;
	return value7.map((argument4, argument5) => {
		if (argument5) {
			value10 +=
				(argument4 - value10) *
				(1 -
					Math.exp(
						-pointDistance(argument[argument5 - 1], argument[argument5]) /
							maxSegmentLength,
					));
		}
		return Math.min(1, Math.max(0, argument3 + argument4 - value10));
	});
}
function resamplePoints(argument, argument2) {
	let value = argument.length;
	let value2 = [0];
	for (let value6 = 1; value6 < value; value6++) {
		value2.push(
			value2[value6 - 1] +
				pointDistance(argument[value6 - 1], argument[value6]),
		);
	}
	let value3 = [];
	let value4 = -1;
	let value5 = samplingStep;
	for (let value6 = 1, value7 = 0, value8 = 1; value6 < value - 1; value6++) {
		while (
			value7 + 1 < value6 &&
			value2[value6] - value2[value7 + 1] >= argument2
		) {
			value7++;
		}
		while (value8 < value - 1 && value2[value8] - value2[value6] < argument2) {
			value8++;
		}
		if (value2[value6] - value2[value7] < argument2) {
			continue;
		}
		if (value2[value8] - value2[value6] < argument2) {
			break;
		}
		let value9 = cornerCosine(
			argument[value7],
			argument[value6],
			argument[value8],
		);
		if (value9 < value5) {
			[value4, value5] = [value6, value9];
		}
		if (value4 >= 0 && value2[value6] - value2[value4] >= argument2) {
			value3.push(value4);
			[value4, value5] = [-1, samplingStep];
		}
	}
	if (value4 >= 0) {
		value3.push(value4);
	}
	return value3;
}
function strokePolygons(argument, argument2, argument3 = true) {
	if (!argument.length) {
		return [];
	}
	let value = optionsForInput(argument2);
	let value2 = value.size;
	let { pts: value3, trimmedEnd: value4 } = trimStrokeEnds(argument, value2);
	let value5 = strokeTaper(value3, value, thresholdForInput(argument2));
	let value6 = value3.length;
	let value7 =
		argument3 ||
		!value.simulatePressure ||
		value4 ||
		value6 < 2 ||
		pointDistance(value3[value6 - 2], value3[value6 - 1]) < value2;
	let value8 = [0, ...resamplePoints(value3, value2 / 2), value6 - 1];
	let value9 = [];
	for (let value10 = 1; value10 < value8.length; value10++) {
		let value11 = [];
		for (
			let value13 = value8[value10 - 1];
			value13 <= value8[value10];
			value13++
		) {
			value11.push([value3[value13][0], value3[value13][1], value5[value13]]);
		}
		let value12 = freehandStroke(value11, {
			...value,
			simulatePressure: false,
			last: value10 < value8.length - 1 || value7,
		});
		if (value12.length >= 3) {
			value9.push(value12);
		}
	}
	return value9;
}
var polygonCache = new WeakMap();
function polygonsForStroke(stroke) {
	let value = polygonCache.get(stroke);
	if (!value) {
		polygonCache.set(
			stroke,
			(value = strokePolygons(stroke.pts, stroke.input)),
		);
	}
	return value;
}
export { strokePolygons, polygonsForStroke };
