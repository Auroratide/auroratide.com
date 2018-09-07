import functions from 'Client/utils/functions';

describe('functions', () => {
  describe('series', () => {
    let str;
    const f1 = () => str += 'A';
    const f2 = () => str += 'B';

    beforeEach(() => str = '');
    
    it('should do nothing when given no functions', () => {
      const f = functions.series();
      f();

      expect(str).toEqual('');
    });

    it('should apply the function when given one function', () => {
      const f = functions.series(f1);
      f();

      expect(str).toEqual('A');
    });

    it('should apply the functions in order when given more than one function', () => {
      const f = functions.series(f1, f2, f1);
      f();

      expect(str).toEqual('ABA');
    });
  });
});