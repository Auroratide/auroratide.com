import * as api from 'Client/api/digests';
import DigestsStore from 'Client/store/digests-store';

describe('DigestsStore', () => {
  describe('refreshDigests', () => {
    it('should update the digests list with the digests from the api', async () => {
      const digests = ['D1', 'D2'];
      api.getAll = jest.fn();
      api.getAll.mockResolvedValue(digests);

      const store = new DigestsStore();
      await store.refreshDigests();

      expect(store.digests).toEqual(digests);
    });

    it('should not update the list of digests when the api fails', async () => {
      const digests = ['D1', 'D2'];
      api.getAll = jest.fn();
      api.getAll.mockRejectedValue();

      const store = new DigestsStore();
      store.digests = digests;
      try {
        await store.refreshDigests();
      } catch(e) {} // eslint-disable-line no-empty

      expect(store.digests).toEqual(digests);
    });
  });
});