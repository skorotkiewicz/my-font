var authorCredit = {
	name: `sorenblank`,
	url: `https://sorenblank.com`,
};
function Credit() {
	return (
		<p
			data-credit={true}
			className="-mb-[min(env(safe-area-inset-bottom),1.75rem)] pt-2.5 text-center text-caption text-paper/90"
		>
			{`Made with care by`}
			{` `}
			<a
				href={authorCredit.url}
				target="_blank"
				rel="noopener author"
				draggable={false}
				className="relative inline-block rounded-sm font-medium text-paper underline decoration-paper/40 underline-offset-3 before:absolute before:-inset-x-3 before:-top-2.5 before:-bottom-4 hover:decoration-paper"
			>
				{authorCredit.name}
			</a>
		</p>
	);
}
export { Credit };
