import React from 'react';
import { withAppContext } from 'Test/enzyme';
import http from 'Test/utils/mock-http';
import Loading from 'Client/components/core/Loading';
import { allActionsToComplete } from 'Test/behavioural/helpers';
import PostDataBuilder from 'Test/utils/builders/PostDataBuilder';
import withResourceItem from 'Client/components/core/with-resource-item';
import PostsContext from 'Client/components/context/PostsContext';

describe('with-resource-item behaviour', () => {
  const id = 'id';
  const WithResourceItem = PostsContext.withProvider(
    withResourceItem(PostsContext)(({ item }) =>
      <p>{item.title}</p>
    )
  );

  beforeEach(() => {
    const post = new PostDataBuilder()
      .withId(id)
      .withTitle('The Title')
      .withIcon('bars')
      .withCategory('cat')
      .build();

    http
      .when.get(`/posts/${id}.json`)
      .then.reply(200, post);
  });

  afterEach(() => http.reset());

  it('should load the store before displaying content', async () => {
    const wrapper = withAppContext().mount(<WithResourceItem id={id} />);
    expect(wrapper.find(Loading).exists()).toBe(true);

    await allActionsToComplete();
    wrapper.update();

    expect(wrapper.find(Loading).exists()).toBe(false);
    expect(wrapper.text()).toContain('The Title');
  });
});