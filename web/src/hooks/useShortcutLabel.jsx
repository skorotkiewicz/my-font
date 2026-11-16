import * as React from "react";
var subscribeNothing = () => () => {};
var isApplePlatform = () =>
	/Mac|iPhone|iPad/.test(navigator.platform) ||
	/Mac OS/.test(navigator.userAgent);
function useShortcutLabel() {
	return React.useSyncExternalStore(
		subscribeNothing,
		() => (isApplePlatform() ? `⌘` : `Ctrl+`),
		() => `⌘`,
	);
}
export { useShortcutLabel };
