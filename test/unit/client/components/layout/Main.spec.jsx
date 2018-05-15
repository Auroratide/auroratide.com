import React from 'react';
import { shallow } from 'Test/enzyme';

import Main from 'Client/components/layout/Main';

describe('<Main />', () => {
  it('should render', () => {
    expect(shallow(<Main />)).toHaveLength(1);
  });
});