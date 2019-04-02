import React from 'react';
import DocumentTitle from 'Client/components/layout/DocumentTitle';
import Container from 'Client/components/core/Container';
import Whodoku from 'Client/components/widgets/Whodoku';
import PageTitle from 'Client/components/layout/PageTitle';

import styles from './style';

const WhodokuPage = () =>
  <DocumentTitle title='Whodoku'>
    <Container>
      <PageTitle className={styles.title}>Whodoku!</PageTitle>
      <p className={styles.instructions}>Tap an empty square until it is the face you want!</p>
      <Whodoku />
    </Container>
  </DocumentTitle>;

export default WhodokuPage;