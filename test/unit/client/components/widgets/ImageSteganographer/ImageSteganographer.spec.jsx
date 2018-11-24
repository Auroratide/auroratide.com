import React from 'react';
import { shallow } from 'Test/enzyme';

import ImageSteganographer from 'Client/components/widgets/ImageSteganographer';

describe('<ImageSteganographer />', () => {
  it('should render', () => {
    expect(shallow(<ImageSteganographer />)).toHaveLength(1);
  });
});