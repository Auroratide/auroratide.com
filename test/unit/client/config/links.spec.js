import Links, { UrlBuilder } from 'Client/config/links';

describe('UrlBuilder', () => {
  let builder;

  beforeEach(() => {
    builder = new UrlBuilder();
  });

  describe('withBase', () => {
    it('should use the base url', () => {
      const url = builder.withBase().home();

      expect(url).toEqual(Links.Auroratide.BASE + '/');
    });

    it('should include the base url for other paths', () => {
      const url = builder.withBase().posts();

      expect(url).toEqual(Links.Auroratide.BASE + Links.Auroratide.POSTS);
    });
  });

  describe('apiFor', () => {
    it('should append the api suffix to the url for list link', () => {
      const url = builder.apiFor().posts();

      expect(url).toEqual(Links.Auroratide.POSTS + '/index.json');
    });

    it('should append the api suffix to the url for id link', () => {
      const url = builder.apiFor().post('id');

      expect(url).toEqual(Links.Auroratide.POSTS + '/id.json');
    });
  });

  describe('posts', () => {
    it('should go to the posts path', () => {
      const url = builder.posts();

      expect(url).toEqual(Links.Auroratide.POSTS);
    });

    it('should go to the post path for the given id', () => {
      const url = builder.post('some-id');

      expect(url).toEqual(`${Links.Auroratide.POSTS}/some-id`);
    });
  });
});