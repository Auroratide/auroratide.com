import req from 'Client/api/req';
import { get } from 'Client/api/projects';
import ResponseBuilder from 'Test/utils/builders/ResponseBuilder';
import ProjectDataBuilder from 'Test/utils/builders/ProjectDataBuilder';

describe('Projects API', () => {

  afterEach(() => jest.restoreAllMocks());

  describe('get', () => {
    it('should return the project when it exists', async () => {
      const response = new ResponseBuilder()
        .withOk()
        .withData(new ProjectDataBuilder().withTitle('Title').build())
        .build();
      jest.spyOn(req, 'get').mockResolvedValue(response);

      const post = await get('the-slug');

      expect(post).toBeDefined();
      expect(post.title).toEqual('Title');
    });

    it('should reject when the project does not exist', async () => {
      const response = new ResponseBuilder().withNotFound().build();
      jest.spyOn(req, 'get').mockRejectedValue(response);

      let isRejected = false;
      await get('the-slug').catch(() => isRejected = true);

      expect(isRejected).toBe(true);
    });
  });
});