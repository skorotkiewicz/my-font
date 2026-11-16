import * as React from "react";
import { paintPicture } from "../../lib/picture.jsx";
function PictureCanvas({
	input: pictureInput,
	paper,
	pixels,
	label,
	className,
}) {
	const canvasRef = React.useRef(null);
	React.useEffect(() => {
		const canvasElement = canvasRef.current;
		let isActive = true;
		const paint = () =>
			paintPicture(
				canvasElement,
				paper
					? {
							...pictureInput,
							style: {
								...pictureInput.style,
								paper: paper,
							},
						}
					: pictureInput,
			);
		paint();
		if (document.fonts.status === `loading`) {
			document.fonts.ready.then(() => isActive && paint());
		}
		return () => {
			isActive = false;
		};
	}, [pictureInput, paper]);
	return (
		<canvas
			ref={canvasRef}
			width={pixels}
			height={pixels}
			role={label ? `img` : undefined}
			aria-label={label}
			aria-hidden={!label || undefined}
			className={className}
		/>
	);
}
export { PictureCanvas };
