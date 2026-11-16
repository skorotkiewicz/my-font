import { normalizeProject } from "./project.jsx";
import { normalizePictureStyle } from "../data/pictureStyles.jsx";
function idbRequest(request) {
	return new Promise((resolve, reject) => {
		request.oncomplete = request.onsuccess = () => resolve(request.result);
		request.onabort = request.onerror = () => reject(request.error);
	});
}
function createStore(databaseName, storeName) {
	let databasePromise;
	const openDatabase = () => {
		if (databasePromise) {
			return databasePromise;
		}
		const openRequest = indexedDB.open(databaseName);
		openRequest.onupgradeneeded = () =>
			openRequest.result.createObjectStore(storeName);
		databasePromise = idbRequest(openRequest);
		databasePromise.then(
			(database) => {
				database.onclose = () => (databasePromise = undefined);
			},
			() => {
				databasePromise = undefined;
			},
		);
		return databasePromise;
	};
	return (transactionMode, useObjectStore) =>
		openDatabase().then((database) =>
			useObjectStore(
				database.transaction(storeName, transactionMode).objectStore(storeName),
			),
		);
}
var defaultStore;
function getStore() {
	defaultStore ||= createStore(`keyval-store`, `keyval`);
	return defaultStore;
}
function readStored(key, store = getStore()) {
	return store(`readonly`, (objectStore) => idbRequest(objectStore.get(key)));
}
function writeStored(key, storedValue, store = getStore()) {
	return store(`readwrite`, (objectStore) => {
		objectStore.put(storedValue, key);
		return idbRequest(objectStore.transaction);
	});
}
var projectStorageKey = `project:spike-0000`;
async function loadProject() {
	const storedProject = await readStored(projectStorageKey);
	if (storedProject === undefined) {
		return undefined;
	} else {
		return normalizeProject(storedProject);
	}
}
var persistRequested = false;
async function saveProject(project) {
	await writeStored(projectStorageKey, project);
	if (!persistRequested) {
		persistRequested = true;
		navigator.storage?.persist?.().catch(() => {});
	}
}
var pictureStorageKey = `picture-style`;
var loadPictureStyle = () =>
	readStored(pictureStorageKey).then(
		(storedStyle) =>
			storedStyle === undefined
				? undefined
				: normalizePictureStyle(storedStyle),
		() => undefined,
	);
var savePictureStyle = (style) =>
	writeStored(pictureStorageKey, style).catch(() => undefined);
var saveDelay = 400;
export {
	loadProject,
	saveProject,
	loadPictureStyle,
	savePictureStyle,
	saveDelay,
};
