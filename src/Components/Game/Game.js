import { useState } from 'react';
import { GameLayout } from './GameLayout';
export const Game = () => {
	const [currentPlayer, setCurrentPlayer] = useState('X');
	const [isGameEnded, setIsGameEnded] = useState(false);
	const [isDraw, setIsDraw] = useState(false);
	const [field, setField] = useState(['', '', '', '', '', '', '', '', '']);

	const onCellClick = (index) => {
		if (!field[index] && !isGameEnded) {
			const newField = field.slice(0);
			newField[index] = currentPlayer;
			setField(newField);
			if (
				WIN_PATTERNS.some((element) =>
					[
						newField[element[0]],
						newField[element[1]],
						newField[element[2]],
					].every((element) => {
						return element === currentPlayer;
					}),
				)
			) {
				setIsGameEnded(true);
			} else if (newField.some((element) => element === ''))
				setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
			else setIsDraw(true);
		}
	};

	const WIN_PATTERNS = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8], // Варианты побед по горизонтали
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8], // Варианты побед по вертикали
		[0, 4, 8],
		[2, 4, 6], // Варианты побед по диагонали
	];

	const onRestartClick = () => {
		setCurrentPlayer('X');
		setField(['', '', '', '', '', '', '', '', '']);
		setIsDraw(false);
		setIsGameEnded(false);
	};

	return (
		<>
			<GameLayout
				field={field}
				isDraw={isDraw}
				isGameEnded={isGameEnded}
				currentPlayer={currentPlayer}
				onCellClick={onCellClick}
				onRestartClick={onRestartClick}
			/>
		</>
	);
};
