import React from 'react';
import { shallow } from 'Test/enzyme';

import Disqus from 'Client/components/embed/Disqus';

describe('<Disqus />', () => {
  it('should render', () => {
    expect(shallow(<Disqus url='' id='' />)).toHaveLength(1);
  });
});