import { useWrite } from "../state/WriteProvider.jsx";
var placeholderXHeight = 526;
var placeholderCapHeight = 686;
function placeholderScale(character, lines) {
	if (character >= `a` && character <= `z`) {
		return lines.xHeight / placeholderXHeight;
	} else if (character >= `0` && character <= `9`) {
		return lines.digitHeight / placeholderCapHeight;
	} else {
		return lines.capHeight / placeholderCapHeight;
	}
}
function textRuns(text, hasDrawing, lines, shrink = 1) {
	let runs = [];
	for (let character of text) {
		let isHandwritten = character === ` ` || hasDrawing(character);
		let scale = isHandwritten ? 1 : placeholderScale(character, lines) * shrink;
		let previousRun = runs[runs.length - 1];
		if (
			previousRun &&
			previousRun.hand === isHandwritten &&
			previousRun.scale === scale
		) {
			previousRun.text += character;
		} else {
			runs.push({
				text: character,
				hand: isHandwritten,
				scale: scale,
			});
		}
	}
	return runs;
}
function useTextStyle() {
	let { state } = useWrite();
	if (state.font) {
		return `"${state.font.family}", var(--font-display)`;
	} else {
		return `var(--font-display)`;
	}
}
function LiveText({ text, className, shrink = 1 }) {
	let { state } = useWrite();
	let fontFamily = useTextStyle();
	let runs = textRuns(
		text,
		(character) => state.drawn.has(character.charCodeAt(0)),
		state.alignment.lines,
		shrink,
	);
	return (
		<span className={className}>
			<span className="sr-only">{text}</span>
			<span aria-hidden={true}>
				{runs.map((run, runIndex) =>
					run.hand ? (
						<span
							className="text-hand"
							style={{
								fontFamily: fontFamily,
							}}
							key={runIndex}
						>
							{run.text}
						</span>
					) : (
						<span
							className="font-display font-normal text-placeholder"
							style={{
								fontSize: `${run.scale.toFixed(3)}em`,
							}}
							key={runIndex}
						>
							{run.text}
						</span>
					),
				)}
			</span>
		</span>
	);
}
export { placeholderScale, textRuns, useTextStyle, LiveText };
