import React from 'react';
import { shallow } from 'Test/enzyme';

import HomePage from 'Client/components/pages/HomePage';

describe('<HomePage />', () => {
  it('should render', () => {
    expect(shallow(<HomePage />)).toHaveLength(1);
  });
});