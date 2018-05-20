import React from 'react';
import Container from 'Client/components/core/Container';
import NavLink from './NavLink';
import License from './License';

import styles from './style';

const Footer = () =>
  <footer>
    <Container>
      <div className={styles['nav-links']}>
        <NavLink name='Home' to='/' />
        <NavLink name='Digests' />
      </div>
      <License />
    </Container>
  </footer>;

export default Footer;