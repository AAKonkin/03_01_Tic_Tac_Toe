import styles from './Game.module.css';
import PropTypes from 'prop-types';
export const CustomBtn = ({ onClick, children }) => {
	return (
		<div className={styles.customBtn} onClick={() => onClick()}>
			{children}
		</div>
	);
};

CustomBtn.propTypes = {
	onClick: PropTypes.func,
	children: PropTypes.string,
};
