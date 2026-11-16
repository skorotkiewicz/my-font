var paperStyles = [
	{
		id: `carbon`,
		name: `Carbon`,
		ground: `#2b2fe0`,
		hand: `#ffdf3d`,
		type: `#ffffff`,
		rule: 0.22,
	},
	{
		id: `canary`,
		name: `Canary`,
		ground: `#ffdf3d`,
		hand: `#2b2fe0`,
		type: `#111111`,
		rule: 0.16,
	},
	{
		id: `paper`,
		name: `Paper`,
		ground: `#ffffff`,
		hand: `#2b2fe0`,
		type: `#111111`,
		rule: 0.14,
	},
	{
		id: `night`,
		name: `Night`,
		ground: `#111111`,
		hand: `#ffffff`,
		type: `#ffffff`,
		rule: 0.24,
	},
	{
		id: `blush`,
		name: `Blush`,
		ground: `#ffc9dc`,
		hand: `#2b2fe0`,
		type: `#111111`,
		rule: 0.16,
	},
	{
		id: `evergreen`,
		name: `Evergreen`,
		ground: `#0b5d3b`,
		hand: `#ffc9dc`,
		type: `#ffffff`,
		rule: 0.22,
	},
];
var pictureOpacity = 0.55;
var rulingStyles = [
	{
		id: `lines`,
		name: `Lines`,
	},
	{
		id: `grid`,
		name: `Grid`,
	},
	{
		id: `dots`,
		name: `Dots`,
	},
	{
		id: `plain`,
		name: `Plain`,
	},
];
var defaultPictureStyle = {
	paper: `carbon`,
	ruling: `lines`,
};
var paperStyleFor = (paperId) =>
	paperStyles.find((paperStyle) => paperStyle.id === paperId) ?? paperStyles[0];
function normalizePictureStyle(style) {
	const { paper: paperId, ruling: rulingId } =
		typeof style === `object` && style ? style : {};
	return {
		paper:
			paperStyles.find((paperStyle) => paperStyle.id === paperId)?.id ??
			defaultPictureStyle.paper,
		ruling:
			rulingStyles.find((rulingStyle) => rulingStyle.id === rulingId)?.id ??
			defaultPictureStyle.ruling,
	};
}
export {
	paperStyles,
	pictureOpacity,
	rulingStyles,
	defaultPictureStyle,
	paperStyleFor,
	normalizePictureStyle,
};
