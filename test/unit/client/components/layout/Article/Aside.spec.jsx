import React from 'react';
import { shallow } from 'Test/enzyme';

import Aside from 'Client/components/layout/Article/Aside';

describe('<Aside />', () => {
  it('should render', () => {
    expect(shallow(<Aside />)).toHaveLength(1);
  });
});