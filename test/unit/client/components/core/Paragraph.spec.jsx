import React from 'react';
import { shallow } from 'Test/enzyme';

import Paragraph from 'Client/components/core/Paragraph';

describe('<Paragraph />', () => {
  it('should render', () => {
    expect(shallow(<Paragraph />)).toHaveLength(1);
  });
});