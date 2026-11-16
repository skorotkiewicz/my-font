import { recoverWorker } from "./recover-worker.mjs";
import { recoverFonts } from "./recover-assets.mjs";
import {
	readFileSync,
	writeFileSync,
	mkdirSync,
	copyFileSync,
	existsSync,
} from "node:fs";
import { createRequire } from "node:module";
import path from "node:path";

// Use an existing Babel installation when RECOVERY_MODULES is supplied.
const require = createRequire(
	process.env.RECOVERY_MODULES
		? path.resolve(process.env.RECOVERY_MODULES, "package.json")
		: import.meta.url,
);
const { parse } = require("@babel/parser");
const traverse = require("@babel/traverse").default;
const generate = require("@babel/generator").default;
const t = require("@babel/types");
const root = path.resolve(import.meta.dirname, "..");
const output = path.join(root, "web/src");
const evidence = path.join(root, "webcrack-out");
const variableMapPath = path.join(root, "variable-map.json");
const checkOnly = process.argv.includes("--check");
const explicitMapPath = path.join(root, "rename-map.json");
const explicitNames = new Map(
	(existsSync(explicitMapPath)
		? (JSON.parse(readFileSync(explicitMapPath, "utf8")).bindings ?? [])
		: []
	).map((entry) => [
		`${entry.source}:${entry.scope}:${entry.position}`,
		entry.renamed,
	]),
);
const sourceNames = [
	"BcpSTgJi",
	"B75EoOZt",
	"rX6k7kUM",
	"Dmzpm_-y",
	"CEjkeowH",
];
const names = {
	BcpSTgJi: {
		a: "isFileDrag",
		o: "useFileDrop",
		c: "iconClass",
		l: "outlineIconProps",
		u: "solidIconProps",
		d: "BackIcon",
		f: "NextIcon",
		p: "ChevronDownIcon",
		m: "UndoIcon",
		h: "TrashIcon",
		g: "DownloadIcon",
		_: "ShareIcon",
		v: "CheckIcon",
		_Component6: "FolderIcon",
		b: "FileIcon",
		x: "PrivacyIcon",
		S: "CheckCircleIcon",
		C: "WarningIcon",
		w: "codepointRange",
		T: "punctuationCodepoints",
		E: "characterSets",
		D: "allCodepoints",
		ee: "characterSetFor",
		O: "punctuationLabels",
		k: "characterFor",
		A: "describeCharacter",
		j: "characterLabel",
		te: "signedArea",
		M: "polygonBounds",
		N: "clamp",
		ne: "median",
		re: "pi",
		P: "almostPi",
		ie: "defaultPressure",
		ae: "unitOffset",
		oe: "strokeRadius",
		se: "minimum",
		ce: "simulatePressure",
		le: "negateVector",
		F: "addVectors",
		ue: "addVectorsInto",
		I: "subtractVectors",
		de: "subtractVectorsInto",
		L: "scaleVector",
		fe: "scaleVectorInto",
		pe: "divideVector",
		me: "perpendicularVector",
		he: "perpendicularVectorInto",
		ge: "dotProduct",
		_e: "equalVectors",
		ve: "vectorLength",
		ye: "squaredDistance",
		be: "normalizeVector",
		xe: "vectorDistance",
		Se: "rotatePoint",
		Ce: "rotatePointInto",
		we: "lerpVector",
		Te: "lerpVectorInto",
		Ee: "projectVector",
		R: "normalScratch",
		z: "leftScratch",
		B: "rightScratch",
		De: "dotOutline",
		Oe: "roundStartCap",
		ke: "flatStartCap",
		Ae: "roundEndCap",
		je: "flatEndCap",
		Me: "taperLength",
		Ne: "initialPressure",
		Pe: "strokeOutline",
		Fe: "directionScratch",
		Ie: "hasPressure",
		Le: "strokePoints",
		Re: "freehandStroke",
		ze: "penSize",
		Be: "pressureEasing",
		Ve: "strokeCaps",
		He: "mouseStrokeOptions",
		Ue: "penStrokeOptions",
		We: "pressureMultiplier",
		Ge: "optionsForInput",
		Ke: "pressureThresholds",
		qe: "thresholdForInput",
		Je: "cornerThreshold",
		Ye: "maxSegmentLength",
		Xe: "samplingStep",
		V: "pointDistance",
		Ze: "cornerCosine",
		Qe: "trimStrokeEnds",
		$e: "strokeTaper",
		et: "resamplePoints",
		tt: "strokePolygons",
		nt: "polygonCache",
		rt: "polygonsForStroke",
		it: "descender",
		H: "stageHeight",
		at: "stageWidth",
		ot: "fontYToStage",
		U: "stageYFor",
		st: "guideLines",
		ct: "defaultFix",
		lt: "createId",
		ut: "legacyProjectId",
		dt: "ensureProjectId",
		ft: "normalizeProject",
		pt: "firstDrawing",
		mt: "writtenDrawings",
		W: "defaultPlacement",
		ht: "roundHundredths",
		gt: "placementTransform",
		_t: "defaultMetrics",
		vt: "minimumInkScale",
		yt: "verticalTolerance",
		bt: "baselineTolerance",
		xt: "minimumInkHeight",
		St: "metricSampleCount",
		Ct: "characterRules",
		G: "addCharacterRules",
		wt: "strokeInkBounds",
		Tt: "drawingBoundsCache",
		Et: "drawingBounds",
		Dt: "inkBounds",
		Ot: "blendMedian",
		kt: "placementFor",
		At: "applyDrawingFix",
		jt: "alignDrawings",
		Mt: "alignProject",
		Nt: "defaultFamilyName",
		Pt: "truncateName",
		Ft: "familyName",
		It: "fileStem",
		Lt: "fontFileName",
		Rt: "pictureFileName",
		zt: "fontWorker",
		Bt: "fontRequestId",
		Vt: "fontRequests",
		Ht: "getFontWorker",
		Ut: "requestFont",
		Wt: "buildProjectFont",
		Gt: "convertWoff2",
		Kt: "packProjectFont",
		qt: "warmFontWorker",
		Jt: "activeFontFace",
		Yt: "fontFaceId",
		Xt: "loadLiveFont",
		Zt: "paperStyles",
		Qt: "pictureOpacity",
		$t: "rulingStyles",
		en: "defaultPictureStyle",
		tn: "paperStyleFor",
		nn: "normalizePictureStyle",
		rn: "sha256Constants",
		K: "rotateRight",
		an: "sha256",
		on: "projectTableTag",
		sn: "projectMagic",
		cn: "projectFormatVersion",
		q: "projectHeaderSize",
		ln: "maxInflatedBytes",
		un: "maxProjectPoints",
		dn: "legacyFontPrefix",
		fn: "readTag",
		pn: "readFontTables",
		mn: "fontDescription",
		hn: "inflateProject",
		gn: "equalBytes",
		_n: "readProjectFont",
		vn: "InvalidProjectError",
		J: "isRecord",
		yn: "isFiniteNumber",
		Y: "assertProject",
		X: "boundedNumber",
		bn: "boundedString",
		xn: "boundedArray",
		Sn: "supportedCodepoints",
		Cn: "supportedInputs",
		wn: "maxStrokes",
		Tn: "validateProject",
		En: "idbRequest",
		Dn: "createStore",
		On: "defaultStore",
		kn: "getStore",
		An: "readStored",
		jn: "writeStored",
		Mn: "projectStorageKey",
		Nn: "loadProject",
		Pn: "persistRequested",
		Fn: "saveProject",
		In: "pictureStorageKey",
		Ln: "loadPictureStyle",
		Rn: "savePictureStyle",
		zn: "saveDelay",
		Bn: "useProject",
		Vn: "WriteContext",
		Z: "useWrite",
		Hn: "emptyProject",
		Un: "fontBuildDelay",
		Wn: "strokesFor",
		Gn: "firstUnwritten",
		Kn: "WriteProvider",
		qn: "closeDialog",
		Jn: "sheetCloseThreshold",
		Yn: "sheetVelocityThreshold",
		Xn: "sheetDragThreshold",
		Zn: "sheetSwipeDistance",
		Qn: "sheetTransitionMs",
		$n: "rubberBand",
		er: "isDesktop",
		tr: "desktopPanelWidth",
		nr: "panelGap",
		rr: "panelMargin",
		_Component2: "Sheet",
		_Component: "SheetHandle",
		or: "sheetSurface",
		_Component8: "Panel",
		cr: "Alert",
		lr: "SheetActions",
		ur: "sheetButtonClass",
		_Component5: "SheetPrimaryButton",
		fr: "SheetDangerButton",
		_Component3: "SheetSecondaryButton",
		mr: "SheetCloseButton",
		hr: "authorCredit",
		gr: "siteUrl",
		_r: "ExportContent",
		vr: "exportLoadPromise",
		yr: "exportListeners",
		br: "loadExport",
		xr: "preloadExport",
		Sr: "subscribeExport",
		Cr: "useExportLoaded",
		_Component7: "LazyExportContent",
		Tr: "Credit",
		Er: "EmptyExport",
		Dr: "ExportSheet",
		Or: "offlineCacheName",
		kr: "isStaticResource",
		Ar: "cacheResources",
		jr: "OfflineSupport",
		Mr: "extensionFor",
		Nr: "fileTypeLabels",
		Pr: "importErrors",
		Fr: "roundTenth",
		Ir: "polygonPath",
		Lr: "polygonsPath",
		Rr: "pathCache",
		zr: "strokePath",
		Br: "sampleCharacters",
		Vr: "sampleCount",
		Hr: "sampleSpacing",
		Ur: "projectSampleLayout",
		Wr: "ProjectSample",
		Gr: "letterCount",
		Kr: "dayMs",
		qr: "startOfDay",
		Jr: "relativeDate",
		Yr: "capitalize",
		Q: "adjustmentLimits",
		Xr: "alignmentTouchHeight",
		Zr: "alignmentGap",
		Qr: "alignmentPadding",
		$r: "AlignmentPreview",
		_Component0: "AlignmentHandle",
		_Component9: "AlignmentLetter",
		ni: "placeholderXHeight",
		ri: "placeholderCapHeight",
		ii: "placeholderScale",
		ai: "textRuns",
		oi: "useTextStyle",
		si: "LiveText",
		ci: "closestGridCell",
		li: "GlyphGrid",
		ui: "shortLetterZone",
		di: "tallLetterZone",
		fi: "tailLetterZone",
		pi: "tallTailZone",
		$: "glyphZone",
		mi: "glyphZones",
		hi: "zoneForCharacter",
		gi: "specimenWords",
		_i: "punctuationSpecimens",
		vi: "isLowercase",
		yi: "isUppercase",
		bi: "isDigit",
		xi: "wordsForCharacter",
		Si: "specimenForCharacter",
		Ci: "wordmarkShape",
		wi: "Wordmark",
		Ti: "hasUsedPen",
		Ei: "isIOS",
		Di: "hasPenPressure",
		Oi: "roundPrecision",
		ki: "DrawingCanvas",
		Ai: "subscribeNothing",
		ji: "isApplePlatform",
		Mi: "useShortcutLabel",
	},
	B75EoOZt: {
		_Component24: "FileDropOverlay",
		U: "ImportFileRow",
		_Component23: "ImportErrorDialog",
		W: "ImportProjectCard",
		_Component22: "ReplaceProjectDialog",
		G: "scaleFraction",
		K: "sliderThumbSize",
		ge: "scaleSnapThreshold",
		_e: "AdjustmentControls",
		_Component21: "AdjustSheet",
		ye: "GlyphTile",
		_Component10: "GlyphCount",
		_Component20: "GlyphsSheet",
		q: "deviceLabel",
		Se: "saveStatusContent",
		J: "SaveStatus",
		Ce: "AppHeader",
		_Component14: "OpenFontPrompt",
		Te: "FontPreview",
		Y: "neighbourCount",
		X: "neighbourGap",
		De: "neighbourOffset",
		Oe: "tapeArrivalOffset",
		Z: "stagePercent",
		Q: "stagePixels",
		_Component15: "WrittenNeighbour",
		Ae: "PlaceholderNeighbour",
		$: "TapeNeighbours",
		_Component18: "DrawingPrompt",
		Me: "GlyphPicker",
		Ne: "WritingStrip",
		Pe: "GlyphTools",
		Fe: "GlyphAnnouncement",
		Ie: "WriteApp",
	},
	rX6k7kUM: {
		r: "buttonClass",
		i: "toolButtonClass",
		a: "secondaryButtonClass",
		o: "ToolButton",
		s: "NavigationButton",
		c: "OutlineButton",
		l: "PrimaryButton",
		u: "GlyphBadge",
	},
	"Dmzpm_-y": {
		o: "downloadFormats",
		s: "formatBytes",
		c: "downloadBlob",
		l: "downloadFont",
		u: "useAsyncBuffer",
		d: "freshBuffer",
		f: "usePackedFont",
		p: "useWoff2Font",
		m: "useFontDownloads",
	},
	CEjkeowH: {
		Cf: "useReducedMotion",
		_f: "useMotionValue",
		bf: "useTransform",
		$f: "animate",
		Qu: "useIsPresent",
		_Component11: "MotionConfig",
		_Component0: "AnimatePresence",
		ep: "motion",
		np: "pictureLineHeight",
		rp: "pictureFontScale",
		ip: "pictureFontSizes",
		ap: "measureSpacedText",
		op: "wrapPictureText",
		sp: "truncatePictureText",
		cp: "fitPictureText",
		lp: "pictureSize",
		up: "pictureTextBox",
		dp: "pictureFooter",
		fp: "pictureTitleSize",
		pp: "pictureCaptionSize",
		mp: "pictureRuleWidth",
		hp: "pictureGridWidth",
		gp: "pictureLineSpacing",
		_p: "pictureFonts",
		vp: "paintWordmark",
		yp: "paintRuling",
		bp: "paintPicture",
		xp: "pictureBlob",
		Sp: "quoteAliases",
		Cp: "dashAliases",
		wp: "ellipsisCodepoint",
		Tp: "spaceCodepoints",
		Ep: "pictureAliases",
		Dp: "canRenderCodepoint",
		Op: "usePictureInput",
		_Component6: "PictureCanvas",
		Ap: "downloadButtonStyles",
		_Component9: "FontDownloadButton",
		Mp: "ProjectActions",
		Np: "FontNameInput",
		Pp: "PictureSummary",
		Fp: "FontExportView",
		Ip: "paperCardSize",
		Lp: "paperCardMinSize",
		Rp: "paperCardStep",
		zp: "paperCardShrink",
		Bp: "paperCardPixels",
		Vp: "paperSpring",
		Hp: "paperDeceleration",
		Up: "paperMomentum",
		Wp: "clampPaperIndex",
		Gp: "PaperCard",
		Kp: "PaperCarousel",
		qp: "paperLabelClass",
		Jp: "PaperSwatch",
		Yp: "PaperPicker",
		Xp: "RulingPicker",
		Zp: "PictureSaveButton",
		Qp: "PictureStyleView",
		$p: "pictureSentDelay",
		em: "canSharePicture",
		tm: "usePictureDownload",
		nm: "exportTransition",
		rm: "slideVariants",
		im: "fadeVariants",
		am: "useExportHeight",
		_Component10: "ExportTransition",
		sm: "defaultPreviewText",
		cm: "ExportContent",
	},
};
const partitions = {
	BcpSTgJi: [
		[6, "hooks/useFileDrop"],
		[60, "components/icons"],
		[147, "data/characters"],
		[226, "lib/geometry"],
		[272, "lib/freehand"],
		[647, "lib/strokes"],
		[832, "data/metrics"],
		[854, "lib/project"],
		[900, "lib/alignment"],
		[1089, "lib/fontNames"],
		[1111, "lib/fontClient"],
		[1183, "lib/liveFont"],
		[1196, "data/pictureStyles"],
		[1268, "lib/projectFont"],
		[1540, "lib/storage"],
		[1599, "hooks/useProject"],
		[1651, "state/WriteProvider"],
		[1942, "components/ui/Sheet"],
		[2145, "components/Credit"],
		[2158, "components/export/ExportSheet"],
		[2232, "components/OfflineSupport"],
		[2274, "data/importErrors"],
		[2339, "lib/svgPaths"],
		[2364, "components/ProjectSample"],
		[2417, "lib/format"],
		[2435, "components/AlignmentPreview"],
		[2555, "components/LiveText"],
		[2615, "components/GlyphGrid"],
		[2670, "data/glyphZones"],
		[2720, "data/specimens"],
		[2792, "components/Wordmark"],
		[2823, "components/DrawingCanvas"],
		[2948, "hooks/useShortcutLabel"],
	],
	B75EoOZt: [
		[7, "components/import/ImportDialogs"],
		[80, "components/AdjustSheet"],
		[155, "components/GlyphsSheet"],
		[189, "components/AppHeader"],
		[245, "components/FontPreview"],
		[269, "components/WritingStrip"],
		[391, "components/GlyphTools"],
		[408, "App"],
	],
	rX6k7kUM: [[1, "components/ui/Buttons"]],
	"Dmzpm_-y": [[1, "hooks/useFontDownloads"]],
	CEjkeowH: [
		[1, "vendor/motion"],
		[11469, "lib/picture"],
		[11700, "hooks/usePictureInput"],
		[11738, "components/export/PictureCanvas"],
		[11767, "components/export/FontExportView"],
		[11909, "components/export/PictureStyleView"],
		[12077, "hooks/usePictureDownload"],
		[12125, "components/export/ExportContent"],
	],
};
const destination = (source, line) =>
	partitions[source].findLast(([start]) => start <= line)?.[1];
