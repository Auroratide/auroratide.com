import React from 'react';
import styles from './style.css';
import Logo from 'Client/components/core/Logo';

const TopBar = () =>
  <nav className={styles.topBar}>
    <Logo className={styles.logo} />
  </nav>;

export default TopBar;