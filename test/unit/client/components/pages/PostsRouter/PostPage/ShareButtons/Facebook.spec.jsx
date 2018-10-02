import React from 'react';
import { shallow } from 'Test/enzyme';

import Facebook from 'Client/components/pages/PostsRouter/PostPage/ShareButtons/Facebook';

describe('<Facebook />', () => {
  it('should render', () => {
    expect(shallow(<Facebook />)).toHaveLength(1);
  });
});