import React from 'react';
import { shallow } from 'Test/enzyme';

import PortfolioPage from 'Client/components/pages/PortfolioRouter/PortfolioPage/PortfolioPage';

describe('<PortfolioPage />', () => {
  it('should render', () => {
    const resource = {
      list: () => []
    };
    expect(shallow(<PortfolioPage resource={resource} />)).toHaveLength(1);
  });
});