import React from 'react';
import { shallow } from 'Test/enzyme';

import GenericErrorPage from 'Client/components/pages/GenericErrorPage';

describe('<GenericErrorPage />', () => {
  it('should render', () => {
    expect(shallow(<GenericErrorPage />)).toHaveLength(1);
  });
});