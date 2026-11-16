import * as React from "react";
import { preloadExport } from "../lib/recoveredRuntime.jsx";
import {
	FolderIcon,
	PrivacyIcon,
	CheckCircleIcon,
	WarningIcon,
} from "./icons.jsx";
import { useWrite } from "../state/WriteProvider.jsx";
import { Wordmark } from "./Wordmark.jsx";
import { ToolButton } from "./ui/Buttons.jsx";
var deviceLabel = (
	<React.Fragment>
		<span className="md:hidden pointer-fine:hidden">{`phone`}</span>
		<span className="hidden md:pointer-coarse:inline">{`device`}</span>
		<span className="hidden pointer-fine:inline">{`computer`}</span>
	</React.Fragment>
);
var saveStatusContent = {
	loading: {
		icon: (
			<span className="size-4 shrink-0 motion-safe:animate-spin">
				<svg
					viewBox="0 0 20 20"
					aria-hidden={true}
					className="block size-4"
					fill="none"
					strokeWidth={2.5}
				>
					<circle cx="10" cy="10" r="8.5" className="stroke-paper/30" />
					<path
						d="M10 1.5A8.5 8.5 0 0 1 18.5 10"
						strokeLinecap="round"
						className="stroke-paper"
					/>
				</svg>
			</span>
		),
		text: `Finding your letters`,
	},
	fresh: {
		icon: <PrivacyIcon className="size-4 shrink-0" />,
		text: (
			<React.Fragment>
				{`Your letters stay on this `}
				{deviceLabel}
			</React.Fragment>
		),
	},
	saved: {
		icon: <CheckCircleIcon className="icon-in size-4 shrink-0" />,
		text: (
			<React.Fragment>
				{`Saved on this `}
				{deviceLabel}
			</React.Fragment>
		),
	},
};
function SaveStatus({ className = `` }) {
	let { state } = useWrite();
	let { status, drawn } = state;
	if (status === `unsaved`) {
		return (
			<p
				role="status"
				className={`h-8 items-center gap-1.5 rounded-full bg-paper pr-3.5 pl-2.5 text-caption font-medium text-ink ${className}`}
			>
				<WarningIcon className="icon-in size-4.5 shrink-0 text-danger" />
				{`Not saved. Export to keep your letters.`}
			</p>
		);
	}
	let { icon: statusIcon, text: statusText } =
		saveStatusContent[
			status === `loading` ? `loading` : drawn.size ? `saved` : `fresh`
		];
	return (
		<p
			role="status"
			className={`h-8 items-center gap-1.5 text-caption font-medium text-paper/90 ${className}`}
		>
			{statusIcon}
			<span>{statusText}</span>
		</p>
	);
}
function AppHeader() {
	let { state, actions } = useWrite();
	let isEmpty = state.status !== `loading` && state.drawn.size === 0;
	return (
		<header className="flex shrink-0 items-center justify-between gap-3 px-5 pt-[calc(env(safe-area-inset-top)+0.5rem)] compact:px-4 lg:gap-6 lg:px-20 lg:pt-8">
			<Wordmark className="lg:text-4xl" />
			<div className="flex min-w-0 items-center gap-5">
				<SaveStatus className="hidden min-w-0 lg:flex short-landscape:flex" />
				<div data-anchor="actions" className="flex shrink-0 gap-2">
					{isEmpty ? (
						<span className="hidden lg:block">
							<ToolButton
								onClick={actions.chooseFont}
								aria-label="Open a font you made with Ductus"
								className="pl-3.5"
							>
								<FolderIcon className="size-5 shrink-0" />
								{`Open a font…`}
							</ToolButton>
						</span>
					) : null}
					<ToolButton
						aria-haspopup="dialog"
						onClick={() => actions.openSheet(`adjust`)}
						className="lg:px-4.5"
					>{`Adjust`}</ToolButton>
					<ToolButton
						aria-haspopup="dialog"
						onClick={() => actions.openSheet(`export`)}
						onPointerEnter={preloadExport}
						onFocus={preloadExport}
						className="lg:px-4.5"
					>{`Export`}</ToolButton>
				</div>
			</div>
		</header>
	);
}
export { SaveStatus, AppHeader };
