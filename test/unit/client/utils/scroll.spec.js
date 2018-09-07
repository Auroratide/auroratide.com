import scroll from 'Client/utils/scroll';

describe('scroll', () => {

  beforeEach(() => {
    jest.spyOn(global.window, 'scroll').mockReturnValue();
  });

  describe('toTop', () => {
    it('should scroll to the top of the screen', () => {
      scroll.toTop();

      expect(global.window.scroll).toHaveBeenCalledWith(expect.objectContaining({ top: 0 }));
    });

    it('should scroll smoothly', () => {
      scroll.toTop();

      expect(global.window.scroll).toHaveBeenCalledWith(expect.objectContaining({ behavior: 'smooth' }));
    });
  });

  afterEach(() => jest.restoreAllMocks());

});
