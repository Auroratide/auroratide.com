import React from 'react';
import { shallow } from 'Test/enzyme';

import AboutSiteSection from 'Client/components/pages/HomePage/AboutSiteSection';

describe('<AboutSiteSection />', () => {
  it('should render', () => {
    expect(shallow(<AboutSiteSection />)).toHaveLength(1);
  });
});