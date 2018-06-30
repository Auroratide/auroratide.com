import React from 'react';
import { shallow } from 'Test/enzyme';

import OmnixisImage from 'Client/components/pages/HomePage/AboutMeSection/OmnixisImage';

describe('<OmnixisImage />', () => {
  it('should render', () => {
    expect(shallow(<OmnixisImage />)).toHaveLength(1);
  });
});