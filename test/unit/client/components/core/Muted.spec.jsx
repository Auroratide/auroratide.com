import React from 'react';
import { shallow } from 'Test/enzyme';

import Muted from 'Client/components/core/Muted';

describe('<Muted />', () => {
  it('should render', () => {
    expect(shallow(<Muted />)).toHaveLength(1);
  });
});