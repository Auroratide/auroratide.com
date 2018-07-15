import React from 'react';
import { shallow } from 'Test/enzyme';

import WriterSection from 'Client/components/pages/HomePage/AboutMeSection/WriterSection';

describe('<WriterSection />', () => {
  it('should render', () => {
    expect(shallow(<WriterSection />)).toHaveLength(1);
  });
});