import React from 'react';
import PropTypes from 'Client/utils/prop-types';
import classnames from 'classnames';

import styles from './style';

const Button = ({
  tag,
  className,
  outline,
  primary,
  children,
  ...props
}) => React.createElement(tag, {
  className: classnames(
    styles.button,
    { [styles.outline]: outline },
    { [styles.primary]: primary },
    className
  ),
  ...props
}, children);

Button.propTypes = {
  tag: PropTypes.tag,
  className: PropTypes.string,
  primary: PropTypes.bool,
  outline: PropTypes.bool,
  children: PropTypes.node
};

Button.defaultProps = {
  tag: 'button'
};

export default Button;