import React from 'react';
import { shallow } from 'Test/enzyme';
import ResourceStore from 'Client/store/resource-store';

import ProjectsListPage from 'Client/components/pages/ProjectsRouter/ProjectsListPage/ProjectsListPage';

describe('<ProjectsListPage />', () => {
  it('should render', () => {
    expect(shallow(<ProjectsListPage store={new ResourceStore()} />)).toHaveLength(1);
  });
});