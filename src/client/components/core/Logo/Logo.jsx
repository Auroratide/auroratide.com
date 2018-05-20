import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Assets from 'Client/config/assets';

import styles from './style';

const Logo = ({ className }) =>
  <div className={classnames(styles.logo, className)}>
    <img src={Assets.Logo.NO_BACK} />
  </div>;

Logo.propTypes = {
  className: PropTypes.string
};

export default Logo;