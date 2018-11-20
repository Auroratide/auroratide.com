import React from 'react';
import PropTypes from 'Client/utils/prop-types';

const initializeDisqus = (url, identifier) => {
  window.disqus_config = function () {
    this.page.url = url;
    this.page.identifier = identifier;
  };

  const s = document.createElement('script');
  s.src = 'https://auroratide.disqus.com/embed.js';
  s.setAttribute('data-timestamp', +new Date());
  (document.head || document.body).appendChild(s);
};

const resetDisqus = (url, identifier) => {
  window.DISQUS.reset({
    reload: true,
    config () {  
      this.page.url = url;
      this.page.identifier = identifier;  
    }
  });
};

class Disqus extends React.Component {
  componentDidMount() {
    const { url, id } = this.props;

    if(!window.DISQUS) {
      initializeDisqus(url, id);
    } else {
      resetDisqus(url, id);
    }
  }

  componentDidUpdate() {
    const { url, id } = this.props;
    if(window.DISQUS)
      resetDisqus(url, id);
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