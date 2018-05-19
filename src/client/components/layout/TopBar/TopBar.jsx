import React from 'react';
import Container from 'Client/components/core/Container';
import LogoLink from './LogoLink';
import NavLink from './NavLink';
import Accordion from 'Client/components/core/Accordion';

import styles from './style';

const state = new Accordion.State();

const TopBar = () =>
  <nav className={styles['top-bar']}>
    <Container className={styles.container}>
      <div className={styles['main-links']}>
        <LogoLink />
        <button className={styles.hamburger} onClick={state.toggle}>T</button>
      </div>
      <Accordion state={state} className={styles['nav-links']}>
        <NavLink name='Posts' />
        <NavLink name='Digests' />
        <NavLink name='Stories' />
      </Accordion>
    </Container>
  </nav>;

export default TopBar;