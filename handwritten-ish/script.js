const $ = (selector) => document.querySelector(selector);
const note = $("#handwriting");
const desk = $("#desk");
const status = $("#font-state");
const fontInput = $("#font-file");
const samples = [
	`Dear future me,\n\nPlease remember where we hid the snacks.\n\nLove,\nPast you (the suspicious one)`,
	`OFFICIAL NOTICE:\n\nI hereby declare that all Mondays are cancelled until further notice.\n\nSigned,\nThe Department of Absolutely Not`,
	`My shopping list:\n\n- bread\n- milk\n- 47 rubber ducks\n- a tiny crown for the ducks\n- bread (again)`,
	`Dear diary,\n\nToday I turned my handwriting into a font.\n\nSoon I'll outsource all my birthday cards to a computer.\n\nPlease don't tell Grandma.`,
	`This is a ransom note.\n\nWe have your socks.\n\nLeave three cookies under the couch by midnight.\n\nNo funny business.\n\n— The Washing Machine`,
	`To whom it may concern:\n\nI am not procrastinating.\nI am performing advanced research into the precise texture of this ceiling.\n\nKind regards,\nMe`,
];
let sampleIndex = -1;
let toastTimer;
let liveFontUrl;

function showToast(message) {
	const toast = $("#toast");
	toast.textContent = message;
	toast.classList.add("show");
	clearTimeout(toastTimer);
	toastTimer = setTimeout(() => toast.classList.remove("show"), 2400);
}

function updateStats() {
	const text = note.value;
	const words = text.trim() ? text.trim().split(/\s+/u).length : 0;
	$("#word-count").textContent = `${words} word${words === 1 ? "" : "s"}`;
	$("#char-count").textContent = `${Array.from(text).length} characters`;
}

function setStatus(message, type = "") {
	status.textContent = message;
	status.className = `font-state ${type}`;
}

async function useFont(file) {
	if (!file || !/\.woff2?$/i.test(file.name)) {
		showToast("A .woff2 or .woff font, please!");
		return;
	}
	const url = URL.createObjectURL(file);
	try {
		const face = new FontFace("MyHandLive", `url("${url}")`);
		await face.load();
		document.fonts.add(face);
		document.documentElement.style.setProperty("--hand-font", "MyHandLive");
		if (liveFontUrl) URL.revokeObjectURL(liveFontUrl);
		liveFontUrl = url;
		setStatus(`✓ Using ${file.name} — certified yours!`, "ok");
		showToast("Your handwriting has entered the chat.");
	} catch {
		URL.revokeObjectURL(url);
		setStatus("Could not load that font. Try a valid .woff2 file.", "warn");
	}
}

async function checkDefaultFont() {
	try {
		const face = new FontFace("MyHandDefault", 'url("./MyHand-Regular.woff2")');
		await face.load();
		document.fonts.add(face);
		document.documentElement.style.setProperty("--hand-font", "MyHandDefault");
		setStatus("✓ Your MyHand-Regular.woff2 is loaded. Fancy!", "ok");
	} catch {
		setStatus(
			"Font missing: put MyHand-Regular.woff2 next to index.html, or load one above.",
			"warn",
		);
	}
}

$("#paper-date").textContent = new Intl.DateTimeFormat("en", {
	month: "short",
	day: "numeric",
	year: "numeric",
})
	.format(new Date())
	.toUpperCase();
note.addEventListener("input", updateStats);
updateStats();
checkDefaultFont();

$("#font-size").addEventListener("input", (event) => {
	const size = event.target.value;
	document.documentElement.style.setProperty("--hand-size", `${size}px`);
	$("#size-value").textContent = `${size}px`;
});

for (const swatch of document.querySelectorAll(".swatch")) {
	swatch.addEventListener("click", () => {
		document.documentElement.style.setProperty("--ink", swatch.dataset.ink);
		document.querySelectorAll(".swatch").forEach((button) => {
			const selected = button === swatch;
			button.classList.toggle("selected", selected);
			button.setAttribute("aria-pressed", String(selected));
		});
	});
}

$("#font-button").addEventListener("click", () => fontInput.click());
fontInput.addEventListener("change", () => {
	useFont(fontInput.files?.[0]);
	fontInput.value = "";
});

// Keep normal text dropping into the textarea possible; intercept only font files.
desk.addEventListener("dragover", (event) => {
	if (event.dataTransfer?.types.includes("Files")) {
		event.preventDefault();
		desk.classList.add("dragging");
	}
});
desk.addEventListener("dragleave", (event) => {
	if (!desk.contains(event.relatedTarget)) desk.classList.remove("dragging");
});
desk.addEventListener("drop", (event) => {
	if (event.dataTransfer?.files.length) {
		event.preventDefault();
		desk.classList.remove("dragging");
		useFont(event.dataTransfer.files[0]);
	}
});

$("#random").addEventListener("click", () => {
	sampleIndex =
		(sampleIndex + 1 + Math.floor(Math.random() * (samples.length - 1))) %
		samples.length;
	note.value = samples[sampleIndex];
	updateStats();
	showToast("Fresh nonsense, straight from the factory.");
});

$("#copy").addEventListener("click", async () => {
	try {
		await navigator.clipboard.writeText(note.value);
	} catch {
		note.focus();
		note.select();
		if (!document.execCommand("copy")) {
			showToast("Select the text and press Ctrl+C.");
			return;
		}
	}
	showToast("Copied. Your secrets are portable now.");
});

$("#download").addEventListener("click", () => {
	const blob = new Blob([note.value], { type: "text/plain;charset=utf-8" });
	const url = URL.createObjectURL(blob);
	const link = document.createElement("a");
	link.href = url;
	link.download = "my-very-important-note.txt";
	document.body.append(link);
	link.click();
	link.remove();
	setTimeout(() => URL.revokeObjectURL(url), 1000);
	showToast("Saved! The font stays on the page, though.");
});

$("#clear").addEventListener("click", () => {
	note.value = "";
	updateStats();
	note.focus();
	showToast("Evidence destroyed.");
});
