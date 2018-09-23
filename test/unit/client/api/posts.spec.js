import req from 'Client/api/req';
import { get } from 'Client/api/posts';
import ResponseBuilder from 'Test/utils/builders/ResponseBuilder';
import PostDataBuilder from 'Test/utils/builders/PostDataBuilder';
import { getAll } from 'Client/api/digests';

describe('Posts API', () => {

  afterEach(() => jest.restoreAllMocks());

  describe('get', () => {
    it('should return the post when it exists', async () => {
      const response = new ResponseBuilder()
        .withOk()
        .withData(new PostDataBuilder().withTitle('Title').build())
        .build();
      jest.spyOn(req, 'get').mockResolvedValue(response);

      const post = await get('the-slug');

      expect(post).toBeDefined();
      expect(post.title).toEqual('Title');
    });

    it('should reject when the post does not exist', async () => {
      const response = new ResponseBuilder().withNotFound().build();
      jest.spyOn(req, 'get').mockRejectedValue(response);

      let isRejected = false;
      await get('the-slug').catch(() => isRejected = true);

      expect(isRejected).toBe(true);
    });
  });

  describe('getAll', () => {
    it('should return empty list when there are no posts', async () => {
      const response = new ResponseBuilder()
        .withOk()
        .withData({ digests: [] })
        .build();
      jest.spyOn(req, 'get').mockResolvedValue(response);

      const posts = await getAll();

      expect(posts).toHaveLength(0);
    });

    it('should return the list of posts from the api', async () => {
      const response = new ResponseBuilder()
        .withOk()
        .withData({ digests: [
          new PostDataBuilder().withTitle('Title 1').withoutContent().build(),
          new PostDataBuilder().withTitle('Title 2').withoutContent().build()
        ] })
        .build();
      jest.spyOn(req, 'get').mockResolvedValue(response);

      const posts = await getAll();

      expect(posts).toHaveLength(2);
      expect(posts[0].title).toEqual('Title 1');
      expect(posts[1].title).toEqual('Title 2');
    });
  });
});