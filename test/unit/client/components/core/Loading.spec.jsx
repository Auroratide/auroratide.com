import React from 'react';
import { shallow } from 'Test/enzyme';

import Loading from 'Client/components/core/Loading';

describe('<Loading />', () => {
  it('should render', () => {
    expect(shallow(<Loading />)).toHaveLength(1);
  });
});