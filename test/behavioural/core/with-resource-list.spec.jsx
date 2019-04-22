import React from 'react';
import { withAppContext } from 'Test/enzyme';
import http from 'Test/utils/mock-http';
import Loading from 'Client/components/core/Loading';
import { allActionsToComplete } from 'Test/behavioural/helpers';
import PostDataBuilder from 'Test/utils/builders/PostDataBuilder';
import withResourceList from 'Client/components/core/with-resource-list';

describe('with-resource-list behaviour', () => {
  const WithResourceList = withResourceList(store => store.posts)(({ store }) =>
    <p>{!store.isEmpty ? store.list()[0].title : 'None'}</p>
  );

  beforeEach(() => {
    const post = new PostDataBuilder()
      .withId('id')
      .withTitle('The Title')
      .withIcon('bars')
      .withCategory('cat')
      .build();

    http
      .when.get('/posts/index.json')
      .then.reply(200, {
        posts: [post]
      });
  });

  afterEach(() => http.reset());

  it('should load the store before displaying content', async () => {
    const wrapper = withAppContext().mount(<WithResourceList />);
    expect(wrapper.find(Loading).exists()).toBe(true);

    await allActionsToComplete();
    wrapper.update();

    expect(wrapper.find(Loading).exists()).toBe(false);
    expect(wrapper.text()).toContain('The Title');
  });
});