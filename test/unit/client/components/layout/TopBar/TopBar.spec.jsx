import React from 'react';
import { shallow } from 'Test/enzyme';

import TopBar from 'Client/components/layout/TopBar/TopBar';
import Accordion from 'Client/components/core/Accordion';

describe('<TopBar />', () => {
  it('should render', () => {
    expect(shallow(<TopBar accordionState={new Accordion.State()} />)).toHaveLength(1);
  });
});