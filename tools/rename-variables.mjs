import { readFileSync, writeFileSync, readdirSync, mkdirSync } from "node:fs";
import { createRequire } from "node:module";
import path from "node:path";
import { fileURLToPath } from "node:url";

const require = createRequire(import.meta.url);
const { parse } = require("@babel/parser");
const traverse = require("@babel/traverse").default;
const generate = require("@babel/generator").default;
const t = require("@babel/types");
export const root = path.resolve(import.meta.dirname, "..");
const placeholder = /^(?:value|argument)\d*$/;
const mapPath = path.join(root, "variable-map.json");
const readAst = (file) =>
	parse(readFileSync(path.join(root, file), "utf8"), {
		sourceType: "module",
		plugins: ["jsx"],
	});
export function bindingsFor(file) {
	const ast = readAst(file),
		bindings = [];
	traverse(ast, {
		Scope(p) {
			for (const binding of Object.values(p.scope.bindings)) {
				if (!placeholder.test(binding.identifier.name)) continue;
				const top =
					binding.path.findParent((q) => q.parentPath?.isProgram()) ??
					binding.path;
				const owner = Object.keys(t.getOuterBindingIdentifiers(top.node))[0];
				bindings.push({
					binding,
					owner,
					start: binding.identifier.start,
					name: binding.identifier.name,
					line: binding.identifier.loc.start.line,
				});
			}
		},
	});
	return { ast, bindings };
}
export function renameFile(file, suggestions, batch) {
	const { ast, bindings } = bindingsFor(file);
	const changes = [];
	for (const entry of bindings) {
		const proposed = suggestions[entry.start];
		if (!proposed) continue;
		if (!t.isValidIdentifier(proposed) || placeholder.test(proposed))
			throw Error("Invalid semantic name: " + proposed);
		const existing = entry.binding.scope.getBinding(proposed);
		if (existing && existing !== entry.binding)
			throw Error(
				`${file}:${entry.line}: ${proposed} already exists; choose a distinct name`,
			);
		for (const other of changes)
			if (
				other.renamed === proposed &&
				(other.binding.scope === entry.binding.scope ||
					other.binding.scope.path.isAncestor(entry.binding.scope.path) ||
					entry.binding.scope.path.isAncestor(other.binding.scope.path))
			)
				throw Error(
					`${file}:${entry.line}: conflicting planned name ${proposed}`,
				);
		changes.push({ ...entry, renamed: proposed });
	}
	for (let index = 0; index < changes.length; index++)
		changes[index].binding.scope.rename(
			changes[index].name,
			"__semanticRename" + index,
		);
	for (let index = 0; index < changes.length; index++)
		changes[index].binding.scope.rename(
			"__semanticRename" + index,
			changes[index].renamed,
		);
	writeFileSync(
		path.join(root, file),
		generate(ast, { comments: true }).code + "\n",
	);
	mkdirSync(path.join(root, "tools/.renames"), { recursive: true });
	const report = path.join(root, "tools/.renames", batch + ".json");
	let all = [];
	try {
		all = JSON.parse(readFileSync(report, "utf8"));
	} catch {}
	all.push(...changes.map(({ binding, ...entry }) => ({ file, ...entry })));
	writeFileSync(report, JSON.stringify(all, null, 2) + "\n");
	return changes.length;
}
function filesBelow(directory) {
	return readdirSync(path.join(root, directory), {
		withFileTypes: true,
	}).flatMap((item) =>
		item.isDirectory()
			? filesBelow(directory + "/" + item.name)
			: /\.jsx?$/.test(item.name)
				? [directory + "/" + item.name]
				: [],
	);
}
function linkMap() {
	const mapping = JSON.parse(readFileSync(mapPath, "utf8"));
	const grouped = new Map();
	for (const source of [
		...new Set(mapping.bindings.map((entry) => entry.source)),
	]) {
		const ast = readAst(
			"webcrack-out/deobfuscated/" + source.replace(/\.js$/, ".jsx"),
		);
		const topEntries = mapping.bindings.filter(
			(entry) => entry.source === source && entry.scope === 0,
		);
		const owners = ast.program.body
			.filter((node) => !t.isImportDeclaration(node))
			.map((node) => {
				const ids = t.getOuterBindingIdentifiers(node);
				const id = Object.values(ids)[0];
				const owner =
					id &&
					topEntries.find((entry) => entry.position === id.start)?.renamed;
				return { start: node.start, end: node.end, owner };
			});
		for (const entry of mapping.bindings.filter(
			(entry) => entry.source === source && placeholder.test(entry.renamed),
		)) {
			const owner = owners.find(
				(node) => entry.position >= node.start && entry.position < node.end,
			)?.owner;
			const key = owner + "|" + entry.renamed;
			if (!grouped.has(key)) grouped.set(key, []);
			grouped.get(key).push(entry);
		}
	}
	for (const entries of grouped.values())
		entries.sort((a, b) => a.position - b.position);
	let linked = 0;
	const errors = [];
	for (const file of filesBelow("web/src")) {
		const { bindings } = bindingsFor(file);
		const rendered = new Map();
		for (const entry of bindings) {
			const key = entry.owner + "|" + entry.name;
			if (!rendered.has(key)) rendered.set(key, []);
			rendered.get(key).push(entry);
		}
		for (const [key, entries] of rendered) {
			entries.sort((a, b) => a.start - b.start);
			const original = grouped.get(key) ?? [];
			if (original.length !== entries.length) {
				errors.push(
					`${file} ${key}: ${original.length} source bindings, ${entries.length} output bindings`,
				);
				continue;
			}
			entries.forEach((entry, index) => {
				original[index].outputFile = file;
				original[index].outputPosition = entry.start;
				linked++;
			});
		}
	}
	if (errors.length) throw Error(errors.join("\n"));
	writeFileSync(mapPath, JSON.stringify(mapping, null, 2) + "\n");
	console.log(
		"Linked",
		linked,
		"placeholder bindings to the original variable map.",
	);
}
function syncMap() {
	const mapping = JSON.parse(readFileSync(mapPath, "utf8"));
	const reports = readdirSync(path.join(root, "tools/.renames"))
		.filter((file) => file.endsWith(".json"))
		.flatMap((file) =>
			JSON.parse(readFileSync(path.join(root, "tools/.renames", file), "utf8")),
		);
	for (const change of reports) {
		const entry = mapping.bindings.find(
			(entry) =>
				entry.outputFile === change.file &&
				entry.outputPosition === change.start,
		);
		if (!entry)
			throw Error("Cannot map renamed binding: " + JSON.stringify(change));
		entry.previousName = change.name;
		entry.renamed = change.renamed;
		entry.action = "rename";
	}
	writeFileSync(mapPath, JSON.stringify(mapping, null, 2) + "\n");
	const canonical = path.join(root, "rename-map.json");
	writeFileSync(
		canonical,
		JSON.stringify(
			{
				description:
					"Explicit semantic names keyed by source, scope and binding position.",
				bindings: mapping.bindings
					.filter((entry) => entry.previousName)
					.map(({ source, scope, position, original, renamed }) => ({
						source,
						scope,
						position,
						original,
						renamed,
					})),
			},
			null,
			2,
		) + "\n",
	);
	console.log(
		"Updated the existing variable-map.json and rename-map.json with",
		reports.length,
		"semantic names.",
	);
}
if (
	process.argv[1] &&
	path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)
) {
	if (process.argv.includes("--link")) linkMap();
	else if (process.argv.includes("--sync")) syncMap();
	else {
		for (const file of filesBelow("web/src")) {
			const { bindings } = bindingsFor(file);
			if (bindings.length)
				console.log(
					file,
					JSON.stringify(bindings.map(({ binding, ...entry }) => entry)),
				);
		}
	}
}
