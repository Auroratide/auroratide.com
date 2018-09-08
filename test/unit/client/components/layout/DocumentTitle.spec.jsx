import React from 'react';
import { shallow } from 'Test/enzyme';

import DocumentTitle from 'Client/components/layout/DocumentTitle';

describe('<DocumentTitle />', () => {
  it('should render', () => {
    expect(shallow(<DocumentTitle />)).toHaveLength(1);
  });
});