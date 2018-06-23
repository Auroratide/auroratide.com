import React from 'react';
import PropTypes from 'Client/utils/prop-types';
import Icon from 'Client/components/core/Icon';
import classnames from 'classnames';

import styles from './style';

const CircledIcon = ({ icon, color, className }) =>
  <div className={classnames(
    styles['circled-icon'],
    { [styles[`color-${color}`]]: color },
    className
  )}>
    <Icon icon={icon} />
  </div>;

CircledIcon.propTypes = {
  icon: PropTypes.string,
  color: PropTypes.string,
  className: PropTypes.string
};

export default CircledIcon;