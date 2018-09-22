import React from 'react';
import PropTypes from 'Client/utils/prop-types';
import classnames from 'classnames';
import styles from './style';

const Container = ({ tag, className, children }) =>
  React.createElement(tag, {
    className: classnames(styles.container, className)
  }, children);

Container.propTypes = {
  tag: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node
};

Container.defaultProps = {
  tag: 'div'
};

export default Container;