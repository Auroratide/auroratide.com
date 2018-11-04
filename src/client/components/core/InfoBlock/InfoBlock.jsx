import React from 'react';
import PropTypes from 'Client/utils/prop-types';
import classnames from 'classnames';
import styles from './style';

const InfoBlock = ({ children, success, warning, danger }) =>
  <div className={classnames(styles['info-block'], {
    [styles.success]: success,
    [styles.warning]: warning,
    [styles.danger]: danger
  }, styles.override)}>
    {children}
  </div>;

InfoBlock.propTypes = {
  children: PropTypes.node,
  success: PropTypes.bool,
  warning: PropTypes.bool,
  danger: PropTypes.bool
};

export default InfoBlock;