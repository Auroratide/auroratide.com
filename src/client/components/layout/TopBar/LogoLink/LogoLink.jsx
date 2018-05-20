import React from 'react';
import PropTypes from 'Client/utils/prop-types';
import styles from './style';

import Link from 'Client/components/core/Link';
import Logo from 'Client/components/core/Logo';

const LogoLink = ({ onClick }) =>
  <Link to='/' onClick={onClick} className={styles['logo-link']}>
    <Logo className={styles.logo} />
  </Link>;

LogoLink.propTypes = {
  onClick: PropTypes.func
};

export default LogoLink;