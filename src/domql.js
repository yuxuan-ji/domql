import {parse} from './parser.js';
import {transpile} from './transpiler.js';
import * as utils from './utils.js';

/**
 * Domql: Domql API
 */
export class Domql {

  /**
   * Initialize a Domql object with the input query.
   * @param  {String} query
   */
  constructor(query = null) {
    this._name = 'Domql';
    this.compile(query);
  }

  get name() {
    return this._name;
  }

  get query() {
    return this._query;
  }

  /**
   * Compile user query into a set of directives
   * @param  {String} query
   */
  compile(query = null) {
    this._query = query;
    if (!query) return;
    var ast = parse(query);
    this._directives = transpile(ast);
  }

  /**
   * Execute compiled set of directives and
   * returns a Element array or an Element.
   * @return {Element[]|Element}
   */
  execute() {
    return utils.execute(this._directives);
  }
}
