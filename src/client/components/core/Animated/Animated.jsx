import React from 'react';
import PropTypes from 'prop-types';
import AnimationState from './AnimationState';

class Animated extends React.Component {
  constructor(props) {
    super(props);

    const options = {};
    this.observer = new IntersectionObserver(this.handleIntersection, options);

    this.state = {
      animate: false
    };
  }
  
  componentDidMount() {
    this.observer.observe(this.elem);
  }

  componentWillUnmount() {
    this.observer.disconnect();
  }

  handleIntersection = (entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting)
        this.setState({ animate: true });
    });
  }

  render() {
    const { tag, children, ...props } = this.props;
    props.ref = elem => this.elem = elem;
    props['data-anim-state'] = this.state.animate ? AnimationState.RUNNING : AnimationState.PAUSED;
    return React.createElement(tag, props, children);
  }
}

Animated.propTypes = {
  tag: PropTypes.string,
  children: PropTypes.node
};

Animated.defaultProps = {
  tag: 'div'
};

export default Animated;