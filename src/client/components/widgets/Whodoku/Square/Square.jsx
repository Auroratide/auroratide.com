import React from 'react';
import PropTypes from 'prop-types';
import styles from './style';

const Square = ({ value, onClick }) =>
  <div className={styles.square} onClick={onClick}>{value}</div>;

Square.propTypes = {
  value: PropTypes.number,
  onClick: PropTypes.func
};

export default Square;