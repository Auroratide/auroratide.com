import React from 'react';
import { shallow } from 'Test/enzyme';

import DownloadButtons from 'Client/components/pages/PortfolioRouter/PortfolioItemPage/DownloadButtons';

describe('<DownloadButtons />', () => {
  it('should render', () => {
    expect(shallow(<DownloadButtons />)).toHaveLength(1);
  });
});