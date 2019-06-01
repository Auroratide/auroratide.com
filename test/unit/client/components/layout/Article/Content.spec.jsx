import React from 'react';
import { shallow } from 'Test/enzyme';

import Content from 'Client/components/layout/Article/Content';

describe('<Content />', () => {
  it('should render', () => {
    expect(shallow(<Content />)).toHaveLength(1);
  });
});