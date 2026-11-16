import * as React from "react";
import { ensureProjectId } from "../lib/project.jsx";
import { loadProject, saveProject, saveDelay } from "../lib/storage.jsx";
function useProject(initialProject, onLoad) {
  let [project, setProject] = (0, React.useState)(initialProject);
  let [status, setStatus] = (0, React.useState)(`loading`);
  let loading = status === `loading`;
  let notifyLoaded = (0, React.useEffectEvent)(argument => onLoad?.(argument));
  (0, React.useEffect)(() => {
    let value = true;
    loadProject().then(argument => {
      if (value) {
        setProject(ensureProjectId(argument ?? initialProject));
        if (argument) {
          notifyLoaded(argument);
        }
        setStatus(`saved`);
      }
    }, () => {
      if (value) {
        setProject(ensureProjectId(initialProject));
        setStatus(`unsaved`);
      }
    });
    return () => {
      value = false;
    };
  }, [initialProject]);
  let flushProject = (0, React.useEffectEvent)(() => {
    if (!loading) {
      saveProject(project).then(() => setStatus(`saved`), () => setStatus(`unsaved`));
    }
  });
  (0, React.useEffect)(() => {
    if (loading) {
      return;
    }
    let value = setTimeout(flushProject, saveDelay);
    return () => clearTimeout(value);
  }, [project, loading]);
  (0, React.useEffect)(() => {
    let value = () => {
      if (document.visibilityState === `hidden`) {
        flushProject();
      }
    };
    document.addEventListener(`visibilitychange`, value);
    return () => document.removeEventListener(`visibilitychange`, value);
  }, []);
  return {
    project: project,
    setProject: setProject,
    status: status
  };
}
export { useProject };
