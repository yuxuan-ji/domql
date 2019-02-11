/* global describe, it, before */

import chai from 'chai';
import {Domql} from '../lib/domql.js';

chai.expect();

const expect = chai.expect;

let lib;

describe('Given an instance of my domql library', () => {
  before(() => {
    lib = new Domql();
  });
  describe('when I need the name', () => {
    it('should return the name', () => {
      expect(lib.name).to.be.equal('Domql');
    });
  });
});
