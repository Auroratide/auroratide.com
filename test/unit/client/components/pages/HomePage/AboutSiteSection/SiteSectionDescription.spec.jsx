import React from 'react';
import { shallow } from 'Test/enzyme';

import SiteSectionDescription from 'Client/components/pages/HomePage/AboutSiteSection/SiteSectionDescription';

describe('<SiteSectionDescription />', () => {
  it('should render', () => {
    expect(shallow(<SiteSectionDescription to='/digests' icon='bars' />)).toHaveLength(1);
  });
});