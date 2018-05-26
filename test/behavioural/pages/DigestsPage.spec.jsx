import React from 'react';
import { mountWithStore } from 'Test/enzyme';
import http from 'Test/utils/mock-http';
import { DigestDataBuilder } from 'Test/utils/builders/DigestsResponseBuilder';
import DigestBuilder from 'Test/utils/builders/DigestBuilder';
import { allActionsToComplete } from 'Test/behavioural/helpers';

import DigestItem from 'Client/components/core/DigestItem';
import DigestsPage from 'Client/components/pages/DigestsPage';

describe('DigestsPage Behaviour', () => {
  let digest;
  const page = () => mountWithStore(<DigestsPage />);

  beforeEach(() => {
    digest = new DigestDataBuilder()
      .withTitle('The Title')
      .withIcon('bars')
      .build();

    http
      .when.get('/digests/index.json')
      .then.reply(200, {
        digests: [ digest ]
      });
  });

  it('should render the digests from the API', async () => {
    const expectedDigest = new DigestBuilder()
      .withTitle('The Title')
      .withIcon('bars')
      .build();

    const wrapper = page();
    await allActionsToComplete();
    wrapper.update();

    expect(wrapper.find(DigestItem).props().digest).toEqual(expectedDigest);
  });

});