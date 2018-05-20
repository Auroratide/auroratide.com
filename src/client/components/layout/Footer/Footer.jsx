import React from 'react';
import Container from 'Client/components/core/Container';
import NavLink from './NavLink';
import IconLink from './IconLink';
import License from './License';
import Links from 'Client/config/links';

import styles from './style';

const Footer = () =>
  <footer>
    <Container>
      <div className={styles['icon-links']}>
        <IconLink icon='linked-in' className={styles['linked-in']} to={Links.Social.LINKED_IN} />
        <IconLink icon='twitter' className={styles.twitter} to={Links.Social.TWITTER} />
        <IconLink icon='github-alt' className={styles.github} to={Links.Social.GITHUB} />
      </div>
      <div className={styles['nav-links']}>
        <NavLink name='Home' to='/' />
        <NavLink name='Digests' />
      </div>
      <License />
    </Container>
  </footer>;

export default Footer;