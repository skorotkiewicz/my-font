import * as React from "react";
import { pictureFileName } from "../lib/fontNames.jsx";
import { downloadBlob } from "./useFontDownloads.jsx";
import { pictureBlob } from "../lib/picture.jsx";
var pictureSentDelay = 250;
var canSharePicture = () =>
	typeof navigator.canShare == `function` &&
	matchMedia(`(pointer: coarse)`).matches &&
	navigator.canShare({
		files: [
			new File([``], `picture.png`, {
				type: `image/png`,
			}),
		],
	});
function usePictureDownload(argument) {
	let [value] = React.useState(canSharePicture);
	let [value2, value3] = React.useState();
	let [value4, value5] = React.useState();
	let value6 = pictureFileName(argument.name);
	React.useEffect(() => {
		let value8 = true;
		let value9 = setTimeout(() => {
			pictureBlob(argument, value6).then(
				(argument2) =>
					value8 &&
					value3({
						of: argument,
						file: argument2,
					}),
			);
		}, pictureSentDelay);
		return () => {
			value8 = false;
			clearTimeout(value9);
		};
	}, [argument, value6]);
	let value7 = async () => {
		let value8 =
			value2?.of === argument
				? value2.file
				: await pictureBlob(argument, value6);
		if (value) {
			try {
				await navigator.share({
					files: [value8],
				});
				return;
			} catch (value9) {
				if (value9 instanceof DOMException && value9.name === `AbortError`) {
					return;
				}
			}
		}
		downloadBlob(value8, value8.name);
		value5(argument);
	};
	return {
		shares: value,
		send: () => void value7(),
		sent: value4 === argument,
		empty: !argument.text.trim(),
	};
}
export { usePictureDownload };
