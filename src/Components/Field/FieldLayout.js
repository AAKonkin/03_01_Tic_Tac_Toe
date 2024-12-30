import React from 'react';
import styles from './Field.module.css';
import PropTypes from 'prop-types';
export const FieldLayout = ({ field, onCellClick }) => {
	return (
		<>
			<div className={styles.fieldContainer}>
				{field.map((item, index) => (
					<div
						key={index}
						className={styles.cell}
						onClick={() => onCellClick(index)}
					>
						{item}
					</div>
				))}
			</div>
		</>
	);
};

FieldLayout.propTypes = {
	field: PropTypes.array,
	onCellClick: PropTypes.func,
};
