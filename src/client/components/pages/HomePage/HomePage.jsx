import React from 'react';
import Link from 'Client/components/core/Link';

const HomePage = () =>
  <div>
    <p>Hello World!</p>
    <p><Link to='/digests'>Go to Digests</Link></p>
  </div>;

export default HomePage;