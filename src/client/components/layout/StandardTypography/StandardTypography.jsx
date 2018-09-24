import React from 'react';
import PropTypes from 'Client/utils/prop-types';
import styles from './style';

const StandardTypography = ({ children }) =>
  <div className={styles['standard-typography']}>
    {children}
  </div>;

StandardTypography.propTypes = {
  children: PropTypes.node
};

export default StandardTypography;