import React from 'react';
import { shallow } from 'Test/enzyme';

import Article from 'Client/components/layout/Article';

describe('<Article />', () => {
  it('should render', () => {
    expect(shallow(<Article />)).toHaveLength(1);
  });
});