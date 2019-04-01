import React from 'react';
import { shallow } from 'Test/enzyme';

import WhodokuPage from 'Client/components/pages/WhodokuPage';

describe('<WhodokuPage />', () => {
  it('should render', () => {
    expect(shallow(<WhodokuPage />)).toHaveLength(1);
  });
});