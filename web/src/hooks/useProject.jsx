import * as React from "react";
import { ensureProjectId } from "../lib/project.jsx";
import { loadProject, saveProject, saveDelay } from "../lib/storage.jsx";
function useProject(initialProject, onLoad) {
	let [project, setProject] = React.useState(initialProject);
	let [status, setStatus] = React.useState(`loading`);
	let loading = status === `loading`;
	let notifyLoaded = React.useEffectEvent((loadedProject) =>
		onLoad?.(loadedProject),
	);
	React.useEffect(() => {
		let active = true;
		loadProject().then(
			(storedProject) => {
				if (active) {
					setProject(ensureProjectId(storedProject ?? initialProject));
					if (storedProject) {
						notifyLoaded(storedProject);
					}
					setStatus(`saved`);
				}
			},
			() => {
				if (active) {
					setProject(ensureProjectId(initialProject));
					setStatus(`unsaved`);
				}
			},
		);
		return () => {
			active = false;
		};
	}, [initialProject]);
	let flushProject = React.useEffectEvent(() => {
		if (!loading) {
			saveProject(project).then(
				() => setStatus(`saved`),
				() => setStatus(`unsaved`),
			);
		}
	});
	React.useEffect(() => {
		if (loading) {
			return;
		}
		let saveTimer = setTimeout(flushProject, saveDelay);
		return () => clearTimeout(saveTimer);
	}, [project, loading]);
	React.useEffect(() => {
		let handleVisibilityChange = () => {
			if (document.visibilityState === `hidden`) {
				flushProject();
			}
		};
		document.addEventListener(`visibilitychange`, handleVisibilityChange);
		return () =>
			document.removeEventListener(`visibilitychange`, handleVisibilityChange);
	}, []);
	return {
		project,
		setProject,
		status,
	};
}
export { useProject };
