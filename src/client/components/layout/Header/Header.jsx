import React from 'react';
import styles from './style.css';

import TopBar from 'Client/components/layout/TopBar';

const Header = () =>
  <header className={styles.header}>
    <TopBar />
  </header>;

export default Header;