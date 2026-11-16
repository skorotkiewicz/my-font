import * as React from "react";
var isFileDrag = (event) =>
	event.dataTransfer?.types.includes(`Files`) ?? false;
function useFileDrop(onDrop) {
	let [dragging, setDragging] = React.useState(false);
	let handleFile = React.useEffectEvent(onDrop);
	React.useEffect(() => {
		let value = 0;
		let value2 = (event) => {
			if (isFileDrag(event)) {
				event.preventDefault();
				if (value++ === 0) {
					setDragging(true);
				}
			}
		};
		let value3 = (argument) => {
			if (isFileDrag(argument) && --value <= 0) {
				value = 0;
				setDragging(false);
			}
		};
		let value4 = (event) => {
			if (isFileDrag(event)) {
				event.preventDefault();
				if (event.dataTransfer) {
					event.dataTransfer.dropEffect = `copy`;
				}
			}
		};
		let value5 = (event) => {
			if (!isFileDrag(event)) {
				return;
			}
			event.preventDefault();
			value = 0;
			setDragging(false);
			let value6 = event.dataTransfer?.files[0];
			if (value6) {
				handleFile(value6);
			}
		};
		window.addEventListener(`dragenter`, value2);
		window.addEventListener(`dragleave`, value3);
		window.addEventListener(`dragover`, value4);
		window.addEventListener(`drop`, value5);
		return () => {
			window.removeEventListener(`dragenter`, value2);
			window.removeEventListener(`dragleave`, value3);
			window.removeEventListener(`dragover`, value4);
			window.removeEventListener(`drop`, value5);
		};
	}, []);
	return dragging;
}
export { useFileDrop };
