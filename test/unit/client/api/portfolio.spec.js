import req from 'Client/api/req';
import { get, getAll } from 'Client/api/portfolio';
import ResponseBuilder from 'Test/utils/builders/ResponseBuilder';
import PortfolioItemBuilder from 'Test/utils/builders/PortfolioItemDataBuilder';

describe('Portfolio API', () => {

  afterEach(() => jest.restoreAllMocks());

  describe('get', () => {
    it('should return the project when it exists', async () => {
      const response = new ResponseBuilder()
        .withOk()
        .withData(new PortfolioItemBuilder().withTitle('Title').build())
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

  describe('getAll', () => {
    it('should return empty list when there are no projects', async () => {
      const response = new ResponseBuilder()
        .withOk()
        .withData({ portfolio: [] })
        .build();
      jest.spyOn(req, 'get').mockResolvedValue(response);

      const projects = await getAll();

      expect(projects).toHaveLength(0);
    });

    it('should return the list of posts from the api', async () => {
      const response = new ResponseBuilder()
        .withOk()
        .withData({ portfolio: [
          new PortfolioItemBuilder().withTitle('Title 1').withoutContent().build(),
          new PortfolioItemBuilder().withTitle('Title 2').withoutContent().build()
        ] })
        .build();
      jest.spyOn(req, 'get').mockResolvedValue(response);

      const projects = await getAll();

      expect(projects).toHaveLength(2);
      expect(projects[0].title).toEqual('Title 1');
      expect(projects[1].title).toEqual('Title 2');
    });
  });
});