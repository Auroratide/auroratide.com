import React from 'react';
import Error from 'Client/components/layout/Error';
import Button from 'Client/components/core/Button';
import Link from 'Client/components/core/Link';
import Links from 'Client/config/links';

import styles from './style';

const PageNotFound = () =>
  <Error title='Uh oh!' subtitle="Seems like there's nothing here.">
    <p className={styles.text}>
      The page you&apos;re looking for is not available. Try using the top navigation bar to find cool, awesome content! Or, click the button below to go back to the home page.
    </p>
    <Button primary tag={Link} to={Links.Auroratide.HOME} className={styles.button}>Home</Button>
  </Error>;

export default PageNotFound;