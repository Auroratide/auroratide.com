import React from 'react';
import PropTypes from 'Client/utils/prop-types';
import Assets from 'Client/config/assets';
import Animated from 'Client/components/core/Animated';
import classnames from 'classnames';
import styles from './style';

const OmnixisImage = ({ className }) =>
  <Animated.figure className={classnames(styles['omnixis-image'], className)}>
    <img src={Assets.Images.OMNIXIS_T} className={styles.top} />
    <img src={Assets.Images.OMNIXIS_O} className={styles.middle} />
    <img src={Assets.Images.OMNIXIS_L} className={styles.bottom} />
  </Animated.figure>;

OmnixisImage.propTypes = {
  className: PropTypes.string
};

export default OmnixisImage;