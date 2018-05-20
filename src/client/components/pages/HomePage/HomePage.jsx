import React from 'react';
import Link from 'Client/components/core/Link';
import Container from 'Client/components/core/Container';
import Accordion from 'Client/components/core/Accordion';

const state = new Accordion.State();

const HomePage = () =>
  <Container>
    <p>Hello World!</p>
    <p><Link to='/digests'>Go to Digests</Link></p>
    <br /><br />
    <button onClick={() => state.toggle()}>Click me</button>
    <Accordion state={state}>
      <p>This is a test.</p>
      <p>This is a test.</p>
      <p>This is a test.</p>
    </Accordion>
  </Container>;

export default HomePage;