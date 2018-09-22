import React from 'react';
import { withInitialRoute } from 'Test/enzyme';
import http from 'Test/utils/mock-http';
import PostDataBuilder from 'Test/utils/builders/PostDataBuilder';
import { allActionsToComplete } from 'Test/behavioural/helpers';

import PostsRouter from 'Client/components/pages/PostsRouter';

describe('PostsRouter Behaviour', () => {
  describe('Single Post', () => {
    const id = 'the-post';
    const page = () => withInitialRoute(`/${id}`).mount(<PostsRouter />);
  
    beforeEach(() => {
      const post = new PostDataBuilder()
        .withId(id)
        .withTitle('The Title')
        .build();
  
      http
        .when.get(`/posts/${id}.json`)
        .then.reply(200, post);
    });
  
    afterEach(() => jest.restoreAllMocks());
  
    it('should render the post from the API', async () => {
      const wrapper = page();
      await allActionsToComplete();
      wrapper.update();
  
      expect(wrapper.text()).toContain('The Title');
    });
  });
});