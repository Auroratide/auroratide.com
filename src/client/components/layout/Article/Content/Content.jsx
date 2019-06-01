import React from 'react';
import PropTypes from 'Client/utils/prop-types';
import classnames from 'classnames';
import styles from './style';

const Content = ({ children, className }) =>
  <div className={classnames(styles.content, className)}>
    {children}
  </div>;

Content.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

export default Content;