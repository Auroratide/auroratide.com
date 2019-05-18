import React from 'react';
import Container from 'Client/components/core/Container';
import Links, { UrlBuilder } from 'Client/config/links';
import NavLink from './NavLink';
import IconLink from './IconLink';
import License from './License';

import styles from './style';

const Footer = () =>
  <footer className={styles.footer}>
    <Container>
      <div className={styles['icon-links']}>
        <IconLink icon='linked-in' className={styles['linked-in']} to={Links.Social.LINKED_IN} />
        <IconLink icon='twitter' className={styles.twitter} to={Links.Social.TWITTER} />
        <IconLink icon='github-alt' className={styles.github} to={Links.Social.GITHUB} />
      </div>
      <div className={styles['nav-links']}>
        <NavLink name='Home' to={new UrlBuilder().home()} />
        <NavLink name='Posts' to={new UrlBuilder().posts()} />
        <NavLink name='Digests' to={new UrlBuilder().digests()} />
        <NavLink name='Portfolio' to={new UrlBuilder().portfolio()} />
        <NavLink name='Legal' to={new UrlBuilder().legal()} />
      </div>
      <License />
    </Container>
  </footer>;

export default Footer;