import { writtenDrawings } from "./project.jsx";
import { defaultPlacement } from "./alignment.jsx";
import { familyName } from "./fontNames.jsx";
var fontWorker;
var fontRequestId = 0;
var fontRequests = new Map();
function getFontWorker() {
  return fontWorker || (fontWorker = new Worker(new URL("workers/font.worker.js", new URL(import.meta.env.BASE_URL, location.origin)), {
    type: `module`
  }), fontWorker.onmessage = ({
    data: argument
  }) => {
    let value = fontRequests.get(argument.id);
    fontRequests.delete(argument.id);
    if (value) {
      if (argument.ok) {
        value.resolve({
          buffer: argument.buffer,
          ms: argument.ms
        });
      } else {
        value.reject(Error(argument.error));
      }
    }
  }, fontWorker);
}
function requestFont(argument, argument2 = []) {
  let value = fontRequestId++;
  return new Promise((argument3, argument4) => {
    fontRequests.set(value, {
      resolve: argument3,
      reject: argument4
    });
    getFontWorker().postMessage({
      ...argument,
      id: value
    }, argument2);
  });
}
var buildProjectFont = (argument, {
  place: argument2,
  lines: argument3
}) => requestFont({
  type: `build`,
  familyName: familyName(argument.name),
  projectId: argument.id,
  tracking: argument.settings.tracking,
  metrics: {
    xHeight: argument3.xHeight,
    capHeight: argument3.capHeight
  },
  glyphs: writtenDrawings(argument).map(argument4 => ({
    ...argument4,
    place: argument2.get(argument4.cp) ?? defaultPlacement
  }))
});
var convertWoff2 = argument => {
  let value = argument.slice(0);
  return requestFont({
    type: `woff2`,
    otf: value
  }, [value]);
};
var packProjectFont = (argument, argument2) => {
  let value = argument.slice(0);
  return requestFont({
    type: `pack`,
    otf: value,
    project: argument2,
    exportedAt: Date.now()
  }, [value]);
};
var warmFontWorker = () => requestFont({
  type: `warm`
});
export { buildProjectFont, convertWoff2, packProjectFont };
