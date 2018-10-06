import React from 'react';
import PropTypes from 'Client/utils/prop-types';
import Model from './model';
import Assets from 'Client/config/assets';
import styles from './style';

const Line = ({ line }) =>
  <img className={styles.line} src={Assets.ConnectNineDots.LINE} style={{
    left: `${line.origin.x}px`,
    top: `${line.origin.y}px`,
    width: `${line.length}px`,
    transform: `rotate(${line.degrees}deg)`
  }} />;

Line.propTypes = {
  line: PropTypes.instanceOf(Model).isRequired
};

export default Line;