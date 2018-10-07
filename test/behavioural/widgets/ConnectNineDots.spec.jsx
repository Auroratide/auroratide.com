import React from 'react';
import { withAppContext } from 'Test/enzyme';

import ConnectNineDots from 'Client/components/widgets/ConnectNineDots';

describe('ConnectNineDots Behaviour', () => {
  let wrapper;
  const click = (clientX, clientY) => wrapper.find('.lines').simulate('click', { clientX, clientY });
  const reset = () => wrapper.find('button.reset').simulate('click');

  beforeEach(() => {
    wrapper = withAppContext().mount(<ConnectNineDots />);
  });

  it('should create a line when the widget is clicked twice', () => {
    click(1, 2);
    click(3, 4);

    const lineStyle = wrapper.find('.line').props().style;

    expect(lineStyle.left).toEqual('1px');
    expect(lineStyle.top).toEqual('2px');
    expect(parseFloat(lineStyle.width)).toBeCloseTo(2.83, 2);
    expect(lineStyle.transform).toContain('rotate(45deg)');
  });

  it('should show an indicator at the last selected position', () => {
    expect(wrapper.find('svg.last-clicked').exists()).toBe(false);

    click(1, 2);

    expect(wrapper.find('svg.last-clicked').props().style.left).toBe('1px');
    expect(wrapper.find('svg.last-clicked').props().style.top).toBe('2px');

    click(3, 4);

    expect(wrapper.find('svg.last-clicked').props().style.left).toBe('3px');
    expect(wrapper.find('svg.last-clicked').props().style.top).toBe('4px');
  });

  it('should reset the lines when the line limit is reached', () => {
    click(1, 2);
    click(3, 4);
    click(5, 6);
    click(7, 8);
    click(9, 10);

    expect(wrapper.find('.line')).toHaveLength(4);
    expect(wrapper.find('svg.last-clicked').exists()).toBe(false);
    expect(wrapper.find('.danger').exists()).toBe(true);
    
    click(11, 12);
    expect(wrapper.find('.line')).toHaveLength(0);
    expect(wrapper.find('.danger').exists()).toBe(false);
    
    click(11, 12);
    click(13, 14);
    expect(wrapper.find('.line')).toHaveLength(1);
  });

  it('should reset the lines when the reset button is clicked', () => {
    click(1, 2);
    click(3, 4);
    click(5, 6);

    expect(wrapper.find('.line')).toHaveLength(2);

    reset();

    expect(wrapper.find('.line')).toHaveLength(0);
    expect(wrapper.find('svg.last-clicked').exists()).toBe(false);
  });
});