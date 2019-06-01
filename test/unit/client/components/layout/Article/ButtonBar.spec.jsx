import React from 'react';
import { shallow } from 'Test/enzyme';

import ButtonBar from 'Client/components/layout/Article/ButtonBar';

describe('<ButtonBar />', () => {
  it('should render', () => {
    expect(shallow(<ButtonBar />)).toHaveLength(1);
  });
});