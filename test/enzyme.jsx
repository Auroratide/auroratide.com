import React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { MemoryRouter, Route } from 'react-router-dom';
import { Provider } from 'mobx-react';
import { RootStore } from 'Client/store';

configure({ adapter: new Adapter() });

export * from 'enzyme';

export const mountWithRouter = component => mount(<MemoryRouter>{component}</MemoryRouter>);

export const mountWithStore = component => mount(
  <Provider store={new RootStore()}>
    <MemoryRouter>
      {component}
    </MemoryRouter>
  </Provider>
);

export const withInitialRoute = route => {
  const context = new MountContext();
  return context.withInitialRoute(route);
};

class MountContext {
  withInitialRoute(route) {
    this.route = route;
    return this;
  }

  mount(component) {
    return mount(
      <Provider store={new RootStore()}>
        <MemoryRouter initialEntries={[this.route]} initialIndex={0}>
          <Route path='' render={() => component} />
        </MemoryRouter>
      </Provider>
    );
  }
}