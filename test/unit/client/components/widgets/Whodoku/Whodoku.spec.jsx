import React from 'react';
import { shallow } from 'Test/enzyme';

import Whodoku from 'Client/components/widgets/Whodoku';

describe('<Whodoku />', () => {
  it('should render', () => {
    expect(shallow(<Whodoku />)).toHaveLength(1);
  });
});