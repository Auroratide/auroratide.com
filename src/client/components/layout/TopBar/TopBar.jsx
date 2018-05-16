import React from 'react';
import Container from 'Client/components/core/Container';
import LogoLink from './LogoLink';

const TopBar = () =>
  <nav>
    <Container>
      <LogoLink />
    </Container>
  </nav>;

export default TopBar;