import React from 'react';
import PropTypes from 'prop-types';
import State from './state';
import Square from './Square';
import Button from 'Client/components/core/Button';
import { renderIf } from 'Client/utils/render-if';
import classnames from 'classnames';

import styles from './style';

class Whodoku extends React.Component {
  componentDidMount() {
    this.props.state.newPuzzle();
  }

  render() {
    const { state } = this.props;
    return <div className={styles.whodoku}>
      <div className={classnames(styles.board, { [styles.solved]: state.isSolved })}>
        {state.board.map((square, i) =>
          <Square state={square} key={i} onClick={() => {
            if(!state.isSolved) {
              square.increment();
              state.checkForWin();
            }
          }} />
        )}
      </div>
      <div className={styles.buttons}>
        <Button primary onClick={() => state.reset()} className={styles.button}>Reset</Button>
        <Button secondary onClick={() => state.newPuzzle()} className={styles.button}>New Puzzle</Button>
      </div>
      {renderIf(state.isSolved, () =>
        <div className={styles['solved-text']}>
          <span>It&apos;s solved! Yay!</span>
        </div>
      )}
    </div>;
  }
}

Whodoku.propTypes = {
  state: PropTypes.instanceOf(State).isRequired
};

export default Whodoku;