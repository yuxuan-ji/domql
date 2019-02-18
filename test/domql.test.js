/* global describe, it, before */

describe('Given an instance of my domql library', () => {
  var lib = new domql.Domql();
  describe('when I need the name', () => {
    it('should return the name', () => {
      expect(lib.name).to.be.equal('Domql');
    });
  });
});
