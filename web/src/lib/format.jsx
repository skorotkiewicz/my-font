var letterCount = argument => `${argument} ${argument === 1 ? `letter` : `letters`}`;
var dayMs = 86400000;
var startOfDay = argument => new Date(argument).setHours(0, 0, 0, 0);
function relativeDate(argument) {
  let value = Math.round((startOfDay(Date.now()) - startOfDay(argument)) / dayMs);
  if (value === 0) {
    return `today`;
  }
  if (value === 1) {
    return `yesterday`;
  }
  let value2 = new Date(argument).getFullYear() === new Date().getFullYear();
  return new Intl.DateTimeFormat(`en-GB`, {
    day: `numeric`,
    month: `short`,
    year: value2 ? undefined : `numeric`
  }).format(argument);
}
export { letterCount, relativeDate };
