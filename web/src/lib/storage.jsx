import { normalizeProject } from "./project.jsx";
import { normalizePictureStyle } from "../data/pictureStyles.jsx";
function idbRequest(argument) {
  return new Promise((argument2, argument3) => {
    argument.oncomplete = argument.onsuccess = () => argument2(argument.result);
    argument.onabort = argument.onerror = () => argument3(argument.error);
  });
}
function createStore(argument, argument2) {
  let value;
  let value2 = () => {
    if (value) {
      return value;
    }
    let value3 = indexedDB.open(argument);
    value3.onupgradeneeded = () => value3.result.createObjectStore(argument2);
    value = idbRequest(value3);
    value.then(argument3 => {
      argument3.onclose = () => value = undefined;
    }, () => {
      value = undefined;
    });
    return value;
  };
  return (argument3, argument4) => value2().then(argument5 => argument4(argument5.transaction(argument2, argument3).objectStore(argument2)));
}
var defaultStore;
function getStore() {
  defaultStore ||= createStore(`keyval-store`, `keyval`);
  return defaultStore;
}
function readStored(argument, argument2 = getStore()) {
  return argument2(`readonly`, argument3 => idbRequest(argument3.get(argument)));
}
function writeStored(argument, argument2, argument3 = getStore()) {
  return argument3(`readwrite`, argument4 => {
    argument4.put(argument2, argument);
    return idbRequest(argument4.transaction);
  });
}
var projectStorageKey = `project:spike-0000`;
async function loadProject() {
  let value = await readStored(projectStorageKey);
  if (value === undefined) {
    return undefined;
  } else {
    return normalizeProject(value);
  }
}
var persistRequested = false;
async function saveProject(argument) {
  await writeStored(projectStorageKey, argument);
  if (!persistRequested) {
    persistRequested = true;
    navigator.storage?.persist?.().catch(() => {});
  }
}
var pictureStorageKey = `picture-style`;
var loadPictureStyle = () => readStored(pictureStorageKey).then(argument => argument === undefined ? undefined : normalizePictureStyle(argument), () => undefined);
var savePictureStyle = argument => writeStored(pictureStorageKey, argument).catch(() => undefined);
var saveDelay = 400;
export { loadProject, saveProject, loadPictureStyle, savePictureStyle, saveDelay };
