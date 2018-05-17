import React from 'react';
import { shallow } from 'Test/enzyme';
import RouterLocationBuilder from 'Test/utils/builders/RouterLocationBuilder';

import NavLink from 'Client/components/layout/TopBar/NavLink/NavLink';

describe('<NavLink />', () => {
  let props;
  const navLink = () => shallow(<NavLink {...props} />);

  beforeEach(() => {
    props = {
      name: '',
      location: undefined
    };
  });

  it('should render', () => {
    expect(navLink()).toHaveLength(1);
  });

  describe('active', () => {
    it('should be active when location matches the name', () => {
      props.name = 'Path';
      props.location = new RouterLocationBuilder()
        .withPathname('/path')
        .build();
      
      expect(navLink().hasClass('active')).toBe(true);
    });

    it('should be inactive when location does not match the name', () => {
      props.name = 'Path';
      props.location = new RouterLocationBuilder()
        .withPathname('/other-route')
        .build();
      
      expect(navLink().hasClass('active')).toBe(false);
    });
  });
});