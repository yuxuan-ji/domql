/**
 * Wrapper around the inner query engine. Defaults to QueryEngine.defaultQuerySelector
 */
export class QueryEngine {

  /**
   * Get the engine
   * @return {Function}
   */
  static getEngine() {
    return QueryEngine._querySelector;
  }

  /**
   * Set the engine. The given engine can be any Javascript function that accepts a
   * CSS selector String as its first parameter and returns an Array of Elements.
   * @param {Function} engine
   */
  static setEngine(engine) {
    QueryEngine._querySelector = engine;
  }

  /**
   * Use the default engine: QueryEngine.defaultQuerySelector
   */
  static useDefault() {
    QueryEngine._querySelector = QueryEngine.defaultQuerySelector;
  }

  /**
   * The default query selector: document.querySelectorAll wrapped by Array.from
   * @param  {String} selector
   * @return {Element[]}
   */
  static defaultQuerySelector(selector) {
    return Array.from(document.querySelectorAll(selector));
  }
}

QueryEngine._querySelector = QueryEngine.defaultQuerySelector;
