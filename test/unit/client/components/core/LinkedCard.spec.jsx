import React from 'react';
import { shallow } from 'Test/enzyme';

import LinkedCard from 'Client/components/core/LinkedCard';

describe('<LinkedCard />', () => {
  it('should render', () => {
    expect(shallow(<LinkedCard />)).toHaveLength(1);
  });
});