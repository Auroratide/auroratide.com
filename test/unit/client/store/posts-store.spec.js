import * as api from 'Client/api/posts';
import PostsStore from 'Client/store/posts-store';
import PostBuilder from 'Test/utils/builders/PostBuilder';

describe('PostsStore', () => {

  afterEach(() => jest.restoreAllMocks());

  describe('refreshPostDetails', () => {
    const id = 'id';
    const post = new PostBuilder().withId(id).build();
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

    it('should not make an api call when the post already has content', async () => {
      const store = new PostsStore();
      store.posts[id] = post;

      await store.refreshPostDetails(id);

      expect(get).not.toBeCalled();
    });

    it('should update the post in the map when the post does not have content', async () => {
      get.mockResolvedValue(post);
      const store = new PostsStore();
      store.posts[id] = new PostBuilder().withId(id).withContent(undefined).build();

      await store.refreshPostDetails(id);

      expect(get).toBeCalledWith(id);
      expect(store.posts[id]).toEqual(post);
    });
  });

  describe('refreshPostsList', () => {
    let getAll;

    beforeEach(() => {
      getAll = jest.spyOn(api, 'getAll');
    });

    it('should add posts from the API into the post mapping', async () => {
      getAll.mockResolvedValue([
        new PostBuilder().withId('post-1').withTitle('Post 1').build(),
        new PostBuilder().withId('post-2').withTitle('Post 2').build()
      ]);
      const store = new PostsStore();

      await store.refreshPostsList();

      expect(store.posts['post-1'].title).toEqual('Post 1');
      expect(store.posts['post-2'].title).toEqual('Post 2');
    });

    it('should not update posts in the mapping which already exist', async () => {
      getAll.mockResolvedValue([
        new PostBuilder().withId('post-1').withTitle('New').build()
      ]);
      const store = new PostsStore();
      store.posts['post-1'] = new PostBuilder().withTitle('Original').build();

      await store.refreshPostsList();

      expect(store.posts['post-1'].title).toEqual('Original');
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

  describe('getPostsList', () => {
    it('should return empty list when there are no posts', () => {
      const store = new PostsStore();
      expect(store.getPostsList()).toHaveLength(0);
    });

    it('should return the list of all posts', () => {
      const newer = new PostBuilder().withId('newer').withPublishedAt('2018-09-22T00:00:00Z').build();
      const older = new PostBuilder().withId('older').withPublishedAt('2018-09-21T00:00:00Z').build();
      const store = new PostsStore();
      store.posts.newer = newer;
      store.posts.older = older;

      const posts = store.getPostsList();

      expect(posts).toHaveLength(2);
      expect(posts).toContainEqual(newer);
      expect(posts).toContainEqual(older);
    });
  });

  describe('sorter', () => {
    describe('byPublishedDate', () => {
      it('should sort by date published in descending order', () => {
        const newer = new PostBuilder().withId('newer').withPublishedAt('2018-09-23T00:00:00Z').build();
        const middle = new PostBuilder().withId('middle').withPublishedAt('2018-09-22T00:00:00Z').build();
        const older = new PostBuilder().withId('older').withPublishedAt('2018-09-21T00:00:00Z').build();
        const posts = [middle, older, newer];

        const sorted = posts.sort(PostsStore.sorter().byPublishedDate);

        expect(sorted[0]).toEqual(newer);
        expect(sorted[1]).toEqual(middle);
        expect(sorted[2]).toEqual(older);
      });
    });
  });

  describe('filter', () => {
    describe('withCategory', () => {
      it('should return only posts of the given category', () => {
        const cat = new PostBuilder().withId('cat').withCategory('cat').build();
        const lion = new PostBuilder().withId('lion').withCategory('cat').build();
        const dog = new PostBuilder().withId('dog').withCategory('dog').build();
        const posts = [cat, lion, dog];

        const filtered = posts.filter(PostsStore.filter().withCategory('cat'));

        expect(filtered).toContain(cat);
        expect(filtered).toContain(lion);
        expect(filtered).not.toContain(dog);
      });
    });

    describe('without', () => {
      it('should return all posts without the given id', () => {
        const cat = new PostBuilder().withId('cat').build();
        const lion = new PostBuilder().withId('lion').build();
        const dog = new PostBuilder().withId('dog').build();
        const posts = [cat, lion, dog];

        const filtered = posts.filter(PostsStore.filter().without('dog'));

        expect(filtered).toContain(cat);
        expect(filtered).toContain(lion);
        expect(filtered).not.toContain(dog);
      });
    });

    describe('top', () => {
      it('should return only the top n posts', () => {
        const cat = new PostBuilder().withId('cat').build();
        const lion = new PostBuilder().withId('lion').build();
        const dog = new PostBuilder().withId('dog').build();
        const posts = [cat, lion, dog];

        const filtered = posts.filter(PostsStore.filter().top(2));

        expect(filtered).toContain(cat);
        expect(filtered).toContain(lion);
        expect(filtered).not.toContain(dog);
      });
    });
  });
});