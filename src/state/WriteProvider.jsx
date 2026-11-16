import * as React from "react";
import { allCodepoints, characterSetFor } from "../data/characters.jsx";
import { defaultFix, createId, ensureProjectId } from "../lib/project.jsx";
import { alignProject } from "../lib/alignment.jsx";
import { defaultFamilyName } from "../lib/fontNames.jsx";
import { buildProjectFont } from "../lib/fontClient.jsx";
import { loadLiveFont } from "../lib/liveFont.jsx";
import { defaultPictureStyle } from "../data/pictureStyles.jsx";
import { readProjectFont } from "../lib/projectFont.jsx";
import { loadPictureStyle, savePictureStyle } from "../lib/storage.jsx";
import { useProject } from "../hooks/useProject.jsx";
var WriteContext = React.createContext(null);
function useWrite() {
	const context = React.use(WriteContext);
	if (!context) {
		throw Error(`useWrite must be used inside <WriteProvider>`);
	}
	return context;
}
var emptyProject = {
	schemaVersion: 1,
	id: ``,
	name: defaultFamilyName,
	createdAt: 0,
	updatedAt: 0,
	glyphs: {},
	settings: {
		tracking: 0,
		tidy: true,
	},
};
var fontBuildDelay = 300;
var strokesFor = (project, glyphCodepoint) =>
	project.glyphs[glyphCodepoint]?.drawings[0]?.strokes ?? [];
var firstUnwritten = (sourceProject) =>
	allCodepoints.find(
		(candidateCodepoint) =>
			!strokesFor(sourceProject, candidateCodepoint).length,
	) ?? allCodepoints[0];
