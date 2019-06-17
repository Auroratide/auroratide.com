import React from 'react';
import PropTypes from 'prop-types';
import Square from './Square';
import Button from 'Client/components/core/Button';
import { renderIf } from 'Client/utils/render-if';
import classnames from 'classnames';

import styles from './style';

const Whodoku = ({ state, newPuzzle, reset, increment }) =>
  <div className={styles.whodoku}>
    <div className={classnames(styles.board, { [styles.solved]: state.isSolved })}>
      {state.board.map((square, i) =>
        <Square value={square} canBeEdited={!state.original[i]} key={i} onClick={() => {
          if(!state.isSolved)
            increment(i);
        }} />
      )}
    </div>
    <div className={styles.buttons}>
      <Button primary onClick={() => reset()} className={styles.button}>Reset</Button>
      <Button secondary onClick={() => newPuzzle()} className={styles.button}>New Puzzle</Button>
    </div>
    {renderIf(state.isSolved, () =>
      <div className={styles['solved-text']}>
        <span>It&apos;s solved! Yay!</span>
      </div>
    )}
  </div>;

Whodoku.propTypes = {
  state: PropTypes.shape({
    isSolved: PropTypes.bool,
    board: PropTypes.arrayOf(PropTypes.number),
    original: PropTypes.arrayOf(PropTypes.number)
  }),
  newPuzzle: PropTypes.func,
  reset: PropTypes.func,
  increment: PropTypes.func
};

export default Whodoku;