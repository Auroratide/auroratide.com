import React from 'react';
import { shallow } from 'Test/enzyme';

import ConnectNineDots from 'Client/components/widgets/ConnectNineDots';

describe('<ConnectNineDots />', () => {
  it('should render', () => {
    expect(shallow(<ConnectNineDots />)).toHaveLength(1);
  });
});