import {Parser} from './parser.js';
import {Transpiler} from './transpiler.js';
import {Directives} from './directives.js';

export {QueryEngine} from './query_engine.js';

/**
 * DOMQL API model
 */
export class Domql {

  /**
   * Initialize a Domql object with the input query.
   * @param  {String} query
   */
  constructor(query = null) {
    this._name = 'Domql';
    this._queryModel = {};
    this.compile(query);
  }

  get name() {
    return this._name;
  }

  get query() {
    return this._query;
  }

  /**
   * Compile user query into a query model
   * @param  {String} query
   */
  compile(query = null) {
    this._query = query;
    if (!query) return;
    var ast = Parser.parse(query);
    this._queryModel = Transpiler.transpile(ast);
  }

  /**
   * Execute compiled query model and
   * returns an Element array.
   * @return {Element[]}
   */
  execute() {
    return Directives.execute(this._queryModel.selector, this._queryModel.engine, this._queryModel.directives);
  }
}

/**
 * Utilty method to execute a DOMQL query
 * @param  {String} query
 * @return {Element} query result
 */
export function $(query) {
  var cursor = new Domql(query);
  return cursor.execute();
}

/**
 * Utility method to create a DOMQL instance. This instance can then be used
 * subsequently to avoid recompilation.
 * @param  {String} query
 * @return {Domql} DOMQL instance
 */
export function $$(query) {
  return new Domql(query);
}
