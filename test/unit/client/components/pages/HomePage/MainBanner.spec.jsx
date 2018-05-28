import React from 'react';
import { shallow } from 'Test/enzyme';

import MainBanner from 'Client/components/pages/HomePage/MainBanner';

describe('<MainBanner />', () => {
  it('should render', () => {
    expect(shallow(<MainBanner />)).toHaveLength(1);
  });
});