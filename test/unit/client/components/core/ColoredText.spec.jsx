import React from 'react';
import { shallow } from 'Test/enzyme';

import ColoredText from 'Client/components/core/ColoredText';

describe('<ColoredText />', () => {
  it('should render', () => {
    expect(shallow(<ColoredText />)).toHaveLength(1);
  });
});