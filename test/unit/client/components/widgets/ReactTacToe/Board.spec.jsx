import React from 'react';
import { shallow } from 'Test/enzyme';

import Board from 'Client/components/widgets/ReactTacToe/Board';

describe('<Board />', () => {
  it('should render', () => {
    expect(shallow(<Board />)).toHaveLength(1);
  });
});