import React from 'react';
import PropTypes from 'prop-types';
import styles from './style';

const Square = ({ value }) =>
  <div className={styles.square}>{value}</div>;

Square.propTypes = {
  value: PropTypes.number
};

export default Square;