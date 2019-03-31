(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("domql", [], factory);
	else if(typeof exports === 'object')
		exports["domql"] = factory();
	else
		root["domql"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/domql.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/directives.js":
/*!***************************!*\
  !*** ./src/directives.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Directives = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * Utility class containing directives for SQL modifiers
 */
var Directives =
/*#__PURE__*/
function () {
  function Directives() {
    _classCallCheck(this, Directives);
  }

  _createClass(Directives, null, [{
    key: "sort",

    /**
     * Directive: Sort
     * @param  {Function} f : function used to compare
     * @param  {Any[]} arr : list to sort
     * @return {Any[]} : sorted list
     */
    value: function sort(f, arr) {
      arr.sort(f);
      return arr;
    }
    /**
     * Directive: Limiter
     * @param  {Number} limit max amount of elements in the array
     * @param  {Any[]} arr
     * @return {Any[]}
     */

  }, {
    key: "limiter",
    value: function limiter(limit, arr) {
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

  }, {
    key: "execute",
    value: function execute(selector, engine, directives) {
      if (!selector) return [];
      var result = engine(selector);

      for (var i = 0; i < directives.length; i++) {
        result = directives[i](result);
      }

      return result;
    }
  }]);

  return Directives;
}();

exports.Directives = Directives;

/***/ }),

/***/ "./src/domql.js":
/*!**********************!*\
  !*** ./src/domql.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.$ = $;
exports.$$ = $$;
Object.defineProperty(exports, "QueryEngine", {
  enumerable: true,
  get: function get() {
    return _query_engine.QueryEngine;
  }
});
exports.Domql = void 0;

var _parser = __webpack_require__(/*! ./parser.js */ "./src/parser.js");

var _transpiler = __webpack_require__(/*! ./transpiler.js */ "./src/transpiler.js");

var _directives = __webpack_require__(/*! ./directives.js */ "./src/directives.js");

var _query_engine = __webpack_require__(/*! ./query_engine.js */ "./src/query_engine.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * DOMQL API model
 */
var Domql =
/*#__PURE__*/
function () {
  /**
   * Initialize a Domql object with the input query.
   * @param  {String} query
   */
  function Domql() {
    var query = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

    _classCallCheck(this, Domql);

    this._name = 'Domql';
    this._queryModel = {};
    this.compile(query);
  }

  _createClass(Domql, [{
    key: "compile",

    /**
     * Compile user query into a query model
     * @param  {String} query
     */
    value: function compile() {
      var query = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      this._query = query;
      if (!query) return;

      var ast = _parser.Parser.parse(query);

      this._queryModel = _transpiler.Transpiler.transpile(ast);
    }
    /**
     * Execute compiled query model and
     * returns an Element array.
     * @return {Element[]}
     */

  }, {
    key: "execute",
    value: function execute() {
      return _directives.Directives.execute(this._queryModel.selector, this._queryModel.engine, this._queryModel.directives);
    }
  }, {
    key: "name",
    get: function get() {
      return this._name;
    }
  }, {
    key: "query",
    get: function get() {
      return this._query;
    }
  }]);

  return Domql;
}();
/**
 * Utilty method to execute a DOMQL query
 * @param  {String} query
 * @return {Element} query result
 */


exports.Domql = Domql;

function $(query) {
  var cursor = new Domql(query);
  return cursor.execute();
}
/**
 * Utility method to create a DOMQL instance. This instance can then be used
 * subsequently to avoid recompilation.
 * @param  {String} query
 * @return {Domql} DOMQL instance
 */


function $$(query) {
  return new Domql(query);
}

/***/ }),

/***/ "./src/parser.js":
/*!***********************!*\
  !*** ./src/parser.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Parser = void 0;

var _pegjs_parser = __webpack_require__(/*! ./pegjs_parser.js */ "./src/pegjs_parser.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * Parser for converting queries into Abstract Syntax trees
 */
var Parser =
/*#__PURE__*/
function () {
  function Parser() {
    _classCallCheck(this, Parser);
  }

  _createClass(Parser, null, [{
    key: "parse",

    /**
     * Parse a query into an Abstract Syntax Tree
     * @param  {String} query
     * @return {Object} the Abstract Syntax Tree
     */
    value: function parse(query) {
      return (0, _pegjs_parser.parse)(query);
    }
  }]);

  return Parser;
}();

exports.Parser = Parser;

/***/ }),

