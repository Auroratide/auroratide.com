import React from 'react';
import { shallow } from 'Test/enzyme';

import App from 'Client/components/App';

describe('<App />', () => {
  it('should render', () => {
    expect(shallow(<App />)).toHaveLength(1);
  });
});