import { sorter } from 'Client/components/context/DigestsContext';
import DigestBuilder from 'Test/utils/builders/DigestBuilder';

describe('DigestsContext', () => {
  describe('sorter', () => {
    describe('byIdReversed', () => {
      it('should sort by date published in descending order', () => {
        const newer = new DigestBuilder().withId('3').build();
        const middle = new DigestBuilder().withId('2').build();
        const older = new DigestBuilder().withId('1').build();
        const items = [middle, older, newer];

        const sorted = items.sort(sorter.byIdReversed);

        expect(sorted[0]).toEqual(newer);
        expect(sorted[1]).toEqual(middle);
        expect(sorted[2]).toEqual(older);
      });
    });
  });
});