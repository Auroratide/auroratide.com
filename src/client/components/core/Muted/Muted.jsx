import React from 'react';
import PropTypes from 'Client/utils/prop-types';
import classnames from 'classnames';
import styles from './style';

const Muted = ({ tag, className, children, ...props }) =>
  React.createElement(tag, {
    className: classnames(styles.muted, className),
    ...props
  }, children);

Muted.propTypes = {
  tag: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node
};

Muted.defaultProps = {
  tag: 'small'
};

export default Muted;