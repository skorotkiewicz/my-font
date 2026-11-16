var letterCount = (count) => `${count} ${count === 1 ? `letter` : `letters`}`;
var dayMs = 86400000;
var startOfDay = (timestamp) => new Date(timestamp).setHours(0, 0, 0, 0);
function relativeDate(timestamp) {
	const daysAgo = Math.round(
		(startOfDay(Date.now()) - startOfDay(timestamp)) / dayMs,
	);
	if (daysAgo === 0) {
		return `today`;
	}
	if (daysAgo === 1) {
		return `yesterday`;
	}
	const sameYear =
		new Date(timestamp).getFullYear() === new Date().getFullYear();
	return new Intl.DateTimeFormat(`en-GB`, {
		day: `numeric`,
		month: `short`,
		year: sameYear ? undefined : `numeric`,
	}).format(timestamp);
}
export { letterCount, relativeDate };