function WriteProvider({ children }) {
	const [codepoint, setCodepoint] = React.useState(allCodepoints[0]);
	const [arrival, setArrival] = React.useState({
		from: undefined,
		by: `jump`,
	});
	const { project, setProject, status } = useProject(
		emptyProject,
		(loadedProject) => setCodepoint(firstUnwritten(loadedProject)),
	);
	const [history, setHistory] = React.useState({});
	const [font, setFont] = React.useState();
	const [sheet, setSheet] = React.useState();
	const [picked, setPicked] = React.useState();
	const [opening, setOpening] = React.useState();
	const [picture, setPicture] = React.useState(defaultPictureStyle);
	const fileInput = React.useRef(null);
	React.useEffect(() => {
		let active = true;
		loadPictureStyle().then(
			(storedStyle) => active && storedStyle && setPicture(storedStyle),
		);
		return () => {
			active = false;
		};
	}, []);
	const alignment = React.useMemo(() => alignProject(project), [project]);
	const drawn = React.useMemo(
		() =>
			new Set(
				allCodepoints.filter(
					(candidateCodepoint) =>
						strokesFor(project, candidateCodepoint).length,
				),
			),
		[project],
	);
	const glyphIndex = allCodepoints.indexOf(codepoint);
	const previousCodepoint = allCodepoints[glyphIndex - 1];
	const nextCodepoint = allCodepoints[glyphIndex + 1];
	const strokes = strokesFor(project, codepoint);
	const undoHistory = history[codepoint] ?? [];
	const neighbourFor = (neighbourCodepoint) =>
		neighbourCodepoint === undefined
			? undefined
			: {
					strokes: strokesFor(project, neighbourCodepoint),
					place: alignment.place.get(neighbourCodepoint),
				};
	const neighbours = {
		before: neighbourFor(
			allCodepoints
				.slice(0, glyphIndex)
				.findLast((candidateCodepoint) => drawn.has(candidateCodepoint)),
		),
		after: neighbourFor(
			allCodepoints
				.slice(glyphIndex + 1)
				.find((candidateCodepoint) => drawn.has(candidateCodepoint)),
		),
	};
	const replaceStrokes = (nextStrokes) =>
		setProject((project2) => {
			const currentDrawing = project2.glyphs[codepoint]?.drawings[0];
			const drawingFix = currentDrawing?.strokes.length
				? currentDrawing.fix
				: defaultFix;
			const nextDrawing = {
				id: currentDrawing?.id ?? createId(),
				strokes: nextStrokes,
				fix: drawingFix,
				updatedAt: Date.now(),
			};
			return {
				...project2,
				updatedAt: Date.now(),
				glyphs: {
					...project2.glyphs,
					[codepoint]: {
						cp: codepoint,
						drawings: [nextDrawing],
					},
				},
			};
		});
	const recordStrokes = (nextStrokes) => {
		setHistory((currentHistory) => ({
			...currentHistory,
			[codepoint]: [...(currentHistory[codepoint] ?? []), strokes],
		}));
		replaceStrokes(nextStrokes);
	};
	const replaceProject = (nextProject) => {
		setProject(ensureProjectId(nextProject));
		setHistory({});
		setCodepoint(firstUnwritten(nextProject));
		setPicked(undefined);
		setSheet(undefined);
	};
	const openFont = async (fontFile) => {
		if (status === `loading`) {
			return;
		}
		const importResult =
			fontFile.size > 16777216
				? {
						ok: false,
						reason: `not-font`,
					}
				: await fontFile.arrayBuffer().then(readProjectFont, () => ({
						ok: false,
						reason: `unreadable`,
					}));
		if (importResult.ok) {
			if (drawn.size) {
				setOpening({
					kind: `replace`,
					fileName: fontFile.name,
					project: importResult.project,
					exportedAt: importResult.exportedAt,
					device: project,
				});
				setSheet(`replace`);
			} else {
				replaceProject(importResult.project);
			}
		} else {
			setOpening({
				kind: `refused`,
				fileName: fontFile.name,
				size: fontFile.size,
				reason: importResult.reason,
			});
			setSheet(`refused`);
		}
	};
	const actions = {
		go: (targetCodepoint, arrivalMethod = `press`) => {
			if (targetCodepoint !== undefined && targetCodepoint !== codepoint) {
				setArrival({
					from: codepoint,
					by: arrivalMethod,
				});
				setCodepoint(targetCodepoint);
			}
		},
		addStroke: (stroke) => recordStrokes([...strokes, stroke]),
		undo: () => {
			if (undoHistory.length) {
				setHistory((currentHistory) => ({
					...currentHistory,
					[codepoint]: undoHistory.slice(0, -1),
				}));
				replaceStrokes(undoHistory[undoHistory.length - 1]);
			}
		},
		clear: () => strokes.length && recordStrokes([]),
		setFix: (glyphCodepoint, nextFix) =>
			setProject((project2) => {
				const currentDrawing = project2.glyphs[glyphCodepoint]?.drawings[0];
				if (currentDrawing) {
					return {
						...project2,
						updatedAt: Date.now(),
						glyphs: {
							...project2.glyphs,
							[glyphCodepoint]: {
								cp: glyphCodepoint,
								drawings: [
									{
										...currentDrawing,
										fix: nextFix,
									},
								],
							},
						},
					};
				} else {
					return project2;
				}
			}),
		setTidy: (tidy) =>
			setProject((currentProject) => ({
				...currentProject,
				updatedAt: Date.now(),
				settings: {
					...currentProject.settings,
					tidy: tidy,
				},
			})),
		rename: (name) =>
			setProject((currentProject) =>
				currentProject.name === name
					? currentProject
					: {
							...currentProject,
							updatedAt: Date.now(),
							name: name,
						},
			),
		stylePicture: (stylePatch) => {
			const nextPicture = {
				...picture,
				...stylePatch,
			};
			setPicture(nextPicture);
			savePictureStyle(nextPicture);
		},
		startOver: () => {
			setProject((currentProject) => ({
				...currentProject,
				id: createId(),
				updatedAt: Date.now(),
				glyphs: {},
			}));
			setHistory({});
			setCodepoint(allCodepoints[0]);
			setPicked(undefined);
			setSheet(undefined);
		},
		openSheet: (sheetName) => {
			if (sheetName === `adjust` && drawn.has(codepoint)) {
				setPicked(codepoint);
			}
			setSheet(sheetName);
		},
		closeSheet: () => setSheet(undefined),
		pick: setPicked,
		chooseFont: () => fileInput.current?.click(),
		openFont: (fontFile) => void openFont(fontFile),
		replace: () =>
			opening?.kind === `replace` && replaceProject(opening.project),
	};
	const onKeyDown = React.useEffectEvent((event) => {
		if (
			!(event.target instanceof HTMLTextAreaElement) &&
			!(event.target instanceof HTMLInputElement) &&
			!event.defaultPrevented &&
			!sheet
		) {
			if (event.key === `ArrowLeft`) {
				actions.go(previousCodepoint, `jump`);
			} else if (event.key === `ArrowRight`) {
				actions.go(nextCodepoint, `jump`);
			} else if (
				event.key.toLowerCase() === `z` &&
				(event.metaKey || event.ctrlKey) &&
				!event.shiftKey
			) {
				actions.undo();
			} else {
				return;
			}
			event.preventDefault();
		}
	});
	React.useEffect(() => {
		const handleKeyDown = (keyEvent) => onKeyDown(keyEvent);
		window.addEventListener(`keydown`, handleKeyDown);
		return () => window.removeEventListener(`keydown`, handleKeyDown);
	}, []);
	React.useEffect(() => {
		let active = true;
		const buildTimer = setTimeout(async () => {
			const { buffer: fontBuffer } = await buildProjectFont(project, alignment);
			const fontFamily = await loadLiveFont(fontBuffer.slice(0));
			if (active) {
				setFont({
					otf: fontBuffer,
					family: fontFamily,
					of: project,
				});
			}
		}, fontBuildDelay);
		return () => {
			active = false;
			clearTimeout(buildTimer);
		};
	}, [project, alignment]);
	const state = {
		project,
		status,
		cp: codepoint,
		arrival,
		set: characterSetFor(codepoint),
		prevCp: previousCodepoint,
		nextCp: nextCodepoint,
		strokes,
		canUndo: undoHistory.length > 0,
		drawn,
		alignment,
		neighbours,
		font,
		sheet,
		picture,
		picked,
		opening,
	};
	return (
		<WriteContext
			value={{
				state,
				actions,
			}}
		>
			{children}
			<input
				ref={fileInput}
				type="file"
				accept=".otf,.ttf,.woff,.woff2,font/otf,font/ttf,font/woff,font/woff2"
				hidden={true}
				tabIndex={-1}
				aria-hidden={true}
				onChange={(event) => {
					const selectedFile = event.currentTarget.files?.[0];
					event.currentTarget.value = ``;
					if (selectedFile) {
						actions.openFont(selectedFile);
					}
				}}
			/>
		</WriteContext>
	);
}
export { useWrite, WriteProvider };
