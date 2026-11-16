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
	kind: argument,
	buffer: argument2,
	done: argument3,
	onDownload: argument4,
}) {
	let { label: value, use: value2 } = downloadFormats[argument];
	let { surface: value3, small: value4 } = downloadButtonStyles[argument];
	return (
		<button
			type="button"
			onClick={argument4}
			disabled={!argument2}
			className={`pressable flex h-16 items-center gap-3.5 rounded-[1.25rem] px-4.5 text-left disabled:opacity-60 ${value3}`}
		>
			<span
				className={argument3 ? `icon-in flex shrink-0` : `flex shrink-0`}
				key={String(argument3)}
			>
				{argument3 ? <CheckIcon /> : <DownloadIcon />}
			</span>
			<span className="flex min-w-0 flex-1 flex-col gap-px">
				<span className="text-base leading-5.5 font-semibold">{value}</span>
				<span className={`truncate text-caption ${value4}`}>
					{argument3 ? `Sent to your downloads` : value2}
				</span>
			</span>
			<span className={`text-caption tabular-nums ${value4}`}>
				{argument2 ? formatBytes(argument2.byteLength) : `…`}
			</span>
		</button>
	);
}
function ProjectActions() {
	let { state: value, actions: value2 } = useWrite();
	let [value3, value4] = React.useState(false);
	let value5 = React.useRef(null);
	let value6 = () => {
		(0, tp.flushSync)(() => value4(false));
		value5.current?.focus();
	};
	let value7 = value.drawn.size;
	if (value3) {
		return (
			<div
				role="group"
				aria-labelledby="start-over-warning"
				className="flex items-center gap-2 px-5 pt-4 lg:px-6"
			>
				<span
					id="start-over-warning"
					className="min-w-0 flex-1 text-caption text-paper/90"
				>{`Can’t be undone`}</span>
				<button
					type="button"
					onClick={value2.startOver}
					className="pressable h-11 shrink-0 rounded-full bg-paper px-4 text-[0.9375rem] leading-5 font-semibold text-danger hover:bg-paper/92"
				>
					{`Erase all `}
					{value7}
				</button>
				<OutlineButton
					autoFocus={true}
					onClick={value6}
				>{`Keep them`}</OutlineButton>
			</div>
		);
	} else {
		return (
			<div className="flex items-center justify-between gap-2 px-5 pt-4 lg:px-6">
				<OutlineButton onClick={value2.chooseFont} className="pl-3.5">
					<FolderIcon className="size-5.5 shrink-0 lg:size-5" />
					{`Open font…`}
				</OutlineButton>
				<OutlineButton
					ref={value5}
					onClick={() => value4(true)}
				>{`Start over`}</OutlineButton>
			</div>
		);
	}
}
function FontNameInput() {
	let { state: value, actions: value2 } = useWrite();
	let value3 = React.useId();
	let { name: value4 } = value.project;
	return (
		<label className="flex flex-col gap-2 px-5 pb-2 lg:px-6">
			<span className="flex items-baseline justify-between gap-3 text-caption font-medium text-paper/90">
				{`Font name`}
				<span
					id={value3}
					className="font-normal"
				>{`How font menus will list it`}</span>
			</span>
			<input
				type="text"
				name="font-name"
				value={value4}
				onChange={(event) => value2.rename(event.target.value)}
				onBlur={() => value2.rename(familyName(value4))}
				onKeyDown={(event) =>
					event.key === `Enter` && event.currentTarget.blur()
				}
				maxLength={31}
				placeholder={defaultFamilyName}
				aria-describedby={value3}
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
	input: argument,
	picture: argument2,
	focusStyle: argument3,
}) {
	let { actions: value } = useWrite();
	let value2 = React.useRef(null);
	let value3 = () => value.openSheet(`picture`);
	React.useEffect(() => {
		if (argument3) {
			value2.current?.focus({
				preventScroll: true,
			});
		}
	}, [argument3]);
	return (
		<div className="flex gap-4 px-5 pb-5 lg:px-6">
			<button
				type="button"
				onClick={value3}
				aria-label="Change the picture\u2019s colour and paper"
				className="pressable size-28 shrink-0 rounded-2xl"
			>
				<PictureCanvas
					input={argument}
					pixels={540}
					className={`size-full rounded-[inherit] ${argument.style.paper === `carbon` ? `outline-1 -outline-offset-1 outline-paper/20` : ``}`}
				/>
			</button>
			<div className="flex min-w-0 flex-1 flex-col items-start justify-between gap-2 py-0.5">
				<p className="flex flex-col gap-0.5">
					<span className="text-[0.9375rem] leading-5 font-semibold">{`Send it as a picture`}</span>
					<span
						role="status"
						className="text-caption text-pretty text-paper/90"
					>
						{argument2.sent
							? `Sent to your downloads`
							: `What you typed, in your handwriting`}
					</span>
				</p>
				<div className="flex flex-wrap gap-2">
					<ToolButton
						onClick={argument2.send}
						disabled={argument2.empty}
						className="pl-3.5"
					>
						<span
							className={
								argument2.sent ? `icon-in flex shrink-0` : `flex shrink-0`
							}
							key={String(argument2.sent)}
						>
							{argument2.sent ? (
								<CheckIcon />
							) : argument2.shares ? (
								<ShareIcon />
							) : (
								<DownloadIcon />
							)}
						</span>
						{argument2.shares ? `Share` : `Save picture`}
					</ToolButton>
					<OutlineButton
						ref={value2}
						onClick={value3}
						aria-haspopup="dialog"
					>{`Style…`}</OutlineButton>
				</div>
			</div>
		</div>
	);
}
function FontExportView({
	text: argument,
	onText: argument2,
	input: argument3,
	picture: argument4,
	focusStyle: argument5,
}) {
	let { state: value } = useWrite();
	let { project: value2 } = value;
	let value3 = useTextStyle();
	let [value4, value5] = React.useState();
	let value6 = useFontDownloads(value2, value.alignment, value.font);
	let value7 = React.useRef(false);
	let value8 = async (argument6) => {
		if (!value7.current) {
			value7.current = true;
			try {
				downloadFont(
					await value6.get(argument6),
					fontFileName(value2.name, argument6),
					argument6,
				);
				value5({
					kind: argument6,
					of: value2,
				});
			} finally {
				value7.current = false;
			}
		}
	};
	let value9 = (argument6) =>
		value4?.kind === argument6 && value4.of === value2;
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
						value={argument}
						onChange={(event) => argument2(event.target.value)}
						spellCheck={false}
						autoCapitalize="none"
						rows={3}
						className="edge-scroller ruled block w-full resize-none bg-transparent px-5 py-1.5 text-[2.5rem] leading-[1.2] text-hand caret-paper -outline-offset-2 placeholder:text-paper/72 lg:px-6"
						style={{
							fontFamily: value3,
						}}
						placeholder="Type something"
					/>
				</span>
			</label>
			<PictureSummary
				input={argument3}
				picture={argument4}
				focusStyle={argument5}
			/>
			<FontNameInput />
			<div className="flex flex-col gap-2 px-5 lg:px-6">
				<FontDownloadButton
					kind="otf"
					buffer={value6.otf}
					done={value9(`otf`)}
					onDownload={() => void value8(`otf`)}
				/>
				<FontDownloadButton
					kind="woff2"
					buffer={value6.woff2}
					done={value9(`woff2`)}
					onDownload={() => void value8(`woff2`)}
				/>
			</div>
			<p className="hidden px-5 pt-2.5 text-caption text-pretty text-paper/90 pointer-fine:block lg:px-6">{`To install your font, open the OTF and choose Install.`}</p>
			<ProjectActions />
		</div>
	);
}
export { FontExportView };
