import {
	copyFileSync,
	existsSync,
	mkdirSync,
	readFileSync,
	rmdirSync,
	unlinkSync,
	writeFileSync,
} from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const fontFiles = [
	[
		"archivo-4c5525e89413/archivo-880aee5b.woff2",
		"archivo/archivo-vietnamese.woff2",
	],
	[
		"archivo-4c5525e89413/archivo-8312402b.woff2",
		"archivo/archivo-latin-ext.woff2",
	],
	[
		"archivo-4c5525e89413/archivo-b42cd543.woff2",
		"archivo/archivo-latin.woff2",
	],
	[
		"instrument-sans-9d9d2b4013ea/instrument-sans-416253b0.woff2",
		"instrument-sans/instrument-sans-latin-ext.woff2",
	],
	[
		"instrument-sans-9d9d2b4013ea/instrument-sans-e190a634.woff2",
		"instrument-sans/instrument-sans-latin.woff2",
	],
];
const fontClasses = {
	__font_archivo_0e70d3v: "font-archivo",
	__variable_archivo_0e70d3v: "font-archivo-variable",
	__font_instrument_sans_1cs6g05: "font-instrument-sans",
	__variable_instrument_sans_1cs6g05: "font-instrument-sans-variable",
};

export function recoverFonts(root) {
	const capturedHtml = readFileSync(
		path.join(root, "resources/index.html"),
		"utf8",
	);
	let css = capturedHtml.match(
		/<style data-vinext-fonts>([\s\S]*?)<\/style>/,
	)[1];
	const publicFonts = path.join(root, "web/public/fonts");
	for (const [source, destination] of fontFiles) {
		const target = path.join(publicFonts, destination);
		mkdirSync(path.dirname(target), { recursive: true });
		copyFileSync(
			path.join(root, "resources/_next/static/_vinext_fonts", source),
			target,
		);
		css = css.replaceAll(
			"/_next/static/_vinext_fonts/" + source,
			"/fonts/" + destination,
		);
		const oldFile = path.join(publicFonts, source);
		if (existsSync(oldFile)) unlinkSync(oldFile);
	}
	for (const directory of new Set(
		fontFiles.map(([source]) => path.dirname(source)),
	)) {
		const oldDirectory = path.join(publicFonts, directory);
		if (existsSync(oldDirectory)) {
			try {
				rmdirSync(oldDirectory);
			} catch (error) {
				if (error.code !== "ENOTEMPTY") throw error;
			}
		}
	}
	const indexPath = path.join(root, "web/index.html");
	let indexHtml = readFileSync(indexPath, "utf8");
	for (const [original, renamed] of Object.entries(fontClasses)) {
		css = css.replaceAll(original, renamed);
		indexHtml = indexHtml.replaceAll(original, renamed);
	}
	mkdirSync(path.join(root, "web/src/styles"), { recursive: true });
	writeFileSync(path.join(root, "web/src/styles/fonts.css"), css);
	writeFileSync(indexPath, indexHtml);
	return fontFiles.map(([, file]) => "fonts/" + file);
}

if (
	process.argv[1] &&
	path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)
) {
	console.log(
		"Recovered fonts:",
		recoverFonts(path.resolve(import.meta.dirname, "..")).join(", "),
	);
}
