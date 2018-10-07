import React from 'react';
import { shallow } from 'Test/enzyme';

import HorizontalFlex from 'Client/components/core/HorizontalFlex';

describe('<HorizontalFlex />', () => {
  it('should render', () => {
    expect(shallow(<HorizontalFlex />)).toHaveLength(1);
  });
});