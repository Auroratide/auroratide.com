import React from 'react';
import PropTypes from 'Client/utils/prop-types';
import classnames from 'classnames';
import styles from './style';

const Board = ({ board }) =>
  <div className={styles.board}>
    {board.map(({ mark, select, isWinning }, i) =>
      <div
        key={i}
        className={classnames(styles.tile, { [styles.highlight]: isWinning })}
        onClick={select}
      >
        {mark}
      </div>
    )}
  </div>;

Board.propTypes = {
  board: PropTypes.arrayOf(PropTypes.shape({
    mark: PropTypes.string,
    select: PropTypes.func,
    isWinning: PropTypes.bool
  }))
};

Board.defaultProps = {
  board: []
};

export default Board;