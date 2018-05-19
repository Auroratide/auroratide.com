import React from 'react';
import PropTypes from 'Client/utils/prop-types';
import Icon from 'Client/components/core/Icon';
import classnames from 'classnames';

import styles from './style';

const Hamburger = ({ onClick, active, className }) =>
  <button
    className={classnames(styles.hamburger, { [styles.active]: active }, className)}
    onClick={onClick}
  >
    <Icon icon="bars" />
  </button>;

Hamburger.propTypes = {
  onClick: PropTypes.func,
  active: PropTypes.bool,
  className: PropTypes.string
};

export default Hamburger;