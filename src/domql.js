import * as tokenizer from './tokenizer.js';
import * as parser from './parser.js';
import * as transpiler from './transpiler.js';
import * as utils from './utils.js';

export default class Domql {

  /**
   * Initialize a Domql object with the input query.
   * @param  {string} query
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
   * @param  {string} query
   */
  compile(query = null) {
    this._query = query;
    var tokens = tokenizer.tokenize(query);
    var ast = parser.parse(tokens);
    this._directives = transpiler.transpile(ast);
  }

  /**
   * Execute compiled set of directives and
   * returns a NodeList or a DOM Element or null if not found
   * @return {NodeList|Element|null}
   */
  execute() {
    return utils.execute(this._directives);
  }
}
