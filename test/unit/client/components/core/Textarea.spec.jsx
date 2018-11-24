import React from 'react';
import { shallow } from 'Test/enzyme';

import Textarea from 'Client/components/core/Textarea';

describe('<Textarea />', () => {
  it('should render', () => {
    expect(shallow(<Textarea state={new Textarea.State('hi')}/>)).toHaveLength(1);
  });
});