import { characterFor } from "../../data/characters.jsx";
var buttonClass = `pressable flex shrink-0 items-center gap-2 rounded-full text-[0.9375rem] leading-5`;
var toolButtonClass = `${buttonClass} h-11 px-4`;
var secondaryButtonClass = `bg-paper/14 font-medium enabled:hover:bg-paper/20 enabled:active:bg-paper/24 disabled:opacity-40`;
var ToolButton = ({
  className: argument2 = ``,
  ...argument
}) => <button type={`button`} {...argument} className={`${toolButtonClass} ${secondaryButtonClass} ${argument2}`} />;
var NavigationButton = ({
  className: argument2 = ``,
  ...argument
}) => <button type={`button`} {...argument} className={`${buttonClass} h-11 px-3.5 lg:h-12 lg:px-5 ${secondaryButtonClass} ${argument2}`} />;
var OutlineButton = ({
  className: argument2 = ``,
  ...argument
}) => <button type={`button`} {...argument} className={`${toolButtonClass} font-medium inset-ring-[1.5px] inset-ring-paper/45 hover:bg-paper/8 active:bg-paper/12 disabled:opacity-40 ${argument2}`} />;
var PrimaryButton = ({
  className: argument2 = ``,
  ...argument
}) => <button type={`button`} {...argument} className={`${toolButtonClass} bg-paper font-semibold text-carbon [--color-hand:var(--color-carbon)] enabled:hover:bg-paper/92 disabled:opacity-40 ${argument2}`} />;
var GlyphBadge = ({
  cp: argument,
  className: argument2 = ``
}) => <span aria-hidden={true} className={`flex size-7 shrink-0 items-center justify-center rounded-full pb-px font-wide text-[0.9375rem] leading-none lg:size-7.5 lg:text-base ${argument2}`}>{characterFor(argument)}</span>;
export { ToolButton, NavigationButton, OutlineButton, PrimaryButton, GlyphBadge };
