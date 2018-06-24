import React from 'react';
import { shallow } from 'Test/enzyme';

import CircledIcon from 'Client/components/core/CircledIcon';

describe('<CircledIcon />', () => {
  it('should render', () => {
    expect(shallow(<CircledIcon icon='bars' />)).toHaveLength(1);
  });
});