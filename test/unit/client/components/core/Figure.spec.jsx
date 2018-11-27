import React from 'react';
import { shallow } from 'Test/enzyme';

import Figure from 'Client/components/core/Figure';

describe('<Figure />', () => {
  it('should render', () => {
    expect(shallow(<Figure />)).toHaveLength(1);
  });
});