import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import { createRequire } from "node:module";
import path from "node:path";
import { fileURLToPath } from "node:url";

const require = createRequire(import.meta.url);
const { parse } = require("@babel/parser");
const traverse = require("@babel/traverse").default;
const generate = require("@babel/generator").default;
const t = require("@babel/types");
const root = path.resolve(import.meta.dirname, "..");
export function recoverWorker() {
	const sourceFile = "webcrack-out/deobfuscated/font-worker.js";
	const ast = parse(readFileSync(path.join(root, sourceFile), "utf8"), {
		sourceType: "module",
	});
	const canonicalPath = path.join(root, "worker-rename-map.json");
	const canonical = existsSync(canonicalPath)
		? readFileSync(canonicalPath, "utf8").trim()
		: "";
	const overrides = canonical
		? JSON.parse(canonical).bindings
		: ["worker-font", "worker-contour", "worker-dispatch"].flatMap((name) =>
				JSON.parse(
					readFileSync(
						path.join(root, "tools/.renames", name + "-overrides.json"),
						"utf8",
					),
				),
			);
	const names = new Map(
		overrides.map((entry) => [`${entry.scope}:${entry.position}`, entry]),
	);
	ast.program.body = ast.program.body.filter((node) => {
		const line = node.loc.start.line;
		if (
			t.isExpressionStatement(node) &&
			!t.isAssignmentExpression(node.expression)
		)
			return false;
		if (
			t.isVariableDeclaration(node) &&
			node.declarations.some((declaration) =>
				t.isIdentifier(declaration.id, { name: "y" }),
			)
		)
			return false;
		if ((line >= 14693 && line < 15138) || (line >= 17933 && line < 18004))
			return true;
		if (line >= 18095)
			return (
				!t.isExpressionStatement(node) ||
				t.isAssignmentExpression(node.expression)
			);
		return false;
	});
	const bootstrap = parse(
		`
import {Path,Glyph,Font} from 'opentype.js';
import polygonClipping from 'polygon-clipping';
import {signedArea as u,polygonBounds as d} from '../geometry.jsx';
import {polygonsForStroke as Qe} from '../strokes.jsx';
import {sha256 as ft} from '../projectFont.jsx';
`,
		{ sourceType: "module" },
	).program.body;
	ast.program.body.unshift(...bootstrap);
	const bindings = [];
	traverse(ast, {
		Scope(p) {
			for (const binding of Object.values(p.scope.bindings)) {
				if (binding.kind === "module") continue;
				const key = `${p.node.start}:${binding.identifier.start}`;
				const entry = names.get(key);
				if (!entry)
					throw Error(
						"Unmapped worker binding " +
							binding.identifier.name +
							" at " +
							binding.identifier.loc.start.line,
					);
				bindings.push({ binding, entry });
			}
		},
	});
	// Save the complete app-binding map before changing any identifiers.
	writeFileSync(
		path.join(root, "worker-rename-map.json"),
		JSON.stringify(
			{
				source: sourceFile,
				recovery:
					"webcrack deobfuscation found no string-array obfuscation; minified JavaScript was expanded before naming.",
				externalized: {
					"OpenType.js": "opentype.js",
					"polygon-clipping": "polygon-clipping",
					"WOFF2 WebAssembly compressor": "woff2-encoder",
				},
				reused: {
					"signed area and bounds": "web/src/lib/geometry.jsx",
					"freehand and stroke polygons": "web/src/lib/strokes.jsx",
					"SHA-256": "web/src/lib/projectFont.jsx",
				},
				bindings: bindings.map(({ entry }) => ({
					...entry,
					source: "font-worker.js",
				})),
			},
			null,
			2,
		) + "\n",
	);
	for (let index = 0; index < bindings.length; index++) {
		const { binding } = bindings[index];
		binding.scope.rename(binding.identifier.name, "__workerName" + index);
	}
	for (let index = 0; index < bindings.length; index++) {
		const { binding, entry } = bindings[index];
		binding.scope.rename("__workerName" + index, entry.renamed);
	}
	traverse(ast, {
		Program(p) {
			p.scope.crawl();
			for (const [oldName, newName] of [
				["u", "signedArea"],
				["d", "polygonBounds"],
				["Qe", "polygonsForStroke"],
				["ft", "sha256"],
			])
				p.scope.rename(oldName, newName);
		},
		MemberExpression(p) {
			if (
				t.isIdentifier(p.node.object, { name: "l" }) &&
				["Path", "Glyph", "Font"].includes(p.node.property.name)
			)
				p.replaceWith(t.identifier(p.node.property.name));
			else if (
				t.isIdentifier(p.node.object, { name: "ie" }) &&
				t.isIdentifier(p.node.property, { name: "default" })
			)
				p.replaceWith(t.identifier("polygonClipping"));
		},
		CallExpression(p) {
			if (t.isImport(p.node.callee))
				p.node.arguments = [t.stringLiteral("woff2-encoder")];
		},
		AwaitExpression(p) {
			if (
				t.isCallExpression(p.node.argument) &&
				t.isIdentifier(p.node.argument.callee, { name: "at" })
			)
				p.parentPath.remove();
		},
	});
	traverse(ast, {
		BinaryExpression(p) {
			if (
				p.node.operator === "!=" &&
				t.isBinaryExpression(p.node.left) &&
				t.isBinaryExpression(p.node.right)
			)
				p.node.operator = "!==";
		},
		ExpressionStatement(p) {
			const call = p.node.expression;
			if (
				t.isCallExpression(call) &&
				t.isMemberExpression(call.callee) &&
				t.isIdentifier(call.callee.object, { name: "drawingContourCache" }) &&
				t.isAssignmentExpression(call.arguments[1])
			) {
				const assignment = call.arguments[1];
				p.insertBefore(t.expressionStatement(assignment));
				call.arguments[1] = t.cloneNode(assignment.left);
			}
		},
	});
	const groups = {
		"lib/font/sfnt.js": [
			"SfntWriter",
			"buildKerningTable",
			"alignFourBytes",
			"sfntChecksum",
			"replaceFontTable",
		],
		"lib/font/kerning.js": [
			"profileMinY",
			"isLowercaseCodepoint",
			"isLetterOrDigit",
			"profileRowIndex",
			"contourProfile",
			"glyphProfile",
			"opticalSpacingAdjustment",
			"pairSpacing",
			"spacingForGlyphs",
		],
		"lib/font/contours.js": [
			"stageYToFont",
			"pointLineDistance",
			"simplifyPolyline",
			"simplifyPolygon",
			"drawingContours",
			"placeContours",
		],
		"lib/font/pack-project.js": [
			"roundHundredths",
			"transformBytes",
			"packProjectFont",
		],
		"workers/font.worker.js": [
			"drawingContourCache",
			"cachedDrawingContours",
			"handleFontRequest",
		],
	};
	const statementFile = new Map();
	for (const node of ast.program.body) {
		if (t.isImportDeclaration(node)) continue;
		const name = Object.keys(t.getOuterBindingIdentifiers(node))[0];
		const file = t.isExpressionStatement(node)
			? "workers/font.worker.js"
			: (Object.entries(groups).find(([, names]) =>
					names.includes(name),
				)?.[0] ?? "lib/font/build-font.js");
		statementFile.set(node, file);
	}
	const modules = new Map();
	for (const [node, file] of statementFile) {
		if (!modules.has(file)) modules.set(file, []);
		modules.get(file).push(node);
	}
	const dependencies = new Map(
		[...modules.keys()].map((file) => [file, new Map()]),
	);
	const exportsByFile = new Map(
		[...modules.keys()].map((file) => [file, new Set()]),
	);
	const externals = new Map([
		["Path", { module: "opentype.js" }],
		["Glyph", { module: "opentype.js" }],
		["Font", { module: "opentype.js" }],
		["polygonClipping", { module: "polygon-clipping", default: true }],
		["signedArea", { file: "lib/geometry.jsx" }],
		["polygonBounds", { file: "lib/geometry.jsx" }],
		["polygonsForStroke", { file: "lib/strokes.jsx" }],
		["sha256", { file: "lib/projectFont.jsx" }],
	]);
	traverse(ast, {
		Program(p) {
			p.scope.crawl();
			for (const [name, binding] of Object.entries(p.scope.bindings)) {
				const statement =
					binding.path.findParent((q) => q.parentPath?.isProgram()) ??
					binding.path;
				const from = statementFile.get(statement.node);
				for (const ref of binding.referencePaths) {
					const target = ref.findParent((q) => q.parentPath?.isProgram());
					const to = target && statementFile.get(target.node);
					if (!to || from === to) continue;
					if (externals.has(name))
						dependencies.get(to).set(name, externals.get(name));
					else if (from) {
						dependencies.get(to).set(name, { file: from });
						exportsByFile.get(from).add(name);
					}
				}
			}
		},
	});
	// Keep the export roots public for direct validation and font generation tests.
	exportsByFile.get("lib/font/build-font.js").add("buildFont");
	exportsByFile.get("lib/font/pack-project.js").add("packProjectFont");
	for (const [file, nodes] of modules) {
		const imports = [];
		for (const [name, dependency] of dependencies.get(file)) {
			let module =
				dependency.module ??
				path.posix.relative(path.posix.dirname(file), dependency.file);
			if (!dependency.module && !module.startsWith(".")) module = "./" + module;
			const specifier = dependency.default
				? t.importDefaultSpecifier(t.identifier(name))
				: t.importSpecifier(t.identifier(name), t.identifier(name));
			imports.push(t.importDeclaration([specifier], t.stringLiteral(module)));
		}
		const grouped = new Map();
		for (const declaration of imports) {
			const key = declaration.source.value;
			if (!grouped.has(key)) grouped.set(key, []);
			grouped.get(key).push(...declaration.specifiers);
		}
		const mergedImports = [...grouped].map(([source, specifiers]) =>
			t.importDeclaration(specifiers, t.stringLiteral(source)),
		);
		const code =
			generate(
				t.file(
					t.program([
						...mergedImports,
						...nodes,
						t.exportNamedDeclaration(
							null,
							[...exportsByFile.get(file)].map((name) =>
								t.exportSpecifier(t.identifier(name), t.identifier(name)),
							),
						),
					]),
				),
				{ comments: false },
			).code + "\n";
		const target = path.join(root, "web/src", file);
		mkdirSync(path.dirname(target), { recursive: true });
		writeFileSync(target, code);
	}
	console.log(
		"Saved",
		bindings.length,
		"worker binding names and extracted",
		modules.size,
		"app-only worker modules.",
	);
	const workerMap = JSON.parse(readFileSync(canonicalPath, "utf8"));
	workerMap.modules = [...modules.keys()].map((file) => "web/src/" + file);
	writeFileSync(canonicalPath, JSON.stringify(workerMap, null, 2) + "\n");
	const moduleMapPath = path.join(root, "module-map.json");
	if (existsSync(moduleMapPath)) {
		const moduleMap = JSON.parse(readFileSync(moduleMapPath, "utf8"));
		moduleMap.sources = moduleMap.sources.filter(
			(entry) => entry.source !== "font-worker.js",
		);
		moduleMap.sources.push({
			source: "font-worker.js",
			modules: [...modules.keys()],
		});
		moduleMap.workerPackages = [
			"opentype.js",
			"polygon-clipping",
			"woff2-encoder",
		];
		writeFileSync(moduleMapPath, JSON.stringify(moduleMap, null, 2) + "\n");
	}
}
if (
	process.argv[1] &&
	path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)
)
	recoverWorker();
