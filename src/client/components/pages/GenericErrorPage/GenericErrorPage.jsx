import React from 'react';
import Error from 'Client/components/layout/Error';
import Button from 'Client/components/core/Button';
import Link from 'Client/components/core/Link';
import Links from 'Client/config/links';

import styles from './style';

const GenericErrorPage = () =>
  <Error title='Uh oh!' subtitle="Something went wrong.">
    <p className={styles.text}>
      Unfortunately, an unknown error has occurred. My humble apologies! Try refreshing this page or using the button below to go back to the home page in order to get things working again.
    </p>
    <Button primary tag={Link} to={Links.Auroratide.HOME} className={styles.button}>Home</Button>
  </Error>;

export default GenericErrorPage;