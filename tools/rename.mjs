// Scope-safe rename of top-level bindings in a file or an ESM directory tree.
// Usage: node tools/rename.mjs <input> <map.json> <output>
import fs from "node:fs";
import path from "node:path";
import { generate } from "@babel/generator";
import { parse } from "@babel/parser";
import * as _traverse from "@babel/traverse";

const traverse = _traverse.default ?? _traverse;

const [input, mapPath, output] = process.argv.slice(2);
if (!input || !mapPath || !output) {
	throw new Error("Usage: node tools/rename.mjs <input> <map.json> <output>");
}
const document = JSON.parse(fs.readFileSync(mapPath, "utf8"));
const map = document.map ?? document;
const directory = fs.statSync(input).isDirectory();
const root = path.resolve(input);
const files = directory
	? fs
			.readdirSync(root, { recursive: true })
			.filter((name) => /\.[cm]?js$/.test(name))
			.sort()
			.map((name) => path.join(root, name))
	: [root];

// Parse and validate every module before writing any files, including in-place runs.
const modules = new Map(
	files.map((file) => {
		const code = fs.readFileSync(file, "utf8");
		const ast = parse(code, { sourceType: "unambiguous" });
		let program;
		traverse(ast, {
			Program(p) {
				program = p;
				p.stop();
			},
		});
		const renames = new Map(
			Object.keys(program.scope.bindings)
				.filter((name) => typeof map[name] === "string" && map[name] !== name)
				.map((name) => [name, map[name]]),
		);
		const exports = new Map();
		for (const node of ast.program.body) {
			if (node.type !== "ExportNamedDeclaration") continue;
			for (const specifier of node.specifiers) {
				if (
					specifier.type === "ExportSpecifier" &&
					!node.source &&
					specifier.local.name === specifier.exported.name &&
					renames.has(specifier.local.name)
				) {
					exports.set(
						specifier.exported.name,
						renames.get(specifier.local.name),
					);
				}
			}
			const declaration = node.declaration;
			const names =
				declaration?.type === "VariableDeclaration"
					? declaration.declarations.map((item) => item.id.name)
					: [declaration?.id?.name];
			for (const name of names)
				if (renames.has(name)) exports.set(name, renames.get(name));
		}
		for (const [oldName, newName] of renames) {
			const binding = program.scope.getBinding(oldName);
			const uses = [
				binding.path,
				...binding.referencePaths,
				...binding.constantViolations,
			];
			if (
				!/^[$A-Z_a-z][$\w]*$/.test(newName) ||
				uses.some((p) => {
					const existing = p.scope.getBinding(newName);
					return existing && existing !== binding;
				})
			) {
				throw new Error(
					`Rename collision in ${file}: ${oldName} -> ${newName}`,
				);
			}
		}
		return [file, { code, ast, program, renames, exports }];
	}),
);

const providerOf = (file, node) =>
	node.source?.value.startsWith(".")
		? modules.get(path.resolve(path.dirname(file), node.source.value))
		: undefined;

// Propagate changed public names through re-export chains before editing imports.
let propagated;
do {
	propagated = false;
	for (const [file, mod] of modules) {
		for (const node of mod.ast.program.body) {
			const provider = providerOf(file, node);
			if (!provider) continue;
			const forwarded =
				node.type === "ExportAllDeclaration"
					? [...provider.exports.keys()]
					: node.type === "ExportNamedDeclaration"
						? node.specifiers
								.filter(
									(s) =>
										s.type === "ExportSpecifier" &&
										s.local.name === s.exported.name,
								)
								.map((s) => s.local.name)
						: [];
			for (const name of forwarded) {
				if (provider.exports.has(name) && !mod.exports.has(name)) {
					mod.exports.set(name, provider.exports.get(name));
					propagated = true;
				}
			}
		}
	}
} while (propagated);

// Namespace property access needs a separate property-aware pass. Fail instead
// of silently leaving accesses such as namespace.Md pointing at removed names.
for (const [file, mod] of modules) {
	for (const node of mod.ast.program.body) {
		if (
			providerOf(file, node)?.exports.size &&
			node.specifiers?.some(
				(s) =>
					s.type === "ImportNamespaceSpecifier" ||
					s.type === "ExportNamespaceSpecifier",
			)
		) {
			throw new Error(
				`Namespace links to renamed exports are unsupported: ${file}`,
			);
		}
	}
}

let renamed = 0;
let changed = 0;
for (const [file, mod] of modules) {
	let linksChanged = false;
	// Babel preserves public import/export names by default. Update the links to
	// other modules in this batch explicitly while retaining intentional aliases.
	for (const node of mod.ast.program.body) {
		const provider = providerOf(file, node);
		for (const specifier of node.specifiers ?? []) {
			if (
				specifier.type === "ImportSpecifier" &&
				provider?.exports.has(specifier.imported.name)
			) {
				specifier.imported = {
					...specifier.imported,
					name: provider.exports.get(specifier.imported.name),
				};
				linksChanged = true;
			}
			if (specifier.type === "ExportSpecifier") {
				const exports = mod.exports;
				if (exports?.has(specifier.exported.name)) {
					specifier.exported = {
						...specifier.exported,
						name: exports.get(specifier.exported.name),
					};
					linksChanged = true;
				}
				if (node.source && provider?.exports.has(specifier.local.name)) {
					specifier.local = {
						...specifier.local,
						name: provider.exports.get(specifier.local.name),
					};
					linksChanged = true;
				}
			}
		}
	}
	for (const [oldName, newName] of mod.renames) {
		mod.program.scope.rename(oldName, newName);
		renamed++;
	}
	// Renaming `export const Md` makes Babel emit an alias preserving `Md`.
	// Update those synthesized export specifiers to the recovered public names.
	for (const node of mod.ast.program.body) {
		if (node.type !== "ExportNamedDeclaration" || node.source) continue;
		for (const specifier of node.specifiers) {
			if (mod.exports.has(specifier.exported.name)) {
				specifier.exported.name = mod.exports.get(specifier.exported.name);
			}
		}
	}
	const destination = directory
		? path.join(output, path.relative(root, file))
		: output;
	const modified = mod.renames.size > 0 || linksChanged;
	const code = modified
		? `${generate(mod.ast, { jsescOption: { minimal: true } }).code}\n`
		: mod.code;
	parse(code, { sourceType: "unambiguous" });
	mod.destination = destination;
	mod.result = code;
	if (modified) changed++;
}
for (const mod of modules.values()) {
	fs.mkdirSync(path.dirname(mod.destination), { recursive: true });
	fs.writeFileSync(mod.destination, mod.result);
}
console.log(
	`Renamed ${renamed} top-level bindings in ${changed} of ${modules.size} files.`,
);