const asts = new Map(
	sourceNames.map((name) => [
		name,
		parse(
			readFileSync(path.join(evidence, "deobfuscated", name + ".jsx"), "utf8"),
			{ sourceType: "module", plugins: ["jsx"] },
		),
	]),
);
const exportsBySource = new Map();
const variables = [];
const tagName = (node) =>
	t.isStringLiteral(node)
		? node.value
		: t.isTemplateLiteral(node) && node.expressions.length === 0
			? node.quasis[0].value.cooked
			: undefined;
const localNames = {
	BcpSTgJi: {
		te: { e: "polygon", t: "area" },
		M: { e: "polygons", t: "minX", n: "minY", r: "maxX", i: "maxY" },
		N: { e: "value", t: "minimum", n: "maximum" },
		ne: { e: "numbers", t: "sorted", n: "middle" },
		o: { e: "onDrop", t: "dragging", n: "setDragging", r: "handleFile" },
		Bn: {
			e: "initialProject",
			t: "onLoad",
			n: "project",
			r: "setProject",
			a: "status",
			o: "setStatus",
			s: "loading",
			c: "notifyLoaded",
			l: "flushProject",
		},
		Kn: {
			e: "children",
			t: "codepoint",
			n: "setCodepoint",
			r: "arrival",
			a: "setArrival",
			o: "project",
			c: "setProject",
			l: "status",
			u: "history",
			d: "setHistory",
			f: "font",
			p: "setFont",
			m: "sheet",
			h: "setSheet",
			g: "picked",
			_: "setPicked",
			v: "opening",
			y: "setOpening",
			b: "picture",
			x: "setPicture",
			S: "fileInput",
			C: "alignment",
			w: "drawn",
			T: "glyphIndex",
			E: "previousCodepoint",
			O: "nextCodepoint",
			k: "strokes",
			A: "undoHistory",
			j: "neighbourFor",
			te: "neighbours",
			M: "replaceStrokes",
			N: "recordStrokes",
			ne: "replaceProject",
			re: "openFont",
			P: "actions",
			ie: "onKeyDown",
			ae: "state",
		},
		ki: {
			e: "strokes",
			t: "onStroke",
			n: "label",
			r: "className",
			a: "children",
			o: "canvas",
			c: "livePath",
			l: "activeStroke",
			u: "animationFrame",
			d: "paintStroke",
			f: "schedulePaint",
			p: "cancelStroke",
			m: "eventPoint",
			h: "appendPoint",
		},
		Ir: { e: "polygon", t: "count", n: "path", r: "index" },
		zr: { e: "stroke", t: "path" },
		Xt: { e: "buffer", t: "family", n: "face" },
	},
};
const plannedNameTaken = (scope, candidate, binding) => {
	for (let current = scope; current; current = current.parent)
		if (
			Object.values(current.bindings).some(
				(other) => other !== binding && other._recoveryName === candidate,
			)
		)
			return true;
	return false;
};
// Use the installed motion package, excluding its captured bundled implementation.
const exportAst = asts.get("CEjkeowH");
exportAst.program.body = exportAst.program.body.filter(
	(node) =>
		t.isImportDeclaration(node) ||
		node.loc.start.line >= 11469 ||
		[6, 9042].includes(node.loc.start.line),
);
exportAst.program.body.unshift(
	t.importDeclaration(
		[
			["useReducedMotion", "Cf"],
			["useMotionValue", "_f"],
			["useTransform", "bf"],
			["animate", "$f"],
			["useIsPresent", "Qu"],
			["MotionConfig", "_Component11"],
			["AnimatePresence", "_Component0"],
			["motion", "ep"],
		].map(([imported, local]) =>
			t.importSpecifier(t.identifier(local), t.identifier(imported)),
		),
		t.stringLiteral("motion/react"),
	),
);

