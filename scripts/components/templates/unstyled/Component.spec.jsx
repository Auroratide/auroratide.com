import React from 'react';
import { shallow } from 'Test/enzyme';

import $NAME$ from 'Client/components/$PATH$';

describe('<$NAME$ />', () => {
  it('should render', () => {
    expect(shallow(<$NAME$ />)).toHaveLength(1);
  });
});