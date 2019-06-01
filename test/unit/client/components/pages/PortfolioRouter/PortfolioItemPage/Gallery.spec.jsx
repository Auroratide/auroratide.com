import React from 'react';
import { shallow } from 'Test/enzyme';

import Gallery from 'Client/components/pages/PortfolioRouter/PortfolioItemPage/Gallery';

describe('<Gallery />', () => {
  it('should render', () => {
    expect(shallow(<Gallery />)).toHaveLength(1);
  });
});