// Capture every scope before applying any rename. Names are inferred, not original source names.
for (const [source, ast] of asts) {
	const table = new Map();
	for (const node of ast.program.body)
		if (t.isExportNamedDeclaration(node))
			for (const spec of node.specifiers)
				table.set(
					spec.exported.name,
					names[source][spec.local.name] ?? spec.local.name,
				);
	exportsBySource.set(source, table);
	traverse(ast, {
		Scope(scopePath) {
			for (const binding of Object.values(scopePath.scope.bindings)) {
				const original = binding.identifier.name;
				const explicitName = explicitNames.get(
					`${source}.js:${scopePath.node.start}:${binding.identifier.start}`,
				);
				const top = binding.scope.path.isProgram();
				const parent = binding.path.parentPath;
				let renamed =
					explicitName ??
					(top
						? names[source][original]
						: localNames[source]?.[scopePath.node.id?.name]?.[original]);
				if (binding.kind === "module") {
					const imported = binding.path.node;
					const target = path.basename(
						binding.path.parentPath.node.source.value,
						".js",
					);
					renamed =
						exportsBySource.get(target)?.get(imported.imported?.name) ??
						renamed;
				}
				if (
					!renamed &&
					binding.path.isIdentifier() &&
					parent?.isObjectProperty() &&
					!parent.node.computed
				)
					renamed = parent.node.key.name;
				if (!renamed && !top) {
					const properties = binding.referencePaths.map((p) =>
						p.parentPath.isMemberExpression() &&
						p.parentPath.node.object === p.node &&
						!p.parentPath.node.computed
							? p.parentPath.node.property.name
							: undefined,
					);
					if (
						properties.some((p) =>
							[
								"clientX",
								"pointerId",
								"preventDefault",
								"target",
								"currentTarget",
								"dataTransfer",
							].includes(p),
						)
					)
						renamed = "event";
					else if (properties.includes("glyphs")) renamed = "project";
					else if (properties.includes("pts")) renamed = "stroke";
					else if (properties.includes("drawings")) renamed = "glyph";
					else if (properties.includes("strokes")) renamed = "drawing";
					else if (properties.includes("xMin")) renamed = "bounds";
					else if (properties.includes("codepoints")) renamed = "characterSet";
					else if (properties.includes("useEffect")) renamed = "React";
				}
				const inlined =
					binding.path.isVariableDeclarator() &&
					/^[a-z][a-z0-9-]*$/.test(tagName(binding.path.node.init) ?? "") &&
					/^Component\d*$/.test(original);
				if (!renamed && !top && original.length <= 3)
					renamed = binding.kind === "param" ? "argument" : "value";
				if (renamed && renamed !== original) {
					let candidate = renamed,
						index = 2;
					while (
						!explicitName &&
						(binding.scope.hasBinding(candidate) ||
							plannedNameTaken(binding.scope, candidate, binding))
					)
						candidate = renamed + index++;
					binding._recoveryName = candidate;
					renamed = candidate;
				} else renamed = original;
				if (top && names[source][original]) renamed = names[source][original];
				binding._recoveryName = renamed;
				variables.push({
					source: source + ".js",
					scope: scopePath.node.start,
					position: binding.identifier.start,
					original,
					renamed,
					kind: binding.kind,
					action: inlined
						? "inline HTML tag"
						: renamed === original
							? "preserve"
							: "rename",
					binding,
				});
			}
		},
	});
}
if (!checkOnly)
	writeFileSync(
		variableMapPath,
		JSON.stringify(
			{
				description:
					"Scope-aware names inferred from recovered code. Framework runtime code is excluded from the app.",
				bindings: variables.map(({ binding, ...entry }) => entry),
			},
			null,
			2,
		) + "\n",
	);
