import React from 'react';
import Container from 'Client/components/core/Container';
import Button from 'Client/components/core/Button';
import Link from 'Client/components/core/Link';
import ContentArea from 'Client/components/layout/ContentArea';
import Links from 'Client/config/links';
import styles from './style';

const PageNotFound = () =>
  <Container className={styles['page-not-found']}>
    <ContentArea>
      <h1 className={styles.title}>Uh oh!</h1>
      <h2 className={styles.subtitle}>Seems like there&apos;s nothing here.</h2>
      <p className={styles.text}>
        The page you&apos;re looking for is not available. Try using the top navigation bar to find cool, awesome content! Or, click the button below to go back to the home page.
      </p>
      <Button primary tag={Link} to={Links.Auroratide.HOME} className={styles.button}>Home</Button>
    </ContentArea>
  </Container>;

export default PageNotFound;