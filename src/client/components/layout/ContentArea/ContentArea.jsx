import React from 'react';
import PropTypes from 'Client/utils/prop-types';
import classnames from 'classnames';
import styles from './style';

const ContentArea = ({ white, className, children }) =>
  <div className={classnames(styles['content-area'], { [styles.white]: white }, className)}>
    {children}
  </div>;

ContentArea.propTypes = {
  white: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node
};

export default ContentArea;