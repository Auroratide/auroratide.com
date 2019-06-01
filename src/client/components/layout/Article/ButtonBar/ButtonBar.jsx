import React from 'react';
import PropTypes from 'Client/utils/prop-types';
import styles from './style';

const ButtonBar = ({ children }) =>
  <div className={styles.bar}>
    {children}
  </div>;

ButtonBar.propTypes = {
  children: PropTypes.node
};

export default ButtonBar;