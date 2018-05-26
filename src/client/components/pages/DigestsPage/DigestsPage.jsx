import React from 'react';
import Container from 'Client/components/core/Container';
import ContentArea from 'Client/components/layout/ContentArea';
import DigestItem from 'Client/components/core/DigestItem';

const sampleDigest = {
  title: 'A Wonderful Day',
  by: 'Some Website',
  category: 'Example',
  summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In facilisis porta porta. Ut sapien sapien, rutrum nec metus at, cursus dictum est. Vestibulum ligula mauris, pretium ac sem sed, elementum eleifend nisl. Phasellus ultricies tortor ut urna commodo convallis. Nunc et tristique ante. Phasellus in lorem sit amet enim placerat bibendum pharetra a est. Nunc id urna pulvinar, egestas quam in, lobortis purus.',
  icon: 'bars',
  color: 'aurora-blue',
  link: 'http://auroratide.com'
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