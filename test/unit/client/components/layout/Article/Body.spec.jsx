import React from 'react';
import { shallow } from 'Test/enzyme';

import Body from 'Client/components/layout/Article/Body';

describe('<Body />', () => {
  it('should render', () => {
    expect(shallow(<Body />)).toHaveLength(1);
  });
});