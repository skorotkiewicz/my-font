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
var WriteContext = (0, React.createContext)(null);
function useWrite() {
  let value = (0, React.use)(WriteContext);
  if (!value) {
    throw Error(`useWrite must be used inside <WriteProvider>`);
  }
  return value;
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
    tidy: true
  }
};
var fontBuildDelay = 300;
var strokesFor = (project, argument) => project.glyphs[argument]?.drawings[0]?.strokes ?? [];
var firstUnwritten = argument => allCodepoints.find(argument2 => !strokesFor(argument, argument2).length) ?? allCodepoints[0];
function WriteProvider({
  children: children
}) {
  let [codepoint, setCodepoint] = (0, React.useState)(allCodepoints[0]);
  let [arrival, setArrival] = (0, React.useState)({
    from: undefined,
    by: `jump`
  });
  let {
    project: project,
    setProject: setProject,
    status: status
  } = useProject(emptyProject, argument => setCodepoint(firstUnwritten(argument)));
  let [history, setHistory] = (0, React.useState)({});
  let [font, setFont] = (0, React.useState)();
  let [sheet, setSheet] = (0, React.useState)();
  let [picked, setPicked] = (0, React.useState)();
  let [opening, setOpening] = (0, React.useState)();
  let [picture, setPicture] = (0, React.useState)(defaultPictureStyle);
  let fileInput = (0, React.useRef)(null);
  (0, React.useEffect)(() => {
    let value = true;
    loadPictureStyle().then(argument => value && argument && setPicture(argument));
    return () => {
      value = false;
    };
  }, []);
  let alignment = (0, React.useMemo)(() => alignProject(project), [project]);
  let drawn = (0, React.useMemo)(() => new Set(allCodepoints.filter(argument => strokesFor(project, argument).length)), [project]);
  let glyphIndex = allCodepoints.indexOf(codepoint);
  let previousCodepoint = allCodepoints[glyphIndex - 1];
  let nextCodepoint = allCodepoints[glyphIndex + 1];
  let strokes = strokesFor(project, codepoint);
  let undoHistory = history[codepoint] ?? [];
  let neighbourFor = argument => argument === undefined ? undefined : {
    strokes: strokesFor(project, argument),
    place: alignment.place.get(argument)
  };
  let neighbours = {
    before: neighbourFor(allCodepoints.slice(0, glyphIndex).findLast(argument => drawn.has(argument))),
    after: neighbourFor(allCodepoints.slice(glyphIndex + 1).find(argument => drawn.has(argument)))
  };
  let replaceStrokes = argument => setProject(project2 => {
    let value = project2.glyphs[codepoint]?.drawings[0];
    let value2 = value?.strokes.length ? value.fix : defaultFix;
    let value3 = {
      id: value?.id ?? createId(),
      strokes: argument,
      fix: value2,
      updatedAt: Date.now()
    };
    return {
      ...project2,
      updatedAt: Date.now(),
      glyphs: {
        ...project2.glyphs,
        [codepoint]: {
          cp: codepoint,
          drawings: [value3]
        }
      }
    };
  });
  let recordStrokes = argument => {
    setHistory(argument2 => ({
      ...argument2,
      [codepoint]: [...(argument2[codepoint] ?? []), strokes]
    }));
    replaceStrokes(argument);
  };
  let replaceProject = argument => {
    setProject(ensureProjectId(argument));
    setHistory({});
    setCodepoint(firstUnwritten(argument));
    setPicked(undefined);
    setSheet(undefined);
  };
  let openFont = async argument => {
    if (status === `loading`) {
      return;
    }
    let value = argument.size > 16777216 ? {
      ok: false,
      reason: `not-font`
    } : await argument.arrayBuffer().then(readProjectFont, () => ({
      ok: false,
      reason: `unreadable`
    }));
    if (value.ok) {
      if (drawn.size) {
        setOpening({
          kind: `replace`,
          fileName: argument.name,
          project: value.project,
          exportedAt: value.exportedAt,
          device: project
        });
        setSheet(`replace`);
      } else {
        replaceProject(value.project);
      }
    } else {
      setOpening({
        kind: `refused`,
        fileName: argument.name,
        size: argument.size,
        reason: value.reason
      });
      setSheet(`refused`);
    }
  };
  let actions = {
    go: (argument, argument2 = `press`) => {
      if (argument !== undefined && argument !== codepoint) {
        setArrival({
          from: codepoint,
          by: argument2
        });
        setCodepoint(argument);
      }
    },
    addStroke: argument => recordStrokes([...strokes, argument]),
    undo: () => {
      if (undoHistory.length) {
        setHistory(argument => ({
          ...argument,
          [codepoint]: undoHistory.slice(0, -1)
        }));
        replaceStrokes(undoHistory[undoHistory.length - 1]);
      }
    },
    clear: () => strokes.length && recordStrokes([]),
    setFix: (argument, argument2) => setProject(project2 => {
      let value = project2.glyphs[argument]?.drawings[0];
      if (value) {
        return {
          ...project2,
          updatedAt: Date.now(),
          glyphs: {
            ...project2.glyphs,
            [argument]: {
              cp: argument,
              drawings: [{
                ...value,
                fix: argument2
              }]
            }
          }
        };
      } else {
        return project2;
      }
    }),
    setTidy: argument => setProject(argument2 => ({
      ...argument2,
      updatedAt: Date.now(),
      settings: {
        ...argument2.settings,
        tidy: argument
      }
    })),
    rename: argument => setProject(argument2 => argument2.name === argument ? argument2 : {
      ...argument2,
      updatedAt: Date.now(),
      name: argument
    }),
    stylePicture: argument => {
      let value = {
        ...picture,
        ...argument
      };
      setPicture(value);
      savePictureStyle(value);
    },
    startOver: () => {
      setProject(argument => ({
        ...argument,
        id: createId(),
        updatedAt: Date.now(),
        glyphs: {}
      }));
      setHistory({});
      setCodepoint(allCodepoints[0]);
      setPicked(undefined);
      setSheet(undefined);
    },
    openSheet: argument => {
      if (argument === `adjust` && drawn.has(codepoint)) {
        setPicked(codepoint);
      }
      setSheet(argument);
    },
    closeSheet: () => setSheet(undefined),
    pick: setPicked,
    chooseFont: () => fileInput.current?.click(),
    openFont: argument => void openFont(argument),
    replace: () => opening?.kind === `replace` && replaceProject(opening.project)
  };
  let onKeyDown = (0, React.useEffectEvent)(event => {
    if (!(event.target instanceof HTMLTextAreaElement) && !(event.target instanceof HTMLInputElement) && !event.defaultPrevented && !sheet) {
      if (event.key === `ArrowLeft`) {
        actions.go(previousCodepoint, `jump`);
      } else if (event.key === `ArrowRight`) {
        actions.go(nextCodepoint, `jump`);
      } else if (event.key.toLowerCase() === `z` && (event.metaKey || event.ctrlKey) && !event.shiftKey) {
        actions.undo();
      } else {
        return;
      }
      event.preventDefault();
    }
  });
  (0, React.useEffect)(() => {
    let value = argument => onKeyDown(argument);
    window.addEventListener(`keydown`, value);
    return () => window.removeEventListener(`keydown`, value);
  }, []);
  (0, React.useEffect)(() => {
    let value = true;
    let value2 = setTimeout(async () => {
      let {
        buffer: value3
      } = await buildProjectFont(project, alignment);
      let value4 = await loadLiveFont(value3.slice(0));
      if (value) {
        setFont({
          otf: value3,
          family: value4,
          of: project
        });
      }
    }, fontBuildDelay);
    return () => {
      value = false;
      clearTimeout(value2);
    };
  }, [project, alignment]);
  let state = {
    project: project,
    status: status,
    cp: codepoint,
    arrival: arrival,
    set: characterSetFor(codepoint),
    prevCp: previousCodepoint,
    nextCp: nextCodepoint,
    strokes: strokes,
    canUndo: undoHistory.length > 0,
    drawn: drawn,
    alignment: alignment,
    neighbours: neighbours,
    font: font,
    sheet: sheet,
    picture: picture,
    picked: picked,
    opening: opening
  };
  return <WriteContext value={{
    state: state,
    actions: actions
  }}>{children}<input ref={fileInput} type={`file`} accept={`.otf,.ttf,.woff,.woff2,font/otf,font/ttf,font/woff,font/woff2`} hidden={true} tabIndex={-1} aria-hidden={true} onChange={event => {
      let value = event.currentTarget.files?.[0];
      event.currentTarget.value = ``;
      if (value) {
        actions.openFont(value);
      }
    }} /></WriteContext>;
}
export { useWrite, WriteProvider };
