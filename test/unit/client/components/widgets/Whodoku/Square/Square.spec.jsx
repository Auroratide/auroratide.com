import React from 'react';
import { shallow } from 'Test/enzyme';

import Square from 'Client/components/widgets/Whodoku/Square';

describe('<Square />', () => {
  it('should render', () => {
    expect(shallow(<Square />)).toHaveLength(1);
  });
});