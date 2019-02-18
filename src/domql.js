import * as tokenizer from './tokenizer.js';
import * as parser from './parser.js';
import * as transpiler from './transpiler.js';
import * as utils from './utils.js';

export default class Domql {

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

  compile(query = null) {
    this._query = query;
    var tokens = tokenizer.tokenize(query);
    var ast = parser.parse(tokens);
    this._directives = transpiler.transpile(ast);
  }

  execute() {
    return utils.execute(this._directives);
  }
}
