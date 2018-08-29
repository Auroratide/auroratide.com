import React from 'react';
import { shallow } from 'Test/enzyme';

import Button from 'Client/components/core/Button';

describe('<Button />', () => {
  it('should render', () => {
    expect(shallow(<Button />)).toHaveLength(1);
  });
});