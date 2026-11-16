import * as React from "react";
import * as tp from "react-dom";
import { DownloadIcon, ShareIcon, CheckIcon, FolderIcon } from "../icons.jsx";
import {
	defaultFamilyName,
	familyName,
	fontFileName,
} from "../../lib/fontNames.jsx";
import { useWrite } from "../../state/WriteProvider.jsx";
import { useTextStyle } from "../LiveText.jsx";
import { ToolButton, OutlineButton } from "../ui/Buttons.jsx";
import {
	downloadFormats,
	formatBytes,
	downloadFont,
	useFontDownloads,
} from "../../hooks/useFontDownloads.jsx";
import { PictureCanvas } from "./PictureCanvas.jsx";
var downloadButtonStyles = {
	otf: {
		surface: `bg-paper text-carbon enabled:hover:bg-paper/92`,
		small: `text-carbon`,
	},
	woff2: {
		surface: `bg-paper/14 text-paper enabled:hover:bg-paper/20 enabled:active:bg-paper/24`,
		small: `text-paper/90`,
	},
};
function FontDownloadButton({
	kind: format,
	buffer,
	done: isDone,
	onDownload,
}) {
	const { label: formatLabel, use: formatUse } = downloadFormats[format];
	const { surface: surfaceClass, small: captionClass } =
		downloadButtonStyles[format];
	return (
		<button
			type="button"
			onClick={onDownload}
			disabled={!buffer}
			className={`pressable flex h-16 items-center gap-3.5 rounded-[1.25rem] px-4.5 text-left disabled:opacity-60 ${surfaceClass}`}
		>
			<span
				className={isDone ? `icon-in flex shrink-0` : `flex shrink-0`}
				key={String(isDone)}
			>
				{isDone ? <CheckIcon /> : <DownloadIcon />}
			</span>
			<span className="flex min-w-0 flex-1 flex-col gap-px">
				<span className="text-base leading-5.5 font-semibold">
					{formatLabel}
				</span>
				<span className={`truncate text-caption ${captionClass}`}>
					{isDone ? `Sent to your downloads` : formatUse}
				</span>
			</span>
			<span className={`text-caption tabular-nums ${captionClass}`}>
				{buffer ? formatBytes(buffer.byteLength) : `…`}
			</span>
		</button>
	);
}
function ProjectActions() {
	const { state, actions } = useWrite();
	const [isConfirmingErase, setIsConfirmingErase] = React.useState(false);
	const startOverButtonRef = React.useRef(null);
	const cancelErase = () => {
		tp.flushSync(() => setIsConfirmingErase(false));
		startOverButtonRef.current?.focus();
	};
	const writtenCount = state.drawn.size;
	if (isConfirmingErase) {
		return (
			<fieldset
				aria-labelledby="start-over-warning"
				className="m-0 flex min-w-0 items-center gap-2 border-0 px-5 pt-4 lg:px-6"
			>
				<span
					id="start-over-warning"
					className="min-w-0 flex-1 text-caption text-paper/90"
				>{`Can’t be undone`}</span>
				<button
					type="button"
					onClick={actions.startOver}
					className="pressable h-11 shrink-0 rounded-full bg-paper px-4 text-[0.9375rem] leading-5 font-semibold text-danger hover:bg-paper/92"
				>
					{`Erase all `}
					{writtenCount}
				</button>
				<OutlineButton
					autoFocus={true}
					onClick={cancelErase}
				>{`Keep them`}</OutlineButton>
			</fieldset>
		);
	} else {
		return (
			<div className="flex items-center justify-between gap-2 px-5 pt-4 lg:px-6">
				<OutlineButton onClick={actions.chooseFont} className="pl-3.5">
					<FolderIcon className="size-5.5 shrink-0 lg:size-5" />
					{`Open font…`}
				</OutlineButton>
				<OutlineButton
					ref={startOverButtonRef}
					onClick={() => setIsConfirmingErase(true)}
				>{`Start over`}</OutlineButton>
			</div>
		);
	}
}
function FontNameInput() {
	const { state, actions } = useWrite();
	const descriptionId = React.useId();
	const { name: fontName } = state.project;
	return (
		<label className="flex flex-col gap-2 px-5 pb-2 lg:px-6">
			<span className="flex items-baseline justify-between gap-3 text-caption font-medium text-paper/90">
				{`Font name`}
				<span
					id={descriptionId}
					className="font-normal"
				>{`How font menus will list it`}</span>
			</span>
			<input
				type="text"
				name="font-name"
				value={fontName}
				onChange={(event) => actions.rename(event.target.value)}
				onBlur={() => actions.rename(familyName(fontName))}
				onKeyDown={(event) =>
					event.key === `Enter` && event.currentTarget.blur()
				}
				maxLength={31}
				placeholder={defaultFamilyName}
				aria-describedby={descriptionId}
				autoComplete="off"
				autoCorrect="off"
				autoCapitalize="words"
				spellCheck={false}
				enterKeyHint="done"
				className="h-12 w-full rounded-2xl bg-paper/8 px-4 text-base font-medium text-paper transition-colors duration-150 placeholder:text-placeholder hover:bg-paper/12 focus:bg-paper/12"
			/>
		</label>
	);
}
function PictureSummary({
	input: pictureInput,
	picture: pictureDownload,
	focusStyle,
}) {
	const { actions } = useWrite();
	const styleButtonRef = React.useRef(null);
	const openPictureStyle = () => actions.openSheet(`picture`);
	React.useEffect(() => {
		if (focusStyle) {
			styleButtonRef.current?.focus({
				preventScroll: true,
			});
		}
	}, [focusStyle]);
	return (
		<div className="flex gap-4 px-5 pb-5 lg:px-6">
			<button
				type="button"
				onClick={openPictureStyle}
				aria-label="Change the picture\u2019s colour and paper"
				className="pressable size-28 shrink-0 rounded-2xl"
			>
				<PictureCanvas
					input={pictureInput}
					pixels={540}
					className={`size-full rounded-[inherit] ${pictureInput.style.paper === `carbon` ? `outline-1 -outline-offset-1 outline-paper/20` : ``}`}
				/>
			</button>
			<div className="flex min-w-0 flex-1 flex-col items-start justify-between gap-2 py-0.5">
				<p className="flex flex-col gap-0.5">
					<span className="text-[0.9375rem] leading-5 font-semibold">{`Send it as a picture`}</span>
					<span
						role="status"
						className="text-caption text-pretty text-paper/90"
					>
						{pictureDownload.sent
							? `Sent to your downloads`
							: `What you typed, in your handwriting`}
					</span>
				</p>
				<div className="flex flex-wrap gap-2">
					<ToolButton
						onClick={pictureDownload.send}
						disabled={pictureDownload.empty}
						className="pl-3.5"
					>
						<span
							className={
								pictureDownload.sent ? `icon-in flex shrink-0` : `flex shrink-0`
							}
							key={String(pictureDownload.sent)}
						>
							{pictureDownload.sent ? (
								<CheckIcon />
							) : pictureDownload.shares ? (
								<ShareIcon />
							) : (
								<DownloadIcon />
							)}
						</span>
						{pictureDownload.shares ? `Share` : `Save picture`}
					</ToolButton>
					<OutlineButton
						ref={styleButtonRef}
						onClick={openPictureStyle}
						aria-haspopup="dialog"
					>{`Style…`}</OutlineButton>
				</div>
			</div>
		</div>
	);
}
function FontExportView({
	text,
	onText,
	input: pictureInput,
	picture: pictureDownload,
	focusStyle,
}) {
	const { state } = useWrite();
	const { project } = state;
	const fontFamily = useTextStyle();
	const [completedDownload, setCompletedDownload] = React.useState();
	const fontDownloads = useFontDownloads(project, state.alignment, state.font);
	const downloadInProgressRef = React.useRef(false);
	const sendFont = async (format) => {
		if (!downloadInProgressRef.current) {
			downloadInProgressRef.current = true;
			try {
				downloadFont(
					await fontDownloads.get(format),
					fontFileName(project.name, format),
					format,
				);
				setCompletedDownload({
					kind: format,
					of: project,
				});
			} finally {
				downloadInProgressRef.current = false;
			}
		}
	};
	const isDownloaded = (format) =>
		completedDownload?.kind === format && completedDownload.of === project;
	return (
		<div className="flex flex-col pb-1">
			<label className="flex flex-col gap-2.5 pt-1 pb-3.5">
				<span className="flex items-baseline justify-between gap-3 px-5 text-caption font-medium text-paper/90 lg:px-6">
					{`Try your font`}
					<span aria-hidden={true} className="font-normal">
						<span className="pointer-fine:hidden">{`Tap`}</span>
						<span className="hidden pointer-fine:inline">{`Click`}</span>
						{` to type your own`}
					</span>
				</span>
				<span className="scroll-edges block bg-paper/6 [--edge-size:1.25rem] [--surface:var(--strip-surface)]">
					<textarea
						value={text}
						onChange={(event) => onText(event.target.value)}
						spellCheck={false}
						autoCapitalize="none"
						rows={3}
						className="edge-scroller ruled block w-full resize-none bg-transparent px-5 py-1.5 text-[2.5rem] leading-[1.2] text-hand caret-paper -outline-offset-2 placeholder:text-paper/72 lg:px-6"
						style={{
							fontFamily: fontFamily,
						}}
						placeholder="Type something"
					/>
				</span>
			</label>
			<PictureSummary
				input={pictureInput}
				picture={pictureDownload}
				focusStyle={focusStyle}
			/>
			<FontNameInput />
			<div className="flex flex-col gap-2 px-5 lg:px-6">
				<FontDownloadButton
					kind="otf"
					buffer={fontDownloads.otf}
					done={isDownloaded(`otf`)}
					onDownload={() => void sendFont(`otf`)}
				/>
				<FontDownloadButton
					kind="woff2"
					buffer={fontDownloads.woff2}
					done={isDownloaded(`woff2`)}
					onDownload={() => void sendFont(`woff2`)}
				/>
			</div>
			<p className="hidden px-5 pt-2.5 text-caption text-pretty text-paper/90 pointer-fine:block lg:px-6">{`To install your font, open the OTF and choose Install.`}</p>
			<ProjectActions />
		</div>
	);
}
export { FontExportView };
