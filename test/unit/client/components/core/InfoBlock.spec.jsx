import React from 'react';
import { shallow } from 'Test/enzyme';

import InfoBlock from 'Client/components/core/InfoBlock';

describe('<InfoBlock />', () => {
  it('should render', () => {
    expect(shallow(<InfoBlock />)).toHaveLength(1);
  });
});