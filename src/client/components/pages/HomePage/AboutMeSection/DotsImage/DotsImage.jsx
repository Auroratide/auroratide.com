import React from 'react';
import PropTypes from 'Client/utils/prop-types';
import Assets from 'Client/config/assets';
import Animated from 'Client/components/core/Animated';
import classnames from 'classnames';
import styles from './style';

const DotsImage = ({ className }) =>
  <Animated.figure className={classnames(styles['dots-image'], className)}>
    <img src={Assets.Images.DOTS_BASE} className={styles.base} />
    <img src={Assets.Images.DOTS_LINE_TOP} className={styles.top} />
    <img src={Assets.Images.DOTS_LINE_MIDDLE} className={styles.middle} />
    <img src={Assets.Images.DOTS_LINE_BOTTOM} className={styles.bottom} />
  </Animated.figure>;

DotsImage.propTypes = {
  className: PropTypes.string
};

export default DotsImage;