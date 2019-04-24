const Auroratide = {
  BASE: 'https://auroratide.com',
  HOME: '/',
  DIGESTS: '/digests',
  POSTS: '/posts',
  PROJECTS: '/projects',
  LEGAL: '/legal',
  WHODOKU: '/whodoku'
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
  static API_SUFFIX = '.json';

  constructor() {
    this.url = '';
    this.api = false;
  }

  withBase() {
    this.url = Auroratide.BASE;
    return this;
  }

  apiFor() {
    this.api = true;
    return this;
  }

  home() {
    return `${this.url}${Auroratide.HOME}`;
  }

  digests() {
    return `${this.url}${Auroratide.DIGESTS}${this.api ? `/index${UrlBuilder.API_SUFFIX}` : ''}`;
  }

  posts() {
    return `${this.url}${Auroratide.POSTS}${this.api ? `/index${UrlBuilder.API_SUFFIX}` : ''}`;
  }

  post(id) {
    return `${this.url}${Auroratide.POSTS}/${id}${this.api ? UrlBuilder.API_SUFFIX : ''}`;
  }

  projects() {
    return `${this.url}${Auroratide.PROJECTS}${this.api ? `/index${UrlBuilder.API_SUFFIX}` : ''}`;
  }

  project(id) {
    return `${this.url}${Auroratide.PROJECTS}/${id}${this.api ? UrlBuilder.API_SUFFIX : ''}`;
  }

  legal() {
    return `${this.url}${Auroratide.LEGAL}`;
  }
}