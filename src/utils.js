/**
 * Directive: Sort
 * @param  {function} f : function used to compare
 * @param  {List<*>} arr : list to sort
 * @return {List<*>} : sorted list
 */
export function sort(f, arr) {
  arr.sort(f);
  return arr;
}

/**
 * Reduces a list of directives by applying
 * each element on its previous element and
 * returns the final NodeList, HTML Element, or null
 * @param  {List<string|function>} directives
 * @return {NodeList|Element|null}            [description]
 */
export function execute(directives) {
  if (!directives || directives.length === 0) return null;
  var result = directives[0];
  for (var i = 1; i < directives.length; i++) {
    result = directives[i](result);
  }
  return result;
}
