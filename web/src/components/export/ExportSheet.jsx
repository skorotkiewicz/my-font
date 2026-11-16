import * as React from "react";
import { preloadExport, useExportLoaded, loadExport, LazyExportContent } from "../../lib/recoveredRuntime.jsx";
import { FolderIcon } from "../icons.jsx";
import { useWrite } from "../../state/WriteProvider.jsx";
import { closeDialog, Panel, SheetPrimaryButton, SheetSecondaryButton } from "../ui/Sheet.jsx";
import { Credit } from "../Credit.jsx";
function EmptyExport() {
  let {
    actions: value
  } = useWrite();
  return <div className={`flex flex-col px-5 pt-1 pb-1 lg:px-6`}><div className={`flex flex-col gap-1.5 pb-5.5`}><p className={`text-[1.375rem] leading-7 font-semibold tracking-[-0.01em] text-balance`}>{`Nothing to export yet`}</p><p className={`text-[0.9375rem] leading-5 text-pretty text-paper/90`}>{`Write one letter and your font is ready to download. It grows with every letter you add.`}</p></div><div className={`flex flex-col gap-2.5`}><SheetPrimaryButton data-autofocus={true} onClick={event => closeDialog(event.currentTarget)}>{`Write your first letter`}</SheetPrimaryButton><SheetSecondaryButton onClick={value.chooseFont}><FolderIcon className={`size-5.5 shrink-0 lg:size-5`} />{`Open a font…`}</SheetSecondaryButton></div></div>;
}
function ExportSheet() {
  let {
    state: value,
    actions: value2
  } = useWrite();
  let {
    sheet: value3
  } = value;
  let value4 = useExportLoaded();
  let value5 = value3 === `export` || value3 === `picture`;
  let value6 = value.drawn.size === 0;
  let value7 = value5 && (value6 || value4);
  let [value8, value9] = (0, React.useState)(`font`);
  let value10 = value3 === `picture` ? `picture` : `font`;
  if (value5 && value8 !== value10) {
    value9(value10);
  }
  (0, React.useEffect)(() => {
    let value12 = (window.requestIdleCallback ?? (argument => window.setTimeout(argument, 1500)))(preloadExport);
    return () => (window.cancelIdleCallback ?? window.clearTimeout)(value12);
  }, []);
  let value11 = (0, React.useEffectEvent)(() => value2.closeSheet());
  (0, React.useEffect)(() => {
    if (value5 && !value6 && !value4) {
      loadExport().catch(value11);
    }
  }, [value5, value6, value4]);
  return <Panel open={value7} onClose={value2.closeSheet} title={value8 === `picture` ? `Picture` : `Export`} onDone={value8 === `picture` ? () => value2.openSheet(`export`) : undefined} anchor={`[data-anchor="actions"]`}>{value6 ? <EmptyExport /> : value4 ? <LazyExportContent view={value8} /> : null}<Credit /></Panel>;
}
export { ExportSheet };
