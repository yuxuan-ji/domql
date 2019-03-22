var comparisonOperators = ['=', '>', '<', '>=', '<=', '!=', 'LIKE'];

function _transpile(root, outp = {}) {
  if (root.type === 'select') {
    for (let table of root.from) {
      outp[table.name] = [];
    }
  }

}

/**
 * Traverses the given Abstract Syntax Tree
 * and generates a set of directives
 * @param  {Object} ast
 * @return {List<string|function>}
 */
export function transpile(ast) {
  return _transpile(ast);
}
