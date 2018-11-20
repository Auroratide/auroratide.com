import React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { MemoryRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'mobx-react';
import { RootStore } from 'Client/store';

configure({ adapter: new Adapter() });

export * from 'enzyme';

export const withAppContext = () => {
  return new MountContext();
};

export const withInitialRoute = route => {
  const context = new MountContext();
  return context.withInitialRoute(route);
};

class MountContext {
  constructor() {
    this.route = '/';
  }

  withInitialRoute(route) {
    this.route = route;
    return this;
  }

  mount(component) {
    return mount(
      <Provider store={new RootStore()}>
        <MemoryRouter initialEntries={[this.route]} initialIndex={0}>
          <Switch>
            <Route path='/posts' render={() => component} />
            <Route path='' render={() => component} />
          </Switch>
        </MemoryRouter>
      </Provider>
    );
  }
}