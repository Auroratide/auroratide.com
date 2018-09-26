import React from 'react';
import { shallow } from 'Test/enzyme';

import CodeBlock from 'Client/components/core/CodeBlock';

describe('<CodeBlock />', () => {
  it('should render', () => {
    expect(shallow(<CodeBlock />)).toHaveLength(1);
  });
});