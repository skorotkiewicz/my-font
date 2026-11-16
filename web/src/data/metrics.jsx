var descender = -200;
var stageHeight = 1200;
var stageWidth = stageHeight * 2;
var fontYToStage = (fontY) => 920 - fontY;
var stageYFor = (fontY) => 920 - fontY;
var guideLines = [
	{
		id: `cap`,
		label: `Cap height`,
		y: stageYFor(700),
	},
	{
		id: `x`,
		label: `x-height`,
		y: stageYFor(500),
	},
	{
		id: `baseline`,
		label: `Baseline`,
		y: stageYFor(0),
	},
	{
		id: `descender`,
		label: `Descender`,
		y: stageYFor(descender),
	},
];
export {
	descender,
	stageHeight,
	stageWidth,
	fontYToStage,
	stageYFor,
	guideLines,
};
