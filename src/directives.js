/**
 * Utility class containing directives for SQL modifiers
 */
export class Directives {
  /**
   * Directive: Sort
   * @param  {Function} f : function used to compare
   * @param  {Any[]} arr : list to sort
   * @return {Any[]} : sorted list
   */
  static sort(f, arr) {
    arr.sort(f);
    return arr;
  }

  /**
   * Directive: Limiter
   * @param  {Number} limit max amount of elements in the array
   * @param  {Any[]} arr
   * @return {Any[]}
   */
  static limiter(limit, arr) {
    return arr.slice(0, limit);
  }

  /**
   * Query the CSS selector using the given engine, then apply each
   * directive on the result
   * @param  {String} selector
   * @param  {Function} engine
   * @param  {Function[]} directives
   * @return {Element[]}
   */
  static execute(selector, engine, directives) {
    if (!selector) return [];
    var result = engine(selector);
    for (var i = 0; i < directives.length; i++) {
      result = directives[i](result);
    }
    return result;
  }
}
