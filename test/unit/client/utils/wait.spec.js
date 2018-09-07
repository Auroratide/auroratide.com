import wait from 'Client/utils/wait';

describe('wait', () => {
  describe('for', () => {
    it('should wait for the desired amount of time', async () => {
      const timeBeforeWait = new Date().getTime();
      await wait.for(50);
      const timeAfterWait = new Date().getTime();

      expect(timeAfterWait - timeBeforeWait).toBeGreaterThanOrEqual(50);
      expect(timeAfterWait - timeBeforeWait).toBeLessThan(150);
    });
  });
});