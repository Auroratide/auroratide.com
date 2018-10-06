import React from 'react';
import { shallow } from 'Test/enzyme';

import Line from 'Client/components/widgets/ConnectNineDots/Line';
import Model from 'Client/components/widgets/ConnectNineDots/Line/model';

describe('<Line />', () => {
  it('should render', () => {
    const line = new Model({ x: 1, y: 1 }, 1, 0);
    expect(shallow(<Line line={line} />)).toHaveLength(1);
  });
});