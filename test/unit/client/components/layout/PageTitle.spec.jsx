import React from 'react';
import { shallow } from 'Test/enzyme';

import PageTitle from 'Client/components/layout/PageTitle';

describe('<PageTitle />', () => {
  it('should render', () => {
    expect(shallow(<PageTitle />)).toHaveLength(1);
  });
});