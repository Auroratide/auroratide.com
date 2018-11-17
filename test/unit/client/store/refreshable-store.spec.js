import RefreshableStore from 'Client/store/refreshable-store';

describe('RefreshableStore', () => {
  describe('withRefresh', () => {
    it('should toggle refresh while action is being executed', async () => {
      const store = new RefreshableStore();
      expect(store.isRefreshing).toBe(false);
      
      const promise = store.withRefresh(jest.fn().mockResolvedValue('Expected'));
      expect(store.isRefreshing).toBe(true);
      
      const result = await promise;
      expect(store.isRefreshing).toBe(false);
      expect(result).toEqual('Expected');
    });

    it('should toggle refresh even if action rejects', async () => {
      const store = new RefreshableStore();
      expect(store.isRefreshing).toBe(false);
      
      const promise = store.withRefresh(jest.fn().mockRejectedValue());
      expect(store.isRefreshing).toBe(true);
      
      await promise.catch(() => {});
      expect(store.isRefreshing).toBe(false);
    });
  });
});