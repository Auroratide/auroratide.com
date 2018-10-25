import React from 'react';
import { shallow } from 'Test/enzyme';

import Comments from 'Client/components/pages/PostsRouter/PostPage/Comments';

describe('<Comments />', () => {
  it('should render', () => {
    expect(shallow(<Comments slug='slug' />)).toHaveLength(1);
  });
});