import * as React from "react";
import { useFileDrop } from "../../hooks/useFileDrop.jsx";
import { FolderIcon, FileIcon, PrivacyIcon } from "../icons.jsx";
import { writtenDrawings } from "../../lib/project.jsx";
import { fontFileName } from "../../lib/fontNames.jsx";
import { useWrite } from "../../state/WriteProvider.jsx";
import {
	Alert,
	SheetActions,
	SheetPrimaryButton,
	SheetDangerButton,
	SheetCloseButton,
} from "../ui/Sheet.jsx";
import { importErrors } from "../../data/importErrors.jsx";
import { ProjectSample } from "../ProjectSample.jsx";
import { letterCount, relativeDate } from "../../lib/format.jsx";
import { capitalize } from "../AlignmentPreview.jsx";
function FileDropOverlay() {
	let { actions: value } = useWrite();
	let value2 = useFileDrop(value.openFont);
	return (
		<div
			aria-hidden={!value2}
			className={`pointer-events-none fixed inset-0 z-50 flex bg-carbon/80 p-4 backdrop-blur-[6px] transition-[opacity,visibility] duration-150 ease-out ${value2 ? `visible opacity-100` : `invisible opacity-0`}`}
		>
			<div className="flex flex-1 flex-col items-center justify-center gap-4.5 rounded-[1.75rem] border-2 border-dashed border-paper/70 bg-paper/6 px-6 text-center">
				<span className="flex size-16 items-center justify-center rounded-full bg-paper text-carbon">
					<FolderIcon className="size-7.5" />
				</span>
				<p className="flex flex-col items-center gap-2">
					<span className="text-[2rem] leading-9.5 font-semibold tracking-[-0.01em] text-balance">{`Drop to open your font`}</span>
					<span className="text-base leading-6 text-pretty text-paper/90">
						{`Fonts made with Ductus only. It’s checked on this`}
						{` `}
						<span className="hidden pointer-fine:inline">{`computer`}</span>
						<span className="pointer-fine:hidden">{`device`}</span>
						{`, never uploaded.`}
					</span>
				</p>
			</div>
		</div>
	);
}
function ImportFileRow({ name: argument, about: argument2, tile: argument3 }) {
	return (
		<div className="flex items-center gap-3 px-4 py-3">
			<span
				className={`flex size-10 shrink-0 items-center justify-center rounded-[0.625rem] ${argument3}`}
			>
				<FileIcon className="size-5.5" />
			</span>
			<span className="flex min-w-0 flex-1 flex-col gap-px">
				<span className="cursor-text text-[0.9375rem] leading-5 font-medium wrap-anywhere select-text">
					{argument}
				</span>
				<span className="text-caption text-paper/90">{argument2}</span>
			</span>
		</div>
	);
}
function ImportErrorDialog() {
	let { state: value, actions: value2 } = useWrite();
	let value3 = value.opening?.kind === `refused` ? value.opening : undefined;
	let value4 = importErrors[value3?.reason ?? `not-ductus`];
	let value5 = fontFileName(value.project.name, `otf`);
	let value6 = {
		name: value3?.fileName ?? ``,
		size: value3?.size ?? 0,
		expected: value5,
	};
	return (
		<Alert
			open={value.sheet === `refused`}
			onClose={value2.closeSheet}
			title={value4.title}
			message={value4.message(value6)}
		>
			<div className="px-5 pt-4.5 lg:px-7">
				<div className="flex flex-col rounded-2xl bg-paper/8">
					<ImportFileRow
						name={value6.name}
						about={value4.about(value6)}
						tile="bg-paper/14"
					/>
					{value4.showExpected && (
						<React.Fragment>
							<div aria-hidden={true} className="ms-17 h-px bg-paper/14" />
							<ImportFileRow
								name={value5}
								about="What yours is called, from Export"
								tile="bg-paper text-carbon"
							/>
						</React.Fragment>
					)}
				</div>
			</div>
			<SheetActions>
				{value3?.reason === `newer` ? (
					<SheetPrimaryButton onClick={() => location.reload()}>
						{value4.action}
					</SheetPrimaryButton>
				) : (
					<SheetPrimaryButton onClick={value2.chooseFont}>
						<FolderIcon className="size-5.5 shrink-0 lg:size-5" />
						{value4.action}
					</SheetPrimaryButton>
				)}
				<SheetCloseButton>{`Close`}</SheetCloseButton>
			</SheetActions>
			<p className="flex items-center justify-center gap-1.5 px-5 pt-4 text-caption text-paper/90">
				<PrivacyIcon className="size-4" />
				{`Checked on this device. Nothing was uploaded.`}
			</p>
		</Alert>
	);
}
function ImportProjectCard({
	name: argument,
	badge: argument2,
	project: argument3,
	when: argument4,
}) {
	return (
		<div className="flex flex-col gap-2 rounded-2xl bg-paper/8 px-4 pt-3.5 pb-3">
			<div className="flex items-center justify-between gap-3">
				<div className="flex min-w-0 items-center gap-2">
					<span className="min-w-0 text-[0.9375rem] leading-5 font-medium wrap-anywhere">
						{argument}
					</span>
					{argument2}
				</div>
				<span className="shrink-0 text-caption text-paper/90 tabular-nums">
					{letterCount(writtenDrawings(argument3).length)}
				</span>
			</div>
			<ProjectSample
				project={argument3}
				label={`Handwriting sample from ${argument}`}
			/>
			<span className="text-caption text-paper/90">{argument4}</span>
		</div>
	);
}
function ReplaceProjectDialog() {
	let { state: value, actions: value2 } = useWrite();
	let value3 = value.opening?.kind === `replace` ? value.opening : undefined;
	let value4 = letterCount(value3 ? writtenDrawings(value3.device).length : 0);
	let value5 = value3 ? value3.device.updatedAt > value3.exportedAt : false;
	return (
		<Alert
			open={value.sheet === `replace`}
			onClose={value2.closeSheet}
			title={`Replace your ${value4}?`}
			message={
				<React.Fragment>
					{`This replaces what’s on this device and can’t be undone.`}
					{` `}
					<button
						type="button"
						onClick={() => value2.openSheet(`export`)}
						className="rounded-sm font-semibold text-paper underline underline-offset-2 hover:decoration-2"
					>{`Export yours first`}</button>
					{` `}
					{`to keep a copy.`}
				</React.Fragment>
			}
		>
			{value3 && (
				<div className="flex flex-col gap-2 px-5 pt-4.5 lg:px-7">
					<ImportProjectCard
						name={value3.fileName}
						project={value3.project}
						when={`Made ${relativeDate(value3.exportedAt)}`}
					/>
					<ImportProjectCard
						name="On this device"
						project={value3.device}
						badge={
							value5 && (
								<span className="shrink-0 rounded-md bg-canary px-1.75 py-0.5 text-tag font-semibold text-ink">{`Newer`}</span>
							)
						}
						when={`${capitalize(`edited ${relativeDate(value3.device.updatedAt)}`)}${value5 ? `, after the file was made` : ``}`}
					/>
				</div>
			)}
			<SheetActions>
				<SheetDangerButton onClick={value2.replace}>
					{`Replace `}
					{value4}
				</SheetDangerButton>
				<SheetCloseButton>{`Keep my letters`}</SheetCloseButton>
			</SheetActions>
		</Alert>
	);
}
export { FileDropOverlay, ImportErrorDialog, ReplaceProjectDialog };
