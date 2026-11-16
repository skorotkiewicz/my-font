import { ExportContent } from "../components/export/ExportContent.jsx";
const preloadExport = () => {};
const useExportLoaded = () => true;
const loadExport = () => Promise.resolve();
const LazyExportContent = ExportContent;
const OfflineSupport = () => null;
export { preloadExport, useExportLoaded, loadExport, LazyExportContent, OfflineSupport };
