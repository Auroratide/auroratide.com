import React from 'react';
import { shallow } from 'Test/enzyme';

import Subsection from 'Client/components/pages/HomePage/AboutMeSection/Subsection';

describe('<Subsection />', () => {
  it('should render', () => {
    expect(shallow(<Subsection image={() => null} />)).toHaveLength(1);
  });
});