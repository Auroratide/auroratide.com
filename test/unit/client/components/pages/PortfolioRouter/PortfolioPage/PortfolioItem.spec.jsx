import React from 'react';
import { shallow } from 'Test/enzyme';
import PortfolioItemBuilder from 'Test/utils/builders/PortfolioItemBuilder';

import PortfolioItem from 'Client/components/pages/PortfolioRouter/PortfolioPage/PortfolioItem';

describe('<PortfolioItem />', () => {
  it('should render', () => {
    expect(shallow(<PortfolioItem project={new PortfolioItemBuilder().build()} />)).toHaveLength(1);
  });
});