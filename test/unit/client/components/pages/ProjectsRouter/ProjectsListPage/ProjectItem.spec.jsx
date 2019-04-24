import React from 'react';
import { shallow } from 'Test/enzyme';
import ProjectBuilder from 'Test/utils/builders/ProjectBuilder';

import ProjectItem from 'Client/components/pages/ProjectsRouter/ProjectsListPage/ProjectItem';

describe('<ProjectItem />', () => {
  it('should render', () => {
    expect(shallow(<ProjectItem project={new ProjectBuilder().build()} />)).toHaveLength(1);
  });
});