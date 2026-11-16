import * as React from "react";
import { DownloadIcon } from "./icons.jsx";
import { describeCharacter } from "../data/characters.jsx";
import { useWrite } from "../state/WriteProvider.jsx";
import { useShortcutLabel } from "../hooks/useShortcutLabel.jsx";
import { NavigationButton, PrimaryButton, GlyphBadge } from "./ui/Buttons.jsx";
function GlyphTools() {
	let { state: value, actions: value2 } = useWrite();
	let {
		prevCp: value3,
		nextCp: value4,
		strokes: value5,
		canUndo: value6,
	} = value;
	let value7 = useShortcutLabel();
	return (
		<nav
			aria-label="Glyph tools"
			className="flex shrink-0 items-center justify-between gap-2 px-5 pt-4.5 compact:px-4 short-landscape:pt-3 short-landscape:pb-[max(env(safe-area-inset-bottom),0.75rem)] md:mx-auto md:w-(--tape-stage) md:px-0 lg:pt-6 lg:pb-9"
		>
			<div className="flex gap-1.5 compact:gap-1 lg:gap-2">
				<NavigationButton
					onClick={() => value2.go(value3)}
					disabled={value3 === undefined}
					aria-label={
						value3 === undefined
							? `Previous glyph`
							: `Back to ${describeCharacter(value3)}`
					}
					title="Back (\u2190)"
					aria-keyshortcuts="ArrowLeft"
					className={
						value3 === undefined ? `` : `pl-2 narrow:pr-2 lg:gap-2.5 lg:pl-2.5`
					}
				>
					{value3 === undefined ? (
						`Back`
					) : (
						<React.Fragment>
							<GlyphBadge cp={value3} className="bg-paper/18" />
							<span className="narrow:hidden">{`Back`}</span>
						</React.Fragment>
					)}
				</NavigationButton>
				<NavigationButton
					onClick={value2.undo}
					disabled={!value6}
					title={`Undo (${value7}Z)`}
					aria-keyshortcuts="Meta+Z Control+Z"
				>{`Undo`}</NavigationButton>
				<NavigationButton
					onClick={value2.clear}
					disabled={!value5.length}
				>{`Clear`}</NavigationButton>
			</div>
			{value4 === undefined ? (
				<PrimaryButton
					aria-haspopup="dialog"
					onClick={() => value2.openSheet(`export`)}
					className="pl-4 lg:h-12 lg:px-5.5 lg:pl-4.5"
				>
					<DownloadIcon className="size-5 shrink-0" />
					{`Export`}
				</PrimaryButton>
			) : (
				<PrimaryButton
					onClick={() => value2.go(value4)}
					aria-label={`Next: ${describeCharacter(value4)}`}
					title="Next (\u2192)"
					aria-keyshortcuts="ArrowRight"
					className="pr-2 pl-4.5 lg:h-12 lg:gap-3 lg:pr-2.5 lg:pl-5.5"
				>
					{`Next`}
					<GlyphBadge cp={value4} className="ms-0.5 bg-carbon/12" />
				</PrimaryButton>
			)}
		</nav>
	);
}
export { GlyphTools };
