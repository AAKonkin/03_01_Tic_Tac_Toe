import React from 'react';
import PropTypes from 'prop-types';
export const InformationLayout = ({ isDraw, isGameEnded, currentPlayer }) => {
	return (
		<>
			<h3>
				{isDraw
					? 'Ничья'
					: isGameEnded
						? `Победа: ${currentPlayer}`
						: `Ходит: ${currentPlayer}`}
			</h3>
		</>
	);
};

InformationLayout.propTypes = {
	isDraw: PropTypes.bool,
	isGameEnded: PropTypes.bool,
	currentPlayer: PropTypes.string,
};
