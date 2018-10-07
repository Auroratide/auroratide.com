import React from 'react';
import PropTypes from 'Client/utils/prop-types';
import Icon from 'Client/components/core/Icon';
import Point from '../geometry/point';

import styles from './style';

const LastClicked = ({ point }) =>
  <Icon icon='crosshairs' className={styles['last-clicked']} style={{
    top: `${point.y}px`,
    left: `${point.x}px`
  }} />;

LastClicked.propTypes = {
  point: PropTypes.instanceOf(Point).isRequired
};

export default LastClicked;