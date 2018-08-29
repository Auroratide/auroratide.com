import React from 'react';
import PropTypes from 'Client/utils/prop-types';
import classnames from 'classnames';

import styles from './style';

const Button = ({ tag, className, outline, children, ...props }) =>
  React.createElement(tag, {
    className: classnames(styles.button, { [styles.outline]: outline }, className),
    ...props
  }, children);

Button.propTypes = {
  tag: PropTypes.tag,
  className: PropTypes.string,
  outline: PropTypes.bool,
  children: PropTypes.node
};

Button.defaultProps = {
  tag: 'button'
};

export default Button;