import React from 'react';
import PropTypes from 'prop-types';
import { renderIf } from 'Client/utils/render-if';
import State from './state';
import classnames from 'classnames';

import styles from './style';

const Square = ({ state, onClick }) =>
  <div
    className={classnames(styles.square, { [styles['cannot-edit']]: !state.canBeEdited })}
    onClick={state.canBeEdited ? onClick : null}
  >
    {renderIf(state.value, () => <img src={`/assets/whodoku/${state.value}.png`} alt={state.value} />)}
  </div>;

Square.propTypes = {
  state: PropTypes.instanceOf(State).isRequired,
  onClick: PropTypes.func
};

export default Square;