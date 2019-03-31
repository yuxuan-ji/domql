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
   * @return {Any[]|Any}
   */
  static limiter(limit, arr) {
    var out = arr.splice(0, limit);
    return out.length === 1 ? out[0] : out;
  }

  /**
   * Reduces a list of directives by applying
   * each element on its previous element and
   * returns the final Element array or Element
   * @param  {Array<String|Function>} directives
   * @return {Element[]|Element}
   */
  static execute(directives) {
    if (!directives || directives.length === 0) return null;
    var result = directives[0];
    for (var i = 1; i < directives.length; i++) {
      result = directives[i](result);
    }
    return result;
  }
}