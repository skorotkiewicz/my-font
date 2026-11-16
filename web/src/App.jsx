import { OfflineSupport } from "./lib/recoveredRuntime.jsx";
import { describeCharacter } from "./data/characters.jsx";
import { useWrite, WriteProvider } from "./state/WriteProvider.jsx";
import { ExportSheet } from "./components/export/ExportSheet.jsx";
import { FileDropOverlay, ImportErrorDialog, ReplaceProjectDialog } from "./components/import/ImportDialogs.jsx";
import { AdjustSheet } from "./components/AdjustSheet.jsx";
import { GlyphsSheet } from "./components/GlyphsSheet.jsx";
import { SaveStatus, AppHeader } from "./components/AppHeader.jsx";
import { FontPreview } from "./components/FontPreview.jsx";
import { WritingStrip } from "./components/WritingStrip.jsx";
import { GlyphTools } from "./components/GlyphTools.jsx";
function GlyphAnnouncement() {
  let {
    state: value
  } = useWrite();
  let value2 = value.set.codepoints.indexOf(value.cp) + 1;
  return <p className={`sr-only`} aria-live={`polite`}>{`Write ${describeCharacter(value.cp)}, ${value2} of ${value.set.codepoints.length} ${value.set.label.toLowerCase()}`}</p>;
}
function WriteApp() {
  return <WriteProvider><div className={`write-app flex h-dvh flex-col overflow-hidden pr-[env(safe-area-inset-right)] pl-[env(safe-area-inset-left)]`}><AppHeader /><main className={`flex min-h-0 flex-1 flex-col short-landscape:justify-end`}><FontPreview /><WritingStrip /><GlyphTools /><SaveStatus className={`mt-2.5 mb-[max(env(safe-area-inset-bottom),0.5rem)] flex shrink-0 self-center lg:hidden short-landscape:hidden`} /></main></div><GlyphsSheet /><AdjustSheet /><ExportSheet /><ReplaceProjectDialog /><ImportErrorDialog /><FileDropOverlay /><GlyphAnnouncement /><OfflineSupport /></WriteProvider>;
}
export { WriteApp };
