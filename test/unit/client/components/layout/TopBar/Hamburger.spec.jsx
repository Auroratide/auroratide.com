import React from 'react';
import { shallow } from 'Test/enzyme';

import Hamburger from 'Client/components/layout/TopBar/Hamburger';

describe('<Hamburger />', () => {
  it('should render', () => {
    expect(shallow(<Hamburger />)).toHaveLength(1);
  });
});