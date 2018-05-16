import React from 'react';
import { shallow } from 'Test/enzyme';

import LogoLink from 'Client/components/layout/TopBar/LogoLink';

describe('<LogoLink />', () => {
  it('should render', () => {
    expect(shallow(<LogoLink />)).toHaveLength(1);
  });
});