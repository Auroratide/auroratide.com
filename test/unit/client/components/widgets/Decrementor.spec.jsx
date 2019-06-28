import React from 'react';
import { shallow } from 'Test/enzyme';

import Decrementor from 'Client/components/widgets/Decrementor';

describe('<Decrementor />', () => {
  it('should render', () => {
    expect(shallow(<Decrementor />)).toHaveLength(1);
  });
});