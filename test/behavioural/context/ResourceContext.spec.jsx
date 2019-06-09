import React, { useEffect } from 'react';
import { mount } from 'Test/enzyme';
import { allActionsToComplete } from 'Test/behavioural/helpers';
import ResourceContext from 'Client/components/context/ResourceContext';

describe('ResourceContext behaviour', () => {
  let api;
  let context;
  let List;
  let Single;

  const item = id => ({ id });

  beforeEach(() => {
    api = {
      getAll: jest.fn(),
      get: jest.fn()
    };

    context = ResourceContext.create(api);

    List = context.withProvider(
      context.withResource(({ resource }) => {
        useEffect(() => {
          resource.refreshList();
        }, []);

        return <ul>
          {resource.list().map((item, i) => <li key={i}>{item.id}</li>)}
        </ul>;
      })
    );

    Single = context.withProvider(
      context.withResource(({ resource, id }) => {
        useEffect(() => {
          resource.refreshOne(id);
        }, []);

        return <p>
          {resource.item(id) && resource.item(id).id}
        </p>;
      })
    );
  });

  it('should show all items in the list', async () => {
    api.getAll.mockResolvedValue([item('Apple'), item('Orange')]);
    const wrapper = mount(<List />);

    await allActionsToComplete();

    expect(wrapper.text()).toEqual('AppleOrange');
  });

  it('should show details of one item', async () => {
    api.get.mockResolvedValue(item('Apple'));
    const wrapper = mount(<Single id='Apple' />);

    await allActionsToComplete();

    expect(wrapper.text()).toEqual('Apple');
  });
});