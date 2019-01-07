import React from 'react';
import { shallow } from 'Test/enzyme';

import MajorPoint from 'Client/components/core/MajorPoint';

describe('<MajorPoint />', () => {
  it('should render', () => {
    expect(shallow(<MajorPoint />)).toHaveLength(1);
  });
});