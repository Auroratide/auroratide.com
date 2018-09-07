import React from 'react';
import { mount } from 'Test/enzyme';

import ErrorBoundary from 'Client/components/core/ErrorBoundary';

describe('ErrorBoundary Behaviour', () => {
  let wrapper;

  const errorBoundary = () => mount(
    <ErrorBoundary fallback={<Fallback />}>
      <Normal />
    </ErrorBoundary>
  );

  const induceError = () => {
    wrapper.find(Normal).instance().setState({ error: true });
    wrapper.update();
  };

  beforeEach(() => jest.spyOn(console, 'error').mockReturnValue());

  it('should show the normal component when there are no errors', () => {
    wrapper = errorBoundary();

    expect(wrapper.find(Normal).exists()).toBe(true);
    expect(wrapper.find(Fallback).exists()).toBe(false);
  });

  it('should show the fallback component when there is an error', () => {
    wrapper = errorBoundary();
    induceError();

    expect(wrapper.find(Normal).exists()).toBe(false);
    expect(wrapper.find(Fallback).exists()).toBe(true);
  });

  afterEach(() => jest.restoreAllMocks());

});

const Fallback = () => <span>Fallback</span>;

class Normal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false
    };
  }

  render() {
    if (this.state.error) {
      // fail to render
    } else {
      return <span>Normal</span>;
    }
  }
}