/***/ "./src/pegjs_parser.js":
/*!*****************************!*\
  !*** ./src/pegjs_parser.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SyntaxError = peg$SyntaxError;
exports.parse = peg$parse;
exports.default = void 0;

// Generated by PEG.js v0.11.0-master.30f3260, https://pegjs.org/
function peg$subclass(child, parent) {
  function C() {
    this.constructor = child;
  }

  C.prototype = parent.prototype;
  child.prototype = new C();
}

function peg$SyntaxError(message, expected, found, location) {
  this.message = message;
  this.expected = expected;
  this.found = found;
  this.location = location;
  this.name = "SyntaxError"; // istanbul ignore next

  if (typeof Error.captureStackTrace === "function") {
    Error.captureStackTrace(this, peg$SyntaxError);
  }
}

peg$subclass(peg$SyntaxError, Error);

peg$SyntaxError.buildMessage = function (expected, found) {
  var DESCRIBE_EXPECTATION_FNS = {
    literal: function literal(expectation) {
      return "\"" + literalEscape(expectation.text) + "\"";
    },
    class: function _class(expectation) {
      var escapedParts = expectation.parts.map(function (part) {
        return Array.isArray(part) ? classEscape(part[0]) + "-" + classEscape(part[1]) : classEscape(part);
      });
      return "[" + (expectation.inverted ? "^" : "") + escapedParts + "]";
    },
    any: function any() {
      return "any character";
    },
    end: function end() {
      return "end of input";
    },
    other: function other(expectation) {
      return expectation.description;
    },
    not: function not(expectation) {
      return "not " + describeExpectation(expectation.expected);
    }
  };

  function hex(ch) {
    return ch.charCodeAt(0).toString(16).toUpperCase();
  }

  function literalEscape(s) {
    return s.replace(/\\/g, "\\\\").replace(/"/g, "\\\"").replace(/\0/g, "\\0").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/[\x00-\x0F]/g, function (ch) {
      return "\\x0" + hex(ch);
    }).replace(/[\x10-\x1F\x7F-\x9F]/g, function (ch) {
      return "\\x" + hex(ch);
    });
  }

  function classEscape(s) {
    return s.replace(/\\/g, "\\\\").replace(/\]/g, "\\]").replace(/\^/g, "\\^").replace(/-/g, "\\-").replace(/\0/g, "\\0").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/[\x00-\x0F]/g, function (ch) {
      return "\\x0" + hex(ch);
    }).replace(/[\x10-\x1F\x7F-\x9F]/g, function (ch) {
      return "\\x" + hex(ch);
    });
  }

  function describeExpectation(expectation) {
    return DESCRIBE_EXPECTATION_FNS[expectation.type](expectation);
  }

  function describeExpected(expected) {
    var descriptions = expected.map(describeExpectation);
    var i, j;
    descriptions.sort();

    if (descriptions.length > 0) {
      for (i = 1, j = 1; i < descriptions.length; i++) {
        if (descriptions[i - 1] !== descriptions[i]) {
          descriptions[j] = descriptions[i];
          j++;
        }
      }

      descriptions.length = j;
    }

    switch (descriptions.length) {
      case 1:
        return descriptions[0];

      case 2:
        return descriptions[0] + " or " + descriptions[1];

      default:
        return descriptions.slice(0, -1).join(", ") + ", or " + descriptions[descriptions.length - 1];
    }
  }

  function describeFound(found) {
    return found ? "\"" + literalEscape(found) + "\"" : "end of input";
  }

  return "Expected " + describeExpected(expected) + " but " + describeFound(found) + " found.";
};

function peg$parse(input, options) {
  options = options !== undefined ? options : {};
  var peg$FAILED = {};
  var peg$startRuleFunctions = {
    start: peg$parsestart
  };
  var peg$startRuleFunction = peg$parsestart;
  var peg$c0 = "!";
  var peg$c1 = "=";
  var peg$c2 = ">=";
  var peg$c3 = ">";
  var peg$c4 = "<=";
  var peg$c5 = "<>";
  var peg$c6 = "<";
  var peg$c7 = "!=";
  var peg$c8 = "\"";
  var peg$c9 = "'";
  var peg$c10 = "`";
  var peg$c11 = "*";
  var peg$c12 = ".";
  var peg$c13 = "null";
  var peg$c14 = "true";
  var peg$c15 = "false";
  var peg$c16 = "select";
  var peg$c17 = "from";
  var peg$c18 = "where";
  var peg$c19 = "group";
  var peg$c20 = "by";
  var peg$c21 = "order";
  var peg$c22 = "limit";
  var peg$c23 = "asc";
  var peg$c24 = "desc";
  var peg$c25 = "in";
  var peg$c26 = "is";
  var peg$c27 = "like";
  var peg$c28 = "exists";
  var peg$c29 = "not";
  var peg$c30 = "and";
  var peg$c31 = "or";
  var peg$c32 = ",";
  var peg$c33 = "(";
  var peg$c34 = ")";
  var peg$c35 = "[";
  var peg$c36 = "]";
  var peg$r0 = /^[^"]/;
  var peg$r1 = /^[^']/;
  var peg$r2 = /^[^`]/;
  var peg$r3 = /^[A-Za-z_]/;
  var peg$r4 = /^[A-Za-z0-9_]/;
  var peg$r5 = /^[A-Za-z0-9_:]/;
  var peg$r6 = /^[\n\r]/;
  var peg$r7 = /^[0-9]/;
  var peg$r8 = /^[0-9a-fA-F]/;
  var peg$r9 = /^[eE]/;
  var peg$r10 = /^[+\-]/;
  var peg$r11 = /^[ \t\n\r]/;
  var peg$e0 = peg$literalExpectation("!", false);
  var peg$e1 = peg$literalExpectation("=", false);
  var peg$e2 = peg$literalExpectation(">=", false);
  var peg$e3 = peg$literalExpectation(">", false);
  var peg$e4 = peg$literalExpectation("<=", false);
  var peg$e5 = peg$literalExpectation("<>", false);
  var peg$e6 = peg$literalExpectation("<", false);
  var peg$e7 = peg$literalExpectation("!=", false);
  var peg$e8 = peg$literalExpectation("\"", false);
  var peg$e9 = peg$classExpectation(["\""], true, false);
  var peg$e10 = peg$literalExpectation("'", false);
  var peg$e11 = peg$classExpectation(["'"], true, false);
  var peg$e12 = peg$literalExpectation("`", false);
  var peg$e13 = peg$classExpectation(["`"], true, false);
  var peg$e14 = peg$classExpectation([["A", "Z"], ["a", "z"], "_"], false, false);
  var peg$e15 = peg$classExpectation([["A", "Z"], ["a", "z"], ["0", "9"], "_"], false, false);
  var peg$e16 = peg$classExpectation([["A", "Z"], ["a", "z"], ["0", "9"], "_", ":"], false, false);
  var peg$e17 = peg$literalExpectation(".", false);
  var peg$e18 = peg$classExpectation([["0", "9"]], false, false);
  var peg$e19 = peg$classExpectation(["e", "E"], false, false);
  var peg$e20 = peg$classExpectation(["+", "-"], false, false);
  var peg$e21 = peg$literalExpectation("NULL", true);
  var peg$e22 = peg$literalExpectation("TRUE", true);
  var peg$e23 = peg$literalExpectation("FALSE", true);
  var peg$e24 = peg$literalExpectation("SELECT", true);
  var peg$e25 = peg$literalExpectation("FROM", true);
  var peg$e26 = peg$literalExpectation("WHERE", true);
  var peg$e27 = peg$literalExpectation("GROUP", true);
  var peg$e28 = peg$literalExpectation("BY", true);
  var peg$e29 = peg$literalExpectation("ORDER", true);
  var peg$e30 = peg$literalExpectation("LIMIT", true);
  var peg$e31 = peg$literalExpectation("ASC", true);
  var peg$e32 = peg$literalExpectation("DESC", true);
  var peg$e33 = peg$literalExpectation("IN", true);
  var peg$e34 = peg$literalExpectation("IS", true);
  var peg$e35 = peg$literalExpectation("LIKE", true);
  var peg$e36 = peg$literalExpectation("EXISTS", true);
  var peg$e37 = peg$literalExpectation("NOT", true);
  var peg$e38 = peg$literalExpectation("AND", true);
  var peg$e39 = peg$literalExpectation("OR", true);
  var peg$e40 = peg$literalExpectation(",", false);
  var peg$e41 = peg$literalExpectation("*", false);
  var peg$e42 = peg$literalExpectation("(", false);
  var peg$e43 = peg$literalExpectation(")", false);
  var peg$e44 = peg$classExpectation([" ", "\t", "\n", "\r"], false, false);

  var peg$f0 = function peg$f0(c, f, w, g, o, l) {
    return {
      type: 'select',
      columns: c,
      from: f,
      where: w,
      groupby: g,
      orderby: o,
      limit: l
    };
  };

  var peg$f1 = function peg$f1() {
    return [{
      type: 'column_ref',
      column: '*'
    }];
  };

  var peg$f2 = function peg$f2(head, tail) {
    return createList(head, tail);
  };

  var peg$f3 = function peg$f3(c) {
    return c;
  };

  var peg$f4 = function peg$f4(l) {
    return l;
  };

  var peg$f5 = function peg$f5() {
    return {
      type: 'table_ref',
      table: '*'
    };
  };

  var peg$f6 = function peg$f6(dt) {
    var obj = {
      type: 'table_ref',
      table: dt
    };
    return obj;
  };

  var peg$f7 = function peg$f7(e) {
    return e;
  };

  var peg$f8 = function peg$f8(c, d) {
    var obj = c;
    obj.order = 'ASC';
    if (d === 'DESC') obj.order = 'DESC';
    return obj;
  };

  var peg$f9 = function peg$f9(i) {
    return i;
  };

  var peg$f10 = function peg$f10(head, tail) {
    var el = {
      type: 'expr_list'
    };
    el.value = createList(head, tail);
    return el;
  };

  var peg$f11 = function peg$f11(head, tail) {
    return createBinaryExprChain(head, tail);
  };

  var peg$f12 = function peg$f12(expr) {
    return createUnaryExpr('NOT', expr);
  };

  var peg$f13 = function peg$f13(left, rh) {
    if (rh === null) return left;else if (rh.type === 'arithmetic') return createBinaryExprChain(left, rh.tail);else return createBinaryExpr(rh.op, left, rh.right);
  };

  var peg$f14 = function peg$f14(op, stmt) {
    stmt.parentheses = true;
    return createUnaryExpr(op, stmt);
  };

  var peg$f15 = function peg$f15(nk) {
    return nk[0] + ' ' + nk[2];
  };

  var peg$f16 = function peg$f16(l) {
    return {
      type: 'arithmetic',
      tail: l
    };
  };

  var peg$f17 = function peg$f17(right) {
    return {
      op: 'IS',
      right: right
    };
  };

  var peg$f18 = function peg$f18(right) {
    return {
      op: 'IS NOT',
      right: right
    };
  };

  var peg$f19 = function peg$f19(op, right) {
    return {
      op: op,
      right: right
    };
  };

  var peg$f20 = function peg$f20(op, l) {
    return {
      op: op,
      right: l
    };
  };

  var peg$f21 = function peg$f21(head, tail) {
    return createBinaryExprChain(head, tail);
  };

  var peg$f22 = function peg$f22(e) {
    e.parentheses = true;
    return e;
  };

  var peg$f23 = function peg$f23(list) {
    list.parentheses = true;
    return list;
  };

  var peg$f24 = function peg$f24(col, f) {
    return {
      type: 'column_ref',
      column: col,
      field: f
    };
  };

  var peg$f25 = function peg$f25(col) {
    return {
      type: 'column_ref',
      column: col
    };
  };

  var peg$f26 = function peg$f26(name) {
    return isReserved[name.toUpperCase()] === true;
  };

  var peg$f27 = function peg$f27(name) {
    return name;
  };

  var peg$f28 = function peg$f28(chars) {
    return chars.join('');
  };

  var peg$f29 = function peg$f29(name) {
    return name;
  };

  var peg$f30 = function peg$f30(start, parts) {
    return start + parts.join('');
  };

  var peg$f31 = function peg$f31() {
    return {
      type: 'star',
      value: '*'
    };
  };

  var peg$f32 = function peg$f32() {
    return {
      type: 'null',
      value: null
    };
  };

  var peg$f33 = function peg$f33() {
    return {
      type: 'bool',
      value: true
    };
  };

  var peg$f34 = function peg$f34() {
    return {
      type: 'bool',
      value: false
    };
  };

  var peg$f35 = function peg$f35(ca) {
    return {
      type: 'string',
      value: ca
    };
  };

  var peg$f36 = function peg$f36(n) {
    return {
      type: 'number',
      value: n
    };
  };

  var peg$f37 = function peg$f37(int_, frac, exp) {
    return parseFloat(int_ + frac + exp);
  };

  var peg$f38 = function peg$f38(int_, frac) {
    return parseFloat(int_ + frac);
  };

  var peg$f39 = function peg$f39(int_, exp) {
    return parseFloat(int_ + exp);
  };

  var peg$f40 = function peg$f40(int_) {
    return parseFloat(int_);
  };

  var peg$f41 = function peg$f41(digits) {
    return "." + digits;
  };

  var peg$f42 = function peg$f42(e, digits) {
    return e + digits;
  };

  var peg$f43 = function peg$f43(digits) {
    return digits.join("");
  };

  var peg$f44 = function peg$f44(e, sign) {
    return e + (sign !== null ? sign : '');
  };

  var peg$f45 = function peg$f45() {
    return 'ASC';
  };

  var peg$f46 = function peg$f46() {
    return 'DESC';
  };

  var peg$f47 = function peg$f47() {
    return 'IN';
  };

  var peg$f48 = function peg$f48() {
    return 'IS';
  };

  var peg$f49 = function peg$f49() {
    return 'LIKE';
  };

  var peg$f50 = function peg$f50() {
    return 'EXISTS';
  };

  var peg$f51 = function peg$f51() {
    return 'NOT';
  };

  var peg$f52 = function peg$f52() {
    return 'AND';
  };

  var peg$f53 = function peg$f53() {
    return 'OR';
  };

  var peg$currPos = 0;
  var peg$savedPos = 0;
  var peg$posDetailsCache = [{
    line: 1,
    column: 1
  }];
  var peg$expected = [];
  var peg$silentFails = 0;
  var peg$result;

  if ("startRule" in options) {
    if (!(options.startRule in peg$startRuleFunctions)) {
      throw new Error("Can't start parsing from rule \"" + options.startRule + "\".");
    }

    peg$startRuleFunction = peg$startRuleFunctions[options.startRule];
  }

  function text() {
    return input.substring(peg$savedPos, peg$currPos);
  }

  function offset() {
    return peg$savedPos;
  }

  function range() {
    return [peg$savedPos, peg$currPos];
  }

  function location() {
    return peg$computeLocation(peg$savedPos, peg$currPos);
  }

  function expected(description, location) {
    location = location !== undefined ? location : peg$computeLocation(peg$savedPos, peg$currPos);
    throw peg$buildStructuredError([peg$otherExpectation(description)], input.substring(peg$savedPos, peg$currPos), location);
  }

  function error(message, location) {
    location = location !== undefined ? location : peg$computeLocation(peg$savedPos, peg$currPos);
    throw peg$buildSimpleError(message, location);
  }

  function peg$literalExpectation(text, ignoreCase) {
    return {
      type: "literal",
      text: text,
      ignoreCase: ignoreCase
    };
  }

  function peg$classExpectation(parts, inverted, ignoreCase) {
    return {
      type: "class",
      parts: parts,
      inverted: inverted,
      ignoreCase: ignoreCase
    };
  }

  function peg$anyExpectation() {
    return {
      type: "any"
    };
  }

  function peg$endExpectation() {
    return {
      type: "end"
    };
  }

  function peg$otherExpectation(description) {
    return {
      type: "other",
      description: description
    };
  }

  function peg$computePosDetails(pos) {
    var details = peg$posDetailsCache[pos];
    var p;

    if (details) {
      return details;
    } else {
      p = pos - 1;

      while (!peg$posDetailsCache[p]) {
        p--;
      }

      details = peg$posDetailsCache[p];
      details = {
        line: details.line,
        column: details.column
      };

      while (p < pos) {
        if (input.charCodeAt(p) === 10) {
          details.line++;
          details.column = 1;
        } else {
          details.column++;
        }

        p++;
      }

      peg$posDetailsCache[pos] = details;
      return details;
    }
  }

  var peg$VALIDFILENAME = typeof options.filename === "string" && options.filename.length > 0;

  function peg$computeLocation(startPos, endPos) {
    var loc = {};
    if (peg$VALIDFILENAME) loc.filename = options.filename;
    var startPosDetails = peg$computePosDetails(startPos);
    loc.start = {
      offset: startPos,
      line: startPosDetails.line,
      column: startPosDetails.column
    };
    var endPosDetails = peg$computePosDetails(endPos);
    loc.end = {
      offset: endPos,
      line: endPosDetails.line,
      column: endPosDetails.column
    };
    return loc;
  }

  function peg$begin() {
    peg$expected.push({
      pos: peg$currPos,
      variants: []
    });
  }

  function peg$expect(expected) {
    var top = peg$expected[peg$expected.length - 1];

    if (peg$currPos < top.pos) {
      return;
    }

    if (peg$currPos > top.pos) {
      top.pos = peg$currPos;
      top.variants = [];
    }

    top.variants.push(expected);
  }

  function peg$end(invert) {
    var expected = peg$expected.pop();
    var top = peg$expected[peg$expected.length - 1];
    var variants = expected.variants;

    if (top.pos !== expected.pos) {
      return;
    }

    if (invert) {
      variants = variants.map(function (e) {
        return e.type === "not" ? e.expected : {
          type: "not",
          expected: e
        };
      });
    }

    Array.prototype.push.apply(top.variants, variants);
  }

  function peg$buildSimpleError(message, location) {
    return new peg$SyntaxError(message, null, null, location);
  }

  function peg$buildStructuredError(expected, found, location) {
    return new peg$SyntaxError(peg$SyntaxError.buildMessage(expected, found), expected, found, location);
  }

  function peg$buildError() {
    var expected = peg$expected[0];
    var failPos = expected.pos;
    return peg$buildStructuredError(expected.variants, failPos < input.length ? input.charAt(failPos) : null, failPos < input.length ? peg$computeLocation(failPos, failPos + 1) : peg$computeLocation(failPos, failPos));
  }

  function peg$parsestart() {
    var s0;

    var rule$expects = function rule$expects(expected) {
      if (peg$silentFails === 0) peg$expect(expected);
    };

    s0 = peg$parseselect_stmt();
    return s0;
  }

  function peg$parseselect_stmt() {
    var s0, s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12, s13, s14;

    var rule$expects = function rule$expects(expected) {
      if (peg$silentFails === 0) peg$expect(expected);
    };

    s0 = peg$currPos;
    s1 = peg$parse__();
    s2 = peg$parseKW_SELECT();

    if (s2 !== peg$FAILED) {
      s3 = peg$parse__();
      s4 = peg$parsecolumn_clause();

      if (s4 !== peg$FAILED) {
        s5 = peg$parse__();
        s6 = peg$parsefrom_clause();

        if (s6 === peg$FAILED) {
          s6 = null;
        }

        s7 = peg$parse__();
        s8 = peg$parsewhere_clause();

        if (s8 === peg$FAILED) {
          s8 = null;
        }

        s9 = peg$parse__();
        s10 = peg$parsegroup_by_clause();

        if (s10 === peg$FAILED) {
          s10 = null;
        }

        s11 = peg$parse__();
        s12 = peg$parseorder_by_clause();

        if (s12 === peg$FAILED) {
          s12 = null;
        }

        s13 = peg$parse__();
        s14 = peg$parselimit_clause();

        if (s14 === peg$FAILED) {
          s14 = null;
        }

        peg$savedPos = s0;
        s0 = peg$f0(s4, s6, s8, s10, s12, s14);
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parsecolumn_clause() {
    var s0, s1, s2, s3, s4, s5, s6, s7;

    var rule$expects = function rule$expects(expected) {
      if (peg$silentFails === 0) peg$expect(expected);
    };

    s0 = peg$currPos;
    s1 = peg$currPos;
    s2 = peg$parseSTAR();

    if (s2 !== peg$FAILED) {
      s3 = peg$currPos;
      peg$begin();
      s4 = peg$parseident_start();
      peg$end(true);

      if (s4 === peg$FAILED) {
        s3 = undefined;
      } else {
        peg$currPos = s3;
        s3 = peg$FAILED;
      }

      if (s3 !== peg$FAILED) {
        s2 = [s2, s3];
        s1 = s2;
      } else {
        peg$currPos = s1;
        s1 = peg$FAILED;
      }
    } else {
      peg$currPos = s1;
      s1 = peg$FAILED;
    }

    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$f1();
    }

    s0 = s1;

    if (s0 === peg$FAILED) {
      s0 = peg$currPos;
      s1 = peg$parsecolumn_list_item();

      if (s1 !== peg$FAILED) {
        s2 = [];
        s3 = peg$currPos;
        s4 = peg$parse__();
        s5 = peg$parseCOMMA();

        if (s5 !== peg$FAILED) {
          s6 = peg$parse__();
          s7 = peg$parsecolumn_list_item();

          if (s7 !== peg$FAILED) {
            s4 = [s4, s5, s6, s7];
            s3 = s4;
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }

        while (s3 !== peg$FAILED) {
          s2.push(s3);
          s3 = peg$currPos;
          s4 = peg$parse__();
          s5 = peg$parseCOMMA();

          if (s5 !== peg$FAILED) {
            s6 = peg$parse__();
            s7 = peg$parsecolumn_list_item();

            if (s7 !== peg$FAILED) {
              s4 = [s4, s5, s6, s7];
              s3 = s4;
            } else {
              peg$currPos = s3;
              s3 = peg$FAILED;
            }
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
        }

        peg$savedPos = s0;
        s0 = peg$f2(s1, s2);
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    }

    return s0;
  }

  function peg$parsecolumn_list_item() {
    var s0, s1;

    var rule$expects = function rule$expects(expected) {
      if (peg$silentFails === 0) peg$expect(expected);
    };

    s0 = peg$currPos;
    s1 = peg$parsecolumn_ref();

    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$f3(s1);
    }

    s0 = s1;
    return s0;
  }

  function peg$parsefrom_clause() {
    var s0, s1, s2, s3;

    var rule$expects = function rule$expects(expected) {
      if (peg$silentFails === 0) peg$expect(expected);
    };

    s0 = peg$currPos;
    s1 = peg$parseKW_FROM();

    if (s1 !== peg$FAILED) {
      s2 = peg$parse__();
      s3 = peg$parsetable_ref();

      if (s3 !== peg$FAILED) {
        peg$savedPos = s0;
        s0 = peg$f4(s3);
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parsetable_ref() {
    var s0, s1, s2, s3, s4;

    var rule$expects = function rule$expects(expected) {
      if (peg$silentFails === 0) peg$expect(expected);
    };

    s0 = peg$currPos;
    s1 = peg$currPos;
    s2 = peg$parseSTAR();

    if (s2 !== peg$FAILED) {
      s3 = peg$currPos;
      peg$begin();
      s4 = peg$parseident_start();
      peg$end(true);

      if (s4 === peg$FAILED) {
        s3 = undefined;
      } else {
        peg$currPos = s3;
        s3 = peg$FAILED;
      }

      if (s3 !== peg$FAILED) {
        s2 = [s2, s3];
        s1 = s2;
      } else {
        peg$currPos = s1;
        s1 = peg$FAILED;
      }
    } else {
      peg$currPos = s1;
      s1 = peg$FAILED;
    }

    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$f5();
    }

    s0 = s1;

    if (s0 === peg$FAILED) {
      s0 = peg$currPos;
      s1 = peg$parseident();

      if (s1 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$f6(s1);
      }

      s0 = s1;
    }

    return s0;
  }

  function peg$parsewhere_clause() {
    var s0, s1, s2, s3;

    var rule$expects = function rule$expects(expected) {
      if (peg$silentFails === 0) peg$expect(expected);
    };

    s0 = peg$currPos;
    s1 = peg$parseKW_WHERE();

    if (s1 !== peg$FAILED) {
      s2 = peg$parse__();
      s3 = peg$parseor_expr();

      if (s3 !== peg$FAILED) {
        peg$savedPos = s0;
        s0 = peg$f7(s3);
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parsegroup_by_clause() {
    var s0, s1, s2, s3, s4, s5;

    var rule$expects = function rule$expects(expected) {
      if (peg$silentFails === 0) peg$expect(expected);
    };

    s0 = peg$currPos;
    s1 = peg$parseKW_GROUP();

    if (s1 !== peg$FAILED) {
      s2 = peg$parse__();
      s3 = peg$parseKW_BY();

      if (s3 !== peg$FAILED) {
        s4 = peg$parse__();
        s5 = peg$parsecolumn_ref_list();

        if (s5 !== peg$FAILED) {
          peg$savedPos = s0;
          s0 = peg$f4(s5);
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parsecolumn_ref_list() {
    var s0, s1, s2, s3, s4, s5, s6, s7;

    var rule$expects = function rule$expects(expected) {
      if (peg$silentFails === 0) peg$expect(expected);
    };

    s0 = peg$currPos;
    s1 = peg$parsecolumn_ref();

    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$currPos;
      s4 = peg$parse__();
      s5 = peg$parseCOMMA();

      if (s5 !== peg$FAILED) {
        s6 = peg$parse__();
        s7 = peg$parsecolumn_ref();

        if (s7 !== peg$FAILED) {
          s4 = [s4, s5, s6, s7];
          s3 = s4;
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
      } else {
        peg$currPos = s3;
        s3 = peg$FAILED;
      }

      while (s3 !== peg$FAILED) {
        s2.push(s3);
        s3 = peg$currPos;
        s4 = peg$parse__();
        s5 = peg$parseCOMMA();

        if (s5 !== peg$FAILED) {
          s6 = peg$parse__();
          s7 = peg$parsecolumn_ref();

          if (s7 !== peg$FAILED) {
            s4 = [s4, s5, s6, s7];
            s3 = s4;
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
      }

      peg$savedPos = s0;
      s0 = peg$f2(s1, s2);
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseorder_by_clause() {
    var s0, s1, s2, s3, s4, s5;

    var rule$expects = function rule$expects(expected) {
      if (peg$silentFails === 0) peg$expect(expected);
    };

    s0 = peg$currPos;
    s1 = peg$parseKW_ORDER();

    if (s1 !== peg$FAILED) {
      s2 = peg$parse__();
      s3 = peg$parseKW_BY();

      if (s3 !== peg$FAILED) {
        s4 = peg$parse__();
        s5 = peg$parseorder_by_list();

        if (s5 !== peg$FAILED) {
          peg$savedPos = s0;
          s0 = peg$f4(s5);
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseorder_by_list() {
    var s0, s1, s2, s3, s4, s5, s6, s7;

    var rule$expects = function rule$expects(expected) {
      if (peg$silentFails === 0) peg$expect(expected);
    };

    s0 = peg$currPos;
    s1 = peg$parseorder_by_element();

    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$currPos;
      s4 = peg$parse__();
      s5 = peg$parseCOMMA();

      if (s5 !== peg$FAILED) {
        s6 = peg$parse__();
        s7 = peg$parseorder_by_element();

        if (s7 !== peg$FAILED) {
          s4 = [s4, s5, s6, s7];
          s3 = s4;
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
      } else {
        peg$currPos = s3;
        s3 = peg$FAILED;
      }

      while (s3 !== peg$FAILED) {
        s2.push(s3);
        s3 = peg$currPos;
        s4 = peg$parse__();
        s5 = peg$parseCOMMA();

        if (s5 !== peg$FAILED) {
          s6 = peg$parse__();
          s7 = peg$parseorder_by_element();

          if (s7 !== peg$FAILED) {
            s4 = [s4, s5, s6, s7];
            s3 = s4;
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
      }

      peg$savedPos = s0;
      s0 = peg$f2(s1, s2);
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseorder_by_element() {
    var s0, s1, s2, s3;

    var rule$expects = function rule$expects(expected) {
      if (peg$silentFails === 0) peg$expect(expected);
    };

    s0 = peg$currPos;
    s1 = peg$parsecolumn_ref();

    if (s1 !== peg$FAILED) {
      s2 = peg$parse__();
      s3 = peg$parseKW_DESC();

      if (s3 === peg$FAILED) {
        s3 = peg$parseKW_ASC();
      }

      if (s3 === peg$FAILED) {
        s3 = null;
      }

      peg$savedPos = s0;
      s0 = peg$f8(s1, s3);
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parselimit_clause() {
    var s0, s1, s2, s3;

    var rule$expects = function rule$expects(expected) {
      if (peg$silentFails === 0) peg$expect(expected);
    };

    s0 = peg$currPos;
    s1 = peg$parseKW_LIMIT();

    if (s1 !== peg$FAILED) {
      s2 = peg$parse__();
      s3 = peg$parseliteral_numeric();

      if (s3 !== peg$FAILED) {
        peg$savedPos = s0;
        s0 = peg$f9(s3);
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseexpr_list() {
    var s0, s1, s2, s3, s4, s5, s6, s7;

    var rule$expects = function rule$expects(expected) {
      if (peg$silentFails === 0) peg$expect(expected);
    };

    s0 = peg$currPos;
    s1 = peg$parseor_expr();

    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$currPos;
      s4 = peg$parse__();
      s5 = peg$parseCOMMA();

      if (s5 !== peg$FAILED) {
        s6 = peg$parse__();
        s7 = peg$parseor_expr();

        if (s7 !== peg$FAILED) {
          s4 = [s4, s5, s6, s7];
          s3 = s4;
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
      } else {
        peg$currPos = s3;
        s3 = peg$FAILED;
      }

      while (s3 !== peg$FAILED) {
        s2.push(s3);
        s3 = peg$currPos;
        s4 = peg$parse__();
        s5 = peg$parseCOMMA();

        if (s5 !== peg$FAILED) {
          s6 = peg$parse__();
          s7 = peg$parseor_expr();

          if (s7 !== peg$FAILED) {
            s4 = [s4, s5, s6, s7];
            s3 = s4;
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
      }

      peg$savedPos = s0;
      s0 = peg$f10(s1, s2);
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseor_expr() {
    var s0, s1, s2, s3, s4, s5, s6, s7;

    var rule$expects = function rule$expects(expected) {
      if (peg$silentFails === 0) peg$expect(expected);
    };

    s0 = peg$currPos;
    s1 = peg$parseand_expr();

    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$currPos;
      s4 = peg$parse__();
      s5 = peg$parseKW_OR();

      if (s5 !== peg$FAILED) {
        s6 = peg$parse__();
        s7 = peg$parseand_expr();

        if (s7 !== peg$FAILED) {
          s4 = [s4, s5, s6, s7];
          s3 = s4;
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
      } else {
        peg$currPos = s3;
        s3 = peg$FAILED;
      }

      while (s3 !== peg$FAILED) {
        s2.push(s3);
        s3 = peg$currPos;
        s4 = peg$parse__();
        s5 = peg$parseKW_OR();

        if (s5 !== peg$FAILED) {
          s6 = peg$parse__();
          s7 = peg$parseand_expr();

          if (s7 !== peg$FAILED) {
            s4 = [s4, s5, s6, s7];
            s3 = s4;
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
      }

      peg$savedPos = s0;
      s0 = peg$f11(s1, s2);
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseand_expr() {
    var s0, s1, s2, s3, s4, s5, s6, s7;

    var rule$expects = function rule$expects(expected) {
      if (peg$silentFails === 0) peg$expect(expected);
    };

    s0 = peg$currPos;
    s1 = peg$parsenot_expr();

    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$currPos;
      s4 = peg$parse__();
      s5 = peg$parseKW_AND();

      if (s5 !== peg$FAILED) {
        s6 = peg$parse__();
        s7 = peg$parsenot_expr();

        if (s7 !== peg$FAILED) {
          s4 = [s4, s5, s6, s7];
          s3 = s4;
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
      } else {
        peg$currPos = s3;
        s3 = peg$FAILED;
      }

      while (s3 !== peg$FAILED) {
        s2.push(s3);
        s3 = peg$currPos;
        s4 = peg$parse__();
        s5 = peg$parseKW_AND();

        if (s5 !== peg$FAILED) {
          s6 = peg$parse__();
          s7 = peg$parsenot_expr();

          if (s7 !== peg$FAILED) {
            s4 = [s4, s5, s6, s7];
            s3 = s4;
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
      }

      peg$savedPos = s0;
      s0 = peg$f11(s1, s2);
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parsenot_expr() {
    var s0, s1, s2, s3, s4;

    var rule$expects = function rule$expects(expected) {
      if (peg$silentFails === 0) peg$expect(expected);
    };

    s0 = peg$parsecomparison_expr();

    if (s0 === peg$FAILED) {
      s0 = peg$parseexists_expr();

      if (s0 === peg$FAILED) {
        s0 = peg$currPos;
        s1 = peg$parseKW_NOT();

        if (s1 === peg$FAILED) {
          s1 = peg$currPos;
          rule$expects(peg$e0);

          if (input.charCodeAt(peg$currPos) === 33) {
            s2 = peg$c0;
            peg$currPos++;
          } else {
            s2 = peg$FAILED;
          }

          if (s2 !== peg$FAILED) {
            s3 = peg$currPos;
            peg$begin();
            rule$expects(peg$e1);

            if (input.charCodeAt(peg$currPos) === 61) {
              s4 = peg$c1;
              peg$currPos++;
            } else {
              s4 = peg$FAILED;
            }

            peg$end(true);

            if (s4 === peg$FAILED) {
              s3 = undefined;
            } else {
              peg$currPos = s3;
              s3 = peg$FAILED;
            }

            if (s3 !== peg$FAILED) {
              s2 = [s2, s3];
              s1 = s2;
            } else {
              peg$currPos = s1;
              s1 = peg$FAILED;
            }
          } else {
            peg$currPos = s1;
            s1 = peg$FAILED;
          }
        }

        if (s1 !== peg$FAILED) {
          s2 = peg$parse__();
          s3 = peg$parsenot_expr();

          if (s3 !== peg$FAILED) {
            peg$savedPos = s0;
            s0 = peg$f12(s3);
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      }
    }

    return s0;
  }

  function peg$parsecomparison_expr() {
    var s0, s1, s2, s3;

    var rule$expects = function rule$expects(expected) {
      if (peg$silentFails === 0) peg$expect(expected);
    };

    s0 = peg$currPos;
    s1 = peg$parseadditive_expr();

    if (s1 !== peg$FAILED) {
      s2 = peg$parse__();
      s3 = peg$parsecomparison_op_right();

      if (s3 === peg$FAILED) {
        s3 = null;
      }

      peg$savedPos = s0;
      s0 = peg$f13(s1, s3);
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseexists_expr() {
    var s0, s1, s2, s3, s4, s5, s6, s7;

    var rule$expects = function rule$expects(expected) {
      if (peg$silentFails === 0) peg$expect(expected);
    };

    s0 = peg$currPos;
    s1 = peg$parseexists_op();

    if (s1 !== peg$FAILED) {
      s2 = peg$parse__();
      s3 = peg$parseLPAREN();

      if (s3 !== peg$FAILED) {
        s4 = peg$parse__();
        s5 = peg$parseselect_stmt();

        if (s5 !== peg$FAILED) {
          s6 = peg$parse__();
          s7 = peg$parseRPAREN();

          if (s7 !== peg$FAILED) {
            peg$savedPos = s0;
            s0 = peg$f14(s1, s5);
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseexists_op() {
    var s0, s1, s2, s3, s4;

    var rule$expects = function rule$expects(expected) {
      if (peg$silentFails === 0) peg$expect(expected);
    };

    s0 = peg$currPos;
    s1 = peg$currPos;
    s2 = peg$parseKW_NOT();

    if (s2 !== peg$FAILED) {
      s3 = peg$parse__();
      s4 = peg$parseKW_EXISTS();

      if (s4 !== peg$FAILED) {
        s2 = [s2, s3, s4];
        s1 = s2;
      } else {
        peg$currPos = s1;
        s1 = peg$FAILED;
      }
    } else {
      peg$currPos = s1;
      s1 = peg$FAILED;
    }

    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$f15(s1);
    }

    s0 = s1;

    if (s0 === peg$FAILED) {
      s0 = peg$parseKW_EXISTS();
    }

    return s0;
  }

  function peg$parsecomparison_op_right() {
    var s0;

    var rule$expects = function rule$expects(expected) {
      if (peg$silentFails === 0) peg$expect(expected);
    };

    s0 = peg$parsearithmetic_op_right();

    if (s0 === peg$FAILED) {
      s0 = peg$parsein_op_right();

      if (s0 === peg$FAILED) {
        s0 = peg$parseis_op_right();

        if (s0 === peg$FAILED) {
          s0 = peg$parselike_op_right();
        }
      }
    }

    return s0;
  }

  function peg$parsearithmetic_op_right() {
    var s0, s1, s2, s3, s4, s5, s6;

    var rule$expects = function rule$expects(expected) {
      if (peg$silentFails === 0) peg$expect(expected);
    };

    s0 = peg$currPos;
    s1 = [];
    s2 = peg$currPos;
    s3 = peg$parse__();
    s4 = peg$parsearithmetic_comparison_operator();

    if (s4 !== peg$FAILED) {
      s5 = peg$parse__();
      s6 = peg$parseadditive_expr();

      if (s6 !== peg$FAILED) {
        s3 = [s3, s4, s5, s6];
        s2 = s3;
      } else {
        peg$currPos = s2;
        s2 = peg$FAILED;
      }
    } else {
      peg$currPos = s2;
      s2 = peg$FAILED;
    }

    if (s2 !== peg$FAILED) {
      while (s2 !== peg$FAILED) {
        s1.push(s2);
        s2 = peg$currPos;
        s3 = peg$parse__();
        s4 = peg$parsearithmetic_comparison_operator();

        if (s4 !== peg$FAILED) {
          s5 = peg$parse__();
          s6 = peg$parseadditive_expr();

          if (s6 !== peg$FAILED) {
            s3 = [s3, s4, s5, s6];
            s2 = s3;
          } else {
            peg$currPos = s2;
            s2 = peg$FAILED;
          }
        } else {
          peg$currPos = s2;
          s2 = peg$FAILED;
        }
      }
    } else {
      s1 = peg$FAILED;
    }

    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$f16(s1);
    }

    s0 = s1;
    return s0;
  }

  function peg$parsearithmetic_comparison_operator() {
    var s0;

    var rule$expects = function rule$expects(expected) {
      if (peg$silentFails === 0) peg$expect(expected);
    };

    rule$expects(peg$e2);

    if (input.substr(peg$currPos, 2) === peg$c2) {
      s0 = peg$c2;
      peg$currPos += 2;
    } else {
      s0 = peg$FAILED;
    }

    if (s0 === peg$FAILED) {
      rule$expects(peg$e3);

      if (input.charCodeAt(peg$currPos) === 62) {
        s0 = peg$c3;
        peg$currPos++;
      } else {
        s0 = peg$FAILED;
      }

      if (s0 === peg$FAILED) {
        rule$expects(peg$e4);

        if (input.substr(peg$currPos, 2) === peg$c4) {
          s0 = peg$c4;
          peg$currPos += 2;
        } else {
          s0 = peg$FAILED;
        }

        if (s0 === peg$FAILED) {
          rule$expects(peg$e5);

          if (input.substr(peg$currPos, 2) === peg$c5) {
            s0 = peg$c5;
            peg$currPos += 2;
          } else {
            s0 = peg$FAILED;
          }

          if (s0 === peg$FAILED) {
            rule$expects(peg$e6);

            if (input.charCodeAt(peg$currPos) === 60) {
              s0 = peg$c6;
              peg$currPos++;
            } else {
              s0 = peg$FAILED;
            }

            if (s0 === peg$FAILED) {
              rule$expects(peg$e1);

              if (input.charCodeAt(peg$currPos) === 61) {
                s0 = peg$c1;
                peg$currPos++;
              } else {
                s0 = peg$FAILED;
              }

              if (s0 === peg$FAILED) {
                rule$expects(peg$e7);

                if (input.substr(peg$currPos, 2) === peg$c7) {
                  s0 = peg$c7;
                  peg$currPos += 2;
                } else {
                  s0 = peg$FAILED;
                }
              }
            }
          }
        }
      }
    }

    return s0;
  }

  function peg$parseis_op_right() {
    var s0, s1, s2, s3, s4;

    var rule$expects = function rule$expects(expected) {
      if (peg$silentFails === 0) peg$expect(expected);
    };

    s0 = peg$currPos;
    s1 = peg$parseKW_IS();

    if (s1 !== peg$FAILED) {
      s2 = peg$parse__();
      s3 = peg$parseadditive_expr();

      if (s3 !== peg$FAILED) {
        peg$savedPos = s0;
        s0 = peg$f17(s3);
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    if (s0 === peg$FAILED) {
      s0 = peg$currPos;
      s1 = peg$currPos;
      s2 = peg$parseKW_IS();

      if (s2 !== peg$FAILED) {
        s3 = peg$parse__();
        s4 = peg$parseKW_NOT();

        if (s4 !== peg$FAILED) {
          s2 = [s2, s3, s4];
          s1 = s2;
        } else {
          peg$currPos = s1;
          s1 = peg$FAILED;
        }
      } else {
        peg$currPos = s1;
        s1 = peg$FAILED;
      }

      if (s1 !== peg$FAILED) {
        s2 = peg$parse__();
        s3 = peg$parseadditive_expr();

        if (s3 !== peg$FAILED) {
          peg$savedPos = s0;
          s0 = peg$f18(s3);
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    }

    return s0;
  }

  function peg$parselike_op() {
    var s0, s1, s2, s3, s4;

    var rule$expects = function rule$expects(expected) {
      if (peg$silentFails === 0) peg$expect(expected);
    };

    s0 = peg$currPos;
    s1 = peg$currPos;
    s2 = peg$parseKW_NOT();

    if (s2 !== peg$FAILED) {
      s3 = peg$parse__();
      s4 = peg$parseKW_LIKE();

      if (s4 !== peg$FAILED) {
        s2 = [s2, s3, s4];
        s1 = s2;
      } else {
        peg$currPos = s1;
        s1 = peg$FAILED;
      }
    } else {
      peg$currPos = s1;
      s1 = peg$FAILED;
    }

    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$f15(s1);
    }

    s0 = s1;

    if (s0 === peg$FAILED) {
      s0 = peg$parseKW_LIKE();
    }

    return s0;
  }

  function peg$parsein_op() {
    var s0, s1, s2, s3, s4;

    var rule$expects = function rule$expects(expected) {
      if (peg$silentFails === 0) peg$expect(expected);
    };

    s0 = peg$currPos;
    s1 = peg$currPos;
    s2 = peg$parseKW_NOT();

    if (s2 !== peg$FAILED) {
      s3 = peg$parse__();
      s4 = peg$parseKW_IN();

      if (s4 !== peg$FAILED) {
        s2 = [s2, s3, s4];
        s1 = s2;
      } else {
        peg$currPos = s1;
        s1 = peg$FAILED;
      }
    } else {
      peg$currPos = s1;
      s1 = peg$FAILED;
    }

    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$f15(s1);
    }

    s0 = s1;

    if (s0 === peg$FAILED) {
      s0 = peg$parseKW_IN();
    }

    return s0;
  }

  function peg$parselike_op_right() {
    var s0, s1, s2, s3;

    var rule$expects = function rule$expects(expected) {
      if (peg$silentFails === 0) peg$expect(expected);
    };

    s0 = peg$currPos;
    s1 = peg$parselike_op();

    if (s1 !== peg$FAILED) {
      s2 = peg$parse__();
      s3 = peg$parsecomparison_expr();

      if (s3 !== peg$FAILED) {
        peg$savedPos = s0;
        s0 = peg$f19(s1, s3);
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parsein_op_right() {
    var s0, s1, s2, s3, s4, s5, s6, s7;

    var rule$expects = function rule$expects(expected) {
      if (peg$silentFails === 0) peg$expect(expected);
    };

    s0 = peg$currPos;
    s1 = peg$parsein_op();

    if (s1 !== peg$FAILED) {
      s2 = peg$parse__();
      s3 = peg$parseLPAREN();

      if (s3 !== peg$FAILED) {
        s4 = peg$parse__();
        s5 = peg$parseexpr_list();

        if (s5 !== peg$FAILED) {
          s6 = peg$parse__();
          s7 = peg$parseRPAREN();

          if (s7 !== peg$FAILED) {
            peg$savedPos = s0;
            s0 = peg$f20(s1, s5);
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseadditive_expr() {
    var s0, s1, s2, s3, s4, s5;

    var rule$expects = function rule$expects(expected) {
      if (peg$silentFails === 0) peg$expect(expected);
    };

    s0 = peg$currPos;
    s1 = peg$parsemultiplicative_expr();

    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$currPos;
      s4 = peg$parse__();
      s5 = peg$parsemultiplicative_expr();

      if (s5 !== peg$FAILED) {
        s4 = [s4, s5];
        s3 = s4;
      } else {
        peg$currPos = s3;
        s3 = peg$FAILED;
      }

      while (s3 !== peg$FAILED) {
        s2.push(s3);
        s3 = peg$currPos;
        s4 = peg$parse__();
        s5 = peg$parsemultiplicative_expr();

        if (s5 !== peg$FAILED) {
          s4 = [s4, s5];
          s3 = s4;
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
      }

      peg$savedPos = s0;
      s0 = peg$f11(s1, s2);
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parsemultiplicative_expr() {
    var s0, s1, s2, s3, s4, s5;

    var rule$expects = function rule$expects(expected) {
      if (peg$silentFails === 0) peg$expect(expected);
    };

    s0 = peg$currPos;
    s1 = peg$parseprimary();

    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$currPos;
      s4 = peg$parse__();
      s5 = peg$parseprimary();

      if (s5 !== peg$FAILED) {
        s4 = [s4, s5];
        s3 = s4;
      } else {
        peg$currPos = s3;
        s3 = peg$FAILED;
      }

      while (s3 !== peg$FAILED) {
        s2.push(s3);
        s3 = peg$currPos;
        s4 = peg$parse__();
        s5 = peg$parseprimary();

        if (s5 !== peg$FAILED) {
          s4 = [s4, s5];
          s3 = s4;
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
      }

      peg$savedPos = s0;
      s0 = peg$f21(s1, s2);
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseprimary() {
    var s0, s1, s2, s3, s4, s5;

    var rule$expects = function rule$expects(expected) {
      if (peg$silentFails === 0) peg$expect(expected);
    };

    s0 = peg$parseliteral();

    if (s0 === peg$FAILED) {
      s0 = peg$parsecolumn_ref();

      if (s0 === peg$FAILED) {
        s0 = peg$currPos;
        s1 = peg$parseLPAREN();

        if (s1 !== peg$FAILED) {
          s2 = peg$parse__();
          s3 = peg$parseor_expr();

          if (s3 !== peg$FAILED) {
            s4 = peg$parse__();
            s5 = peg$parseRPAREN();

            if (s5 !== peg$FAILED) {
              peg$savedPos = s0;
              s0 = peg$f22(s3);
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }

        if (s0 === peg$FAILED) {
          s0 = peg$currPos;
          s1 = peg$parseLPAREN();

          if (s1 !== peg$FAILED) {
            s2 = peg$parse__();
            s3 = peg$parseexpr_list();

            if (s3 !== peg$FAILED) {
              s4 = peg$parse__();
              s5 = peg$parseRPAREN();

              if (s5 !== peg$FAILED) {
                peg$savedPos = s0;
                s0 = peg$f23(s3);
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        }
      }
    }

    return s0;
  }

  function peg$parsecolumn_ref() {
    var s0, s1, s2, s3, s4, s5;

    var rule$expects = function rule$expects(expected) {
      if (peg$silentFails === 0) peg$expect(expected);
    };

    s0 = peg$currPos;
    s1 = peg$parsecolumn();

    if (s1 !== peg$FAILED) {
      s2 = peg$parse__();
      s3 = peg$parseDOT();

      if (s3 !== peg$FAILED) {
        s4 = peg$parse__();
        s5 = peg$parseident();

        if (s5 !== peg$FAILED) {
          peg$savedPos = s0;
          s0 = peg$f24(s1, s5);
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    if (s0 === peg$FAILED) {
      s0 = peg$currPos;
      s1 = peg$parsecolumn();

      if (s1 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$f25(s1);
      }

      s0 = s1;
    }

    return s0;
  }

  function peg$parsecolumn_list() {
    var s0, s1, s2, s3, s4, s5, s6, s7;

    var rule$expects = function rule$expects(expected) {
      if (peg$silentFails === 0) peg$expect(expected);
    };

    s0 = peg$currPos;
    s1 = peg$parsecolumn();

    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$currPos;
      s4 = peg$parse__();
      s5 = peg$parseCOMMA();

      if (s5 !== peg$FAILED) {
        s6 = peg$parse__();
        s7 = peg$parsecolumn();

        if (s7 !== peg$FAILED) {
          s4 = [s4, s5, s6, s7];
          s3 = s4;
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
      } else {
        peg$currPos = s3;
        s3 = peg$FAILED;
      }

      while (s3 !== peg$FAILED) {
        s2.push(s3);
        s3 = peg$currPos;
        s4 = peg$parse__();
        s5 = peg$parseCOMMA();

        if (s5 !== peg$FAILED) {
          s6 = peg$parse__();
          s7 = peg$parsecolumn();

          if (s7 !== peg$FAILED) {
            s4 = [s4, s5, s6, s7];
            s3 = s4;
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
      }

      peg$savedPos = s0;
      s0 = peg$f2(s1, s2);
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseident() {
    var s0, s1, s2;

    var rule$expects = function rule$expects(expected) {
      if (peg$silentFails === 0) peg$expect(expected);
    };

    s0 = peg$currPos;
    s1 = peg$parseident_name();

    if (s1 !== peg$FAILED) {
      peg$savedPos = peg$currPos;
      s2 = peg$f26(s1);

      if (s2) {
        s2 = peg$FAILED;
      } else {
        s2 = undefined;
      }

      if (s2 !== peg$FAILED) {
        peg$savedPos = s0;
        s0 = peg$f27(s1);
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parsequoted_ident() {
    var s0;

    var rule$expects = function rule$expects(expected) {
      if (peg$silentFails === 0) peg$expect(expected);
    };

    s0 = peg$parsedouble_quoted_ident();

    if (s0 === peg$FAILED) {
      s0 = peg$parsesingle_quoted_ident();

      if (s0 === peg$FAILED) {
        s0 = peg$parsebackticks_quoted_ident();
      }
    }

    return s0;
  }

  function peg$parsedouble_quoted_ident() {
    var s0, s1, s2, s3;

    var rule$expects = function rule$expects(expected) {
      if (peg$silentFails === 0) peg$expect(expected);
    };

    s0 = peg$currPos;
    rule$expects(peg$e8);

    if (input.charCodeAt(peg$currPos) === 34) {
      s1 = peg$c8;
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
    }

    if (s1 !== peg$FAILED) {
      s2 = [];
      rule$expects(peg$e9);

      if (peg$r0.test(input.charAt(peg$currPos))) {
        s3 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s3 = peg$FAILED;
      }

      if (s3 !== peg$FAILED) {
        while (s3 !== peg$FAILED) {
          s2.push(s3);
          rule$expects(peg$e9);

          if (peg$r0.test(input.charAt(peg$currPos))) {
            s3 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s3 = peg$FAILED;
          }
        }
      } else {
        s2 = peg$FAILED;
      }

      if (s2 !== peg$FAILED) {
        rule$expects(peg$e8);

        if (input.charCodeAt(peg$currPos) === 34) {
          s3 = peg$c8;
          peg$currPos++;
        } else {
          s3 = peg$FAILED;
        }

        if (s3 !== peg$FAILED) {
          peg$savedPos = s0;
          s0 = peg$f28(s2);
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parsesingle_quoted_ident() {
    var s0, s1, s2, s3;

    var rule$expects = function rule$expects(expected) {
      if (peg$silentFails === 0) peg$expect(expected);
    };

    s0 = peg$currPos;
    rule$expects(peg$e10);

    if (input.charCodeAt(peg$currPos) === 39) {
      s1 = peg$c9;
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
    }

    if (s1 !== peg$FAILED) {
      s2 = [];
      rule$expects(peg$e11);

      if (peg$r1.test(input.charAt(peg$currPos))) {
        s3 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s3 = peg$FAILED;
      }

      if (s3 !== peg$FAILED) {
        while (s3 !== peg$FAILED) {
          s2.push(s3);
          rule$expects(peg$e11);

          if (peg$r1.test(input.charAt(peg$currPos))) {
            s3 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s3 = peg$FAILED;
          }
        }
      } else {
        s2 = peg$FAILED;
      }

      if (s2 !== peg$FAILED) {
        rule$expects(peg$e10);

        if (input.charCodeAt(peg$currPos) === 39) {
          s3 = peg$c9;
          peg$currPos++;
        } else {
          s3 = peg$FAILED;
        }

        if (s3 !== peg$FAILED) {
          peg$savedPos = s0;
          s0 = peg$f28(s2);
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parsebackticks_quoted_ident() {
    var s0, s1, s2, s3;

    var rule$expects = function rule$expects(expected) {
      if (peg$silentFails === 0) peg$expect(expected);
    };

    s0 = peg$currPos;
    rule$expects(peg$e12);

    if (input.charCodeAt(peg$currPos) === 96) {
      s1 = peg$c10;
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
    }

    if (s1 !== peg$FAILED) {
      s2 = [];
      rule$expects(peg$e13);

      if (peg$r2.test(input.charAt(peg$currPos))) {
        s3 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s3 = peg$FAILED;
      }

      if (s3 !== peg$FAILED) {
        while (s3 !== peg$FAILED) {
          s2.push(s3);
          rule$expects(peg$e13);

          if (peg$r2.test(input.charAt(peg$currPos))) {
            s3 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s3 = peg$FAILED;
          }
        }
      } else {
        s2 = peg$FAILED;
      }

      if (s2 !== peg$FAILED) {
        rule$expects(peg$e12);

        if (input.charCodeAt(peg$currPos) === 96) {
          s3 = peg$c10;
          peg$currPos++;
        } else {
          s3 = peg$FAILED;
        }

        if (s3 !== peg$FAILED) {
          peg$savedPos = s0;
          s0 = peg$f28(s2);
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parsecolumn() {
    var s0, s1, s2;

    var rule$expects = function rule$expects(expected) {
      if (peg$silentFails === 0) peg$expect(expected);
    };

    s0 = peg$currPos;
    s1 = peg$parsecolumn_name();

    if (s1 !== peg$FAILED) {
      peg$savedPos = peg$currPos;
      s2 = peg$f26(s1);

      if (s2) {
        s2 = peg$FAILED;
      } else {
        s2 = undefined;
      }

      if (s2 !== peg$FAILED) {
        peg$savedPos = s0;
        s0 = peg$f29(s1);
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parsecolumn_name() {
    var s0, s1, s2, s3;

    var rule$expects = function rule$expects(expected) {
      if (peg$silentFails === 0) peg$expect(expected);
    };

    s0 = peg$currPos;
    s1 = peg$parseident_start();

    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$parsecolumn_part();

      while (s3 !== peg$FAILED) {
        s2.push(s3);
        s3 = peg$parsecolumn_part();
      }

      peg$savedPos = s0;
      s0 = peg$f30(s1, s2);
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseident_name() {
    var s0, s1, s2, s3;

    var rule$expects = function rule$expects(expected) {
      if (peg$silentFails === 0) peg$expect(expected);
    };

    s0 = peg$currPos;
    s1 = peg$parseident_start();

    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$parseident_part();

      while (s3 !== peg$FAILED) {
        s2.push(s3);
        s3 = peg$parseident_part();
      }

      peg$savedPos = s0;
      s0 = peg$f30(s1, s2);
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseident_start() {
    var s0;

    var rule$expects = function rule$expects(expected) {
      if (peg$silentFails === 0) peg$expect(expected);
    };

    rule$expects(peg$e14);

    if (peg$r3.test(input.charAt(peg$currPos))) {
      s0 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseident_part() {
    var s0;

    var rule$expects = function rule$expects(expected) {
      if (peg$silentFails === 0) peg$expect(expected);
    };

    rule$expects(peg$e15);

    if (peg$r4.test(input.charAt(peg$currPos))) {
      s0 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parsecolumn_part() {
    var s0;

    var rule$expects = function rule$expects(expected) {
      if (peg$silentFails === 0) peg$expect(expected);
    };

    rule$expects(peg$e16);

    if (peg$r5.test(input.charAt(peg$currPos))) {
      s0 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parsestar_expr() {
    var s0, s1;

    var rule$expects = function rule$expects(expected) {
      if (peg$silentFails === 0) peg$expect(expected);
    };

    s0 = peg$currPos;

    if (input.charCodeAt(peg$currPos) === 42) {
      s1 = peg$c11;
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
    }

    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$f31();
    }

    s0 = s1;
    return s0;
  }

  function peg$parseliteral() {
    var s0;

    var rule$expects = function rule$expects(expected) {
      if (peg$silentFails === 0) peg$expect(expected);
    };

    s0 = peg$parseliteral_string();

    if (s0 === peg$FAILED) {
      s0 = peg$parseliteral_numeric();

      if (s0 === peg$FAILED) {
        s0 = peg$parseliteral_bool();

        if (s0 === peg$FAILED) {
          s0 = peg$parseliteral_null();
        }
      }
    }

    return s0;
  }

  function peg$parseliteral_list() {
    var s0, s1, s2, s3, s4, s5, s6, s7;

    var rule$expects = function rule$expects(expected) {
      if (peg$silentFails === 0) peg$expect(expected);
    };

    s0 = peg$currPos;
    s1 = peg$parseliteral();

    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$currPos;
      s4 = peg$parse__();
      s5 = peg$parseCOMMA();

      if (s5 !== peg$FAILED) {
        s6 = peg$parse__();
        s7 = peg$parseliteral();

        if (s7 !== peg$FAILED) {
          s4 = [s4, s5, s6, s7];
          s3 = s4;
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
      } else {
        peg$currPos = s3;
        s3 = peg$FAILED;
      }

      while (s3 !== peg$FAILED) {
        s2.push(s3);
        s3 = peg$currPos;
        s4 = peg$parse__();
        s5 = peg$parseCOMMA();

        if (s5 !== peg$FAILED) {
          s6 = peg$parse__();
          s7 = peg$parseliteral();

          if (s7 !== peg$FAILED) {
            s4 = [s4, s5, s6, s7];
            s3 = s4;
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
      }

      peg$savedPos = s0;
      s0 = peg$f2(s1, s2);
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseliteral_null() {
    var s0, s1;

    var rule$expects = function rule$expects(expected) {
      if (peg$silentFails === 0) peg$expect(expected);
    };

    s0 = peg$currPos;
    s1 = peg$parseKW_NULL();

    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$f32();
    }

    s0 = s1;
    return s0;
  }

  function peg$parseliteral_bool() {
    var s0, s1;

    var rule$expects = function rule$expects(expected) {
      if (peg$silentFails === 0) peg$expect(expected);
    };

    s0 = peg$currPos;
    s1 = peg$parseKW_TRUE();

    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$f33();
    }

    s0 = s1;

    if (s0 === peg$FAILED) {
      s0 = peg$currPos;
      s1 = peg$parseKW_FALSE();

      if (s1 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$f34();
      }

      s0 = s1;
    }

    return s0;
  }

  function peg$parseliteral_string() {
    var s0, s1;

    var rule$expects = function rule$expects(expected) {
      if (peg$silentFails === 0) peg$expect(expected);
    };

    s0 = peg$currPos;
    s1 = peg$parsequoted_ident();

    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$f35(s1);
    }

    s0 = s1;
    return s0;
  }

  function peg$parseline_terminator() {
    var s0;

    var rule$expects = function rule$expects(expected) {
      if (peg$silentFails === 0) peg$expect(expected);
    };

    if (peg$r6.test(input.charAt(peg$currPos))) {
      s0 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseliteral_numeric() {
    var s0, s1;

    var rule$expects = function rule$expects(expected) {
      if (peg$silentFails === 0) peg$expect(expected);
    };

    s0 = peg$currPos;
    s1 = peg$parsenumber();

    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$f36(s1);
    }

    s0 = s1;
    return s0;
  }

  function peg$parsenumber() {
    var s0, s1, s2, s3, s4;

    var rule$expects = function rule$expects(expected) {
      if (peg$silentFails === 0) peg$expect(expected);
    };

    s0 = peg$currPos;
    s1 = peg$parseint();

    if (s1 !== peg$FAILED) {
      s2 = peg$parsefrac();

      if (s2 !== peg$FAILED) {
        s3 = peg$parseexp();

        if (s3 !== peg$FAILED) {
          s4 = peg$parse__();
          peg$savedPos = s0;
          s0 = peg$f37(s1, s2, s3);
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    if (s0 === peg$FAILED) {
      s0 = peg$currPos;
      s1 = peg$parseint();

      if (s1 !== peg$FAILED) {
        s2 = peg$parsefrac();

        if (s2 !== peg$FAILED) {
          s3 = peg$parse__();
          peg$savedPos = s0;
          s0 = peg$f38(s1, s2);
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      if (s0 === peg$FAILED) {
        s0 = peg$currPos;
        s1 = peg$parseint();

        if (s1 !== peg$FAILED) {
          s2 = peg$parseexp();

          if (s2 !== peg$FAILED) {
            s3 = peg$parse__();
            peg$savedPos = s0;
            s0 = peg$f39(s1, s2);
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }

        if (s0 === peg$FAILED) {
          s0 = peg$currPos;
          s1 = peg$parseint();

          if (s1 !== peg$FAILED) {
            s2 = peg$parse__();
            peg$savedPos = s0;
            s0 = peg$f40(s1);
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        }
      }
    }

    return s0;
  }

  function peg$parseint() {
    var s0;

    var rule$expects = function rule$expects(expected) {
      if (peg$silentFails === 0) peg$expect(expected);
    };

    s0 = peg$parsedigits();

    if (s0 === peg$FAILED) {
      s0 = peg$parsedigit();
    }

    return s0;
  }

  function peg$parsefrac() {
    var s0, s1, s2;

    var rule$expects = function rule$expects(expected) {
      if (peg$silentFails === 0) peg$expect(expected);
    };

    s0 = peg$currPos;
    rule$expects(peg$e17);

    if (input.charCodeAt(peg$currPos) === 46) {
      s1 = peg$c12;
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
    }

    if (s1 !== peg$FAILED) {
      s2 = peg$parsedigits();

      if (s2 !== peg$FAILED) {
        peg$savedPos = s0;
        s0 = peg$f41(s2);
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseexp() {
    var s0, s1, s2;

    var rule$expects = function rule$expects(expected) {
      if (peg$silentFails === 0) peg$expect(expected);
    };

    s0 = peg$currPos;
    s1 = peg$parsee();

    if (s1 !== peg$FAILED) {
      s2 = peg$parsedigits();

      if (s2 !== peg$FAILED) {
        peg$savedPos = s0;
        s0 = peg$f42(s1, s2);
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parsedigits() {
    var s0, s1, s2;

    var rule$expects = function rule$expects(expected) {
      if (peg$silentFails === 0) peg$expect(expected);
    };

    s0 = peg$currPos;
    s1 = [];
    s2 = peg$parsedigit();

    if (s2 !== peg$FAILED) {
      while (s2 !== peg$FAILED) {
        s1.push(s2);
        s2 = peg$parsedigit();
      }
    } else {
      s1 = peg$FAILED;
    }

    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$f43(s1);
    }

    s0 = s1;
    return s0;
  }

  function peg$parsedigit() {
    var s0;

    var rule$expects = function rule$expects(expected) {
      if (peg$silentFails === 0) peg$expect(expected);
    };

    rule$expects(peg$e18);

    if (peg$r7.test(input.charAt(peg$currPos))) {
      s0 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parsehexDigit() {
    var s0;

    var rule$expects = function rule$expects(expected) {
      if (peg$silentFails === 0) peg$expect(expected);
    };

    if (peg$r8.test(input.charAt(peg$currPos))) {
      s0 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parsee() {
    var s0, s1, s2;

    var rule$expects = function rule$expects(expected) {
      if (peg$silentFails === 0) peg$expect(expected);
    };

    s0 = peg$currPos;
    rule$expects(peg$e19);

    if (peg$r9.test(input.charAt(peg$currPos))) {
      s1 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
    }

    if (s1 !== peg$FAILED) {
      rule$expects(peg$e20);

      if (peg$r10.test(input.charAt(peg$currPos))) {
        s2 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s2 = peg$FAILED;
      }

      if (s2 === peg$FAILED) {
        s2 = null;
      }

      peg$savedPos = s0;
      s0 = peg$f44(s1, s2);
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseKW_NULL() {
    var s0, s1, s2, s3;

    var rule$expects = function rule$expects(expected) {
      if (peg$silentFails === 0) peg$expect(expected);
    };

    s0 = peg$currPos;
    rule$expects(peg$e21);

    if (input.substr(peg$currPos, 4).toLowerCase() === peg$c13) {
      s1 = input.substr(peg$currPos, 4);
      peg$currPos += 4;
    } else {
      s1 = peg$FAILED;
    }

    if (s1 !== peg$FAILED) {
      s2 = peg$currPos;
      peg$begin();
      s3 = peg$parseident_start();
      peg$end(true);

      if (s3 === peg$FAILED) {
        s2 = undefined;
      } else {
        peg$currPos = s2;
        s2 = peg$FAILED;
      }

      if (s2 !== peg$FAILED) {
        s1 = [s1, s2];
        s0 = s1;
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseKW_TRUE() {
    var s0, s1, s2, s3;

    var rule$expects = function rule$expects(expected) {
      if (peg$silentFails === 0) peg$expect(expected);
    };

    s0 = peg$currPos;
    rule$expects(peg$e22);

    if (input.substr(peg$currPos, 4).toLowerCase() === peg$c14) {
      s1 = input.substr(peg$currPos, 4);
      peg$currPos += 4;
    } else {
      s1 = peg$FAILED;
    }

    if (s1 !== peg$FAILED) {
      s2 = peg$currPos;
      peg$begin();
      s3 = peg$parseident_start();
      peg$end(true);

      if (s3 === peg$FAILED) {
        s2 = undefined;
      } else {
        peg$currPos = s2;
        s2 = peg$FAILED;
      }

      if (s2 !== peg$FAILED) {
        s1 = [s1, s2];
        s0 = s1;
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseKW_FALSE() {
    var s0, s1, s2, s3;

    var rule$expects = function rule$expects(expected) {
      if (peg$silentFails === 0) peg$expect(expected);
    };

    s0 = peg$currPos;
    rule$expects(peg$e23);

    if (input.substr(peg$currPos, 5).toLowerCase() === peg$c15) {
      s1 = input.substr(peg$currPos, 5);
      peg$currPos += 5;
    } else {
      s1 = peg$FAILED;
    }

    if (s1 !== peg$FAILED) {
      s2 = peg$currPos;
      peg$begin();
      s3 = peg$parseident_start();
      peg$end(true);

      if (s3 === peg$FAILED) {
        s2 = undefined;
      } else {
        peg$currPos = s2;
        s2 = peg$FAILED;
      }

      if (s2 !== peg$FAILED) {
        s1 = [s1, s2];
        s0 = s1;
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseKW_SELECT() {
    var s0, s1, s2, s3;

    var rule$expects = function rule$expects(expected) {
      if (peg$silentFails === 0) peg$expect(expected);
    };

    s0 = peg$currPos;
    rule$expects(peg$e24);

    if (input.substr(peg$currPos, 6).toLowerCase() === peg$c16) {
      s1 = input.substr(peg$currPos, 6);
      peg$currPos += 6;
    } else {
      s1 = peg$FAILED;
    }

    if (s1 !== peg$FAILED) {
      s2 = peg$currPos;
      peg$begin();
      s3 = peg$parseident_start();
      peg$end(true);

      if (s3 === peg$FAILED) {
        s2 = undefined;
      } else {
        peg$currPos = s2;
        s2 = peg$FAILED;
      }

      if (s2 !== peg$FAILED) {
        s1 = [s1, s2];
        s0 = s1;
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseKW_FROM() {
    var s0, s1, s2, s3;

    var rule$expects = function rule$expects(expected) {
      if (peg$silentFails === 0) peg$expect(expected);
    };

    s0 = peg$currPos;
    rule$expects(peg$e25);

    if (input.substr(peg$currPos, 4).toLowerCase() === peg$c17) {
      s1 = input.substr(peg$currPos, 4);
      peg$currPos += 4;
    } else {
      s1 = peg$FAILED;
    }

    if (s1 !== peg$FAILED) {
      s2 = peg$currPos;
      peg$begin();
      s3 = peg$parseident_start();
      peg$end(true);

      if (s3 === peg$FAILED) {
        s2 = undefined;
      } else {
        peg$currPos = s2;
        s2 = peg$FAILED;
      }

      if (s2 !== peg$FAILED) {
        s1 = [s1, s2];
        s0 = s1;
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseKW_WHERE() {
    var s0, s1, s2, s3;

    var rule$expects = function rule$expects(expected) {
      if (peg$silentFails === 0) peg$expect(expected);
    };

    s0 = peg$currPos;
    rule$expects(peg$e26);

    if (input.substr(peg$currPos, 5).toLowerCase() === peg$c18) {
      s1 = input.substr(peg$currPos, 5);
      peg$currPos += 5;
    } else {
      s1 = peg$FAILED;
    }

    if (s1 !== peg$FAILED) {
      s2 = peg$currPos;
      peg$begin();
      s3 = peg$parseident_start();
      peg$end(true);

      if (s3 === peg$FAILED) {
        s2 = undefined;
      } else {
        peg$currPos = s2;
        s2 = peg$FAILED;
      }

      if (s2 !== peg$FAILED) {
        s1 = [s1, s2];
        s0 = s1;
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseKW_GROUP() {
    var s0, s1, s2, s3;

    var rule$expects = function rule$expects(expected) {
      if (peg$silentFails === 0) peg$expect(expected);
    };

    s0 = peg$currPos;
    rule$expects(peg$e27);

    if (input.substr(peg$currPos, 5).toLowerCase() === peg$c19) {
      s1 = input.substr(peg$currPos, 5);
      peg$currPos += 5;
    } else {
      s1 = peg$FAILED;
    }

    if (s1 !== peg$FAILED) {
      s2 = peg$currPos;
      peg$begin();
      s3 = peg$parseident_start();
      peg$end(true);

      if (s3 === peg$FAILED) {
        s2 = undefined;
      } else {
        peg$currPos = s2;
        s2 = peg$FAILED;
      }

      if (s2 !== peg$FAILED) {
        s1 = [s1, s2];
        s0 = s1;
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseKW_BY() {
    var s0, s1, s2, s3;

    var rule$expects = function rule$expects(expected) {
      if (peg$silentFails === 0) peg$expect(expected);
    };

    s0 = peg$currPos;
    rule$expects(peg$e28);

    if (input.substr(peg$currPos, 2).toLowerCase() === peg$c20) {
      s1 = input.substr(peg$currPos, 2);
      peg$currPos += 2;
    } else {
      s1 = peg$FAILED;
    }

    if (s1 !== peg$FAILED) {
      s2 = peg$currPos;
      peg$begin();
      s3 = peg$parseident_start();
      peg$end(true);

      if (s3 === peg$FAILED) {
        s2 = undefined;
      } else {
        peg$currPos = s2;
        s2 = peg$FAILED;
      }

      if (s2 !== peg$FAILED) {
        s1 = [s1, s2];
        s0 = s1;
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseKW_ORDER() {
    var s0, s1, s2, s3;

    var rule$expects = function rule$expects(expected) {
      if (peg$silentFails === 0) peg$expect(expected);
    };

    s0 = peg$currPos;
    rule$expects(peg$e29);

    if (input.substr(peg$currPos, 5).toLowerCase() === peg$c21) {
      s1 = input.substr(peg$currPos, 5);
      peg$currPos += 5;
    } else {
      s1 = peg$FAILED;
    }

    if (s1 !== peg$FAILED) {
      s2 = peg$currPos;
      peg$begin();
      s3 = peg$parseident_start();
      peg$end(true);

      if (s3 === peg$FAILED) {
        s2 = undefined;
      } else {
        peg$currPos = s2;
        s2 = peg$FAILED;
      }

      if (s2 !== peg$FAILED) {
        s1 = [s1, s2];
        s0 = s1;
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseKW_LIMIT() {
    var s0, s1, s2, s3;

    var rule$expects = function rule$expects(expected) {
      if (peg$silentFails === 0) peg$expect(expected);
    };

    s0 = peg$currPos;
    rule$expects(peg$e30);

    if (input.substr(peg$currPos, 5).toLowerCase() === peg$c22) {
      s1 = input.substr(peg$currPos, 5);
      peg$currPos += 5;
    } else {
      s1 = peg$FAILED;
    }

    if (s1 !== peg$FAILED) {
      s2 = peg$currPos;
      peg$begin();
      s3 = peg$parseident_start();
      peg$end(true);

      if (s3 === peg$FAILED) {
        s2 = undefined;
      } else {
        peg$currPos = s2;
        s2 = peg$FAILED;
      }

      if (s2 !== peg$FAILED) {
        s1 = [s1, s2];
        s0 = s1;
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseKW_ASC() {
    var s0, s1, s2, s3;

    var rule$expects = function rule$expects(expected) {
      if (peg$silentFails === 0) peg$expect(expected);
    };

    s0 = peg$currPos;
    rule$expects(peg$e31);

    if (input.substr(peg$currPos, 3).toLowerCase() === peg$c23) {
      s1 = input.substr(peg$currPos, 3);
      peg$currPos += 3;
    } else {
      s1 = peg$FAILED;
    }

    if (s1 !== peg$FAILED) {
      s2 = peg$currPos;
      peg$begin();
      s3 = peg$parseident_start();
      peg$end(true);

      if (s3 === peg$FAILED) {
        s2 = undefined;
      } else {
        peg$currPos = s2;
        s2 = peg$FAILED;
      }

      if (s2 !== peg$FAILED) {
        peg$savedPos = s0;
        s0 = peg$f45();
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseKW_DESC() {
    var s0, s1, s2, s3;

    var rule$expects = function rule$expects(expected) {
      if (peg$silentFails === 0) peg$expect(expected);
    };

    s0 = peg$currPos;
    rule$expects(peg$e32);

    if (input.substr(peg$currPos, 4).toLowerCase() === peg$c24) {
      s1 = input.substr(peg$currPos, 4);
      peg$currPos += 4;
    } else {
      s1 = peg$FAILED;
    }

    if (s1 !== peg$FAILED) {
      s2 = peg$currPos;
      peg$begin();
      s3 = peg$parseident_start();
      peg$end(true);

      if (s3 === peg$FAILED) {
        s2 = undefined;
      } else {
        peg$currPos = s2;
        s2 = peg$FAILED;
      }

      if (s2 !== peg$FAILED) {
        peg$savedPos = s0;
        s0 = peg$f46();
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseKW_IN() {
    var s0, s1, s2, s3;

    var rule$expects = function rule$expects(expected) {
      if (peg$silentFails === 0) peg$expect(expected);
    };

    s0 = peg$currPos;
    rule$expects(peg$e33);

    if (input.substr(peg$currPos, 2).toLowerCase() === peg$c25) {
      s1 = input.substr(peg$currPos, 2);
      peg$currPos += 2;
    } else {
      s1 = peg$FAILED;
    }

    if (s1 !== peg$FAILED) {
      s2 = peg$currPos;
      peg$begin();
      s3 = peg$parseident_start();
      peg$end(true);

      if (s3 === peg$FAILED) {
        s2 = undefined;
      } else {
        peg$currPos = s2;
        s2 = peg$FAILED;
      }

      if (s2 !== peg$FAILED) {
        peg$savedPos = s0;
        s0 = peg$f47();
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseKW_IS() {
    var s0, s1, s2, s3;

    var rule$expects = function rule$expects(expected) {
      if (peg$silentFails === 0) peg$expect(expected);
    };

    s0 = peg$currPos;
    rule$expects(peg$e34);

    if (input.substr(peg$currPos, 2).toLowerCase() === peg$c26) {
      s1 = input.substr(peg$currPos, 2);
      peg$currPos += 2;
    } else {
      s1 = peg$FAILED;
    }

    if (s1 !== peg$FAILED) {
      s2 = peg$currPos;
      peg$begin();
      s3 = peg$parseident_start();
      peg$end(true);

      if (s3 === peg$FAILED) {
        s2 = undefined;
      } else {
        peg$currPos = s2;
        s2 = peg$FAILED;
      }

      if (s2 !== peg$FAILED) {
        peg$savedPos = s0;
        s0 = peg$f48();
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseKW_LIKE() {
    var s0, s1, s2, s3;

    var rule$expects = function rule$expects(expected) {
      if (peg$silentFails === 0) peg$expect(expected);
    };

    s0 = peg$currPos;
    rule$expects(peg$e35);

    if (input.substr(peg$currPos, 4).toLowerCase() === peg$c27) {
      s1 = input.substr(peg$currPos, 4);
      peg$currPos += 4;
    } else {
      s1 = peg$FAILED;
    }

    if (s1 !== peg$FAILED) {
      s2 = peg$currPos;
      peg$begin();
      s3 = peg$parseident_start();
      peg$end(true);

      if (s3 === peg$FAILED) {
        s2 = undefined;
      } else {
        peg$currPos = s2;
        s2 = peg$FAILED;
      }

      if (s2 !== peg$FAILED) {
        peg$savedPos = s0;
        s0 = peg$f49();
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseKW_EXISTS() {
    var s0, s1, s2, s3;

    var rule$expects = function rule$expects(expected) {
      if (peg$silentFails === 0) peg$expect(expected);
    };

    s0 = peg$currPos;
    rule$expects(peg$e36);

    if (input.substr(peg$currPos, 6).toLowerCase() === peg$c28) {
      s1 = input.substr(peg$currPos, 6);
      peg$currPos += 6;
    } else {
      s1 = peg$FAILED;
    }

    if (s1 !== peg$FAILED) {
      s2 = peg$currPos;
      peg$begin();
      s3 = peg$parseident_start();
      peg$end(true);

      if (s3 === peg$FAILED) {
        s2 = undefined;
      } else {
        peg$currPos = s2;
        s2 = peg$FAILED;
      }

      if (s2 !== peg$FAILED) {
        peg$savedPos = s0;
        s0 = peg$f50();
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseKW_NOT() {
    var s0, s1, s2, s3;

    var rule$expects = function rule$expects(expected) {
      if (peg$silentFails === 0) peg$expect(expected);
    };

    s0 = peg$currPos;
    rule$expects(peg$e37);

    if (input.substr(peg$currPos, 3).toLowerCase() === peg$c29) {
      s1 = input.substr(peg$currPos, 3);
      peg$currPos += 3;
    } else {
      s1 = peg$FAILED;
    }

    if (s1 !== peg$FAILED) {
      s2 = peg$currPos;
      peg$begin();
      s3 = peg$parseident_start();
      peg$end(true);

      if (s3 === peg$FAILED) {
        s2 = undefined;
      } else {
        peg$currPos = s2;
        s2 = peg$FAILED;
      }

      if (s2 !== peg$FAILED) {
        peg$savedPos = s0;
        s0 = peg$f51();
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseKW_AND() {
    var s0, s1, s2, s3;

    var rule$expects = function rule$expects(expected) {
      if (peg$silentFails === 0) peg$expect(expected);
    };

    s0 = peg$currPos;
    rule$expects(peg$e38);

    if (input.substr(peg$currPos, 3).toLowerCase() === peg$c30) {
      s1 = input.substr(peg$currPos, 3);
      peg$currPos += 3;
    } else {
      s1 = peg$FAILED;
    }

    if (s1 !== peg$FAILED) {
      s2 = peg$currPos;
      peg$begin();
      s3 = peg$parseident_start();
      peg$end(true);

      if (s3 === peg$FAILED) {
        s2 = undefined;
      } else {
        peg$currPos = s2;
        s2 = peg$FAILED;
      }

      if (s2 !== peg$FAILED) {
        peg$savedPos = s0;
        s0 = peg$f52();
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseKW_OR() {
    var s0, s1, s2, s3;

    var rule$expects = function rule$expects(expected) {
      if (peg$silentFails === 0) peg$expect(expected);
    };

    s0 = peg$currPos;
    rule$expects(peg$e39);

    if (input.substr(peg$currPos, 2).toLowerCase() === peg$c31) {
      s1 = input.substr(peg$currPos, 2);
      peg$currPos += 2;
    } else {
      s1 = peg$FAILED;
    }

    if (s1 !== peg$FAILED) {
      s2 = peg$currPos;
      peg$begin();
      s3 = peg$parseident_start();
      peg$end(true);

      if (s3 === peg$FAILED) {
        s2 = undefined;
      } else {
        peg$currPos = s2;
        s2 = peg$FAILED;
      }

      if (s2 !== peg$FAILED) {
        peg$savedPos = s0;
        s0 = peg$f53();
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseDOT() {
    var s0;

    var rule$expects = function rule$expects(expected) {
      if (peg$silentFails === 0) peg$expect(expected);
    };

    rule$expects(peg$e17);

    if (input.charCodeAt(peg$currPos) === 46) {
      s0 = peg$c12;
      peg$currPos++;
    } else {
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseCOMMA() {
    var s0;

    var rule$expects = function rule$expects(expected) {
      if (peg$silentFails === 0) peg$expect(expected);
    };

    rule$expects(peg$e40);

    if (input.charCodeAt(peg$currPos) === 44) {
      s0 = peg$c32;
      peg$currPos++;
    } else {
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseSTAR() {
    var s0;

    var rule$expects = function rule$expects(expected) {
      if (peg$silentFails === 0) peg$expect(expected);
    };

    rule$expects(peg$e41);

    if (input.charCodeAt(peg$currPos) === 42) {
      s0 = peg$c11;
      peg$currPos++;
    } else {
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseLPAREN() {
    var s0;

    var rule$expects = function rule$expects(expected) {
      if (peg$silentFails === 0) peg$expect(expected);
    };

    rule$expects(peg$e42);

    if (input.charCodeAt(peg$currPos) === 40) {
      s0 = peg$c33;
      peg$currPos++;
    } else {
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseRPAREN() {
    var s0;

    var rule$expects = function rule$expects(expected) {
      if (peg$silentFails === 0) peg$expect(expected);
    };

    rule$expects(peg$e43);

    if (input.charCodeAt(peg$currPos) === 41) {
      s0 = peg$c34;
      peg$currPos++;
    } else {
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseLBRAKE() {
    var s0;

    var rule$expects = function rule$expects(expected) {
      if (peg$silentFails === 0) peg$expect(expected);
    };

    if (input.charCodeAt(peg$currPos) === 91) {
      s0 = peg$c35;
      peg$currPos++;
    } else {
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseRBRAKE() {
    var s0;

    var rule$expects = function rule$expects(expected) {
      if (peg$silentFails === 0) peg$expect(expected);
    };

    if (input.charCodeAt(peg$currPos) === 93) {
      s0 = peg$c36;
      peg$currPos++;
    } else {
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parse__() {
    var s0, s1;

    var rule$expects = function rule$expects(expected) {
      if (peg$silentFails === 0) peg$expect(expected);
    };

    s0 = [];
    s1 = peg$parsewhitespace();

    while (s1 !== peg$FAILED) {
      s0.push(s1);
      s1 = peg$parsewhitespace();
    }

    return s0;
  }

  function peg$parsechar() {
    var s0;

    var rule$expects = function rule$expects(expected) {
      if (peg$silentFails === 0) peg$expect(expected);
    };

    if (input.length > peg$currPos) {
      s0 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parsewhitespace() {
    var s0;

    var rule$expects = function rule$expects(expected) {
      if (peg$silentFails === 0) peg$expect(expected);
    };

    rule$expects(peg$e44);

    if (peg$r11.test(input.charAt(peg$currPos))) {
      s0 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseEOL() {
    var s0, s1;

    var rule$expects = function rule$expects(expected) {
      if (peg$silentFails === 0) peg$expect(expected);
    };

    s0 = peg$parseEOF();

    if (s0 === peg$FAILED) {
      s0 = [];

      if (peg$r6.test(input.charAt(peg$currPos))) {
        s1 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
      }

      if (s1 !== peg$FAILED) {
        while (s1 !== peg$FAILED) {
          s0.push(s1);

          if (peg$r6.test(input.charAt(peg$currPos))) {
            s1 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s1 = peg$FAILED;
          }
        }
      } else {
        s0 = peg$FAILED;
      }
    }

    return s0;
  }

  function peg$parseEOF() {
    var s0, s1;

    var rule$expects = function rule$expects(expected) {
      if (peg$silentFails === 0) peg$expect(expected);
    };

    s0 = peg$currPos;
    peg$begin();

    if (input.length > peg$currPos) {
      s1 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
    }

    peg$end(true);

    if (s1 === peg$FAILED) {
      s0 = undefined;
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  } //////////////////////////////////////////////// UTILITY VARS ////////////////////////////////////////////////


  var isReserved = {
    'AND': true,
    'ASC': true,
    'BY': true,
    'CONTAINS': true,
    'DESC': true,
    'EXISTS': true,
    'FALSE': true,
    'FROM': true,
    'GROUP': true,
    'IN': true,
    'IS': true,
    'LIKE': true,
    'LIMIT': true,
    'NOT': true,
    'NULL': true,
    'OR': true,
    'ORDER': true,
    'SELECT': true,
    'TRUE': true,
    'WHERE': true
  }; //////////////////////////////////////////////// UTILITY FCTS ////////////////////////////////////////////////

  function createUnaryExpr(op, e) {
    return {
      type: 'unary_expr',
      operator: op,
      expr: e
    };
  }

  function createBinaryExpr(op, left, right) {
    return {
      type: 'binary_expr',
      operator: op,
      left: left,
      right: right
    };
  }

  function createList(head, tail) {
    var result = [head];

    for (var i = 0; i < tail.length; i++) {
      result.push(tail[i][3]);
    }

    return result;
  }

  function createBinaryExprChain(head, tail) {
    var result = head;

    for (var i = 0; i < tail.length; i++) {
      result = createBinaryExpr(tail[i][1], result, tail[i][3]);
    }

    return result;
  }

  var cmpPrefixMap = {
    '+': true,
    '-': true,
    '*': true,
    '/': true,
    '>': true,
    '<': true,
    '!': true,
    '=': true,
    //for is or in
    'I': true,
    'i': true,
    //for like
    'L': true,
    'l': true,
    //for not
    'N': true,
    'n': true
  }; // used for dependency analysis

  var varList = [];
  peg$begin();
  peg$result = peg$startRuleFunction();

  if (peg$result !== peg$FAILED && peg$currPos === input.length) {
    return peg$result;
  } else {
    if (peg$result !== peg$FAILED && peg$currPos < input.length) {
      peg$expect(peg$endExpectation());
    }

    throw peg$buildError();
  }
}

var _default = {
  SyntaxError: peg$SyntaxError,
  parse: peg$parse
};
exports.default = _default;

/***/ }),

