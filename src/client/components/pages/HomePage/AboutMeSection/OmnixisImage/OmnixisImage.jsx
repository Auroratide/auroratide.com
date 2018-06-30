import React from 'react';
import PropTypes from 'Client/utils/prop-types';
import Assets from 'Client/config/assets';
import classnames from 'classnames';
import styles from './style';

const OmnixisImage = ({ className }) =>
  <figure className={classnames(styles['omnixis-image'], className)}>
    <img src={Assets.Images.OMNIXIS_TOP} className={styles.top} />
    <img src={Assets.Images.OMNIXIS_MIDDLE} className={styles.middle} />
    <img src={Assets.Images.OMNIXIS_BOTTOM} className={styles.bottom} />
  </figure>;

OmnixisImage.propTypes = {
  className: PropTypes.string
};

export default OmnixisImage;