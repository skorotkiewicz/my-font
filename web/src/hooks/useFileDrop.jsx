import * as React from "react";
var isFileDrag = (event) =>
	event.dataTransfer?.types.includes(`Files`) ?? false;
function useFileDrop(onDrop) {
	const [dragging, setDragging] = React.useState(false);
	const handleFile = React.useEffectEvent(onDrop);
	React.useEffect(() => {
		let dragDepth = 0;
		const handleDragEnter = (event) => {
			if (isFileDrag(event)) {
				event.preventDefault();
				if (dragDepth++ === 0) {
					setDragging(true);
				}
			}
		};
		const handleDragLeave = (event) => {
			if (isFileDrag(event) && --dragDepth <= 0) {
				dragDepth = 0;
				setDragging(false);
			}
		};
		const handleDragOver = (event) => {
			if (isFileDrag(event)) {
				event.preventDefault();
				if (event.dataTransfer) {
					event.dataTransfer.dropEffect = `copy`;
				}
			}
		};
		const handleDrop = (event) => {
			if (!isFileDrag(event)) {
				return;
			}
			event.preventDefault();
			dragDepth = 0;
			setDragging(false);
			const droppedFile = event.dataTransfer?.files[0];
			if (droppedFile) {
				handleFile(droppedFile);
			}
		};
		window.addEventListener(`dragenter`, handleDragEnter);
		window.addEventListener(`dragleave`, handleDragLeave);
		window.addEventListener(`dragover`, handleDragOver);
		window.addEventListener(`drop`, handleDrop);
		return () => {
			window.removeEventListener(`dragenter`, handleDragEnter);
			window.removeEventListener(`dragleave`, handleDragLeave);
			window.removeEventListener(`dragover`, handleDragOver);
			window.removeEventListener(`drop`, handleDrop);
		};
	}, []);
	return dragging;
}
export { useFileDrop };
