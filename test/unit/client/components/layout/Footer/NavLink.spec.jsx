import React from 'react';
import { shallow } from 'Test/enzyme';

import NavLink from 'Client/components/layout/Footer/NavLink';

describe('<NavLink />', () => {
  it('should render', () => {
    expect(shallow(<NavLink name='Digests' />)).toHaveLength(1);
  });
});