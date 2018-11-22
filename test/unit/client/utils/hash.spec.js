import hash from 'Client/utils/hash';

describe('hash', () => {
  describe('string', () => {
    it('should hash empty string to 0', () => {
      expect(hash.string('')).toEqual(0);
    });

    it('should hash the same string the same', () => {
      const str = 'some value';
      expect(hash.string(str)).toEqual(hash.string(str));
    });

    it('should hash different strings differently', () => {
      expect(hash.string('one')).not.toEqual(hash.string('two'));
    });
  });

  describe('object', () => {
    it('should hash the same object the same', () => {
      const str = 'some value';
      expect(hash.object({ str })).toEqual(hash.object({ str }));
    });

    it('should hash different objects differently', () => {
      expect(hash.object({ v: 1 })).not.toEqual(hash.object({ v: 2 }));
    });

    it('should hash circular objects', () => {
      const obj = { v: 1 };
      obj.self = obj;

      expect(hash.object(obj)).toBeDefined();
    });
  });
});