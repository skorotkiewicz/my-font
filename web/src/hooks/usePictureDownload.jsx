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
function usePictureDownload(picture) {
	let [supportsSharing] = React.useState(canSharePicture);
	let [preparedPicture, setPreparedPicture] = React.useState();
	let [sentPicture, setSentPicture] = React.useState();
	let fileName = pictureFileName(picture.name);
	React.useEffect(() => {
		let active = true;
		let preparationTimer = setTimeout(() => {
			pictureBlob(picture, fileName).then(
				(pictureFile) =>
					active &&
					setPreparedPicture({
						of: picture,
						file: pictureFile,
					}),
			);
		}, pictureSentDelay);
		return () => {
			active = false;
			clearTimeout(preparationTimer);
		};
	}, [picture, fileName]);
	let sendPicture = async () => {
		let pictureFile =
			preparedPicture?.of === picture
				? preparedPicture.file
				: await pictureBlob(picture, fileName);
		if (supportsSharing) {
			try {
				await navigator.share({
					files: [pictureFile],
				});
				return;
			} catch (shareError) {
				if (
					shareError instanceof DOMException &&
					shareError.name === `AbortError`
				) {
					return;
				}
			}
		}
		downloadBlob(pictureFile, pictureFile.name);
		setSentPicture(picture);
	};
	return {
		shares: supportsSharing,
		send: () => void sendPicture(),
		sent: sentPicture === picture,
		empty: !picture.text.trim(),
	};
}
export { usePictureDownload };
