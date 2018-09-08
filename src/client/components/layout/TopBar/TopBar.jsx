import React from 'react';
import PropTypes from 'Client/utils/prop-types';
import Links from 'Client/config/links';
import Container from 'Client/components/core/Container';
import LogoLink from './LogoLink';
import NavLink from './NavLink';
import Hamburger from './Hamburger';
import Accordion from 'Client/components/core/Accordion';
import functions from 'Client/utils/functions';
import scroll from 'Client/utils/scroll';

import styles from './style';

const TopBar = ({ accordionState }) =>
  <nav className={styles['top-bar']}>
    <Container className={styles.container}>
      <div className={styles['main-links']}>
        <LogoLink onClick={functions.series(accordionState.collapse, scroll.toTop)} />
        <Hamburger className={styles.hamburger} onClick={accordionState.toggle} active={accordionState.expanded} />
      </div>
      <Accordion state={accordionState} className={styles['nav-links']}>
        <NavLink name='Digests' to={Links.Auroratide.DIGESTS} onClick={functions.series(accordionState.collapse, scroll.toTop)} />
      </Accordion>
    </Container>
  </nav>;

TopBar.propTypes = {
  accordionState: PropTypes.instanceOf(Accordion.State).isRequired
};

export default TopBar;