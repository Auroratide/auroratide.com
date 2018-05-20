import React from 'react';
import PropTypes from 'Client/utils/prop-types';
import Container from 'Client/components/core/Container';
import LogoLink from './LogoLink';
import NavLink from './NavLink';
import Hamburger from './Hamburger';
import Accordion from 'Client/components/core/Accordion';

import styles from './style';

const TopBar = ({ accordionState }) =>
  <nav className={styles['top-bar']}>
    <Container className={styles.container}>
      <div className={styles['main-links']}>
        <LogoLink onClick={accordionState.collapse} />
        <Hamburger className={styles.hamburger} onClick={accordionState.toggle} active={accordionState.expanded} />
      </div>
      <Accordion state={accordionState} className={styles['nav-links']}>
        <NavLink name='Digests' onClick={accordionState.collapse} />
      </Accordion>
    </Container>
  </nav>;

TopBar.propTypes = {
  accordionState: PropTypes.instanceOf(Accordion.State).isRequired
};

export default TopBar;