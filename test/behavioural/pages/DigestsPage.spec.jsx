import React from 'react';
import { mountWithStore } from 'Test/enzyme';
import http from 'Test/utils/mock-http';
import DigestDataBuilder from 'Test/utils/builders/DigestDataBuilder';
import DigestBuilder from 'Test/utils/builders/DigestBuilder';
import { allActionsToComplete } from 'Test/behavioural/helpers';

import DigestItem from 'Client/components/core/DigestItem';
import DigestsPage from 'Client/components/pages/DigestsPage';

describe('DigestsPage Behaviour', () => {
  let digestBuilder;
  const page = () => mountWithStore(<DigestsPage />);

  beforeEach(() => {
    digestBuilder = new DigestDataBuilder()
      .withTitle('The Title')
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

  it('should render the digests from the API', async () => {
    const expectedDigest = new DigestBuilder()
      .withId('1')
      .withTitle('The Title')
      .withIcon('bars')
      .build();

    const wrapper = page();
    await allActionsToComplete();
    wrapper.update();

    expect(wrapper.find(DigestItem).at(0).props().digest).toEqual(expectedDigest);
  });

  it('should render digests with id as key', async () => {
    const wrapper = page();
    await allActionsToComplete();
    wrapper.update();

    expect(wrapper.find(DigestItem).at(0).key()).toEqual('1');
    expect(wrapper.find(DigestItem).at(1).key()).toEqual('2');
  });

});