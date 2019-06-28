import React from 'react';
import { withInitialRoute } from 'Test/enzyme';
import http from 'Test/utils/mock-http';
import PostDataBuilder from 'Test/utils/builders/PostDataBuilder';
import { allActionsToComplete } from 'Test/behavioural/helpers';
import Loading from 'Client/components/core/Loading';
import LinkedRelatedPost from 'Client/components/pages/PostsRouter/PostPage/RelatedPosts/LinkedRelatedPost';

import PostsRouter from 'Client/components/pages/PostsRouter';

describe('PostsRouter Behaviour', () => {

  afterEach(() => http.reset());

  describe('Single Post', () => {
    const ID = 'the-post';
    const page = (id = ID) => withInitialRoute(`/posts/${id}`).mount(<PostsRouter />);
  
    beforeEach(() => {
      const post = new PostDataBuilder()
        .withId(ID)
        .withTitle('The Title')
        .withIcon('bars')
        .withCategory('cat');

      const similarPost = new PostDataBuilder()
        .withId('similar')
        .withTitle('Similar')
        .withIcon('bars')
        .withCategory('cat')
        .withoutContent();

      const dissimilarPost = new PostDataBuilder()
        .withId('dissimilar')
        .withTitle('Dissimilar')
        .withIcon('bars')
        .withCategory('dog');

      const unpublishedPost = new PostDataBuilder()
        .withId('unpublished')
        .withUnpublished();
  
      http
        .when.get('/posts/index.json')
        .then.reply(200, { posts: [
          post.build(),
          similarPost.build(),
          dissimilarPost.build()]
        });

      http
        .when.get(`/posts/${ID}.json`)
        .then.reply(200, post.withContent('First Post').build());

      http
        .when.get('/posts/similar.json')
        .then.reply(200, similarPost.withContent('Second Post').build());

      http
        .when.get('/posts/unpublished.json')
        .then.reply(200, unpublishedPost.withContent('Unpublished').build());

      window.scroll = jest.fn();
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

    it('should rerender the post when another post is selected', async () => {
      const wrapper = page();

      await allActionsToComplete();
      wrapper.update();

      expect(wrapper.text()).toContain('First Post');
      expect(wrapper.text()).not.toContain('Second Post');

      wrapper.find(LinkedRelatedPost).simulate('click', { button: 0 });

      await allActionsToComplete();
      wrapper.update();

      expect(wrapper.text()).not.toContain('First Post');
      expect(wrapper.text()).toContain('Second Post');
    });

    it('should indicate when the viewed post is unpublished', async () => {
      const wrapper = page('unpublished');
      await allActionsToComplete();
      wrapper.update();

      expect(wrapper.text()).toContain('Not Published');
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

      const unpublished = new PostDataBuilder()
        .withId('unpublished')
        .withTitle('Unpublished')
        .withUnpublished()
        .withIcon('bars')
        .build();
  
      http
        .when.get('/posts/index.json')
        .then.reply(200, {
          posts: [older, newer, unpublished]
        });
    });

    it('should render each published post onto the page in sorted order', async () => {
      const wrapper = page();
      expect(wrapper.find(Loading).exists()).toBe(true);

      await allActionsToComplete();
      wrapper.update();

      expect(wrapper.find(Loading).exists()).toBe(false);
      expect(wrapper.text()).toEqual(expect.stringMatching(/Newer Post.*Older Post/));
    });
  });
});