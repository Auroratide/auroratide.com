import React from 'react';
import { shallow } from 'Test/enzyme';

import StegoBody from 'Client/components/widgets/StegoBody';

describe('<StegoBody />', () => {
  it('should render', () => {
    expect(shallow(<StegoBody />)).toHaveLength(1);
  });
});