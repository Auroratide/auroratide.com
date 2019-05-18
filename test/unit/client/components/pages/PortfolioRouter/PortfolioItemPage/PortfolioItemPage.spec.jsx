import React from 'react';
import { shallow } from 'Test/enzyme';

import PortfolioItemPage from 'Client/components/pages/PortfolioRouter/PortfolioItemPage';

describe('<PortfolioItemPage />', () => {
  it('should render', () => {
    expect(shallow(<PortfolioItemPage />)).toHaveLength(1);
  });
});