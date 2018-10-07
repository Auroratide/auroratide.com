import React from 'react';
import { shallow } from 'Test/enzyme';

import ConnectNineDots from 'Client/components/widgets/ConnectNineDots/ConnectNineDots';
import State from 'Client/components/widgets/ConnectNineDots/state';

describe('<ConnectNineDots />', () => {

  afterEach(() => jest.restoreAllMocks());

  it('should render', () => {
    expect(shallow(<ConnectNineDots state={new State()} />)).toHaveLength(1);
  });

  describe('success/failure', () => {
    let state;
    let wrapper;

    beforeEach(() => {
      state = new State();
      const dots = { getCirclesRelativeTo: jest.fn() };
      
      wrapper = shallow(<ConnectNineDots state={state} />);
      wrapper.instance().dots = dots;
      wrapper.instance().lines = {};
    });

    it('should not render success when all the circles intersect', () => {
      jest.spyOn(state, 'intersectsAllCircles').mockReturnValue(false);
      wrapper.instance().forceUpdate();

      expect(wrapper.find('.success').exists()).toBe(false);
    });

    it('should render success when all the circles intersect', () => {
      jest.spyOn(state, 'intersectsAllCircles').mockReturnValue(true);
      wrapper.instance().forceUpdate();

      expect(wrapper.find('.success').exists()).toBe(true);
    });
  });
});