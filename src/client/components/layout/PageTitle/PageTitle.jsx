import React from 'react';
import PropTypes from 'Client/utils/prop-types';
import classnames from 'classnames';

import styles from './style';

const PageTitle = ({ children, className }) =>
  <h1 className={classnames(styles.title, className)}>{children}</h1>;

PageTitle.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

export default PageTitle;