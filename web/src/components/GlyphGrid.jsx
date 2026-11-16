import * as React from "react";
import { useWrite } from "../state/WriteProvider.jsx";
function closestGridCell(cells, currentCell, rowDirection) {
	const currentRect = currentCell.getBoundingClientRect();
	let closestCell;
	let closestRowDistance = Infinity;
	let closestColumnDistance = Infinity;
	for (const cell of cells) {
		const cellRect = cell.getBoundingClientRect();
		const rowDistance = (cellRect.top - currentRect.top) * rowDirection;
		if (rowDistance < 1) {
			continue;
		}
		const columnDistance = Math.abs(cellRect.left - currentRect.left);
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
	const { state } = useWrite();
	const { codepoints } = characterSet;
	const [focusedCodepoint, setFocusedCodepoint] = React.useState();
	const tabStopCodepoint =
		focusedCodepoint ??
		(codepoints.includes(state.cp) ? state.cp : codepoints[0]);
	return (
		<fieldset
			aria-label={`${characterSet.label} glyphs`}
			onKeyDown={(event) => {
				const activeCell = document.activeElement;
				if (
					!(activeCell instanceof HTMLElement) ||
					activeCell.parentElement !== event.currentTarget
				) {
					return;
				}
				const gridCells = [...event.currentTarget.children];
				const activeIndex = gridCells.indexOf(activeCell);
				const nextCell =
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
			className={`m-0 min-w-0 border-0 p-0 ${className}`}
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
		</fieldset>
	);
}
export { GlyphGrid };
