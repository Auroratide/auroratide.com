import React from 'react';
import { shallow } from 'Test/enzyme';

import ErrorBoundary from 'Client/components/core/ErrorBoundary';

describe('<ErrorBoundary />', () => {
  it('should render', () => {
    expect(shallow(<ErrorBoundary />)).toHaveLength(1);
  });
});