import React from 'react';
import { withInitialRoute } from 'Test/enzyme';
import http from 'Test/utils/mock-http';
import ProjectDataBuilder from 'Test/utils/builders/ProjectDataBuilder';
import { allActionsToComplete } from 'Test/behavioural/helpers';
import { UrlBuilder } from 'Client/config/links';
import Loading from 'Client/components/core/Loading';

import ProjectsRouter from 'Client/components/pages/ProjectsRouter';

describe('ProjectsRouter Behaviour', () => {

  afterEach(() => http.reset());

  describe('Single Project', () => {
    const id = 'the-id';
    const page = () => withInitialRoute(new UrlBuilder().portfolioItem(id)).mount(<ProjectsRouter />);
  
    beforeEach(() => {
      const resource = new ProjectDataBuilder()
        .withId(id)
        .withTitle('The Title')
        .build();

      http
        .when.get(new UrlBuilder().apiFor().portfolioItem(id))
        .then.reply(200, resource);

      window.scroll = jest.fn();
    });
  
    it('should render the project from the API', async () => {
      const wrapper = page();
      expect(wrapper.find(Loading).exists()).toBe(true);

      await allActionsToComplete();
      wrapper.update();
  
      expect(wrapper.find(Loading).exists()).toBe(false);
      expect(wrapper.text()).toContain('The Title');
    });
  });

  describe('Projects List', () => {
    const page = () => withInitialRoute('').mount(<ProjectsRouter />);

    beforeEach(() => {
      const newer = new ProjectDataBuilder()
        .withId('newer')
        .withTitle('Newer Post')
        .withDate('2018-09-20T00:00:00Z')
        .build();

      const older = new ProjectDataBuilder()
        .withId('older')
        .withTitle('Older Post')
        .withDate('2018-09-19T00:00:00Z')
        .build();
  
      http
        .when.get(new UrlBuilder().apiFor().portfolio())
        .then.reply(200, {
          portfolio: [newer, older]
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