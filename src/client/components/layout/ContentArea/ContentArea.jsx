import React from 'react';
import PropTypes from 'Client/utils/prop-types';
import styles from './style';

const ContentArea = ({ children }) =>
  <div className={styles['content-area']}>
    {children}
  </div>;

ContentArea.propTypes = {
  children: PropTypes.node
};

export default ContentArea;