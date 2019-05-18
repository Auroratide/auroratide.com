import React from 'react';
import { shallow } from 'Test/enzyme';
import ResourceStore from 'Client/store/resource-store';

import PortfolioPage from 'Client/components/pages/PortfolioRouter/PortfolioPage/PortfolioPage';

describe('<PortfolioPage />', () => {
  it('should render', () => {
    expect(shallow(<PortfolioPage store={new ResourceStore()} />)).toHaveLength(1);
  });
});