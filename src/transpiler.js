import {QueryEngine} from './query_engine.js';
import {Directives} from './directives.js';

/**
 * Transpiler for converting Abstract Syntax Trees into CSS selectors and Javascript directives
 */
export class Transpiler {
  /**
   * Traverse the Columns clause of the AST and return a Set containing the listed columns
   * @param  {Object} node The Columns clause of the AST
   * @return {Set} Set containing the columns listed in the From clause
   */
  static _getColumnReferences(node) {
    var columns = new Set();
    node.forEach(function (column) {
      if (column.type !== "column_ref") throw new Error(`Expected "${column}"" to be a column_ref`);

      columns.add(column.column);
    });
    return columns;
  }

  /**
   * Traverse and augment the Where clause of the AST, and check if conditions using a table reference
   * are valid
   * @param  {Object} node   The Where clause of the AST
   * @param  {Set} columns Set containing the columns listed in the From clause
   */
  static _augmentWhere(node, columns) {

    var firstColumn = columns.entries().next().value[0];

    function recurse(node, parent = null) {
      if (!node) return;

      if (node.type === "binary_expr") {

        if (node.operator === "AND" || node.operator === "OR") {
          recurse(node.left, node.operator);
          recurse(node.right, node.operator);

        } else if (node.operator === "=") {
          if (!node.left.field) {
            node.left.field = node.left.column;
            node.left.column = firstColumn;
          }
          if (!columns.has(node.left.column)) {
            throw Error(`Column "${node.left.column}" was not specified in the Columns clause`);
          }
          var column = node.left.column;
          var field = node.left.field;
          if (node.right.type !== "string" && node.right.type !== "number") {
            throw Error(`Expected a string or number, but found ${node.right.type} instead`);
          }
          var value = node.right.value;
          node["selector"] = {
            table: column,
            selector: `[${field}="${value}"]`
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
   * @param  {Object} selectors Map of columns to their generated selectors
   */
  static _constructSelectors(node, selectors) {

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
   * @param  {String} scope the upmost parent
   * @return {String} compiled DOMString
   */
  static _compileSelectors(selectors, scope) {
    scope = scope === '*' ? "" : scope + ' ';
    var outp = [];
    for (var key in selectors) {
      var selector = "";
      for (var i = 0; i < selectors[key].length; i++) {
        selector += scope + key + selectors[key][i];
        if (i < selectors[key].length - 1) selector += ", ";
      }
      outp.push(selector);
    }

    return outp.join(", ");
  }

  /**
   * Traverses the given Abstract Syntax Tree
   * and returns the query model
   * @param  {Object} ast
   * @return {Object} the transpiled query model
   */
  static transpile(ast) {

    var columns = Transpiler._getColumnReferences(ast.columns);
    var scope = ast.from.table;

    Transpiler._augmentWhere(ast.where, columns);

    var selectors = {};
    columns.forEach(function (table) {
      selectors[table] = [""];
    });

    Transpiler._constructSelectors(ast.where, selectors);

    var compiled = Transpiler._compileSelectors(selectors, scope);

    var directives = [];
    if (ast.limit) directives.push(Directives.limiter.bind(null, ast.limit.value));

    return {
      selector: compiled,
      engine: QueryEngine.getEngine(),
      directives: directives
    };
  }

}

