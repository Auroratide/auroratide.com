import React from 'react';
import Subsection from '../Subsection';
import DotsImage from '../DotsImage';

const WriterSection = () =>
  <Subsection image={DotsImage} direction={Subsection.Direction.RIGHT_TO_LEFT}>
    <h2>I Write</h2>
    <p>I am able to write stuff too.</p>
    <p>I am able to write stuff too.</p>
    <p>I am able to write stuff too.</p>
  </Subsection>;

export default WriterSection;