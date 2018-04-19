describe('jsdom canvas', () => {
  const x = document.createElement('canvas');

  describe('context', () => {
    const ctx = x.getContext('2d');

    it('should not be null', () => {
      expect(ctx).not.toBeNull();
    });
  });
});
