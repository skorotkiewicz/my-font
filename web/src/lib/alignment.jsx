import { polygonBounds, clamp, median } from "./geometry.jsx";
import { polygonsForStroke } from "./strokes.jsx";
import { fontYToStage } from "../data/metrics.jsx";
import { writtenDrawings } from "./project.jsx";
var defaultPlacement = {
	scale: 1,
	dy: 0,
};
var roundHundredths = (number) => Math.round(number * 100) / 100;
var placementTransform = (
	{ scale, dy: verticalOffset },
	horizontalOffset = 0,
) =>
	`translate(${roundHundredths(horizontalOffset)} ${roundHundredths((1 - scale) * 920 - verticalOffset)}) scale(${roundHundredths(scale)})`;
var defaultMetrics = {
	xHeight: 500,
	ascender: 700,
	capHeight: 700,
	digitHeight: 700,
};
var minimumInkScale = 0.85;
var verticalTolerance = 130;
var baselineTolerance = 70;
var minimumInkHeight = 50;
var metricSampleCount = 4;
var characterRules = new Map();
var addCharacterRules = (characters, rule) =>
	[...characters].forEach((character) =>
		characterRules.set(character.codePointAt(0), rule),
	);
addCharacterRules(`acemnorsuvwxz`, {
	top: `xHeight`,
	stands: true,
});
addCharacterRules(`i`, {
	top: `xHeight`,
	stands: true,
	stem: true,
});
addCharacterRules(`bdfhkl`, {
	top: `ascender`,
	stands: true,
});
addCharacterRules(`t`, {
	stands: true,
});
addCharacterRules(`gpqy`, {
	top: `xHeight`,
});
addCharacterRules(`j`, {
	top: `xHeight`,
	stem: true,
	topReach: minimumInkHeight,
});
addCharacterRules(`ABCDEFGHIKLMNOPRSTUVWXYZ`, {
	top: `capHeight`,
	stands: true,
});
addCharacterRules(`JQ`, {
	top: `capHeight`,
});
addCharacterRules(`0123456789`, {
	top: `digitHeight`,
	stands: true,
});
function strokeInkBounds(stroke) {
	let bounds = polygonBounds(polygonsForStroke(stroke));
	return (
		bounds && {
			xMin: bounds.xMin,
			xMax: bounds.xMax,
			yMin: fontYToStage(bounds.yMax),
			yMax: fontYToStage(bounds.yMin),
		}
	);
}
var drawingBoundsCache = new WeakMap();
function drawingBounds(codePoint, drawing) {
	let cachedBounds = drawingBoundsCache.get(drawing);
	if (cachedBounds !== undefined) {
		return cachedBounds;
	}
	let strokeBounds = drawing.strokes.flatMap(
		(stroke) => strokeInkBounds(stroke) ?? [],
	);
	if (strokeBounds.length) {
		let combinedBounds = strokeBounds.reduce((bounds, bounds2) => ({
			xMin: Math.min(bounds.xMin, bounds2.xMin),
			xMax: Math.max(bounds.xMax, bounds2.xMax),
			yMin: Math.min(bounds.yMin, bounds2.yMin),
			yMax: Math.max(bounds.yMax, bounds2.yMax),
		}));
		let boundsHeight = (candidateBounds) =>
			candidateBounds.yMax - candidateBounds.yMin;
		let bodyBounds = characterRules.get(codePoint)?.stem
			? strokeBounds.reduce((tallestBounds, nextBounds) =>
					boundsHeight(nextBounds) > boundsHeight(tallestBounds)
						? nextBounds
						: tallestBounds,
				)
			: combinedBounds;
		cachedBounds = {
			ink: combinedBounds,
			body: {
				yMin: bodyBounds.yMin,
				yMax: bodyBounds.yMax,
			},
		};
	} else {
		cachedBounds = null;
	}
	drawingBoundsCache.set(drawing, cachedBounds);
	return cachedBounds;
}
var inkBounds = (codePoint, drawing) =>
	drawingBounds(codePoint, drawing)?.ink ?? null;
var blendMedian = (samples, fallback) =>
	samples.length
		? fallback +
			(median(samples) - fallback) *
				Math.min(1, samples.length / metricSampleCount)
		: fallback;
