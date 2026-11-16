var codepointRange = (argument, argument2) => Array.from({
  length: argument2.charCodeAt(0) - argument.charCodeAt(0) + 1
}, (argument3, argument4) => argument.charCodeAt(0) + argument4);
var punctuationCodepoints = `.,!?'"-:;()&@#$%*/+=_<>[]{}\\|^\`~`.split(``).map(argument => argument.charCodeAt(0));
var characterSets = [{
  id: `lowercase`,
  label: `Lowercase`,
  required: true,
  codepoints: codepointRange(`a`, `z`)
}, {
  id: `uppercase`,
  label: `Uppercase`,
  required: false,
  codepoints: codepointRange(`A`, `Z`)
}, {
  id: `digits`,
  label: `Numbers`,
  required: false,
  codepoints: codepointRange(`0`, `9`)
}, {
  id: `punctuation`,
  label: `Punctuation`,
  required: false,
  codepoints: punctuationCodepoints
}];
var allCodepoints = characterSets.flatMap(characterSet => characterSet.codepoints);
characterSets.filter(argument => argument.required).flatMap(characterSet => characterSet.codepoints);
var characterSetFor = argument => characterSets.find(characterSet => characterSet.codepoints.includes(argument));
var punctuationLabels = {
  ".": `a full stop`,
  ",": `a comma`,
  "!": `an exclamation mark`,
  "?": `a question mark`,
  "'": `an apostrophe`,
  "\"": `a quotation mark`,
  "-": `a hyphen`,
  ":": `a colon`,
  ";": `a semicolon`,
  "(": `an opening bracket`,
  ")": `a closing bracket`,
  "&": `an ampersand`,
  "@": `an at sign`,
  "#": `a hash`,
  $: `a dollar sign`,
  "%": `a percent sign`,
  "*": `an asterisk`,
  "/": `a slash`,
  "+": `a plus sign`,
  "=": `an equals sign`,
  _: `an underscore`,
  "<": `a less-than sign`,
  ">": `a greater-than sign`,
  "[": `an opening square bracket`,
  "]": `a closing square bracket`,
  "{": `an opening brace`,
  "}": `a closing brace`,
  "\\": `a backslash`,
  "|": `a vertical bar`,
  "^": `a caret`,
  "`": `a backtick`,
  "~": `a tilde`
};
var characterFor = argument => String.fromCharCode(argument);
function describeCharacter(argument) {
  let value = characterFor(argument);
  if (value >= `a` && value <= `z`) {
    return `a small ${value}`;
  } else if (value >= `A` && value <= `Z`) {
    return `a capital ${value}`;
  } else if (value >= `0` && value <= `9`) {
    return `the number ${value}`;
  } else {
    return punctuationLabels[value] ?? value;
  }
}
function characterLabel(argument) {
  let value = describeCharacter(argument).replace(/^(a|an|the) /, ``);
  return value[0].toUpperCase() + value.slice(1);
}
export { characterSets, allCodepoints, characterSetFor, characterFor, describeCharacter };
