import React from 'react';
import Container from 'Client/components/core/Container';
import Links from 'Client/config/links';
import NavLink from './NavLink';
import IconLink from './IconLink';
import License from './License';

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
        <NavLink name='Home' to={Links.Auroratide.HOME} />
        <NavLink name='Posts' to={Links.Auroratide.POSTS} />
        <NavLink name='Digests' to={Links.Auroratide.DIGESTS} />
        <NavLink name='Legal' to={Links.Auroratide.LEGAL} />
      </div>
      <License />
    </Container>
  </footer>;

export default Footer;