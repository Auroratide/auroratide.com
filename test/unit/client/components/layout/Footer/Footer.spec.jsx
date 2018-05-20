import React from 'react';
import { shallow } from 'Test/enzyme';

import Footer from 'Client/components/layout/Footer';

describe('<Footer />', () => {
  it('should render', () => {
    expect(shallow(<Footer />)).toHaveLength(1);
  });
});