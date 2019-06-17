import React from 'react';
import PropTypes from 'prop-types';
import { renderIf } from 'Client/utils/render-if';
import classnames from 'classnames';

import styles from './style';

const Square = ({ value, canBeEdited, onClick }) =>
  <div
    className={classnames(styles.square, { [styles['cannot-edit']]: !canBeEdited })}
    onClick={canBeEdited ? onClick : null}
  >
    {renderIf(value, () => <img src={`/assets/whodoku/${value}.png`} alt={value} />)}
  </div>;

Square.propTypes = {
  value: PropTypes.number,
  canBeEdited: PropTypes.bool,
  onClick: PropTypes.func
};

export default Square;