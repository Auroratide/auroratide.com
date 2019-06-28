import React from 'react';
import PropTypes from 'Client/utils/prop-types';
import Button from 'Client/components/core/Button';
import Board from './Board';
import useTicTacToe from './use-tic-tac-toe';
import styles from './style';

const ReactTacToe = ({ initialBoard }) => {
  const { board, reset } = useTicTacToe(initialBoard);

  return <div className={styles['react-tac-toe']}>
    <Board board={board} />
    <div className={styles['button-container']}>
      <Button secondary onClick={reset} className={styles['reset-button']}>Reset</Button>
    </div>
  </div>;
};

ReactTacToe.propTypes = {
  initialBoard: PropTypes.arrayOf(PropTypes.string)
};

export default ReactTacToe;