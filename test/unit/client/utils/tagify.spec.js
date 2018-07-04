import React from 'react';
import { shallow } from 'Test/enzyme';
import tagify from 'Client/utils/tagify';

describe('tagify', () => {
  const Component = props => <div {...props}></div>;

  it('adds tags to the component', () => {
    const TaggedComponent = tagify(Component);

    expect(shallow(<TaggedComponent.p />).exists()).toBe(true);
  });
});