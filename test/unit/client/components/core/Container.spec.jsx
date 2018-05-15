import React from 'react';
import { shallow } from 'Test/enzyme';

import Container from 'Client/components/core/Container';

describe('<Container />', () => {
  it('should render', () => {
    expect(shallow(<Container />)).toHaveLength(1);
  });
});