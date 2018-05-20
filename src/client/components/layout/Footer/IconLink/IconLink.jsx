import React from 'react';
import PropTypes from 'Client/utils/prop-types';
import Link from 'Client/components/core/Link';
import Icon from 'Client/components/core/Icon';
import classnames from 'classnames';

import styles from './style';

const IconLink = ({ icon, to, className }) =>
  <Link to={to} className={classnames(styles['icon-link'], className)}>
    <Icon icon={icon} />
  </Link>;

IconLink.propTypes = {
  icon: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  className: PropTypes.string
};

export default IconLink;