/**
 * Directive: Sort
 * @param  {Function} f : function used to compare
 * @param  {Any[]} arr : list to sort
 * @return {Any[]} : sorted list
 */
export function sort(f, arr) {
  arr.sort(f);
  return arr;
}

/**
 * Reduces a list of directives by applying
 * each element on its previous element and
 * returns the final NodeList, Element, or null
 * @param  {String[]|Function[]} directives
 * @return {NodeList|Element}
 */
export function execute(directives) {
  if (!directives || directives.length === 0) return null;
  var result = directives[0];
  for (var i = 1; i < directives.length; i++) {
    result = directives[i](result);
  }
  return result;
}
