import * as sizzle from './sizzle.js';
import {limiter} from './utils.js';

/**
 * Traverse the From clause of the AST and return a Set containing the listed tables
 * @param  {Object} node The From clause of the AST
 * @return {Set} Set containing the tables listed in the From clause
 */
function _getTableReferences(node) {
  var tables = new Set();
  node.forEach(function (table) {
    if (table.type !== "table_ref") throw new Error(`Expected ${table} to be a table_ref`);

    tables.add(table.table);
  });
  return tables;
}

/**
 * Traverse and augment the Where clause of the AST, and check if conditions using a table reference
 * are valid
 * @param  {Object} node   The Where clause of the AST
 * @param  {Set} tables Set containing the tables listed in the From clause
 */
function _augmentWhere(node, tables) {

  var firstTable = tables.entries().next().value[0];

  function recurse(node, parent = null) {
    if (!node) return;

    if (node.type === "binary_expr") {

      if (node.operator === "AND" || node.operator === "OR") {
        _augmentWhere(node.left, tables, node.operator);
        _augmentWhere(node.right, tables, node.operator);

      } else if (node.operator === "=") {
        if (!node.left.table) node.left.table = firstTable;
        if (!tables.has(node.left.table)) throw Error(`Table ${node.left.table} was not specified in FROM statement`);
        var table = node.left.table;
        var column = node.left.column;
        var value = node.right.column || node.right.value;
        node["selector"] = {
          table: table,
          selector: `[${column}="${value}"]`
        };
        node.type = "selector";
        delete node.left;
        delete node.right;
        delete node.operator;
      }
    }
    node.parent = parent;
  }

  recurse(node);
}

/**
 * Traverse the augmented Where clause and generate corresponding CSS selectors
 * @param  {Object} node      The augmented Where clause of the AST
 * @param  {Object} selectors Map of tables to their generated selectors
 */
function _constructSelectors(node, selectors) {

  if (!node) return;

  var pushNew = false;
  var pushCopy = false;

  function recurse(node) {
    if (node.type === "selector") {
      var selector = selectors[node.selector.table];
      if (pushCopy) {
        selector.push(selector[selector.length - 1]);
        pushCopy = false;
        selector[selector.length - 2] += node.selector.selector;
        return;

      } else if (pushNew) {
        if (selector[selector.length - 1] !== "") selector.push("");
        pushNew = false;
      }
      selector[selector.length - 1] += node.selector.selector;
    }
    if (node.type === "binary_expr") {
      var left = node.left;
      var right = node.right;

      if (node.operator === "AND") {
        recurse(left);
        recurse(right);

      } else if (node.operator === "OR") {
        if (node.parent === "AND") pushCopy = true;
        recurse(left);
        if (node.parent !== "AND") pushNew = true;
        recurse(right);
      }
    }
  }

  recurse(node);
}

/**
 * Reduce the selectors map into one DOMString
 * @param  {Object} selectors
 * @return {String} compiled DOMString
 */
function _compileSelectors(selectors) {
  var outp = [];
  for (var key in selectors) {
    var selector = "";
    for (var i = 0; i < selectors[key].length; i++) {
      selector += key + selectors[key][i];
      if (i < selectors[key].length - 1) selector += ", ";
    }
    outp.push(selector);
  }

  return outp.join(", ");
}

/**
 * Traverses the given Abstract Syntax Tree
 * and generates a set of directives
 * @param  {Object} ast
 * @return {List<String|Function>}
 */
export function transpile(ast) {

  var tables = _getTableReferences(ast.from);
  _augmentWhere(ast.where, tables);

  var selectors = {};
  tables.forEach(function (table) {
    selectors[table] = [""];
  });

  _constructSelectors(ast.where, selectors);

  var compiled = _compileSelectors(selectors);

  var directives = [compiled];

  directives.push(sizzle.default);
  if (ast.limit) directives.push(limiter.bind(null, ast.limit.value));

  return directives;
}
