import { characterFor } from "../../data/characters.jsx";
var buttonClass = `pressable flex shrink-0 items-center gap-2 rounded-full text-[0.9375rem] leading-5`;
var toolButtonClass = `${buttonClass} h-11 px-4`;
var secondaryButtonClass = `bg-paper/14 font-medium enabled:hover:bg-paper/20 enabled:active:bg-paper/24 disabled:opacity-40`;
var ToolButton = ({ className = ``, ...buttonProps }) => (
	<button
		type="button"
		{...buttonProps}
		className={`${toolButtonClass} ${secondaryButtonClass} ${className}`}
	/>
);
var NavigationButton = ({ className = ``, ...buttonProps }) => (
	<button
		type="button"
		{...buttonProps}
		className={`${buttonClass} h-11 px-3.5 lg:h-12 lg:px-5 ${secondaryButtonClass} ${className}`}
	/>
);
var OutlineButton = ({ className = ``, ...buttonProps }) => (
	<button
		type="button"
		{...buttonProps}
		className={`${toolButtonClass} font-medium inset-ring-[1.5px] inset-ring-paper/45 hover:bg-paper/8 active:bg-paper/12 disabled:opacity-40 ${className}`}
	/>
);
var PrimaryButton = ({ className = ``, ...buttonProps }) => (
	<button
		type="button"
		{...buttonProps}
		className={`${toolButtonClass} bg-paper font-semibold text-carbon [--color-hand:var(--color-carbon)] enabled:hover:bg-paper/92 disabled:opacity-40 ${className}`}
	/>
);
var GlyphBadge = ({ cp: codepoint, className = `` }) => (
	<span
		aria-hidden={true}
		className={`flex size-7 shrink-0 items-center justify-center rounded-full pb-px font-wide text-[0.9375rem] leading-none lg:size-7.5 lg:text-base ${className}`}
	>
		{characterFor(codepoint)}
	</span>
);
export {
	ToolButton,
	NavigationButton,
	OutlineButton,
	PrimaryButton,
	GlyphBadge,
};
