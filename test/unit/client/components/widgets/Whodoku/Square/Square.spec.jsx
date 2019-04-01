import React from 'react';
import { shallow } from 'Test/enzyme';
import State from 'Client/components/widgets/Whodoku/Square/state';

import Square from 'Client/components/widgets/Whodoku/Square';

describe('<Square />', () => {
  it('should render', () => {
    expect(shallow(<Square state={new State(1)} />)).toHaveLength(1);
  });
});