import React from 'react';
import PropTypes from 'Client/utils/prop-types';
import styles from './style';

const HorizontalFlex = ({ children }) =>
  <div className={styles['horizontal-flex']}>
    {children}
  </div>;

HorizontalFlex.propTypes = {
  children: PropTypes.node
};

export default HorizontalFlex;