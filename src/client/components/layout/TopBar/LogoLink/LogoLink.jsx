import React from 'react';
import styles from './style';

import Link from 'Client/components/core/Link';
import Logo from 'Client/components/core/Logo';

const LogoLink = () =>
  <Link to='/' className={styles['logo-link']}>
    <Logo className={styles.logo} />
  </Link>;

export default LogoLink;