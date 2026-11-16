import assert from "node:assert/strict";
import {
	mkdirSync,
	writeFileSync,
	readFileSync,
	readdirSync,
	unlinkSync,
} from "node:fs";
import path from "node:path";
import { spawn } from "node:child_process";

const root = path.resolve(import.meta.dirname, "..");
const artifacts = path.join(import.meta.dirname, "artifacts");
mkdirSync(artifacts, { recursive: true });
for (const file of readdirSync(artifacts))
	if (/\.(otf|woff2)$/.test(file)) unlinkSync(path.join(artifacts, file));
const browser = spawn(
	"chromium",
	[
		"--headless",
		"--disable-gpu",
		"--remote-debugging-port=0",
		"--user-data-dir=" + path.join(import.meta.dirname, ".browser-profile"),
		"about:blank",
	],
	{ stdio: ["ignore", "ignore", "pipe"] },
);
const port = await new Promise((resolve, reject) => {
	const timer = setTimeout(
		() => reject(Error("Chromium did not start")),
		15000,
	);
	browser.stderr.on("data", (chunk) => {
		const match = String(chunk).match(
			/DevTools listening on ws:\/\/127\.0\.0\.1:(\d+)/,
		);
		if (match) {
			clearTimeout(timer);
			resolve(match[1]);
		}
	});
	browser.once("exit", (code) => {
		clearTimeout(timer);
		reject(Error("Chromium exited: " + code));
	});
});
const target = await fetch(`http://127.0.0.1:${port}/json/new?about:blank`, {
	method: "PUT",
}).then((r) => r.json());
const socket = new WebSocket(target.webSocketDebuggerUrl);
await new Promise((resolve) =>
	socket.addEventListener("open", resolve, { once: true }),
);
let sequence = 0;
const pending = new Map();
const exceptions = [];
const failures = [];
socket.addEventListener("message", ({ data }) => {
	const message = JSON.parse(data);
	if (message.id) {
		const task = pending.get(message.id);
		pending.delete(message.id);
		message.error
			? task.reject(Error(task.method + ": " + JSON.stringify(message.error)))
			: task.resolve(message.result);
	}
	if (message.method === "Runtime.exceptionThrown")
		exceptions.push(
			message.params.exceptionDetails.exception?.description ??
				message.params.exceptionDetails.text,
		);
	if (
		message.method === "Network.responseReceived" &&
		message.params.response.status >= 400
	)
		failures.push(message.params.response.url);
});
const send = (method, params = {}) =>
	new Promise((resolve, reject) => {
		const id = ++sequence;
		pending.set(id, { resolve, reject, method });
		socket.send(JSON.stringify({ id, method, params }));
	});
const evaluate = async (expression) => {
	const result = await send("Runtime.evaluate", {
		expression,
		awaitPromise: true,
		returnByValue: true,
	});
	if (result.exceptionDetails)
		throw Error(
			result.exceptionDetails.exception?.description ??
				result.exceptionDetails.text,
		);
	return result.result.value;
};
const waitFor = async (expression) => {
	const deadline = Date.now() + 15000;
	while (Date.now() < deadline) {
		try {
			if (await evaluate(`Boolean(${expression})`)) return;
		} catch (error) {
			if (
				!/navigated or closed|context.*destroyed|Cannot find context/.test(
					error.message,
				)
			)
				throw error;
		}
		await new Promise((resolve) => setTimeout(resolve, 50));
	}
	throw Error("Timed out: " + expression);
};
const click = async (expression) => {
	const box = await evaluate(
		`(()=>{const element=${expression};if(!element)throw Error('Missing click target');const b=element.getBoundingClientRect();return {x:b.x+b.width/2,y:b.y+b.height/2}})()`,
	);
	await send("Input.dispatchMouseEvent", {
		type: "mousePressed",
		...box,
		button: "left",
		clickCount: 1,
	});
	await send("Input.dispatchMouseEvent", {
		type: "mouseReleased",
		...box,
		button: "left",
		clickCount: 1,
	});
};
const button = (text) =>
	`[...document.querySelectorAll('button')].find(b=>b.textContent.trim()===${JSON.stringify(text)})`;
