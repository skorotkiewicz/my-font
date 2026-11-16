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
	enter: (argument) => ({
		x: `${argument * 100}%`,
		opacity: 0,
	}),
	rest: {
		x: `0%`,
		opacity: 1,
	},
	exit: (argument) => ({
		x: `${argument * -100}%`,
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
function useExportHeight(argument, argument2) {
	let value = React.useRef(null);
	let value2 = React.useRef(null);
	let value3 = React.useRef(undefined);
	let value4 = React.useRef(undefined);
	let value5 = React.useRef(argument);
	React.useEffect(() => {
		let value6 = new ResizeObserver(([argument3]) => {
			let value7 = argument3.borderBoxSize[0].blockSize;
			if (value7 > 0 && !value4.current) {
				value3.current = value7;
			}
		});
		value6.observe(value2.current);
		return () => value6.disconnect();
	}, []);
	React.useLayoutEffect(() => {
		if (value5.current === argument) {
			return;
		}
		value5.current = argument;
		let value6 = value.current;
		let value7 = value4.current ? value6.offsetHeight : value3.current;
		let value8 = value2.current.offsetHeight;
		value4.current?.stop();
		value4.current = undefined;
		value3.current = value8;
		if (argument2 || value7 === undefined || value7 === value8) {
			value6.style.height = ``;
			return;
		}
		value6.style.height = `${value7}px`;
		let value9 = animate(
			value6,
			{
				height: [value7, value8],
			},
			exportTransition,
		);
		value4.current = value9;
		value9.then(() => {
			if (value4.current === value9) {
				value4.current = undefined;
				value6.style.height = ``;
			}
		});
	}, [argument, argument2]);
	return {
		box: value,
		content: value2,
	};
}
function ExportTransition({ direction: argument, children: argument2 }) {
	let value = useIsPresent();
	let value2 = useReducedMotion();
	return (
		<motion.div
			custom={argument}
			variants={value2 ? fadeVariants : slideVariants}
			initial="enter"
			animate="rest"
			exit="exit"
			transition={exportTransition}
			inert={!value}
		>
			{argument2}
		</motion.div>
	);
}
var defaultPreviewText = `hamburgefonstiv the quick brown fox jumps over`;
function ExportContent({ view: argument }) {
	let [value, value2] = React.useState(defaultPreviewText);
	let value3 = usePictureInput(value);
	let value4 = usePictureDownload(value3);
	let { box: value5, content: value6 } = useExportHeight(
		argument,
		useReducedMotion(),
	);
	let value7 = argument === `picture` ? 1 : -1;
	let [value8, value9] = React.useState(false);
	if (argument === `picture` && !value8) {
		value9(true);
	}
	return (
		<MotionConfig reducedMotion="user">
			<div ref={value5} className="relative overflow-clip">
				<div ref={value6}>
					<AnimatePresence mode="popLayout" initial={false} custom={value7}>
						<ExportTransition direction={value7} key={argument}>
							{argument === `picture` ? (
								<PictureStyleView input={value3} picture={value4} />
							) : (
								<FontExportView
									text={value}
									onText={value2}
									input={value3}
									picture={value4}
									focusStyle={value8}
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
