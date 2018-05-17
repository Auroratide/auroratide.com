import React from 'react';
import Container from 'Client/components/core/Container';
import LogoLink from './LogoLink';
import NavLink from './NavLink';

import styles from './style';

const TopBar = () =>
  <nav className={styles['top-bar']}>
    <Container className={styles.container}>
      <LogoLink />
      <div className={styles['nav-links']}>
        <NavLink name='Digests' />
      </div>
    </Container>
  </nav>;

export default TopBar;