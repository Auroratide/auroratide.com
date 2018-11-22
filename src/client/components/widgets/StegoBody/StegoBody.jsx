import React from 'react';
import PropTypes from 'Client/utils/prop-types';

class Secret {
  constructor(text) {
    this.text = text;
    this.cur = 0;
  }

  next() {
    const t = this.text;
    return (t.charCodeAt(this.cur++) << 24) |
           (t.charCodeAt(this.cur++) << 16) |
           (t.charCodeAt(this.cur++) << 8)  |
           (t.charCodeAt(this.cur++));
  }

  reset() {
    this.cur = 0;
  }
}

const secret = new Secret('hey');

class StegoElement extends React.Component {
  componentDidMount() {
    const s = this.props.secret || secret;
    this._reactInternalId = s.next();
  }

  render() {
    return this.props.children;
  }
}

StegoElement.propTypes = {
  children: PropTypes.node,
  secret: PropTypes.instanceOf(Secret)
};

const StegoBody = ({ children, text }) => {
  const secret = text ? new Secret(text) : null;
  return children ? children.map((elem, i) => <StegoElement secret={secret} key={i}>{elem}</StegoElement>) : null;
};

StegoBody.propTypes = {
  children: PropTypes.node,
  text: PropTypes.string
};

export default StegoBody;