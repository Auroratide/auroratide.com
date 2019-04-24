import React from 'react';
import PropTypes from 'Client/utils/prop-types';
import classnames from 'classnames';
import styles from './style';

const Figure = ({ src, alt, caption, size, className }) =>
  <figure className={classnames(styles.figure, styles[size], className)}>
    <img src={src} alt={alt} />
    <figcaption>{caption}</figcaption>
  </figure>;

Figure.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  caption: PropTypes.node,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  className: PropTypes.string
};

export default Figure;