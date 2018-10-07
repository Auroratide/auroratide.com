import React from 'react';
import PropTypes from 'Client/utils/prop-types';
import LineModel from '../geometry/line';
import Assets from 'Client/config/assets';
import styles from './style';

const translation = degrees => -50*Math.cos(degrees * Math.PI / 180);

const Line = ({ line }) =>
  <img className={styles.line} src={Assets.ConnectNineDots.LINE} style={{
    left: `${line.origin.x}px`,
    top: `${line.origin.y}px`,
    width: `${line.length}px`,
    transform: `rotate(${line.degrees}deg) translate(0, ${translation(line.degrees)}%)`
  }} />;

Line.propTypes = {
  line: PropTypes.instanceOf(LineModel).isRequired
};

export default Line;