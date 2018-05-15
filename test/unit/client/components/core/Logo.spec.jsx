import React from 'react';
import { shallow } from 'Test/enzyme';

import Logo from 'Client/components/core/Logo';

describe('<Logo />', () => {
  it('should render', () => {
    expect(shallow(<Logo />)).toHaveLength(1);
  });
});