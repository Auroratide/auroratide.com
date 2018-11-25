import React from 'react';
import { shallow } from 'Test/enzyme';

import ImageContainer from 'Client/components/widgets/ImageSteganographer/ImageContainer';

describe('<ImageContainer />', () => {
  it('should render', () => {
    expect(shallow(<ImageContainer />)).toHaveLength(1);
  });
});