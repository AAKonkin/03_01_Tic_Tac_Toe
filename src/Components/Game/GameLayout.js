import React from 'react';
import styles from './Game.module.css';
import { Information } from '../Information/Information';
import { Field } from '../Field/Field';
import { CustomBtn } from './CustomBtn';
import PropTypes from 'prop-types';
export const GameLayout = ({
	field,
	isDraw,
	isGameEnded,
	currentPlayer,
	onCellClick,
	onRestartClick,
}) => {
	return (
		<div className={styles.gameContainer}>
			<h2>Tic-Tac-Toe</h2>
			<Information
				isDraw={isDraw}
				isGameEnded={isGameEnded}
				currentPlayer={currentPlayer}
			/>
			<Field field={field} onCellClick={onCellClick} />
			{isGameEnded || isDraw ? (
				<CustomBtn onClick={onRestartClick}>Начать заново</CustomBtn>
			) : (
				''
			)}
		</div>
	);
};

GameLayout.propTypes = {
	field: PropTypes.array,
	isDraw: PropTypes.bool,
	isGameEnded: PropTypes.bool,
	currentPlayer: PropTypes.string,
	onCellClick: PropTypes.func,
	onRestartClick: PropTypes.func,
};
