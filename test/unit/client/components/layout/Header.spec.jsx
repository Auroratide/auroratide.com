import React from 'react';
import { shallow } from 'Test/enzyme';

import Header from 'Client/components/layout/Header';

describe('<Header />', () => {
  it('should render', () => {
    expect(shallow(<Header />)).toHaveLength(1);
  });
});