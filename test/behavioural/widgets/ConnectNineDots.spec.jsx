import React from 'react';
import { withAppContext } from 'Test/enzyme';

import ConnectNineDots from 'Client/components/widgets/ConnectNineDots';

describe('ConnectNineDots Behaviour', () => {
  let wrapper;
  const click = (clientX, clientY) => wrapper.simulate('click', { clientX, clientY });

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
    expect(lineStyle.transform).toEqual('rotate(45deg)');
  });
});