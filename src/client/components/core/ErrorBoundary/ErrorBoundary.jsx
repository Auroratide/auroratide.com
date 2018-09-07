import React from 'react';
import PropTypes from 'Client/utils/prop-types';
import State from './state';
import { renderIfElse } from 'Client/utils/render-if';

class ErrorBoundary extends React.Component {
  componentDidCatch() {
    this.props.status.hasError = true;
  }

  render() {
    const hasError = this.props.status.hasError;
    return renderIfElse(hasError, () => this.props.fallback)
      .elseRender(() => this.props.children);
  }
}

ErrorBoundary.propTypes = {
  status: PropTypes.instanceOf(State).isRequired,
  fallback: PropTypes.node,
  children: PropTypes.node
};

export default ErrorBoundary;