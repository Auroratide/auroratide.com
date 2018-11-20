import React from 'react';
import { withInitialRoute } from 'Test/enzyme';
import http from 'Test/utils/mock-http';
import PostDataBuilder from 'Test/utils/builders/PostDataBuilder';
import { allActionsToComplete } from 'Test/behavioural/helpers';
import Loading from 'Client/components/core/Loading';

import PostsRouter from 'Client/components/pages/PostsRouter';

describe('PostsRouter Behaviour', () => {

  afterEach(() => http.reset());

  describe('Single Post', () => {
    const id = 'the-post';
    const page = () => withInitialRoute(`/${id}`).mount(<PostsRouter />);
  
    beforeEach(() => {
      const post = new PostDataBuilder()
        .withId(id)
        .withTitle('The Title')
        .withIcon('bars')
        .withCategory('cat')
        .build();

      const similarPost = new PostDataBuilder()
        .withId('similar')
        .withTitle('Similar')
        .withIcon('bars')
        .withCategory('cat')
        .build();

      const dissimilarPost = new PostDataBuilder()
        .withId('dissimilar')
        .withTitle('Dissimilar')
        .withIcon('bars')
        .withCategory('dog')
        .build();
  
      http
        .when.get(`/posts/${id}.json`)
        .then.reply(200, post);

      http
        .when.get('/posts/index.json')
        .then.reply(200, { posts: [post, similarPost, dissimilarPost] });
    });
  
    it('should render the post from the API', async () => {
      const wrapper = page();
      expect(wrapper.find(Loading).exists()).toBe(true);

      await allActionsToComplete();
      wrapper.update();
  
      expect(wrapper.find(Loading).exists()).toBe(false);
      expect(wrapper.text()).toContain('The Title');
    });

    it('should render similar posts', async () => {
      const wrapper = page();

      await allActionsToComplete();
      wrapper.update();
  
      expect(wrapper.text()).toContain('Similar');
      expect(wrapper.text()).not.toContain('Dissimilar');
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
          posts: [older, newer]
        });
    });

    it('should render each post onto the page in sorted order', async () => {
      const wrapper = page();
      expect(wrapper.find(Loading).exists()).toBe(true);

      await allActionsToComplete();
      wrapper.update();

      expect(wrapper.find(Loading).exists()).toBe(false);
      expect(wrapper.text()).toEqual(expect.stringMatching(/Newer Post.*Older Post/));
    });
  });
});