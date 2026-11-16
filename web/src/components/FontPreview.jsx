import { FolderIcon } from "./icons.jsx";
import { characterFor } from "../data/characters.jsx";
import { useWrite } from "../state/WriteProvider.jsx";
import { LiveText } from "./LiveText.jsx";
import { specimenForCharacter } from "../data/specimens.jsx";
import { ToolButton } from "./ui/Buttons.jsx";
function OpenFontPrompt() {
	let { actions } = useWrite();
	return (
		<div className="flex w-full shrink-0 items-center justify-between gap-3 pt-3 short:hidden lg:hidden">
			<p className="min-w-0 truncate text-[0.9375rem] leading-5 text-paper/90">{`Made a font here before?`}</p>
			<ToolButton
				onClick={actions.chooseFont}
				aria-label="Open a font you made with Ductus"
				className="pl-3.5"
			>
				<FolderIcon className="size-5.5 shrink-0" />
				{`Open a font…`}
			</ToolButton>
		</div>
	);
}
function FontPreview() {
	let { state } = useWrite();
	let { cp: codepoint, drawn, status } = state;
	let [firstWord, ...remainingWords] = specimenForCharacter(
		characterFor(codepoint),
		(character) => drawn.has(character.charCodeAt(0)),
	);
	let isEmpty = status !== `loading` && drawn.size === 0;
	return (
		<section
			aria-label={`${characterFor(codepoint)} in your font`}
			className={`preview flex min-h-0 flex-1 flex-col px-5 pt-5 compact:px-4 short-landscape:hidden md:items-center md:justify-center md:pt-0 md:text-center ${isEmpty ? `[--reserve:5.75rem] short:[--reserve:2.25rem] lg:[--reserve:2.25rem]` : ``}`}
		>
			<p className="shrink-0 pb-1.5 text-caption font-medium text-paper/90 lg:pb-2">{`In your font`}</p>
			<div className="preview-lines relative w-full shrink-0 overflow-hidden text-[3.875rem] leading-[0.92] md:text-[5rem] lg:text-[6.75rem] lg:leading-[1.02]">
				<LiveText text={firstWord} className="block whitespace-nowrap" />
				<LiveText
					text={remainingWords.join(` `)}
					className="block text-balance"
				/>
			</div>
			{isEmpty ? <OpenFontPrompt /> : null}
		</section>
	);
}
export { FontPreview };
