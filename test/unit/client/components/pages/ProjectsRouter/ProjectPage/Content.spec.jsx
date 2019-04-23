import React from 'react';
import { shallow } from 'Test/enzyme';
import ProjectBuilder from 'Test/utils/builders/ProjectBuilder';

import Content from 'Client/components/pages/ProjectsRouter/ProjectPage/Content';

describe('<Content />', () => {
  it('should render', () => {
    expect(shallow(<Content project={new ProjectBuilder().build()} />)).toHaveLength(1);
  });
});