import React from 'react';
import { shallow } from 'Test/enzyme';
import PostBuilder from 'Test/utils/builders/PostBuilder';
import Loading from 'Client/components/core/Loading';
import Article from 'Client/components/layout/Article';

import PostPage from 'Client/components/pages/PostsRouter/PostPage/PostPage';

describe('<PostPage />', () => {
  let resource;

  beforeEach(() => {
    resource = {
      item: jest.fn(),
      list: () => []
    };
  });
  
  afterEach(() => jest.restoreAllMocks());

  describe('rendering', () => {
    it('should render the post', () => {
      const item = new PostBuilder().build();
      resource.item.mockReturnValue(item);

      const wrapper = shallow(<PostPage resource={resource} />);
  
      expect(wrapper.find(Article).exists()).toBe(true);
    });

    it('should render the post even when the post does not yet have content', () => {
      const item = new PostBuilder().withContent(undefined).build();
      resource.item.mockReturnValue(item);
      const wrapper = shallow(<PostPage resource={resource} />);
  
      expect(wrapper.find(Article).exists()).toBe(true);
    });

    it('should render basic information and a loading indicator when the post is only partially loaded', () => {
      const item = new PostBuilder().withContent(undefined).build();
      resource.item.mockReturnValue(item);

      const wrapper = shallow(<PostPage resource={resource} isRefreshing={true} />);
  
      expect(wrapper.find(Article).exists()).toBe(true);
      expect(wrapper.find(Loading).exists()).toBe(true);
    });
  });
  
});