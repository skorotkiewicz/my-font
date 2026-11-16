import * as React from "react";
var extensionFor = (argument) => argument.split(`.`).pop()?.toLowerCase() ?? ``;
var fileTypeLabels = {
	pdf: `PDF document`,
	png: `PNG image`,
	jpg: `JPEG image`,
	jpeg: `JPEG image`,
	heic: `HEIC image`,
	svg: `SVG image`,
	zip: `Zip archive`,
	txt: `Text document`,
	ttc: `Font collection`,
};
var importErrors = {
	"not-ductus": {
		title: `This font wasn’t made with Ductus`,
		message: () =>
			`Ductus only opens its own fonts. They carry the strokes you drew, so every letter stays editable.`,
		about: () => `The font you chose`,
		action: `Choose another font`,
		showExpected: true,
	},
	legacy: {
		title: `This font doesn’t carry your strokes`,
		message: () =>
			`It was exported before Ductus kept strokes inside its fonts. Open Ductus in the browser you drew it in, and export it again.`,
		about: () => `Made with an earlier Ductus`,
		action: `Choose another font`,
	},
	website: {
		title: `Open the OTF instead`,
		message: ({ name: argument }) =>
			`${extensionFor(argument) === `woff` ? `WOFF` : `WOFF2`} files stay small for websites, so they leave your strokes out. The OTF from the same download has them.`,
		about: () => `Website font`,
		action: `Choose the OTF`,
	},
	damaged: {
		title: `This font is damaged`,
		message: () =>
			`Part of it is missing or was changed, so Ductus won’t open it. Try another copy, or export it again.`,
		about: () => `Its letters don’t match their checksum`,
		action: `Choose another copy`,
	},
	newer: {
		title: `Made with a newer Ductus`,
		message: () =>
			`This copy of Ductus is out of date. Reload the page to update it, then open the font again.`,
		about: () => `Needs a newer version to open`,
		action: `Reload Ductus`,
	},
	unreadable: {
		title: `Ductus couldn’t read that file`,
		message: () =>
			`It may have moved, or still be downloading. Choose it again from where it is now.`,
		about: () => `Couldn’t be read`,
		action: `Choose the font again`,
	},
	"not-font": {
		title: `That’s not a font`,
		message: ({ expected: argument }) => (
			<React.Fragment>
				{`Choose the OTF you downloaded from Export. It’s named like `}
				<span className="cursor-text wrap-anywhere select-text">
					{argument}
				</span>
				{`.`}
			</React.Fragment>
		),
		about: ({ name: argument, size: argument2 }) =>
			argument2 > 16777216
				? `${Math.round(argument2 / 1024 / 1024)} MB, too large to be a font`
				: (fileTypeLabels[extensionFor(argument)] ?? `Not a font file`),
		action: `Choose a font`,
	},
};
export { importErrors };
