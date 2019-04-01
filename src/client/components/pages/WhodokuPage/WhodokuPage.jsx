import React from 'react';
import DocumentTitle from 'Client/components/layout/DocumentTitle';
import Container from 'Client/components/core/Container';
import Whodoku from 'Client/components/widgets/Whodoku';

const WhodokuPage = () =>
  <DocumentTitle title='Whodoku'>
    <Container>
      <Whodoku />
    </Container>
  </DocumentTitle>;

export default WhodokuPage;