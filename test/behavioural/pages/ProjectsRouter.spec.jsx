import React from 'react';
import { withInitialRoute } from 'Test/enzyme';
import http from 'Test/utils/mock-http';
import ProjectDataBuilder from 'Test/utils/builders/ProjectDataBuilder';
import { allActionsToComplete } from 'Test/behavioural/helpers';
import Loading from 'Client/components/core/Loading';

import ProjectsRouter from 'Client/components/pages/ProjectsRouter';

describe('ProjectsRouter Behaviour', () => {

  afterEach(() => http.reset());

  describe('Single Project', () => {
    const id = 'the-id';
    const page = () => withInitialRoute(`/projects/${id}`).mount(<ProjectsRouter />);
  
    beforeEach(() => {
      const resource = new ProjectDataBuilder()
        .withId(id)
        .withTitle('The Title')
        .build();

      http
        .when.get(`/projects/${id}.json`)
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
});