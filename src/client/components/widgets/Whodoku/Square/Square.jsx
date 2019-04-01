import React from 'react';
import PropTypes from 'prop-types';
import { renderIf } from 'Client/utils/render-if';
import styles from './style';

const Square = ({ value, onClick }) =>
  <div className={styles.square} onClick={onClick}>
    {renderIf(value, () => <img src={`/assets/whodoku/${value}.png`} alt={value} />)}
  </div>;

Square.propTypes = {
  value: PropTypes.number,
  onClick: PropTypes.func
};

export default Square;