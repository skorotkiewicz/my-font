import * as React from "react";
import { ensureProjectId } from "../lib/project.jsx";
import { loadProject, saveProject, saveDelay } from "../lib/storage.jsx";
function useProject(initialProject, onLoad) {
	const [project, setProject] = React.useState(initialProject);
	const [status, setStatus] = React.useState(`loading`);
	const loading = status === `loading`;
	const notifyLoaded = React.useEffectEvent((loadedProject) =>
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
	const flushProject = React.useEffectEvent(() => {
		if (!loading) {
			saveProject(project).then(
				() => setStatus(`saved`),
				() => setStatus(`unsaved`),
			);
		}
	});
	// biome-ignore lint/correctness/useExhaustiveDependencies: Each project change must restart the autosave delay; flushProject reads the latest project.
	React.useEffect(() => {
		if (loading) {
			return;
		}
		const saveTimer = setTimeout(flushProject, saveDelay);
		return () => clearTimeout(saveTimer);
	}, [project, loading]);
	React.useEffect(() => {
		const handleVisibilityChange = () => {
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
