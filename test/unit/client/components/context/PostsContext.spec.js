import { filter, sorter } from 'Client/components/context/PostsContext';
import PostBuilder from 'Test/utils/builders/PostBuilder';

describe('PostsContext', () => {
  describe('sorter', () => {
    describe('byPublishedDate', () => {
      it('should sort by date published in descending order', () => {
        const newer = new PostBuilder().withId('newer').withPublishedAt('2018-09-23T00:00:00Z').build();
        const middle = new PostBuilder().withId('middle').withPublishedAt('2018-09-22T00:00:00Z').build();
        const older = new PostBuilder().withId('older').withPublishedAt('2018-09-21T00:00:00Z').build();
        const posts = [middle, older, newer];

        const sorted = posts.sort(sorter.byPublishedDate);

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

        const filtered = posts.filter(filter.withCategory('cat'));

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

        const filtered = posts.filter(filter.without('dog'));

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

        const filtered = posts.filter(filter.top(2));

        expect(filtered).toContain(cat);
        expect(filtered).toContain(lion);
        expect(filtered).not.toContain(dog);
      });
    });

    describe('published', () => {
      it('should return only posts with a published date', () => {
        const published = new PostBuilder().withId('published').build();
        const unpublished = new PostBuilder().withId('unpublished').withoutPublished().build();
        const posts = [published, unpublished];

        const filtered = posts.filter(filter.published());

        expect(filtered).toContain(published);
        expect(filtered).not.toContain(unpublished);
      });
    });
  });
});