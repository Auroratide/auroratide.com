import React from 'react';
import { shallow } from 'Test/enzyme';

import IconLink from 'Client/components/layout/Footer/IconLink';

describe('<IconLink />', () => {
  it('should render', () => {
    expect(shallow(<IconLink icon='bars' to='/' />)).toHaveLength(1);
  });
});