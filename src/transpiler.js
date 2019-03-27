function _traverseFrom(node) {
  var tables = new Set();
  node.forEach(function (table) {
    if (table.type !== "table_ref") throw new Error(`Expected ${table} to be a table_ref`);

    tables.add(table.table);
  });
  return tables;
}

/**
 * Traverses the given Abstract Syntax Tree
 * and generates a set of directives
 * @param  {Object} ast
 * @return {List<string|function>}
 */
export function transpile(ast) {

  var tables = _traverseFrom(ast.from);
  _augmentWhere(ast.where, tables);

  var selectors = {};
  tables.forEach(function (table) {
    selectors[table] = [""];
  });

  _traverseWhere(ast.where, selectors);
  return undefined;
}
