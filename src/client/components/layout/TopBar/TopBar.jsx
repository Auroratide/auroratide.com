import React from 'react';
import PropTypes from 'Client/utils/prop-types';
import Container from 'Client/components/core/Container';
import LogoLink from './LogoLink';
import NavLink from './NavLink';
import Accordion from 'Client/components/core/Accordion';

import styles from './style';

const TopBar = ({ accordionState }) =>
  <nav className={styles['top-bar']}>
    <Container className={styles.container}>
      <div className={styles['main-links']}>
        <LogoLink />
        <button className={styles.hamburger} onClick={accordionState.toggle}>T</button>
      </div>
      <Accordion state={accordionState} className={styles['nav-links']}>
        <NavLink name='Posts' />
        <NavLink name='Digests' />
        <NavLink name='Stories' />
      </Accordion>
    </Container>
  </nav>;

TopBar.propTypes = {
  accordionState: PropTypes.instanceOf(Accordion.State).isRequired
};

export default TopBar;