console.log(
	checkOnly
		? "Checking saved scoped names."
		: "Saved the root variable map. Applying scoped names.",
);

// The map is saved first, then loaded and applied using Babel's scope bindings.
const saved = checkOnly
	? variables.map(({ binding, ...entry }) => entry)
	: JSON.parse(readFileSync(variableMapPath, "utf8")).bindings;
const renamedBindings = new Map(
	variables.map(({ binding }, index) => [binding, saved[index]]),
);
const declarationNames = new Map(
	variables.map(({ binding }, index) => [binding.identifier, saved[index]]),
);
// One AST walk per source avoids re-traversing a large library for every binding.
for (const ast of asts.values())
	traverse(ast, {
		Identifier(p) {
			if (!p.isReferencedIdentifier() && !p.isBindingIdentifier()) return;
			const binding = p.scope.getBinding(p.node.name);
			const entry =
				declarationNames.get(p.node) ?? renamedBindings.get(binding);
			if (entry?.action === "rename") p.node._recoveryName = entry.renamed;
		},
		JSXIdentifier(p) {
			if (
				p.parentPath.isJSXAttribute() ||
				(p.parentPath.isJSXMemberExpression() &&
					p.parentPath.node.property === p.node)
			)
				return;
			const binding = p.scope.getBinding(p.node.name);
			const entry = renamedBindings.get(binding);
			if (entry?.action === "rename") p.node._recoveryName = entry.renamed;
		},
	});
