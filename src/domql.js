import * as tokenizer from './domql_tokenizer.js';
import * as parser from './domql_parser.js';
import * as transpiler from './domql_transpiler.js';
import * as utils from './domql_utils.js';

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
