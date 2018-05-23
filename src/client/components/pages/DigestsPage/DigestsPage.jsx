import React from 'react';
import Container from 'Client/components/core/Container';
import ContentArea from 'Client/components/layout/ContentArea';
import DigestItem from 'Client/components/core/DigestItem';

const sampleDigest = {
  title: 'A Wonderful Day',
  by: 'Some Website',
  category: 'Example',
  summary: 'This is a summary.  It is meant to be about two to three sentences long.  This is the final sentence.',
  icon: 'bars',
  color: 'aurora-blue'
};

const DigestsPage = () =>
  <Container>
    <ContentArea>
      <DigestItem digest={sampleDigest} />
      <DigestItem digest={sampleDigest} />
      <DigestItem digest={sampleDigest} />
      <DigestItem digest={sampleDigest} />
    </ContentArea>
  </Container>;

export default DigestsPage;