import React from 'react';
import styles from './style';
import Link from 'Client/components/core/Link';

const NavLinks = () =>
  <div className={styles['nav-links']}>
    <Link to='/digests' className={styles.link}>Digests</Link>
  </div>;

export default NavLinks;