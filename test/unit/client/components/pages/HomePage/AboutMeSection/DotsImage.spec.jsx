import React from 'react';
import { shallow } from 'Test/enzyme';

import DotsImage from 'Client/components/pages/HomePage/AboutMeSection/DotsImage';

describe('<DotsImage />', () => {
  it('should render', () => {
    expect(shallow(<DotsImage />)).toHaveLength(1);
  });
});