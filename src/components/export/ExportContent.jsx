import * as React from "react";
import {
	useIsPresent,
	AnimatePresence,
	MotionConfig,
	useReducedMotion,
	animate,
	motion,
} from "motion/react";
import { usePictureInput } from "../../hooks/usePictureInput.jsx";
import { FontExportView } from "./FontExportView.jsx";
import { PictureStyleView } from "./PictureStyleView.jsx";
import { usePictureDownload } from "../../hooks/usePictureDownload.jsx";
var exportTransition = {
	type: `spring`,
	duration: 0.4,
	bounce: 0,
};
var slideVariants = {
	enter: (direction) => ({
		x: `${direction * 100}%`,
		opacity: 0,
	}),
	rest: {
		x: `0%`,
		opacity: 1,
	},
	exit: (direction) => ({
		x: `${direction * -100}%`,
		opacity: 0,
	}),
};
var fadeVariants = {
	enter: {
		opacity: 0,
	},
	rest: {
		opacity: 1,
	},
	exit: {
		opacity: 0,
	},
};
function useExportHeight(view, reduceMotion) {
	const boxRef = React.useRef(null);
	const contentRef = React.useRef(null);
	const previousHeightRef = React.useRef(undefined);
	const animationRef = React.useRef(undefined);
	const previousViewRef = React.useRef(view);
	React.useEffect(() => {
		const resizeObserver = new ResizeObserver(([resizeEntry]) => {
			const measuredHeight = resizeEntry.borderBoxSize[0].blockSize;
			if (measuredHeight > 0 && !animationRef.current) {
				previousHeightRef.current = measuredHeight;
			}
		});
		resizeObserver.observe(contentRef.current);
		return () => resizeObserver.disconnect();
	}, []);
	React.useLayoutEffect(() => {
		if (previousViewRef.current === view) {
			return;
		}
		previousViewRef.current = view;
		const boxElement = boxRef.current;
		const fromHeight = animationRef.current
			? boxElement.offsetHeight
			: previousHeightRef.current;
		const toHeight = contentRef.current.offsetHeight;
		animationRef.current?.stop();
		animationRef.current = undefined;
		previousHeightRef.current = toHeight;
		if (reduceMotion || fromHeight === undefined || fromHeight === toHeight) {
			boxElement.style.height = ``;
			return;
		}
		boxElement.style.height = `${fromHeight}px`;
		const heightAnimation = animate(
			boxElement,
			{
				height: [fromHeight, toHeight],
			},
			exportTransition,
		);
		animationRef.current = heightAnimation;
		heightAnimation.then(() => {
			if (animationRef.current === heightAnimation) {
				animationRef.current = undefined;
				boxElement.style.height = ``;
			}
		});
	}, [view, reduceMotion]);
	return {
		box: boxRef,
		content: contentRef,
	};
}
function ExportTransition({ direction, children }) {
	const isPresent = useIsPresent();
	const reduceMotion = useReducedMotion();
	return (
		<motion.div
			custom={direction}
			variants={reduceMotion ? fadeVariants : slideVariants}
			initial="enter"
			animate="rest"
			exit="exit"
			transition={exportTransition}
			inert={!isPresent}
		>
			{children}
		</motion.div>
	);
}
var defaultPreviewText = `hamburgefonstiv the quick brown fox jumps over`;
function ExportContent({ view }) {
	const [text, setText] = React.useState(defaultPreviewText);
	const pictureInput = usePictureInput(text);
	const pictureDownload = usePictureDownload(pictureInput);
	const { box: boxRef, content: contentRef } = useExportHeight(
		view,
		useReducedMotion(),
	);
	const direction = view === `picture` ? 1 : -1;
	const [hasOpenedPicture, setHasOpenedPicture] = React.useState(false);
	if (view === `picture` && !hasOpenedPicture) {
		setHasOpenedPicture(true);
	}
	return (
		<MotionConfig reducedMotion="user">
			<div ref={boxRef} className="relative overflow-clip">
				<div ref={contentRef}>
					<AnimatePresence mode="popLayout" initial={false} custom={direction}>
						<ExportTransition direction={direction} key={view}>
							{view === `picture` ? (
								<PictureStyleView
									input={pictureInput}
									picture={pictureDownload}
								/>
							) : (
								<FontExportView
									text={text}
									onText={setText}
									input={pictureInput}
									picture={pictureDownload}
									focusStyle={hasOpenedPicture}
								/>
							)}
						</ExportTransition>
					</AnimatePresence>
				</div>
			</div>
		</MotionConfig>
	);
}
export { ExportContent };
