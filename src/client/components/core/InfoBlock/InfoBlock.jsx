import React from 'react';
import PropTypes from 'Client/utils/prop-types';
import classnames from 'classnames';
import styles from './style';

const InfoBlock = ({ children }) =>
  <div className={classnames(styles['info-block'], styles.override)}>
    {children}
  </div>;

InfoBlock.propTypes = {
  children: PropTypes.node
};

export default InfoBlock;