/***/ "./src/query_engine.js":
/*!*****************************!*\
  !*** ./src/query_engine.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.QueryEngine = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * Wrapper around the inner query engine. Defaults to QueryEngine.defaultQuerySelector
 */
var QueryEngine =
/*#__PURE__*/
function () {
  function QueryEngine() {
    _classCallCheck(this, QueryEngine);
  }

  _createClass(QueryEngine, null, [{
    key: "getEngine",

    /**
     * Get the engine
     * @return {Function}
     */
    value: function getEngine() {
      return QueryEngine._querySelector;
    }
    /**
     * Set the engine. The given engine can be any Javascript function that accepts a
     * String as its first parameter and returns an Array of Elements.
     * @param {Function} engine
     */

  }, {
    key: "setEngine",
    value: function setEngine(engine) {
      QueryEngine._querySelector = engine;
    }
    /**
     * Use the default engine: QueryEngine.defaultQuerySelector
     */

  }, {
    key: "useDefault",
    value: function useDefault() {
      QueryEngine._querySelector = QueryEngine.defaultQuerySelector;
    }
    /**
     * The default query selector: document.querySelectorAll wrapped by Array.from
     * @param  {String} selector
     * @return {Element[]}
     */

  }, {
    key: "defaultQuerySelector",
    value: function defaultQuerySelector(selector) {
      return Array.from(document.querySelectorAll(selector));
    }
  }]);

  return QueryEngine;
}();

