import React from 'react';
import { shallow } from 'Test/enzyme';

import Error from 'Client/components/layout/Error';

describe('<Error />', () => {
  it('should render', () => {
    expect(shallow(<Error />)).toHaveLength(1);
  });
});