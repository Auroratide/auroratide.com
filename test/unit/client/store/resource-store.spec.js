import ResourceStore from 'Client/store/resource-store';
import PostBuilder from 'Test/utils/builders/PostBuilder';

describe('ResourceStore', () => {

  let root;
  let api;

  beforeEach(() => {
    root = {};
    api = {
      get: jest.fn(),
      getAll: jest.fn()
    };
  });

  afterEach(() => jest.restoreAllMocks());

  describe('refreshDetails', () => {
    const id = 'id';
    const post = new PostBuilder().withId(id).build();

    it('should update the map when the resource is not already in the map', async () => {
      api.get.mockResolvedValue(post);
      const store = new ResourceStore(root, api);

      await store.refreshDetails(id);

      expect(api.get).toBeCalledWith(id);
      expect(store.elements[id]).toEqual(post);
    });

    it('should not make an api call when the resource already has content', async () => {
      const store = new ResourceStore(root, api);
      store.elements[id] = post;

      await store.refreshDetails(id);

      expect(api.get).not.toBeCalled();
    });

    it('should update the resource in the map when the resource does not have content', async () => {
      api.get.mockResolvedValue(post);
      const store = new ResourceStore(root, api);
      store.elements[id] = new PostBuilder().withId(id).withContent(undefined).build();

      await store.refreshDetails(id);

      expect(api.get).toBeCalledWith(id);
      expect(store.elements[id]).toEqual(post);
    });
  });

  describe('refreshList', () => {
    it('should add elements from the API into the resource mapping', async () => {
      api.getAll.mockResolvedValue([
        new PostBuilder().withId('post-1').withTitle('Post 1').build(),
        new PostBuilder().withId('post-2').withTitle('Post 2').build()
      ]);
      const store = new ResourceStore(root, api);

      await store.refreshList();

      expect(store.elements['post-1'].title).toEqual('Post 1');
      expect(store.elements['post-2'].title).toEqual('Post 2');
    });

    it('should not update resources in the mapping which already exist', async () => {
      api.getAll.mockResolvedValue([
        new PostBuilder().withId('post-1').withTitle('New').build()
      ]);
      const store = new ResourceStore(root, api);
      store.elements['post-1'] = new PostBuilder().withTitle('Original').build();

      await store.refreshList();

      expect(store.elements['post-1'].title).toEqual('Original');
    });
  });

  describe('get', () => {
    const id = 'id';
    const post = { id };

    it('should return the resource in the store with the given id', () => {
      const store = new ResourceStore(root, api);
      store.elements[id] = post;

      const retrievedPost = store.get(id);

      expect(retrievedPost).toEqual(post);
    });

    it('should return null when the resource of the given id is not in the store', () => {
      const store = new ResourceStore(root, api);

      const retrievedPost = store.get(id);

      expect(retrievedPost).toBeFalsy();
    });
  });

  describe('list', () => {
    it('should return empty list when there are no elements', () => {
      const store = new ResourceStore(root, api);
      expect(store.list()).toHaveLength(0);
    });

    it('should return the list of all resources', () => {
      const newer = new PostBuilder().withId('newer').withPublishedAt('2018-09-22T00:00:00Z').build();
      const older = new PostBuilder().withId('older').withPublishedAt('2018-09-21T00:00:00Z').build();
      const store = new ResourceStore(root, api);
      store.elements.newer = newer;
      store.elements.older = older;

      const posts = store.list();

      expect(posts).toHaveLength(2);
      expect(posts).toContainEqual(newer);
      expect(posts).toContainEqual(older);
    });
  });

});