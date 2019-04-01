import React from 'react';
import PropTypes from 'prop-types';
import State from './state';
import Square from './Square';

import styles from './style';

class Whodoku extends React.Component {
  componentDidMount() {
    this.props.state.newPuzzle();
  }

  render() {
    const { state } = this.props;
    return <div className={styles.whodoku}>
      {state.board.map((square, i) =>
        <Square state={square} key={i} onClick={() => square.increment()} />
      )}
    </div>;
  }
}

Whodoku.propTypes = {
  state: PropTypes.instanceOf(State).isRequired
};

export default Whodoku;