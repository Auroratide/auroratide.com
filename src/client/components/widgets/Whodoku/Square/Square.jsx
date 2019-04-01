import React from 'react';
import PropTypes from 'prop-types';
import { renderIf } from 'Client/utils/render-if';
import State from './state';

import styles from './style';

const Square = ({ state, onClick }) =>
  <div className={styles.square} onClick={onClick}>
    {renderIf(state.value, () => <img src={`/assets/whodoku/${state.value}.png`} alt={state.value} />)}
  </div>;

Square.propTypes = {
  state: PropTypes.instanceOf(State).isRequired,
  onClick: PropTypes.func
};

export default Square;