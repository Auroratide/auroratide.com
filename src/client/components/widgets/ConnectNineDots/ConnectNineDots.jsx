import React from 'react';
import PropTypes from 'Client/utils/prop-types';
import State from './state';
import Dots from './Dots';
import Line from './Line';

import styles from './style';

const handleClick = state => e => {
  const rect = e.target.getBoundingClientRect();
  state.record(e.clientX - rect.left, e.clientY - rect.top);
};

const ConnectNineDots = ({ state }) =>
  <div className={styles['connect-nine-dots']} onClick={handleClick(state)}>
    <Dots />
    <div className={styles.lines}>
      {state.lines.map((line, i) => <Line line={line} key={i} />)}
    </div>
  </div>;

ConnectNineDots.propTypes = {
  state: PropTypes.instanceOf(State).isRequired
};

export default ConnectNineDots;