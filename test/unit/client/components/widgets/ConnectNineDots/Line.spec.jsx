import React from 'react';
import { shallow } from 'Test/enzyme';

import Line from 'Client/components/widgets/ConnectNineDots/Line';
import Model from 'Client/components/widgets/ConnectNineDots/geometry/line';
import Point from 'Client/components/widgets/ConnectNineDots/geometry/point';

describe('<Line />', () => {
  it('should render', () => {
    const line = new Model(new Point(1, 1), 1, 0);
    expect(shallow(<Line line={line} />)).toHaveLength(1);
  });
});