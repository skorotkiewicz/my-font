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
	const runs = [];
	for (const character of text) {
		const isHandwritten = character === ` ` || hasDrawing(character);
		const scale = isHandwritten
			? 1
			: placeholderScale(character, lines) * shrink;
		const previousRun = runs[runs.length - 1];
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
	const { state } = useWrite();
	if (state.font) {
		return `"${state.font.family}", var(--font-display)`;
	} else {
		return `var(--font-display)`;
	}
}
function LiveText({ text, className, shrink = 1 }) {
	const { state } = useWrite();
	const fontFamily = useTextStyle();
	const runs = textRuns(
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
							key={
								// biome-ignore lint/suspicious/noArrayIndexKey: Runs render stateless spans, so reusing a position cannot transfer component state.
								runIndex
							}
						>
							{run.text}
						</span>
					) : (
						<span
							className="font-display font-normal text-placeholder"
							style={{
								fontSize: `${run.scale.toFixed(3)}em`,
							}}
							key={
								// biome-ignore lint/suspicious/noArrayIndexKey: Runs render stateless spans, so reusing a position cannot transfer component state.
								runIndex
							}
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