for (let index = 0; index < variables.length; index++) {
	const { binding } = variables[index];
	const entry = saved[index];
	if (entry.action === "inline HTML tag") {
		for (const ref of binding.referencePaths)
			if (ref.isJSXIdentifier())
				ref.replaceWith(t.jsxIdentifier(tagName(binding.path.node.init)));
		binding.path.remove();
	}
}
for (const ast of asts.values())
	traverse(ast, {
		Identifier(p) {
			if (p.node._recoveryName) {
				if (
					p.parentPath.isObjectProperty() &&
					p.parentPath.node.value === p.node
				)
					p.parentPath.node.shorthand = false;
				p.node.name = p.node._recoveryName;
				delete p.node._recoveryName;
			}
		},
		JSXIdentifier(p) {
			if (p.node._recoveryName) {
				p.node.name = p.node._recoveryName;
				delete p.node._recoveryName;
			}
		},
	});
console.log("Names applied. Splitting application modules.");
const nodes = [];
const ignored = new Set(["__vite__mapDeps", "i", "s"]);
for (const [source, ast] of asts) {
	traverse(ast, {
		Program(p) {
			p.scope.crawl();
			// Link application imports to semantic names, replacing React/runtime wrappers.
			for (const statement of p.get("body"))
				if (statement.isImportDeclaration()) {
					const target = path.basename(statement.node.source.value, ".js");
					for (const spec of statement.node.specifiers) {
						let semantic = exportsBySource
							.get(target)
							?.get(spec.imported?.name);
						if (semantic) p.scope.rename(spec.local.name, semantic);
					}
				}
			const reactAliases =
				source === "BcpSTgJi"
					? ["i", "s"]
					: source === "B75EoOZt"
						? ["H", "Ee"]
						: source === "Dmzpm_-y"
							? ["a"]
							: source === "CEjkeowH"
								? ["D", "$"]
								: [];
			for (const alias of reactAliases) {
				const binding = p.scope.getBinding(alias);
				if (binding) {
					for (const ref of binding.referencePaths)
						ref.replaceWith(
							ref.isJSXIdentifier()
								? t.jsxIdentifier("React")
								: t.identifier("React"),
						);
					binding.path.remove();
				}
			}
		},
	});
	for (const original of ast.program.body) {
		if (t.isImportDeclaration(original) || t.isExportNamedDeclaration(original))
			continue;
		if (
			source === "B75EoOZt" &&
			t.isExpressionStatement(original) &&
			t.isCallExpression(original.expression) &&
			tagName(original.expression.arguments[0]) === "9523d74ab19c"
		)
			continue;
		let statements = t.isVariableDeclaration(original)
			? original.declarations.map((decl) =>
					t.variableDeclaration(original.kind, [decl]),
				)
			: [original];
		for (const node of statements) {
			const ids = Object.keys(t.getOuterBindingIdentifiers(node));
			if (
				ids.some((name) =>
					[
						"characterLabel",
						"usePackedFont",
						"useWoff2Font",
						"warmFontWorker",
						"BackIcon",
						"NextIcon",
						"UndoIcon",
						"TrashIcon",
					].includes(name),
				)
			)
				continue;
			if (source === "BcpSTgJi" && ids.some((name) => ignored.has(name)))
				continue;
			if (source === "rX6k7kUM" && ids.includes("n")) continue;
			const file = ids.includes("Credit")
				? "components/Credit"
				: destination(source, original.loc.start.line);
			if (!file) continue;
			// These captured modules point at absent files. Replaced locally below.
			if (file === "components/OfflineSupport" || file === "vendor/motion")
				continue;
			if (source === "CEjkeowH" && ids.includes("tp")) continue;
			if (file === "components/Credit" && ids.includes("siteUrl")) continue;
			if (file === "components/Credit" && t.isExpressionStatement(node))
				continue;
			nodes.push({ node, file, source });
		}
	}
}

