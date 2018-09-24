import React from 'react';
import { shallow } from 'Test/enzyme';

import StandardTypography from 'Client/components/layout/StandardTypography';

describe('<StandardTypography />', () => {
  it('should render', () => {
    expect(shallow(<StandardTypography />)).toHaveLength(1);
  });
});