import React from 'react';
import { shallow } from 'Test/enzyme';

import Twitter from 'Client/components/pages/PostsRouter/PostPage/ShareButtons/Twitter';

describe('<Twitter />', () => {
  it('should render', () => {
    expect(shallow(<Twitter />)).toHaveLength(1);
  });
});