// Replace the missing lazy export chunk with a local, statically linked component.
for (let index = nodes.length - 1; index >= 0; index--) {
	const entry = nodes[index];
	if (
		entry.file === "components/export/ExportSheet" &&
		!Object.keys(t.getOuterBindingIdentifiers(entry.node)).some((n) =>
			["EmptyExport", "ExportSheet"].includes(n),
		)
	)
		nodes.splice(index, 1);
}
const replacementCode = `
import * as React from 'react';
import * as tp from 'react-dom';
import { useIsPresent, AnimatePresence, MotionConfig, useMotionValue, useTransform, useReducedMotion, animate, motion } from 'motion/react';
const preloadExport = () => {};
const useExportLoaded = () => true;
const loadExport = () => Promise.resolve();
const LazyExportContent = ExportContent;
const OfflineSupport = () => null;
`;
const all = t.file(
	t.program([
		...parse(replacementCode, { sourceType: "module" }).program.body,
		...nodes.map((x) => x.node),
	]),
);
const owner = new Map(nodes.map((entry) => [entry.node, entry.file]));
const modules = new Map();
for (const entry of nodes) {
	if (!modules.has(entry.file)) modules.set(entry.file, []);
	modules.get(entry.file).push(entry.node);
}
const external = new Map([
	["React", { module: "react", namespace: true }],
	["tp", { module: "react-dom", namespace: true }],
]);
for (const name of [
	"useIsPresent",
	"AnimatePresence",
	"MotionConfig",
	"useMotionValue",
	"useTransform",
	"useReducedMotion",
	"animate",
	"motion",
])
	external.set(name, { module: "motion/react", bare: true });