exports.QueryEngine = QueryEngine;
QueryEngine._querySelector = QueryEngine.defaultQuerySelector;

/***/ }),

/***/ "./src/transpiler.js":
/*!***************************!*\
  !*** ./src/transpiler.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Transpiler = void 0;

var _query_engine = __webpack_require__(/*! ./query_engine.js */ "./src/query_engine.js");

var _directives = __webpack_require__(/*! ./directives.js */ "./src/directives.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * Transpiler for converting Abstract Syntax Trees into CSS selectors and Javascript directives
 */
var Transpiler =
/*#__PURE__*/
function () {
  function Transpiler() {
    _classCallCheck(this, Transpiler);
  }

  _createClass(Transpiler, null, [{
    key: "_getColumnReferences",

    /**
     * Traverse the Columns clause of the AST and return a Set containing the listed columns
     * @param  {Object} node The Columns clause of the AST
     * @return {Set} Set containing the columns listed in the From clause
     */
    value: function _getColumnReferences(node) {
      var columns = new Set();
      node.forEach(function (column) {
        if (column.type !== "column_ref") throw new Error("Expected \"".concat(column, "\"\" to be a column_ref"));
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

  }, {
    key: "_augmentWhere",
    value: function _augmentWhere(node, columns) {
      var firstColumn = columns.entries().next().value[0];

      function recurse(node) {
        var parent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
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
              throw Error("Column \"".concat(node.left.column, "\" was not specified in the Columns clause"));
            }

            var column = node.left.column;
            var field = node.left.field;

            if (node.right.type !== "string" && node.right.type !== "number") {
              throw Error("Expected a string or number, but found ".concat(node.right.type, " instead"));
            }

            var value = node.right.value;
            node["selector"] = {
              table: column,
              selector: "[".concat(field, "=\"").concat(value, "\"]")
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

  }, {
    key: "_constructSelectors",
    value: function _constructSelectors(node, selectors) {
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

  }, {
    key: "_compileSelectors",
    value: function _compileSelectors(selectors, scope) {
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

  }, {
    key: "transpile",
    value: function transpile(ast) {
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
      if (ast.limit) directives.push(_directives.Directives.limiter.bind(null, ast.limit.value));
      return {
        selector: compiled,
        engine: _query_engine.QueryEngine.getEngine(),
        directives: directives
      };
    }
  }]);

  return Transpiler;
}();

exports.Transpiler = Transpiler;

/***/ })

/******/ });
});
//# sourceMappingURL=domql.js.map