import React from 'react';
import { withAppContext } from 'Test/enzyme';
import http from 'Test/utils/mock-http';
import DigestDataBuilder from 'Test/utils/builders/DigestDataBuilder';
import DigestBuilder from 'Test/utils/builders/DigestBuilder';
import { allActionsToComplete } from 'Test/behavioural/helpers';
import Colors from 'Client/config/colors';
import Loading from 'Client/components/core/Loading';

import DigestItem from 'Client/components/pages/DigestsPage/DigestItem';
import DigestsPage from 'Client/components/pages/DigestsPage';

describe('DigestsPage Behaviour', () => {
  let digestBuilder;
  const page = () => withAppContext().mount(<DigestsPage />);

  beforeEach(() => {
    digestBuilder = new DigestDataBuilder()
      .withTitle('The Title')
      .withColor(Colors.AURORA_BLUE.name)
      .withIcon('bars');

    http
      .when.get('/digests/index.json')
      .then.reply(200, {
        digests: [
          digestBuilder.withId('1').build(),
          digestBuilder.withId('2').build()
        ]
      });
  });

  afterEach(() => http.reset());

  it('should render the digests from the API and show a loading indicator while waiting', async () => {
    const expectedDigest = new DigestBuilder()
      .withId('2')
      .withTitle('The Title')
      .withColor(Colors.AURORA_BLUE.name)
      .withIcon('bars')
      .build();

    const wrapper = page();
    expect(wrapper.find(Loading).exists()).toBe(true);

    await allActionsToComplete();
    wrapper.update();

    expect(wrapper.find(Loading).exists()).toBe(false);
    expect(wrapper.find(DigestItem).at(0).props().digest).toEqual(expectedDigest);
  });

  it('should render digests with id as key', async () => {
    const wrapper = page();
    await allActionsToComplete();
    wrapper.update();

    expect(wrapper.find(DigestItem).at(0).key()).toEqual('2');
    expect(wrapper.find(DigestItem).at(1).key()).toEqual('1');
  });

});