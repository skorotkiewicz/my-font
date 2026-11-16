import * as React from "react";
import {
	buildProjectFont,
	convertWoff2,
	packProjectFont,
} from "../lib/fontClient.jsx";
var downloadFormats = {
	otf: {
		label: `Download OTF`,
		use: `Install it, or reopen it here to edit`,
	},
	woff2: {
		label: `Download WOFF2`,
		use: `Use it on a website`,
	},
};
var formatBytes = (argument) =>
	`${Math.max(1, Math.round(argument / 1024))} KB`;
function downloadBlob(argument, argument2) {
	let value = URL.createObjectURL(argument);
	Object.assign(document.createElement(`a`), {
		href: value,
		download: argument2,
	}).click();
	setTimeout(() => URL.revokeObjectURL(value), 10000);
}
var downloadFont = (argument, argument2, argument3) =>
	downloadBlob(
		new Blob([argument], {
			type: `font/${argument3}`,
		}),
		argument2,
	);
function useAsyncBuffer(argument, argument2) {
	let [value, value2] = React.useState();
	let value3 = React.useEffectEvent(argument2);
	React.useEffect(() => {
		if (!argument) {
			return;
		}
		let value4 = true;
		value3(argument).then(
			({ buffer: argument3 }) =>
				value4 &&
				value2({
					from: argument,
					buffer: argument3,
				}),
		);
		return () => {
			value4 = false;
		};
	}, [argument]);
	return {
		buffer: value?.buffer,
		fresh: value !== undefined && value.from === argument,
	};
}
var freshBuffer = ({ buffer: argument, fresh: argument2 }) =>
	argument2 ? argument : undefined;
function useFontDownloads(argument, argument2, argument3) {
	let value = argument3?.of === argument ? argument3.otf : undefined;
	let value2 = useAsyncBuffer(value, (argument4) =>
		packProjectFont(argument4, argument),
	);
	let value3 = useAsyncBuffer(value, convertWoff2);
	return {
		otf: value2.buffer,
		woff2: value3.buffer,
		get: async (argument4) => {
			let value4 = freshBuffer(argument4 === `otf` ? value2 : value3);
			if (value4) {
				return value4;
			}
			let value5 = await buildProjectFont(argument, argument2);
			return (
				await (argument4 === `otf`
					? packProjectFont(value5.buffer, argument)
					: convertWoff2(value5.buffer))
			).buffer;
		},
	};
}
export {
	downloadFormats,
	formatBytes,
	downloadBlob,
	downloadFont,
	useFontDownloads,
};
