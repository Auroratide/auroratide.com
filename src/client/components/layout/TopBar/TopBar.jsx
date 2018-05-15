import React from 'react';
import styles from './style.css';
import Container from 'Client/components/core/Container';
import Logo from 'Client/components/core/Logo';

const TopBar = () =>
  <nav className={styles.topBar}>
    <Container>
      <Logo className={styles.logo} />
    </Container>
  </nav>;

export default TopBar;