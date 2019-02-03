import React from 'react';
import { shallow } from 'Test/enzyme';

import RconRenderer from 'Client/components/core/RconRenderer';

describe('<RconRenderer />', () => {
  it('should render', () => {
    expect(shallow(<RconRenderer rcon={'string'} />)).toHaveLength(1);
  });
});