for (const node of all.program.body) {
	if (owner.has(node)) continue;
	if (t.isImportDeclaration(node)) continue;
	const file = "lib/recoveredRuntime";
	owner.set(node, file);
	if (!modules.has(file)) modules.set(file, []);
	modules.get(file).push(node);
}
const deps = new Map([...modules.keys()].map((file) => [file, new Map()]));
const exported = new Map([...modules.keys()].map((file) => [file, new Set()]));
traverse(all, {
	Program(p) {
		p.scope.crawl();
		for (const [name, binding] of Object.entries(p.scope.bindings)) {
			const declaration =
				binding.path.findParent((q) => q.parentPath?.isProgram()) ??
				binding.path;
			const from = owner.get(declaration.node);
			for (const ref of binding.referencePaths) {
				const statement = ref.findParent((q) => q.parentPath?.isProgram());
				const to = statement && owner.get(statement.node);
				if (to && from !== to) {
					if (external.has(name)) deps.get(to).set(name, external.get(name));
					else if (from) {
						deps.get(to).set(name, { module: from, extension: ".jsx" });
						exported.get(from).add(name);
					}
				}
			}
		}
	},
});
exported.get("App").add("WriteApp");
// All handwritten modules can import these public application primitives.
for (const name of [
	"useWrite",
	"SheetPrimaryButton",
	"SheetSecondaryButton",
	"fontFileName",
	"pictureFileName",
	"strokePath",
	"placementTransform",
	"paperStyles",
	"rulingStyles",
	"paperStyleFor",
	"stageYFor",
	"sha256",
	"readFontTables",
	"polygonsForStroke",
	"familyName",
	"writtenDrawings",
	"defaultPlacement",
]) {
	for (const [file, statements] of modules)
		if (
			statements.some((node) =>
				Object.hasOwn(t.getOuterBindingIdentifiers(node), name),
			)
		)
			exported.get(file).add(name);
}
for (const [file, statements] of modules) {
	const imports = [];
	const grouped = new Map();
	for (const [name, dep] of deps.get(file)) {
		let specifier =
			dep.namespace || dep.bare
				? dep.module
				: path.posix.relative(
						path.posix.dirname(file),
						dep.module + dep.extension,
					);
		if (!specifier.startsWith(".") && !dep.namespace && !dep.bare)
			specifier = "./" + specifier;
		if (dep.namespace) {
			imports.push(
				t.importDeclaration(
					[t.importNamespaceSpecifier(t.identifier(name))],
					t.stringLiteral(specifier),
				),
			);
			continue;
		}
		if (!grouped.has(specifier)) grouped.set(specifier, []);
		grouped
			.get(specifier)
			.push(t.importSpecifier(t.identifier(name), t.identifier(name)));
	}
	for (const [specifier, specs] of grouped)
		imports.push(t.importDeclaration(specs, t.stringLiteral(specifier)));
	const body = [
		...imports,
		...statements,
		t.exportNamedDeclaration(
			null,
			[...exported.get(file)].map((name) =>
				t.exportSpecifier(t.identifier(name), t.identifier(name)),
			),
		),
	];
	const fileAst = t.file(t.program(body));
	traverse(fileAst, {
		ObjectProperty(p) {
			if (
				!p.node.computed &&
				t.isIdentifier(p.node.key) &&
				t.isIdentifier(p.node.value) &&
				p.node.key.name === p.node.value.name
			)
				p.node.shorthand = true;
		},
		JSXAttribute(p) {
			if (t.isJSXExpressionContainer(p.node.value)) {
				const value = tagName(p.node.value.expression);
				if (value !== undefined && !/["&\n\r]/.test(value))
					p.node.value = t.stringLiteral(value);
			}
		},
		SequenceExpression(p) {
			if (
				p.node.expressions.length === 2 &&
				t.isNumericLiteral(p.node.expressions[0], { value: 0 }) &&
				t.isMemberExpression(p.node.expressions[1]) &&
				t.isIdentifier(p.node.expressions[1].object, { name: "React" })
			)
				p.replaceWith(p.node.expressions[1]);
		},
	});
	const target = path.join(output, file + ".jsx");
	mkdirSync(path.dirname(target), { recursive: true });
	let code = generate(fileAst, { comments: false }).code + "\n";
	if (file === "lib/fontClient")
		code = code.replace(
			"new URL(`/_next/static/workers/68c63b8b-Bl6VHrTP.js`, `${import.meta.url}`)",
			'new URL("../workers/font.worker.js", import.meta.url)',
		);
	if (checkOnly) {
		const clean = (source) => {
			const ast = parse(source, { sourceType: "module", plugins: ["jsx"] });
			traverse(ast, {
				JSXElement(p) {
					p.node.children = p.node.children.filter(
						(child) => !t.isJSXText(child) || /\S/.test(child.value),
					);
				},
				JSXFragment(p) {
					p.node.children = p.node.children.filter(
						(child) => !t.isJSXText(child) || /\S/.test(child.value),
					);
				},
			});
			return JSON.stringify(ast, (key, value) =>
				[
					"start",
					"end",
					"loc",
					"extra",
					"comments",
					"leadingComments",
					"trailingComments",
					"innerComments",
					"shorthand",
				].includes(key)
					? undefined
					: value,
			);
		};
		const current = clean(readFileSync(target, "utf8")),
			generated = clean(code);
		if (current !== generated) {
			let index = 0;
			while (current[index] === generated[index] && index < current.length)
				index++;
			console.error(
				"Current:",
				current.slice(index - 80, index + 150),
				"\nGenerated:",
				generated.slice(index - 80, index + 150),
			);
			throw Error("Recovery no longer matches current source: " + file);
		}
	} else writeFileSync(target, code);
}

if (checkOnly) {
	console.log(
		"Recovery check passed: saved semantic names reproduce all application modules.",
	);
	process.exit(0);
}

mkdirSync(path.join(output, "styles"), { recursive: true });
recoverFonts(root);
for (const file of ["icon.png", "apple-icon.png", "manifest.webmanifest"])
	copyFileSync(
		path.join(root, "resources", file),
		path.join(root, "web/public", file),
	);
const manifestPath = path.join(root, "web/public/manifest.webmanifest");
const manifest = JSON.parse(readFileSync(manifestPath, "utf8"));
manifest.icons = [
	{ src: "/icon.png", sizes: "512x512", type: "image/png", purpose: "any" },
];
writeFileSync(manifestPath, JSON.stringify(manifest, null, 2) + "\n");
writeFileSync(
	path.join(root, "module-map.json"),
	JSON.stringify(
		{
			sources: sourceNames.map((source) => ({
				source: source + ".js",
				modules: [
					...new Set(
						nodes
							.filter((entry) => entry.source === source)
							.map((entry) => entry.file),
					),
				],
			})),
			excluded: [
				"React and React DOM bundles",
				"Vinext router, RSC transport and client registry",
				"Route manifest and layout segment provider",
				"Captured service worker registration",
				"Captured motion library, replaced by motion/react",
			],
			additionalRecovered: [
				"CEjkeowH.js export panel",
				"Dmzpm_-y.js download helpers",
				"font-worker.js",
				"woff2.js",
			],
		},
		null,
		2,
	) + "\n",
);
console.log(
	"Saved and applied",
	saved.length,
	"scoped variable mappings; extracted",
	modules.size,
	"application modules.",
);

recoverWorker();
