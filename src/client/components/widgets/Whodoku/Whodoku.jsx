import React from 'react';
import PropTypes from 'prop-types';
import State from './state';
import Square from './Square';

import styles from './style';

const Whodoku = ({ state }) =>
  <div className={styles.whodoku}>
    {state.board.map((value, i) => <Square value={value} key={i} />)}
  </div>;

Whodoku.propTypes = {
  state: PropTypes.instanceOf(State).isRequired
};

export default Whodoku;