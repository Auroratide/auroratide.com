import React from 'react';
import { shallow } from 'Test/enzyme';

import LegalPage from 'Client/components/pages/LegalPage';

describe('<LegalPage />', () => {
  it('should render', () => {
    expect(shallow(<LegalPage />)).toHaveLength(1);
  });
});