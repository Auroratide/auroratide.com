import React from 'react';
import PropTypes from 'Client/utils/prop-types';

class Disqus extends React.Component {
  componentDidMount() {
    const { url, id } = this.props;

    window.disqus_config = function () {
      this.page.url = url;
      this.page.identifier = id;
    };

    const s = document.createElement('script');
    s.src = 'https://auroratide.disqus.com/embed.js';
    s.setAttribute('data-timestamp', +new Date());
    (document.head || document.body).appendChild(s);
  }

  render() {
    return <div id='disqus_thread'></div>;
  }
}

Disqus.propTypes = {
  url: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
};

export default Disqus;