function placementFor(rule, bodyBounds, baseline, metrics) {
	if (!rule || bodyBounds.yMax - bodyBounds.yMin < 1) {
		return defaultPlacement;
	}
	let topOffset = rule.top
		? baseline + metrics[rule.top] - bodyBounds.yMax
		: NaN;
	let baselineOffset = rule.stands ? baseline - bodyBounds.yMin : NaN;
	let topWithinTolerance =
		Math.abs(topOffset) <= (rule.topReach ?? verticalTolerance);
	let baselineWithinTolerance =
		baselineOffset <= baselineTolerance && baselineOffset >= -130;
	if (topWithinTolerance && baselineWithinTolerance) {
		let adjustedTop = bodyBounds.yMax + topOffset * minimumInkScale;
		let adjustedBottom = bodyBounds.yMin + baselineOffset * minimumInkScale;
		let inkScale = clamp(
			(adjustedTop - adjustedBottom) / (bodyBounds.yMax - bodyBounds.yMin),
			0.88,
			1.12,
		);
		return {
			scale: inkScale,
			dy: adjustedBottom - bodyBounds.yMin * inkScale,
		};
	}
	if (baselineWithinTolerance) {
		return {
			scale: 1,
			dy: baselineOffset * minimumInkScale,
		};
	} else if (topWithinTolerance) {
		return {
			scale: 1,
			dy: topOffset * minimumInkScale,
		};
	} else {
		return defaultPlacement;
	}
}
function applyDrawingFix(
	placement,
	drawingInk,
	{ scale: fixScale, dy: fixVerticalOffset },
) {
	if (fixScale === 1 && fixVerticalOffset === 0) {
		return placement;
	}
	let transformedCenterY =
		(placement.scale * (drawingInk.yMin + drawingInk.yMax)) / 2 + placement.dy;
	return {
		scale: placement.scale * fixScale,
		dy:
			placement.dy * fixScale +
			transformedCenterY * (1 - fixScale) -
			fixVerticalOffset,
	};
}
function alignDrawings(drawings, tidy) {
	let boundedDrawings = drawings.flatMap(({ cp: codePoint, drawing }) => {
		let bounds = drawingBounds(codePoint, drawing);
		if (bounds) {
			return [
				{
					cp: codePoint,
					drawing: drawing,
					rule: characterRules.get(codePoint),
					...bounds,
				},
			];
		} else {
			return [];
		}
	});
	let placements = new Map();
	if (!tidy) {
		for (let unalignedDrawing of boundedDrawings) {
			placements.set(
				unalignedDrawing.cp,
				applyDrawingFix(
					defaultPlacement,
					unalignedDrawing.ink,
					unalignedDrawing.drawing.fix,
				),
			);
		}
		return {
			place: placements,
			lines: defaultMetrics,
		};
	}
	let baseline = blendMedian(
		boundedDrawings.flatMap((baselineSample) =>
			baselineSample.rule?.stands ? [baselineSample.body.yMin] : [],
		),
		0,
	);
	let metricHeight = (metricName) =>
		blendMedian(
			boundedDrawings.flatMap((heightSample) =>
				heightSample.rule?.top === metricName
					? [heightSample.body.yMax - baseline]
					: [],
			),
			defaultMetrics[metricName],
		);
	let metrics = {
		xHeight: metricHeight(`xHeight`),
		ascender: metricHeight(`ascender`),
		capHeight: metricHeight(`capHeight`),
		digitHeight: metricHeight(`digitHeight`),
	};
	for (let boundedDrawing of boundedDrawings) {
		let placement = placementFor(
			boundedDrawing.rule,
			boundedDrawing.body,
			baseline,
			metrics,
		);
		placements.set(
			boundedDrawing.cp,
			applyDrawingFix(
				{
					scale: placement.scale,
					dy: placement.dy - baseline,
				},
				boundedDrawing.ink,
				boundedDrawing.drawing.fix,
			),
		);
	}
	return {
		place: placements,
		lines: metrics,
	};
}
var alignProject = (project) =>
	alignDrawings(writtenDrawings(project), project.settings.tidy);
export { defaultPlacement, placementTransform, inkBounds, alignProject };
