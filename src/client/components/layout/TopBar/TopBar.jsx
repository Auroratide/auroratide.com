import React from 'react';
import Container from 'Client/components/core/Container';
import LogoLink from './LogoLink';
import NavLinks from './NavLinks';

import styles from './style';

const TopBar = () =>
  <nav className={styles['top-bar']}>
    <Container className={styles.container}>
      <LogoLink />
      <NavLinks />
    </Container>
  </nav>;

export default TopBar;