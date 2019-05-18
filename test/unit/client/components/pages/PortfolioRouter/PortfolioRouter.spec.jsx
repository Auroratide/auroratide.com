import React from 'react';
import { shallow } from 'Test/enzyme';

import PortfolioRouter from 'Client/components/pages/PortfolioRouter';

describe('<PortfolioRouter />', () => {
  it('should render', () => {
    expect(shallow(<PortfolioRouter />)).toHaveLength(1);
  });
});