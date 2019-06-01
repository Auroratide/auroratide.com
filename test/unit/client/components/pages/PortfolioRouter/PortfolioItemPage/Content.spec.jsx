import React from 'react';
import { shallow } from 'Test/enzyme';
import ProjectBuilder from 'Test/utils/builders/PortfolioItemBuilder';

import Content from 'Client/components/pages/PortfolioRouter/PortfolioItemPage/Content';

describe('<Content />', () => {
  it('should render', () => {
    expect(shallow(<Content item={new ProjectBuilder().build()} />)).toHaveLength(1);
  });
});