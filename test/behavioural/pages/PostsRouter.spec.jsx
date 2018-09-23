import React from 'react';
import { withInitialRoute } from 'Test/enzyme';
import http from 'Test/utils/mock-http';
import PostDataBuilder from 'Test/utils/builders/PostDataBuilder';
import { allActionsToComplete } from 'Test/behavioural/helpers';

import PostsRouter from 'Client/components/pages/PostsRouter';

describe('PostsRouter Behaviour', () => {

  afterEach(() => jest.restoreAllMocks());

  describe('Single Post', () => {
    const id = 'the-post';
    const page = () => withInitialRoute(`/${id}`).mount(<PostsRouter />);
  
    beforeEach(() => {
      const post = new PostDataBuilder()
        .withId(id)
        .withTitle('The Title')
        .withIcon('bars')
        .build();
  
      http
        .when.get(`/posts/${id}.json`)
        .then.reply(200, post);
    });
  
    it('should render the post from the API', async () => {
      const wrapper = page();
      await allActionsToComplete();
      wrapper.update();
  
      expect(wrapper.text()).toContain('The Title');
    });
  });

  describe('Posts List', () => {
    const page = () => withInitialRoute('').mount(<PostsRouter />);

    beforeEach(() => {
      const newer = new PostDataBuilder()
        .withId('newer')
        .withTitle('Newer Post')
        .withPublished_at('2018-09-20T00:00:00Z')
        .withIcon('bars')
        .build();

      const older = new PostDataBuilder()
        .withId('older')
        .withTitle('Older Post')
        .withPublished_at('2018-09-19T00:00:00Z')
        .withIcon('bars')
        .build();
  
      http
        .when.get('/posts/index.json')
        .then.reply(200, {
          posts: [newer, older]
        });
    });

    it('should render each post onto the page', async () => {
      const wrapper = page();
      await allActionsToComplete();
      wrapper.update();

      expect(wrapper.text()).toContain('Newer Post');
      expect(wrapper.text()).toContain('Older Post');
    });
  });
});