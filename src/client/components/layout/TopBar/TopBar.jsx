import React from 'react';
import styles from './style';
import Container from 'Client/components/core/Container';
import Link from 'Client/components/core/Link';
import Logo from 'Client/components/core/Logo';

const TopBar = () =>
  <nav>
    <Container>
      <Link to='/' className={styles['logo-link']}>
        <Logo className={styles.logo} />
      </Link>
    </Container>
  </nav>;

export default TopBar;