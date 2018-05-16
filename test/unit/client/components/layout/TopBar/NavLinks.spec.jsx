import React from 'react';
import { shallow } from 'Test/enzyme';

import NavLinks from 'Client/components/layout/TopBar/NavLinks';

describe('<NavLinks />', () => {
  it('should render', () => {
    expect(shallow(<NavLinks />)).toHaveLength(1);
  });
});