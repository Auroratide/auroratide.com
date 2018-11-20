import React from 'react';
import Link from 'Client/components/core/Link';
import { shallow, mount } from 'Test/enzyme';

import RconRenderer from 'Client/components/core/RconRenderer';

describe('<RconRenderer />', () => {
  describe('primitives', () => {
    it('should render the string when passed a string', () => {
      const wrapper = shallow(<RconRenderer rcon={'String'} />);
      expect(wrapper.text()).toEqual('String');
    });

    it('should render the number when passed a number', () => {
      const wrapper = shallow(<RconRenderer rcon={5} />);
      expect(wrapper.text()).toEqual('5');
    });
  });

  describe('components', () => {
    it('should render the given basic html element', () => {
      const rcon = {
        c: 'p',
        d: 'Paragraph'
      };

      const wrapper = shallow(<RconRenderer rcon={rcon} />);

      expect(wrapper.contains(<p>Paragraph</p>)).toBe(true);
    });

    it('should render the component with props', () => {
      const rcon = {
        c: 'img',
        p: {
          src: '/url.png'
        }
      };

      const wrapper = shallow(<RconRenderer rcon={rcon} />);

      expect(wrapper.contains(<img src='/url.png' />)).toBe(true);
    });

    it('should render custom components', () => {
      const rcon = {
        c: 'Link',
        d: 'Text',
        p: {
          to: '/url'
        }
      };

      const wrapper = shallow(<RconRenderer rcon={rcon} />);

      expect(wrapper.contains(<Link to='/url'>Text</Link>)).toBe(true);
    });

    it('should render nested structures', () => {
      const rcon = {
        c: 'strong',
        d: {
          c: 'em',
          d: 'Text'
        }
      };

      const wrapper = shallow(<RconRenderer rcon={rcon} />);

      expect(wrapper.contains(<strong><em>Text</em></strong>)).toBe(true);
    });
  });

  describe('arrays', () => {
    it('should render an empty array', () => {
      const rcon = [];

      const wrapper = shallow(<RconRenderer rcon={rcon} />);

      expect(wrapper).toHaveLength(0);
    });

    it('should render multiple elements', () => {
      const rcon = [ {
        c: 'p',
        d: 'P1'
      }, {
        c: 'p',
        d: 'P2'
      } ];

      const wrapper = mount(<RconRenderer rcon={rcon} />);

      expect(wrapper.contains(<p>P1</p>)).toBe(true);
      expect(wrapper.contains(<p>P2</p>)).toBe(true);
    });
  });
});