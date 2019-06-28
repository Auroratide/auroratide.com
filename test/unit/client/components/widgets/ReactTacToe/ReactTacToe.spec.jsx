import React from 'react';
import { shallow } from 'Test/enzyme';

import ReactTacToe from 'Client/components/widgets/ReactTacToe';

describe('<ReactTacToe />', () => {
  it('should render', () => {
    expect(shallow(<ReactTacToe />)).toHaveLength(1);
  });
});