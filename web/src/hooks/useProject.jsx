import * as React from "react";
import { ensureProjectId } from "../lib/project.jsx";
import { loadProject, saveProject, saveDelay } from "../lib/storage.jsx";
function useProject(initialProject, onLoad) {
	let [project, setProject] = React.useState(initialProject);
	let [status, setStatus] = React.useState(`loading`);
	let loading = status === `loading`;
	let notifyLoaded = React.useEffectEvent((argument) => onLoad?.(argument));
	React.useEffect(() => {
		let value = true;
		loadProject().then(
			(argument) => {
				if (value) {
					setProject(ensureProjectId(argument ?? initialProject));
					if (argument) {
						notifyLoaded(argument);
					}
					setStatus(`saved`);
				}
			},
			() => {
				if (value) {
					setProject(ensureProjectId(initialProject));
					setStatus(`unsaved`);
				}
			},
		);
		return () => {
			value = false;
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
		let value = setTimeout(flushProject, saveDelay);
		return () => clearTimeout(value);
	}, [project, loading]);
	React.useEffect(() => {
		let value = () => {
			if (document.visibilityState === `hidden`) {
				flushProject();
			}
		};
		document.addEventListener(`visibilitychange`, value);
		return () => document.removeEventListener(`visibilitychange`, value);
	}, []);
	return {
		project,
		setProject,
		status,
	};
}
export { useProject };
