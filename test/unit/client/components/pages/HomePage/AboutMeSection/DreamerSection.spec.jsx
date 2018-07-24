import React from 'react';
import { shallow } from 'Test/enzyme';

import DreamerSection from 'Client/components/pages/HomePage/AboutMeSection/DreamerSection';

describe('<DreamerSection />', () => {
  it('should render', () => {
    expect(shallow(<DreamerSection />)).toHaveLength(1);
  });
});