import React from 'react';
import PropTypes from 'Client/utils/prop-types';
import classnames from 'classnames';
import styles from './style';

const Subsection = ({ className, image, direction, children }) =>
  <div className={classnames(styles.subsection, styles[direction], className)}>
    <div className={styles.text}>
      {children}
    </div>
    <div className={styles['image-container']}>
      {React.createElement(image)}
    </div>
  </div>;

Subsection.Direction = {
  LEFT_TO_RIGHT: 'left-to-right',
  RIGHT_TO_LEFT: 'right-to-left'
};

Subsection.propTypes = {
  className: PropTypes.string,
  image: PropTypes.component,
  direction: PropTypes.oneOf([Subsection.Direction.LEFT_TO_RIGHT, Subsection.Direction.RIGHT_TO_LEFT]),
  children: PropTypes.node
};

Subsection.defaultProps = {
  direction: Subsection.Direction.LEFT_TO_RIGHT
};

export default Subsection;