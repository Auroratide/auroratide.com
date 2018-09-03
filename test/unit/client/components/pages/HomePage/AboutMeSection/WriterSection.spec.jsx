import React from 'react';
import { shallow } from 'Test/enzyme';

import TeacherSection from 'Client/components/pages/HomePage/AboutMeSection/TeacherSection';

describe('<WriterSection />', () => {
  it('should render', () => {
    expect(shallow(<TeacherSection />)).toHaveLength(1);
  });
});