import React from 'react';
import Page from 'Client/components/layout/Page';
import Link from 'Client/components/core/Link';

const HomePage = () =>
  <Page>
    <p>Hello World!</p>
    <p><Link to='/digests'>Go to Digests</Link></p>
  </Page>;

export default HomePage;