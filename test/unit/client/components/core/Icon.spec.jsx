import React from 'react';
import { shallow } from 'Test/enzyme';

import Icon from 'Client/components/core/Icon';

describe('<Icon />', () => {
  it('should render', () => {
    expect(shallow(<Icon icon="bars" />)).toHaveLength(1);
  });
});