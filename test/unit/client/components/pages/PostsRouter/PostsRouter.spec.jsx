import React from 'react';
import { shallow } from 'Test/enzyme';

import PostsRouter from 'Client/components/pages/PostsRouter';

describe('<PostsRouter />', () => {
  it('should render', () => {
    expect(shallow(<PostsRouter />)).toHaveLength(1);
  });
});