import React, { useEffect } from 'react';
import { mount } from 'Test/enzyme';
import { allActionsToComplete } from 'Test/behavioural/helpers';
import ResourceContext from 'Client/components/context/ResourceContext';

describe('ResourceContext behaviour', () => {
  let api;
  let context;
  let Component;

  const item = id => ({ id });

  beforeEach(() => {
    api = {
      getAll: jest.fn()
    };

    context = ResourceContext.create(api);

    Component = context.withProvider(
      context.withResource(({ resource }) => {
        useEffect(() => {
          resource.refreshList();
        }, []);

        return <ul>
          {resource.list().map((item, i) => <li key={i}>{item.id}</li>)}
        </ul>;
      })
    );
  });

  it('should show all items in the list', async () => {
    api.getAll.mockResolvedValue([item('Apple'), item('Orange')]);
    const wrapper = mount(<Component />);

    await allActionsToComplete();

    expect(wrapper.text()).toEqual('AppleOrange');
  });
});