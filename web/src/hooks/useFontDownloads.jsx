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
var formatBytes = (byteLength) =>
	`${Math.max(1, Math.round(byteLength / 1024))} KB`;
function downloadBlob(blob, fileName) {
	let downloadUrl = URL.createObjectURL(blob);
	Object.assign(document.createElement(`a`), {
		href: downloadUrl,
		download: fileName,
	}).click();
	setTimeout(() => URL.revokeObjectURL(downloadUrl), 10000);
}
var downloadFont = (fontBytes, fileName, format) =>
	downloadBlob(
		new Blob([fontBytes], {
			type: `font/${format}`,
		}),
		fileName,
	);
function useAsyncBuffer(sourceBuffer, transformBuffer) {
	let [bufferState, setBufferState] = React.useState();
	let runTransform = React.useEffectEvent(transformBuffer);
	React.useEffect(() => {
		if (!sourceBuffer) {
			return;
		}
		let active = true;
		runTransform(sourceBuffer).then(
			({ buffer: transformedBuffer }) =>
				active &&
				setBufferState({
					from: sourceBuffer,
					buffer: transformedBuffer,
				}),
		);
		return () => {
			active = false;
		};
	}, [sourceBuffer]);
	return {
		buffer: bufferState?.buffer,
		fresh: bufferState !== undefined && bufferState.from === sourceBuffer,
	};
}
var freshBuffer = ({ buffer, fresh }) => (fresh ? buffer : undefined);
function useFontDownloads(project, alignment, liveFont) {
	let currentOtf = liveFont?.of === project ? liveFont.otf : undefined;
	let packedOtf = useAsyncBuffer(currentOtf, (otfBuffer) =>
		packProjectFont(otfBuffer, project),
	);
	let compressedWoff2 = useAsyncBuffer(currentOtf, convertWoff2);
	return {
		otf: packedOtf.buffer,
		woff2: compressedWoff2.buffer,
		get: async (format) => {
			let cachedBuffer = freshBuffer(
				format === `otf` ? packedOtf : compressedWoff2,
			);
			if (cachedBuffer) {
				return cachedBuffer;
			}
			let builtFont = await buildProjectFont(project, alignment);
			return (
				await (format === `otf`
					? packProjectFont(builtFont.buffer, project)
					: convertWoff2(builtFont.buffer))
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
