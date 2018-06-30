import React from 'react';
import { shallow } from 'Test/enzyme';

import AboutMeSection from 'Client/components/pages/HomePage/AboutMeSection';

describe('<AboutMeSection />', () => {
  it('should render', () => {
    expect(shallow(<AboutMeSection />)).toHaveLength(1);
  });
});