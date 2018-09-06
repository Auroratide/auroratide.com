import React from 'react';
import { shallow } from 'Test/enzyme';

import PageNotFound from 'Client/components/pages/PageNotFound';

describe('<PageNotFound />', () => {
  it('should render', () => {
    expect(shallow(<PageNotFound />)).toHaveLength(1);
  });
});