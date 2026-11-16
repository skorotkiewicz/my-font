import * as React from "react";
import { useWrite } from "../state/WriteProvider.jsx";
function closestGridCell(cells, currentCell, rowDirection) {
	let currentRect = currentCell.getBoundingClientRect();
	let closestCell;
	let closestRowDistance = Infinity;
	let closestColumnDistance = Infinity;
	for (let cell of cells) {
		let cellRect = cell.getBoundingClientRect();
		let rowDistance = (cellRect.top - currentRect.top) * rowDirection;
		if (rowDistance < 1) {
			continue;
		}
		let columnDistance = Math.abs(cellRect.left - currentRect.left);
		if (
			rowDistance < closestRowDistance - 1 ||
			(Math.abs(rowDistance - closestRowDistance) <= 1 &&
				columnDistance < closestColumnDistance)
		) {
			closestCell = cell;
			closestRowDistance = rowDistance;
			closestColumnDistance = columnDistance;
		}
	}
	return closestCell;
}
function GlyphGrid({
	set: characterSet,
	onSelect,
	Tile: _Component1,
	className,
	tileClassName,
}) {
	let { state } = useWrite();
	let { codepoints } = characterSet;
	let [focusedCodepoint, setFocusedCodepoint] = React.useState();
	let tabStopCodepoint =
		focusedCodepoint ??
		(codepoints.includes(state.cp) ? state.cp : codepoints[0]);
	return (
		<div
			role="group"
			aria-label={`${characterSet.label} glyphs`}
			onKeyDown={(event) => {
				let activeCell = document.activeElement;
				if (
					!(activeCell instanceof HTMLElement) ||
					activeCell.parentElement !== event.currentTarget
				) {
					return;
				}
				let gridCells = [...event.currentTarget.children];
				let activeIndex = gridCells.indexOf(activeCell);
				let nextCell =
					event.key === `ArrowLeft`
						? gridCells[activeIndex - 1]
						: event.key === `ArrowRight`
							? gridCells[activeIndex + 1]
							: event.key === `ArrowUp`
								? closestGridCell(gridCells, activeCell, -1)
								: event.key === `ArrowDown`
									? closestGridCell(gridCells, activeCell, 1)
									: event.key === `Home`
										? gridCells[0]
										: event.key === `End`
											? gridCells[gridCells.length - 1]
											: null;
				if (nextCell !== null) {
					event.preventDefault();
					event.stopPropagation();
					nextCell?.focus();
				}
			}}
			onFocus={(event) => setFocusedCodepoint(Number(event.target.dataset.cp))}
			onBlur={(event) => {
				if (!event.currentTarget.contains(event.relatedTarget)) {
					setFocusedCodepoint(undefined);
				}
			}}
			className={className}
		>
			{codepoints.map((glyphCodepoint) => (
				<_Component1
					cp={glyphCodepoint}
					drawn={state.drawn.has(glyphCodepoint)}
					current={glyphCodepoint === state.cp}
					tabIndex={glyphCodepoint === tabStopCodepoint ? 0 : -1}
					onSelect={onSelect}
					className={tileClassName}
					key={glyphCodepoint}
				/>
			))}
		</div>
	);
}
export { GlyphGrid };
