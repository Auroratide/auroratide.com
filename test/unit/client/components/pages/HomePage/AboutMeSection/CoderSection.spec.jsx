import React from 'react';
import { shallow } from 'Test/enzyme';

import CoderSection from 'Client/components/pages/HomePage/AboutMeSection/CoderSection';

describe('<CoderSection />', () => {
  it('should render', () => {
    expect(shallow(<CoderSection />)).toHaveLength(1);
  });
});