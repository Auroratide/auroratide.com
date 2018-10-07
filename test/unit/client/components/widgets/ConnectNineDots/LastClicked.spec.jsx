import React from 'react';
import { shallow } from 'Test/enzyme';
import Point from 'Client/components/widgets/ConnectNineDots/geometry/point';

import LastClicked from 'Client/components/widgets/ConnectNineDots/LastClicked';

describe('<LastClicked />', () => {
  it('should render', () => {
    expect(shallow(<LastClicked point={new Point(1, 2)}/>)).toHaveLength(1);
  });
});