import React from 'react';
import Link from 'Client/components/core/Link';
import Container from 'Client/components/core/Container';
import Accordion from 'Client/components/core/Accordion';
import ContentArea from 'Client/components/layout/ContentArea';

const state = new Accordion.State();

const HomePage = () =>
  <Container>
    <ContentArea white>
      <p>Hello World!</p>
      <p><Link to='/digests'>Go to Digests</Link></p>
      <br /><br />
      <button onClick={() => state.toggle()}>Click me</button>
      <Accordion state={state}>
        <p>This is a test.</p>
        <p>This is a test.</p>
        <p>This is a test.</p>
      </Accordion>
    </ContentArea>
  </Container>;

export default HomePage;