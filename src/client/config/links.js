const Auroratide = {
  BASE: 'https://auroratide.com',
  HOME: '/',
  DIGESTS: '/digests',
  POSTS: '/posts',
  LEGAL: '/legal'
};

const Social = {
  LINKED_IN: 'https://www.linkedin.com/in/timothy-foster-224946120',
  TWITTER: 'https://twitter.com/tfAuroratide',
  GITHUB: 'https://github.com/Auroratide'
};

const External = {
  THOUGHTWORKS: 'https://www.thoughtworks.com/',
  OMNIXIS: 'http://auroratide.github.io/Omnixis/'
};

export default {
  Auroratide,
  Social,
  External
};

export class UrlBuilder {
  constructor() {
    this.url = '';
  }

  withBase() {
    this.url = Auroratide.BASE;
    return this;
  }

  home() {
    return `${this.url}${Auroratide.HOME}`;
  }

  digests() {
    return `${this.url}${Auroratide.DIGESTS}`;
  }

  posts() {
    return `${this.url}${Auroratide.POSTS}`;
  }

  post(id) {
    return `${this.url}${Auroratide.POSTS}/${id}`;
  }

  legal() {
    return `${this.url}${Auroratide.LEGAL}`;
  }
}