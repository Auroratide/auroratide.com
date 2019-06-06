import React from 'react';
import { shallow } from 'Test/enzyme';

import Accordion from 'Client/components/core/Accordion/Accordion';

describe('<Accordion />', () => {
  it('should render', () => {
    expect(shallow(<Accordion expanded={false} />)).toHaveLength(1);
  });
});