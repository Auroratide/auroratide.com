import React from 'react';
import PropTypes from 'Client/utils/prop-types';

import styles from './style';

const PageTitle = ({ children }) =>
  <h1 className={styles.title}>{children}</h1>;

PageTitle.propTypes = {
  children: PropTypes.node
};

export default PageTitle;