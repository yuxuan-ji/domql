import {Parser} from './parser.js';
import {Transpiler} from './transpiler.js';
import {Directives} from './directives.js';

export {QueryEngine} from './query_engine.js';

/**
 * The public Domql API
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
    var ast = Parser.parse(query);
    this._directives = Transpiler.transpile(ast);
  }

  /**
   * Execute compiled set of directives and
   * returns a Element array or an Element.
   * @return {Element[]|Element}
   */
  execute() {
    return Directives.execute(this._directives);
  }
}
