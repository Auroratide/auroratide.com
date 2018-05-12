import React from 'react';
import { shallow } from 'Test/enzyme';
import { Link as RouterLink } from 'react-router-dom';

import Link from 'Client/components/core/Link';

describe('<Link>', () => {
  let props;
  const link = (children) => shallow(<Link {...props}>{children}</Link>);

  beforeEach(() => {
    props = {
      to: '',
      className: undefined
    };
  });

  it('should render', () => {
    expect(link()).toHaveLength(1);
  });

  it('should render a router link when the provided path is internal', () => {
    props.to = '/internal';
    expect(link().find(RouterLink).exists()).toBe(true);
    expect(link().find(RouterLink).props().to).toEqual('/internal');
  });

  it('should render an anchor link when the provided path is external', () => {
    props.to = 'https://google.com';
    expect(link().find('a').exists()).toBe(true);
    expect(link().find('a').props().href).toEqual('https://google.com');
  });
});