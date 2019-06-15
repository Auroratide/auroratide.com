import React from 'react';
import PropTypes from 'Client/utils/prop-types';
import DocumentTitle from 'Client/components/layout/DocumentTitle';
import Container from 'Client/components/core/Container';
import ContentArea from 'Client/components/layout/ContentArea';
import DigestItem from './DigestItem';

const DigestsPage = ({ list }) =>
  <DocumentTitle title='Digests'>
    <Container>
      <ContentArea>
        {list.map(digest => <DigestItem digest={digest} key={digest.id} />)}
      </ContentArea>
    </Container>
  </DocumentTitle>;

DigestsPage.propTypes = {
  list: PropTypes.arrayOf(PropTypes.digest)
};

export default DigestsPage;