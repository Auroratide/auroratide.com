import * as api from 'Client/api/posts';
import PostsStore from 'Client/store/posts-store';

describe('PostsStore', () => {

  afterEach(() => jest.restoreAllMocks());

  describe('refreshPostDetails', () => {
    const id = 'id';
    const post = { id };
    let get;

    beforeEach(() => {
      get = jest.spyOn(api, 'get');
    });

    it('should update the posts map when the post is not already in the map', async () => {
      get.mockResolvedValue(post);
      const store = new PostsStore();

      await store.refreshPostDetails(id);

      expect(get).toBeCalledWith(id);
      expect(store.posts[id]).toEqual(post);
    });

    it('should not make an api call when the post is already in the store', async () => {
      const store = new PostsStore();
      store.posts[id] = post;

      await store.refreshPostDetails(id);

      expect(get).not.toBeCalled();
    });
  });

  describe('getPost', () => {
    const id = 'id';
    const post = { id };

    it('should return the post in the store with the given id', () => {
      const store = new PostsStore();
      store.posts[id] = post;

      const retrievedPost = store.getPost(id);

      expect(retrievedPost).toEqual(post);
    });

    it('should return null when the post of the given id is not in the store', () => {
      const store = new PostsStore();

      const retrievedPost = store.getPost(id);

      expect(retrievedPost).toBeFalsy();
    });
  });
});