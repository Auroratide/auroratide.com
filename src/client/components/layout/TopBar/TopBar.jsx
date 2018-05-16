import React from 'react';
import Container from 'Client/components/core/Container';
import LogoLink from './LogoLink';
import Link from 'Client/components/core/Link';

import styles from './style';

const TopBar = () =>
  <nav className={styles['top-bar']}>
    <Container className={styles.container}>
      <LogoLink />
      <div className={styles['link-container']}>
        <Link to='/digests' className={styles.link}>Digests</Link>
      </div>
    </Container>
  </nav>;

export default TopBar;