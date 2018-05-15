import React from 'react';
import Page from 'Client/components/layout/Page';
import Link from 'Client/components/core/Link';
import Container from 'Client/components/core/Container';

const HomePage = () =>
  <Page>
    <Container>
      <p>Hello World!</p>
      <p><Link to='/digests'>Go to Digests</Link></p>
    </Container>
  </Page>;

export default HomePage;