const screenshot = async (name) => {
	const { data } = await send("Page.captureScreenshot", { format: "png" });
	writeFileSync(
		path.join(artifacts, name + ".png"),
		Buffer.from(data, "base64"),
	);
};
try {
	await send("Page.enable");
	await send("Runtime.enable");
	await send("Network.enable");
	await send("Storage.clearDataForOrigin", {
		origin: new URL(process.env.APP_URL ?? "http://127.0.0.1:5175/").origin,
		storageTypes: "indexeddb",
	});
	await send("Browser.setDownloadBehavior", {
		behavior: "allow",
		downloadPath: artifacts,
	});
	await send("Emulation.setDeviceMetricsOverride", {
		width: 1440,
		height: 1000,
		deviceScaleFactor: 1,
		mobile: false,
	});
	await send("Page.navigate", {
		url: process.env.APP_URL ?? "http://127.0.0.1:5175/",
	});
	await waitFor(
		`document.querySelector('svg[aria-label^="Drawing area"]') && !document.body.textContent.includes('Finding your letters')`,
	);
	await screenshot("desktop");
	assert.match(await evaluate("document.body.innerText"), /Write a small a/);
	const canvas = `document.querySelector('svg[aria-label^="Drawing area"]')`;
	const rect = await evaluate(
		`(()=>{const b=${canvas}.getBoundingClientRect();return {x:b.x,y:b.y,width:b.width,height:b.height}})()`,
	);
	const x = rect.x + rect.width / 2,
		y = rect.y + rect.height * 0.5;
	await send("Input.dispatchMouseEvent", {
		type: "mousePressed",
		x: x - 30,
		y,
		button: "left",
		clickCount: 1,
	});
	for (let index = 0; index <= 24; index++)
		await send("Input.dispatchMouseEvent", {
			type: "mouseMoved",
			x: x - 30 + Math.sin((index / 24) * Math.PI * 2) * 35,
			y: y + Math.cos((index / 24) * Math.PI * 2) * 45,
			button: "left",
			buttons: 1,
		});
	await send("Input.dispatchMouseEvent", {
		type: "mouseReleased",
		x,
		y,
		button: "left",
		clickCount: 1,
	});
	await waitFor(`${canvas}.querySelectorAll('g path[d]').length>1`);
	await click(button("Undo"));
	assert.equal(
		await evaluate(`${canvas}.querySelectorAll('g path[d]').length`),
		1,
	);
	// Draw a new stroke and verify clear, then draw one to export and persist.
	for (let pass = 0; pass < 2; pass++) {
		await send("Input.dispatchMouseEvent", {
			type: "mousePressed",
			x: x - 25,
			y: y + 20,
			button: "left",
			clickCount: 1,
		});
		await send("Input.dispatchMouseEvent", {
			type: "mouseMoved",
			x: x + 25,
			y: y - 30,
			button: "left",
			buttons: 1,
		});
		await send("Input.dispatchMouseEvent", {
			type: "mouseReleased",
			x: x + 25,
			y: y - 30,
			button: "left",
			clickCount: 1,
		});
		await waitFor(`${canvas}.querySelectorAll('g path[d]').length>1`);
		if (pass === 0) {
			await click(button("Clear"));
			assert.equal(
				await evaluate(`${canvas}.querySelectorAll('g path[d]').length`),
				1,
			);
		}
	}
	await waitFor(`document.body.textContent.includes('Saved on this')`);
	await click(`document.querySelector('[data-anchor="picker"]')`);
	await waitFor(
		`document.querySelector('dialog[open]')?.textContent.includes('All glyphs')`,
	);
	await click(`document.querySelector('dialog[open] button[data-cp="98"]')`);
	await waitFor(`document.body.textContent.includes('Write a small b')`);
	await send("Input.dispatchKeyEvent", {
		type: "keyDown",
		key: "ArrowLeft",
		code: "ArrowLeft",
		windowsVirtualKeyCode: 37,
	});
	await waitFor(`document.body.textContent.includes('Write a small a')`);
	await click(button("Adjust"));
	await waitFor(
		`document.querySelector('dialog[open]')?.textContent.includes('Adjust letters')`,
	);
	await send("Input.dispatchKeyEvent", {
		type: "keyDown",
		key: "Escape",
		code: "Escape",
		windowsVirtualKeyCode: 27,
	});
	await waitFor(`!document.querySelector('dialog[open]')`);
	await click(button("Export"));
	await waitFor(
		`document.querySelector('textarea')&&[...document.querySelectorAll('button')].some(b=>b.textContent.includes('Download WOFF2')&&!b.disabled)`,
	);
	await screenshot("export");
	await click(
		`[...document.querySelectorAll('button')].find(b=>b.textContent.includes('Download OTF'))`,
	);
	await click(
		`[...document.querySelectorAll('button')].find(b=>b.textContent.includes('Download WOFF2'))`,
	);
	await evaluate("new Promise(resolve=>setTimeout(resolve,600))");
	const otf = readdirSync(artifacts).find((file) => file.endsWith(".otf"));
	const woff = readdirSync(artifacts).find((file) => file.endsWith(".woff2"));
	assert.ok(otf, "OTF download");
	assert.ok(woff, "WOFF2 download");
	assert.equal(
		readFileSync(path.join(artifacts, otf)).subarray(0, 4).toString(),
		"OTTO",
	);
	assert.equal(
		readFileSync(path.join(artifacts, woff)).subarray(0, 4).toString(),
		"wOF2",
	);
	// The OTF contains the project table and must reopen with the saved drawing.
	const otfBytes = readFileSync(path.join(artifacts, otf));
	assert.ok(otfBytes.includes(Buffer.from("DUCT")));
	assert.ok(
		await evaluate(
			`import('/src/lib/projectFont.jsx').then(async ({readProjectFont})=>{const bytes=Uint8Array.from(atob(${JSON.stringify(otfBytes.toString("base64"))}),c=>c.charCodeAt(0));const result=await readProjectFont(bytes.buffer);return result.ok&&result.project.glyphs[97].drawings[0].strokes.length>0})`,
		),
		"OTF project round trip",
	);
	await click(button("Style…"));
	await waitFor(
		`document.querySelector('dialog[open]')?.textContent.includes('Colour')||document.querySelector('input[name="picture-paper"]')`,
	);
	await screenshot("picture");
	await send("Input.dispatchKeyEvent", {
		type: "keyDown",
		key: "Escape",
		code: "Escape",
		windowsVirtualKeyCode: 27,
	});
	const previousTimeOrigin = await evaluate("performance.timeOrigin");
	await send("Page.reload", { ignoreCache: true });
	await waitFor(
		`performance.timeOrigin!==${previousTimeOrigin}&&document.readyState==='complete'&&document.querySelector('svg[aria-label^="Drawing area"]')&&!document.body.textContent.includes('Finding your letters')`,
	);
	await send("Input.dispatchKeyEvent", {
		type: "keyDown",
		key: "ArrowLeft",
		code: "ArrowLeft",
		windowsVirtualKeyCode: 37,
	});
	await waitFor(`document.body.textContent.includes('Write a small a')`);
	assert.ok(
		await evaluate(
			`${canvas}.querySelectorAll('g path[d]:not([d=""])').length>0`,
		),
		"drawing restored",
	);
	await send("Emulation.setDeviceMetricsOverride", {
		width: 390,
		height: 844,
		deviceScaleFactor: 1,
		mobile: true,
	});
	await screenshot("mobile");
	assert.equal(
		await evaluate("document.documentElement.scrollWidth>innerWidth"),
		false,
		"no horizontal overflow",
	);
	assert.deepEqual(exceptions, [], "no browser exceptions");
	assert.deepEqual(failures, [], "no failed asset requests");
	writeFileSync(
		path.join(artifacts, "browser-report.json"),
		JSON.stringify(
			{
				passed: [
					"drawing",
					"undo",
					"clear",
					"glyph picker",
					"keyboard navigation",
					"adjust dialog",
					"OTF download",
					"WOFF2 download",
					"project table",
					"picture panel",
					"IndexedDB persistence",
					"mobile layout",
				],
				exceptions,
				failedRequests: failures,
			},
			null,
			2,
		) + "\n",
	);
	console.log(
		"Browser checks passed. Screenshots and font downloads saved under tools/artifacts/.",
	);
} catch (error) {
	await screenshot("failure").catch(() => {});
	writeFileSync(
		path.join(artifacts, "browser-failure.json"),
		JSON.stringify({ error: error.stack, exceptions, failures }, null, 2),
	);
	throw error;
} finally {
	await send("Page.close").catch(() => {});
	socket.close();
	browser.kill();
}
