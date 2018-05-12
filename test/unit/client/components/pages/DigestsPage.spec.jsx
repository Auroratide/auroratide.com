import React from 'react';
import { shallow } from 'Test/enzyme';

import DigestsPage from 'Client/components/pages/DigestsPage';

describe('<DigestsPage />', () => {
  it('should render', () => {
    expect(shallow(<DigestsPage />)).toHaveLength(1);
  });
});