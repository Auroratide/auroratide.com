import React from 'react';
import PropTypes from 'Client/utils/prop-types';
import { renderIfElse } from 'Client/utils/render-if';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    const hasError = this.state.hasError;

    return renderIfElse(hasError, () =>
      React.createElement(this.props.fallback)
    ).elseRender(() => this.props.children);
  }
}

ErrorBoundary.propTypes = {
  fallback: PropTypes.component,
  children: PropTypes.node
};

export default ErrorBoundary;