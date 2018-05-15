import React from 'react';
import { shallow } from 'Test/enzyme';

import Page from 'Client/components/layout/Page';

describe('<Page />', () => {
  it('should render', () => {
    expect(shallow(<Page />)).toHaveLength(1);
  });
});