import * as React from "react";
import {
	preloadExport,
	useExportLoaded,
	loadExport,
	LazyExportContent,
} from "../../lib/recoveredRuntime.jsx";
import { FolderIcon } from "../icons.jsx";
import { useWrite } from "../../state/WriteProvider.jsx";
import {
	closeDialog,
	Panel,
	SheetPrimaryButton,
	SheetSecondaryButton,
} from "../ui/Sheet.jsx";
import { Credit } from "../Credit.jsx";
function EmptyExport() {
	let { actions } = useWrite();
	return (
		<div className="flex flex-col px-5 pt-1 pb-1 lg:px-6">
			<div className="flex flex-col gap-1.5 pb-5.5">
				<p className="text-[1.375rem] leading-7 font-semibold tracking-[-0.01em] text-balance">{`Nothing to export yet`}</p>
				<p className="text-[0.9375rem] leading-5 text-pretty text-paper/90">{`Write one letter and your font is ready to download. It grows with every letter you add.`}</p>
			</div>
			<div className="flex flex-col gap-2.5">
				<SheetPrimaryButton
					data-autofocus={true}
					onClick={(event) => closeDialog(event.currentTarget)}
				>{`Write your first letter`}</SheetPrimaryButton>
				<SheetSecondaryButton onClick={actions.chooseFont}>
					<FolderIcon className="size-5.5 shrink-0 lg:size-5" />
					{`Open a font…`}
				</SheetSecondaryButton>
			</div>
		</div>
	);
}
function ExportSheet() {
	let { state, actions } = useWrite();
	let { sheet } = state;
	let exportLoaded = useExportLoaded();
	let isExportSheet = sheet === `export` || sheet === `picture`;
	let isEmpty = state.drawn.size === 0;
	let isOpen = isExportSheet && (isEmpty || exportLoaded);
	let [view, setView] = React.useState(`font`);
	let nextView = sheet === `picture` ? `picture` : `font`;
	if (isExportSheet && view !== nextView) {
		setView(nextView);
	}
	React.useEffect(() => {
		let preloadHandle = (
			window.requestIdleCallback ??
			((callback) => window.setTimeout(callback, 1500))
		)(preloadExport);
		return () =>
			(window.cancelIdleCallback ?? window.clearTimeout)(preloadHandle);
	}, []);
	let closeOnLoadError = React.useEffectEvent(() => actions.closeSheet());
	React.useEffect(() => {
		if (isExportSheet && !isEmpty && !exportLoaded) {
			loadExport().catch(closeOnLoadError);
		}
	}, [isExportSheet, isEmpty, exportLoaded]);
	return (
		<Panel
			open={isOpen}
			onClose={actions.closeSheet}
			title={view === `picture` ? `Picture` : `Export`}
			onDone={
				view === `picture` ? () => actions.openSheet(`export`) : undefined
			}
			anchor={`[data-anchor="actions"]`}
		>
			{isEmpty ? (
				<EmptyExport />
			) : exportLoaded ? (
				<LazyExportContent view={view} />
			) : null}
			<Credit />
		</Panel>
	);
}
export { ExportSheet };
