import req from 'Client/api/req';
import { getAll } from 'Client/api/digests';
import DigestsResponseBuilder from 'Test/utils/builders/DigestsResponseBuilder';
import DigestDataBuilder from 'Test/utils/builders/DigestDataBuilder';

describe('Digests API', () => {

  beforeEach(() => {
    req.get = jest.fn();
  });

  describe('getAll', () => {
    it('should return an empty list when the api returns no digests', async () => {
      const response = new DigestsResponseBuilder()
        .withOk()
        .withoutDigests()
        .build();
      req.get.mockResolvedValue(response);

      const digests = await getAll();

      expect(digests).toHaveLength(0);
    });

    it('should get the digests from the api when there is only one digest', async () => {
      const response = new DigestsResponseBuilder()
        .withOk()
        .withDigest(new DigestDataBuilder().withTitle('I am a digest').build())
        .build();
      req.get.mockResolvedValue(response);

      const digests = await getAll();

      expect(digests).toHaveLength(1);
      expect(digests[0].title).toEqual('I am a digest');
    });

    it('should get all the digests from the api', async () => {
      const response = new DigestsResponseBuilder()
        .withOk()
        .withDigest(new DigestDataBuilder().withTitle('I am a digest').build())
        .withDigest(new DigestDataBuilder().withTitle('I am second digest').build())
        .build();
      req.get.mockResolvedValue(response);

      const digests = await getAll();

      expect(digests).toHaveLength(2);
      expect(digests[0].title).toEqual('I am a digest');
      expect(digests[1].title).toEqual('I am second digest');
    });
  });
});