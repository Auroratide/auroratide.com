import React from 'react';
import { shallow } from 'Test/enzyme';

import TopBar from 'Client/components/layout/TopBar';

describe('<TopBar />', () => {
  it('should render', () => {
    expect(shallow(<TopBar />)).toHaveLength(1);
  });
});