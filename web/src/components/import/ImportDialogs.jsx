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
	const { actions } = useWrite();
	const isDraggingFile = useFileDrop(actions.openFont);
	return (
		<div
			aria-hidden={!isDraggingFile}
			className={`pointer-events-none fixed inset-0 z-50 flex bg-carbon/80 p-4 backdrop-blur-[6px] transition-[opacity,visibility] duration-150 ease-out ${isDraggingFile ? `visible opacity-100` : `invisible opacity-0`}`}
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
function ImportFileRow({ name: fileName, about, tile: tileClass }) {
	return (
		<div className="flex items-center gap-3 px-4 py-3">
			<span
				className={`flex size-10 shrink-0 items-center justify-center rounded-[0.625rem] ${tileClass}`}
			>
				<FileIcon className="size-5.5" />
			</span>
			<span className="flex min-w-0 flex-1 flex-col gap-px">
				<span className="cursor-text text-[0.9375rem] leading-5 font-medium wrap-anywhere select-text">
					{fileName}
				</span>
				<span className="text-caption text-paper/90">{about}</span>
			</span>
		</div>
	);
}
function ImportErrorDialog() {
	const { state, actions } = useWrite();
	const refusedImport =
		state.opening?.kind === `refused` ? state.opening : undefined;
	const errorContent = importErrors[refusedImport?.reason ?? `not-ductus`];
	const expectedFileName = fontFileName(state.project.name, `otf`);
	const errorContext = {
		name: refusedImport?.fileName ?? ``,
		size: refusedImport?.size ?? 0,
		expected: expectedFileName,
	};
	return (
		<Alert
			open={state.sheet === `refused`}
			onClose={actions.closeSheet}
			title={errorContent.title}
			message={errorContent.message(errorContext)}
		>
			<div className="px-5 pt-4.5 lg:px-7">
				<div className="flex flex-col rounded-2xl bg-paper/8">
					<ImportFileRow
						name={errorContext.name}
						about={errorContent.about(errorContext)}
						tile="bg-paper/14"
					/>
					{errorContent.showExpected && (
						<React.Fragment>
							<div aria-hidden={true} className="ms-17 h-px bg-paper/14" />
							<ImportFileRow
								name={expectedFileName}
								about="What yours is called, from Export"
								tile="bg-paper text-carbon"
							/>
						</React.Fragment>
					)}
				</div>
			</div>
			<SheetActions>
				{refusedImport?.reason === `newer` ? (
					<SheetPrimaryButton onClick={() => location.reload()}>
						{errorContent.action}
					</SheetPrimaryButton>
				) : (
					<SheetPrimaryButton onClick={actions.chooseFont}>
						<FolderIcon className="size-5.5 shrink-0 lg:size-5" />
						{errorContent.action}
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
function ImportProjectCard({ name, badge, project, when }) {
	return (
		<div className="flex flex-col gap-2 rounded-2xl bg-paper/8 px-4 pt-3.5 pb-3">
			<div className="flex items-center justify-between gap-3">
				<div className="flex min-w-0 items-center gap-2">
					<span className="min-w-0 text-[0.9375rem] leading-5 font-medium wrap-anywhere">
						{name}
					</span>
					{badge}
				</div>
				<span className="shrink-0 text-caption text-paper/90 tabular-nums">
					{letterCount(writtenDrawings(project).length)}
				</span>
			</div>
			<ProjectSample
				project={project}
				label={`Handwriting sample from ${name}`}
			/>
			<span className="text-caption text-paper/90">{when}</span>
		</div>
	);
}
function ReplaceProjectDialog() {
	const { state, actions } = useWrite();
	const pendingReplacement =
		state.opening?.kind === `replace` ? state.opening : undefined;
	const writtenCount = letterCount(
		pendingReplacement ? writtenDrawings(pendingReplacement.device).length : 0,
	);
	const isDeviceNewer = pendingReplacement
		? pendingReplacement.device.updatedAt > pendingReplacement.exportedAt
		: false;
	return (
		<Alert
			open={state.sheet === `replace`}
			onClose={actions.closeSheet}
			title={`Replace your ${writtenCount}?`}
			message={
				<React.Fragment>
					{`This replaces what’s on this device and can’t be undone.`}
					{` `}
					<button
						type="button"
						onClick={() => actions.openSheet(`export`)}
						className="rounded-sm font-semibold text-paper underline underline-offset-2 hover:decoration-2"
					>{`Export yours first`}</button>
					{` `}
					{`to keep a copy.`}
				</React.Fragment>
			}
		>
			{pendingReplacement && (
				<div className="flex flex-col gap-2 px-5 pt-4.5 lg:px-7">
					<ImportProjectCard
						name={pendingReplacement.fileName}
						project={pendingReplacement.project}
						when={`Made ${relativeDate(pendingReplacement.exportedAt)}`}
					/>
					<ImportProjectCard
						name="On this device"
						project={pendingReplacement.device}
						badge={
							isDeviceNewer && (
								<span className="shrink-0 rounded-md bg-canary px-1.75 py-0.5 text-tag font-semibold text-ink">{`Newer`}</span>
							)
						}
						when={`${capitalize(`edited ${relativeDate(pendingReplacement.device.updatedAt)}`)}${isDeviceNewer ? `, after the file was made` : ``}`}
					/>
				</div>
			)}
			<SheetActions>
				<SheetDangerButton onClick={actions.replace}>
					{`Replace `}
					{writtenCount}
				</SheetDangerButton>
				<SheetCloseButton>{`Keep my letters`}</SheetCloseButton>
			</SheetActions>
		</Alert>
	);
}
export { FileDropOverlay, ImportErrorDialog, ReplaceProjectDialog };
