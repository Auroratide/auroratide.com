import React from 'react';
import { shallow } from 'Test/enzyme';

import Dots from 'Client/components/widgets/ConnectNineDots/Dots';

describe('<Dots />', () => {
  it('should render', () => {
    expect(shallow(<Dots />)).toHaveLength(1);
  });
});