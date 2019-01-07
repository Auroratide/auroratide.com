import React from 'react';
import PropTypes from 'Client/utils/prop-types';
import styles from './style';

const MajorPoint = ({ text }) =>
  <div className={styles['major-point']}>{text}</div>;

MajorPoint.propTypes = {
  text: PropTypes.string
};

export default MajorPoint;