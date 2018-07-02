import React from 'react';
import { shallow } from 'Test/enzyme';
import IntersectionObserverEntryBuilder from 'Test/utils/builders/IntersectionObserverEntryBuilder';

import Animated from 'Client/components/core/Animated';
import AnimationState from 'Client/components/core/Animated/AnimationState';

describe('<Animated />', () => {
  beforeAll(() => {
    global.IntersectionObserver = class {
      constructor(handler, options) {
        this.handler = handler;
        this.options = options;
      }

      observe = jest.fn();
      disconnect = jest.fn();

      trigger(entry) {
        this.handler([entry]);
      }
    };
  });

  it('should render', () => {
    expect(shallow(<Animated />)).toHaveLength(1);
  });

  it('should set animation to running state when intersecting', () => {
    const wrapper = shallow(<Animated />);
    const entry = new IntersectionObserverEntryBuilder()
      .withIsIntersecting(true)
      .build();

    wrapper.instance().observer.trigger(entry);
    wrapper.update();
      
    expect(wrapper.find(`[data-anim-state="${AnimationState.RUNNING}"]`).exists()).toBe(true);
  });

  afterAll(() => {
    delete global.IntersectionObserver;
  });
});