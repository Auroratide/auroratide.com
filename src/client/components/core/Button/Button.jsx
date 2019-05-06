import React from 'react';
import PropTypes from 'Client/utils/prop-types';
import classnames from 'classnames';

import styles from './style';

const Button = ({
  tag,
  className,
  outline,
  primary,
  secondary,
  color,
  children,
  ...props
}) => React.createElement(tag, {
  className: classnames(
    styles.button,
    { [styles.outline]: outline },
    { [styles.primary]: primary },
    { [styles.secondary]: secondary },
    { [styles[`color-${color}`]]: color },
    className
  ),
  ...props
}, children);

Button.propTypes = {
  tag: PropTypes.tag,
  className: PropTypes.string,
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  outline: PropTypes.bool,
  color: PropTypes.color,
  children: PropTypes.node
};

Button.defaultProps = {
  tag: 'button'
};

export default Button;