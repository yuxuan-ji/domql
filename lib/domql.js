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
exports.Domql = void 0;

var _parser = __webpack_require__(/*! ./parser.js */ "./src/parser.js");

var _transpiler = __webpack_require__(/*! ./transpiler.js */ "./src/transpiler.js");

var utils = _interopRequireWildcard(__webpack_require__(/*! ./utils.js */ "./src/utils.js"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * Domql: Domql API
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
    this.compile(query);
  }

  _createClass(Domql, [{
    key: "compile",

    /**
     * Compile user query into a set of directives
     * @param  {String} query
     */
    value: function compile() {
      var query = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      this._query = query;
      if (!query) return;
      var ast = (0, _parser.parse)(query);
      this._directives = (0, _transpiler.transpile)(ast);
    }
    /**
     * Execute compiled set of directives and
     * returns a Element array or an Element.
     * @return {Element[]|Element}
     */

  }, {
    key: "execute",
    value: function execute() {
      return utils.execute(this._directives);
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

exports.Domql = Domql;

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
exports.parse = parse;

var _pegjs_parser = __webpack_require__(/*! ./pegjs_parser.js */ "./src/pegjs_parser.js");

/**
 * Parse a query into an Abstract Syntax Tree
 * @param  {String} query
 * @return {Object} the Abstract Syntax Tree
 */
function parse(query) {
  return (0, _pegjs_parser.parse)(query);
}

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

  var peg$f5 = function peg$f5(dt) {
    var obj = {
      type: 'table_ref',
      table: dt
    };
    return obj;
  };

  var peg$f6 = function peg$f6(e) {
    return e;
  };

  var peg$f7 = function peg$f7(c, d) {
    var obj = c;
    obj.order = 'ASC';
    if (d === 'DESC') obj.order = 'DESC';
    return obj;
  };

  var peg$f8 = function peg$f8(i) {
    return i;
  };

  var peg$f9 = function peg$f9(head, tail) {
    var el = {
      type: 'expr_list'
    };
    el.value = createList(head, tail);
    return el;
  };

  var peg$f10 = function peg$f10(head, tail) {
    return createBinaryExprChain(head, tail);
  };

  var peg$f11 = function peg$f11(expr) {
    return createUnaryExpr('NOT', expr);
  };

  var peg$f12 = function peg$f12(left, rh) {
    if (rh === null) return left;else if (rh.type === 'arithmetic') return createBinaryExprChain(left, rh.tail);else return createBinaryExpr(rh.op, left, rh.right);
  };

  var peg$f13 = function peg$f13(op, stmt) {
    stmt.parentheses = true;
    return createUnaryExpr(op, stmt);
  };

  var peg$f14 = function peg$f14(nk) {
    return nk[0] + ' ' + nk[2];
  };

  var peg$f15 = function peg$f15(l) {
    return {
      type: 'arithmetic',
      tail: l
    };
  };

  var peg$f16 = function peg$f16(right) {
    return {
      op: 'IS',
      right: right
    };
  };

  var peg$f17 = function peg$f17(right) {
    return {
      op: 'IS NOT',
      right: right
    };
  };

  var peg$f18 = function peg$f18(op, right) {
    return {
      op: op,
      right: right
    };
  };

  var peg$f19 = function peg$f19(op, l) {
    return {
      op: op,
      right: l
    };
  };

  var peg$f20 = function peg$f20(head, tail) {
    return createBinaryExprChain(head, tail);
  };

  var peg$f21 = function peg$f21(e) {
    e.parentheses = true;
    return e;
  };

  var peg$f22 = function peg$f22(list) {
    list.parentheses = true;
    return list;
  };

  var peg$f23 = function peg$f23(col, f) {
    return {
      type: 'column_ref',
      column: col,
      field: f
    };
  };

  var peg$f24 = function peg$f24(col) {
    return {
      type: 'column_ref',
      column: col
    };
  };

  var peg$f25 = function peg$f25(name) {
    return isReserved[name.toUpperCase()] === true;
  };

  var peg$f26 = function peg$f26(name) {
    return name;
  };

  var peg$f27 = function peg$f27(chars) {
    return chars.join('');
  };

  var peg$f28 = function peg$f28(name) {
    return name;
  };

  var peg$f29 = function peg$f29(start, parts) {
    return start + parts.join('');
  };

  var peg$f30 = function peg$f30() {
    return {
      type: 'star',
      value: '*'
    };
  };

  var peg$f31 = function peg$f31() {
    return {
      type: 'null',
      value: null
    };
  };

  var peg$f32 = function peg$f32() {
    return {
      type: 'bool',
      value: true
    };
  };

  var peg$f33 = function peg$f33() {
    return {
      type: 'bool',
      value: false
    };
  };

  var peg$f34 = function peg$f34(ca) {
    return {
      type: 'string',
      value: ca
    };
  };

  var peg$f35 = function peg$f35(n) {
    return {
      type: 'number',
      value: n
    };
  };

  var peg$f36 = function peg$f36(int_, frac, exp) {
    return parseFloat(int_ + frac + exp);
  };

  var peg$f37 = function peg$f37(int_, frac) {
    return parseFloat(int_ + frac);
  };

  var peg$f38 = function peg$f38(int_, exp) {
    return parseFloat(int_ + exp);
  };

  var peg$f39 = function peg$f39(int_) {
    return parseFloat(int_);
  };

  var peg$f40 = function peg$f40(digits) {
    return "." + digits;
  };

  var peg$f41 = function peg$f41(e, digits) {
    return e + digits;
  };

  var peg$f42 = function peg$f42(digits) {
    return digits.join("");
  };

  var peg$f43 = function peg$f43(e, sign) {
    return e + (sign !== null ? sign : '');
  };

  var peg$f44 = function peg$f44() {
    return 'ASC';
  };

  var peg$f45 = function peg$f45() {
    return 'DESC';
  };

  var peg$f46 = function peg$f46() {
    return 'IN';
  };

  var peg$f47 = function peg$f47() {
    return 'IS';
  };

  var peg$f48 = function peg$f48() {
    return 'LIKE';
  };

  var peg$f49 = function peg$f49() {
    return 'EXISTS';
  };

  var peg$f50 = function peg$f50() {
    return 'NOT';
  };

  var peg$f51 = function peg$f51() {
    return 'AND';
  };

  var peg$f52 = function peg$f52() {
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
      s3 = peg$parsetable_name();

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

  function peg$parsetable_name() {
    var s0, s1;

    var rule$expects = function rule$expects(expected) {
      if (peg$silentFails === 0) peg$expect(expected);
    };

    s0 = peg$currPos;
    s1 = peg$parseident();

    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$f5(s1);
    }

    s0 = s1;
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
        s0 = peg$f6(s3);
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
      s0 = peg$f7(s1, s3);
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
        s0 = peg$f8(s3);
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
      s0 = peg$f9(s1, s2);
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
      s0 = peg$f10(s1, s2);
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
      s0 = peg$f10(s1, s2);
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
            s0 = peg$f11(s3);
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
      s0 = peg$f12(s1, s3);
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
            s0 = peg$f13(s1, s5);
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
      s1 = peg$f14(s1);
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
      s1 = peg$f15(s1);
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
        s0 = peg$f16(s3);
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
          s0 = peg$f17(s3);
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
      s1 = peg$f14(s1);
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
      s1 = peg$f14(s1);
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
        s0 = peg$f18(s1, s3);
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
            s0 = peg$f19(s1, s5);
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
      s0 = peg$f10(s1, s2);
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
      s0 = peg$f20(s1, s2);
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
              s0 = peg$f21(s3);
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
          s0 = peg$f23(s1, s5);
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
        s1 = peg$f24(s1);
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
      s2 = peg$f25(s1);

      if (s2) {
        s2 = peg$FAILED;
      } else {
        s2 = undefined;
      }

      if (s2 !== peg$FAILED) {
        peg$savedPos = s0;
        s0 = peg$f26(s1);
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
          s0 = peg$f27(s2);
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
          s0 = peg$f27(s2);
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
          s0 = peg$f27(s2);
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
      s2 = peg$f25(s1);

      if (s2) {
        s2 = peg$FAILED;
      } else {
        s2 = undefined;
      }

      if (s2 !== peg$FAILED) {
        peg$savedPos = s0;
        s0 = peg$f28(s1);
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
      s0 = peg$f29(s1, s2);
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
      s0 = peg$f29(s1, s2);
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
      s1 = peg$f30();
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
      s1 = peg$f31();
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
      s1 = peg$f32();
    }

    s0 = s1;

    if (s0 === peg$FAILED) {
      s0 = peg$currPos;
      s1 = peg$parseKW_FALSE();

      if (s1 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$f33();
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
      s1 = peg$f34(s1);
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
      s1 = peg$f35(s1);
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
          s0 = peg$f36(s1, s2, s3);
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
          s0 = peg$f37(s1, s2);
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
            s2 = peg$parse__();
            peg$savedPos = s0;
            s0 = peg$f39(s1);
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
        s0 = peg$f40(s2);
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
        s0 = peg$f41(s1, s2);
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
      s1 = peg$f42(s1);
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
      s0 = peg$f43(s1, s2);
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
        s0 = peg$f44();
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

/***/ "./src/sizzle.js":
/*!***********************!*\
  !*** ./src/sizzle.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * Sizzle CSS Selector Engine v2.3.3
 * https://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2016-08-08
 */
(function (window) {
  var i,
      support,
      Expr,
      getText,
      isXML,
      tokenize,
      compile,
      select,
      outermostContext,
      sortInput,
      hasDuplicate,
      // Local document vars
  setDocument,
      document,
      docElem,
      documentIsHTML,
      rbuggyQSA,
      rbuggyMatches,
      matches,
      contains,
      // Instance-specific data
  expando = "sizzle" + 1 * new Date(),
      preferredDoc = window.document,
      dirruns = 0,
      done = 0,
      classCache = createCache(),
      tokenCache = createCache(),
      compilerCache = createCache(),
      sortOrder = function sortOrder(a, b) {
    if (a === b) {
      hasDuplicate = true;
    }

    return 0;
  },
      // Instance methods
  hasOwn = {}.hasOwnProperty,
      arr = [],
      pop = arr.pop,
      push_native = arr.push,
      push = arr.push,
      slice = arr.slice,
      // Use a stripped-down indexOf as it's faster than native
  // https://jsperf.com/thor-indexof-vs-for/5
  indexOf = function indexOf(list, elem) {
    var i = 0,
        len = list.length;

    for (; i < len; i++) {
      if (list[i] === elem) {
        return i;
      }
    }

    return -1;
  },
      booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
      // Regular expressions
  // http://www.w3.org/TR/css3-selectors/#whitespace
  whitespace = "[\\x20\\t\\r\\n\\f]",
      // http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
  identifier = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
      // Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
  attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace + // Operator (capture 2)
  "*([*^$|!~]?=)" + whitespace + // "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
  "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace + "*\\]",
      pseudos = ":(" + identifier + ")(?:\\((" + // To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
  // 1. quoted (capture 3; capture 4 or capture 5)
  "('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" + // 2. simple (capture 6)
  "((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" + // 3. anything else (capture 2)
  ".*" + ")\\)|)",
      // Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
  rwhitespace = new RegExp(whitespace + "+", "g"),
      rtrim = new RegExp("^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g"),
      rcomma = new RegExp("^" + whitespace + "*," + whitespace + "*"),
      rcombinators = new RegExp("^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*"),
      rattributeQuotes = new RegExp("=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g"),
      rpseudo = new RegExp(pseudos),
      ridentifier = new RegExp("^" + identifier + "$"),
      matchExpr = {
    "ID": new RegExp("^#(" + identifier + ")"),
    "CLASS": new RegExp("^\\.(" + identifier + ")"),
    "TAG": new RegExp("^(" + identifier + "|[*])"),
    "ATTR": new RegExp("^" + attributes),
    "PSEUDO": new RegExp("^" + pseudos),
    "CHILD": new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace + "*(\\d+)|))" + whitespace + "*\\)|)", "i"),
    "bool": new RegExp("^(?:" + booleans + ")$", "i"),
    // For use in libraries implementing .is()
    // We use this for POS matching in `select`
    "needsContext": new RegExp("^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i")
  },
      rinputs = /^(?:input|select|textarea|button)$/i,
      rheader = /^h\d$/i,
      rnative = /^[^{]+\{\s*\[native \w/,
      // Easily-parseable/retrievable ID or TAG or CLASS selectors
  rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      rsibling = /[+~]/,
      // CSS escapes
  // http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
  runescape = new RegExp("\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig"),
      funescape = function funescape(_, escaped, escapedWhitespace) {
    var high = "0x" + escaped - 0x10000; // NaN means non-codepoint
    // Support: Firefox<24
    // Workaround erroneous numeric interpretation of +"0x"

    return high !== high || escapedWhitespace ? escaped : high < 0 ? // BMP codepoint
    String.fromCharCode(high + 0x10000) : // Supplemental Plane codepoint (surrogate pair)
    String.fromCharCode(high >> 10 | 0xD800, high & 0x3FF | 0xDC00);
  },
      // CSS string/identifier serialization
  // https://drafts.csswg.org/cssom/#common-serializing-idioms
  rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
      fcssescape = function fcssescape(ch, asCodePoint) {
    if (asCodePoint) {
      // U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
      if (ch === "\0") {
        return "\uFFFD";
      } // Control characters and (dependent upon position) numbers get escaped as code points


      return ch.slice(0, -1) + "\\" + ch.charCodeAt(ch.length - 1).toString(16) + " ";
    } // Other potentially-special ASCII characters get backslash-escaped


    return "\\" + ch;
  },
      // Used for iframes
  // See setDocument()
  // Removing the function wrapper causes a "Permission Denied"
  // error in IE
  unloadHandler = function unloadHandler() {
    setDocument();
  },
      disabledAncestor = addCombinator(function (elem) {
    return elem.disabled === true && ("form" in elem || "label" in elem);
  }, {
    dir: "parentNode",
    next: "legend"
  }); // Optimize for push.apply( _, NodeList )


  try {
    push.apply(arr = slice.call(preferredDoc.childNodes), preferredDoc.childNodes); // Support: Android<4.0
    // Detect silently failing push.apply

    arr[preferredDoc.childNodes.length].nodeType;
  } catch (e) {
    push = {
      apply: arr.length ? // Leverage slice if possible
      function (target, els) {
        push_native.apply(target, slice.call(els));
      } : // Support: IE<9
      // Otherwise append directly
      function (target, els) {
        var j = target.length,
            i = 0; // Can't trust NodeList.length

        while (target[j++] = els[i++]) {}

        target.length = j - 1;
      }
    };
  }

  function Sizzle(selector, context, results, seed) {
    var m,
        i,
        elem,
        nid,
        match,
        groups,
        newSelector,
        newContext = context && context.ownerDocument,
        // nodeType defaults to 9, since context defaults to document
    nodeType = context ? context.nodeType : 9;
    results = results || []; // Return early from calls with invalid selector or context

    if (typeof selector !== "string" || !selector || nodeType !== 1 && nodeType !== 9 && nodeType !== 11) {
      return results;
    } // Try to shortcut find operations (as opposed to filters) in HTML documents


    if (!seed) {
      if ((context ? context.ownerDocument || context : preferredDoc) !== document) {
        setDocument(context);
      }

      context = context || document;

      if (documentIsHTML) {
        // If the selector is sufficiently simple, try using a "get*By*" DOM method
        // (excepting DocumentFragment context, where the methods don't exist)
        if (nodeType !== 11 && (match = rquickExpr.exec(selector))) {
          // ID selector
          if (m = match[1]) {
            // Document context
            if (nodeType === 9) {
              if (elem = context.getElementById(m)) {
                // Support: IE, Opera, Webkit
                // TODO: identify versions
                // getElementById can match elements by name instead of ID
                if (elem.id === m) {
                  results.push(elem);
                  return results;
                }
              } else {
                return results;
              } // Element context

            } else {
              // Support: IE, Opera, Webkit
              // TODO: identify versions
              // getElementById can match elements by name instead of ID
              if (newContext && (elem = newContext.getElementById(m)) && contains(context, elem) && elem.id === m) {
                results.push(elem);
                return results;
              }
            } // Type selector

          } else if (match[2]) {
            push.apply(results, context.getElementsByTagName(selector));
            return results; // Class selector
          } else if ((m = match[3]) && support.getElementsByClassName && context.getElementsByClassName) {
            push.apply(results, context.getElementsByClassName(m));
            return results;
          }
        } // Take advantage of querySelectorAll


        if (support.qsa && !compilerCache[selector + " "] && (!rbuggyQSA || !rbuggyQSA.test(selector))) {
          if (nodeType !== 1) {
            newContext = context;
            newSelector = selector; // qSA looks outside Element context, which is not what we want
            // Thanks to Andrew Dupont for this workaround technique
            // Support: IE <=8
            // Exclude object elements
          } else if (context.nodeName.toLowerCase() !== "object") {
            // Capture the context ID, setting it first if necessary
            if (nid = context.getAttribute("id")) {
              nid = nid.replace(rcssescape, fcssescape);
            } else {
              context.setAttribute("id", nid = expando);
            } // Prefix every selector in the list


            groups = tokenize(selector);
            i = groups.length;

            while (i--) {
              groups[i] = "#" + nid + " " + toSelector(groups[i]);
            }

            newSelector = groups.join(","); // Expand context for sibling selectors

            newContext = rsibling.test(selector) && testContext(context.parentNode) || context;
          }

          if (newSelector) {
            try {
              push.apply(results, newContext.querySelectorAll(newSelector));
              return results;
            } catch (qsaError) {} finally {
              if (nid === expando) {
                context.removeAttribute("id");
              }
            }
          }
        }
      }
    } // All others


    return select(selector.replace(rtrim, "$1"), context, results, seed);
  }
  /**
   * Create key-value caches of limited size
   * @returns {function(string, object)} Returns the Object data after storing it on itself with
   *    property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
   *    deleting the oldest entry
   */


  function createCache() {
    var keys = [];

    function cache(key, value) {
      // Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
      if (keys.push(key + " ") > Expr.cacheLength) {
        // Only keep the most recent entries
        delete cache[keys.shift()];
      }

      return cache[key + " "] = value;
    }

    return cache;
  }
  /**
   * Mark a function for special use by Sizzle
   * @param {Function} fn The function to mark
   */


  function markFunction(fn) {
    fn[expando] = true;
    return fn;
  }
  /**
   * Support testing using an element
   * @param {Function} fn Passed the created element and returns a boolean result
   */


  function assert(fn) {
    var el = document.createElement("fieldset");

    try {
      return !!fn(el);
    } catch (e) {
      return false;
    } finally {
      // Remove from its parent by default
      if (el.parentNode) {
        el.parentNode.removeChild(el);
      } // release memory in IE


      el = null;
    }
  }
  /**
   * Adds the same handler for all of the specified attrs
   * @param {String} attrs Pipe-separated list of attributes
   * @param {Function} handler The method that will be applied
   */


  function addHandle(attrs, handler) {
    var arr = attrs.split("|"),
        i = arr.length;

    while (i--) {
      Expr.attrHandle[arr[i]] = handler;
    }
  }
  /**
   * Checks document order of two siblings
   * @param {Element} a
   * @param {Element} b
   * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
   */


  function siblingCheck(a, b) {
    var cur = b && a,
        diff = cur && a.nodeType === 1 && b.nodeType === 1 && a.sourceIndex - b.sourceIndex; // Use IE sourceIndex if available on both nodes

    if (diff) {
      return diff;
    } // Check if b follows a


    if (cur) {
      while (cur = cur.nextSibling) {
        if (cur === b) {
          return -1;
        }
      }
    }

    return a ? 1 : -1;
  }
  /**
   * Returns a function to use in pseudos for input types
   * @param {String} type
   */


  function createInputPseudo(type) {
    return function (elem) {
      var name = elem.nodeName.toLowerCase();
      return name === "input" && elem.type === type;
    };
  }
  /**
   * Returns a function to use in pseudos for buttons
   * @param {String} type
   */


  function createButtonPseudo(type) {
    return function (elem) {
      var name = elem.nodeName.toLowerCase();
      return (name === "input" || name === "button") && elem.type === type;
    };
  }
  /**
   * Returns a function to use in pseudos for :enabled/:disabled
   * @param {Boolean} disabled true for :disabled; false for :enabled
   */


  function createDisabledPseudo(disabled) {
    // Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
    return function (elem) {
      // Only certain elements can match :enabled or :disabled
      // https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
      // https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
      if ("form" in elem) {
        // Check for inherited disabledness on relevant non-disabled elements:
        // * listed form-associated elements in a disabled fieldset
        //   https://html.spec.whatwg.org/multipage/forms.html#category-listed
        //   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
        // * option elements in a disabled optgroup
        //   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
        // All such elements have a "form" property.
        if (elem.parentNode && elem.disabled === false) {
          // Option elements defer to a parent optgroup if present
          if ("label" in elem) {
            if ("label" in elem.parentNode) {
              return elem.parentNode.disabled === disabled;
            } else {
              return elem.disabled === disabled;
            }
          } // Support: IE 6 - 11
          // Use the isDisabled shortcut property to check for disabled fieldset ancestors


          return elem.isDisabled === disabled || // Where there is no isDisabled, check manually

          /* jshint -W018 */
          elem.isDisabled !== !disabled && disabledAncestor(elem) === disabled;
        }

        return elem.disabled === disabled; // Try to winnow out elements that can't be disabled before trusting the disabled property.
        // Some victims get caught in our net (label, legend, menu, track), but it shouldn't
        // even exist on them, let alone have a boolean value.
      } else if ("label" in elem) {
        return elem.disabled === disabled;
      } // Remaining elements are neither :enabled nor :disabled


      return false;
    };
  }
  /**
   * Returns a function to use in pseudos for positionals
   * @param {Function} fn
   */


  function createPositionalPseudo(fn) {
    return markFunction(function (argument) {
      argument = +argument;
      return markFunction(function (seed, matches) {
        var j,
            matchIndexes = fn([], seed.length, argument),
            i = matchIndexes.length; // Match elements found at the specified indexes

        while (i--) {
          if (seed[j = matchIndexes[i]]) {
            seed[j] = !(matches[j] = seed[j]);
          }
        }
      });
    });
  }
  /**
   * Checks a node for validity as a Sizzle context
   * @param {Element|Object=} context
   * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
   */


  function testContext(context) {
    return context && typeof context.getElementsByTagName !== "undefined" && context;
  } // Expose support vars for convenience


  support = Sizzle.support = {};
  /**
   * Detects XML nodes
   * @param {Element|Object} elem An element or a document
   * @returns {Boolean} True iff elem is a non-HTML XML node
   */

  isXML = Sizzle.isXML = function (elem) {
    // documentElement is verified for cases where it doesn't yet exist
    // (such as loading iframes in IE - #4833)
    var documentElement = elem && (elem.ownerDocument || elem).documentElement;
    return documentElement ? documentElement.nodeName !== "HTML" : false;
  };
  /**
   * Sets document-related variables once based on the current document
   * @param {Element|Object} [doc] An element or document object to use to set the document
   * @returns {Object} Returns the current document
   */


  setDocument = Sizzle.setDocument = function (node) {
    var hasCompare,
        subWindow,
        doc = node ? node.ownerDocument || node : preferredDoc; // Return early if doc is invalid or already selected

    if (doc === document || doc.nodeType !== 9 || !doc.documentElement) {
      return document;
    } // Update global variables


    document = doc;
    docElem = document.documentElement;
    documentIsHTML = !isXML(document); // Support: IE 9-11, Edge
    // Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)

    if (preferredDoc !== document && (subWindow = document.defaultView) && subWindow.top !== subWindow) {
      // Support: IE 11, Edge
      if (subWindow.addEventListener) {
        subWindow.addEventListener("unload", unloadHandler, false); // Support: IE 9 - 10 only
      } else if (subWindow.attachEvent) {
        subWindow.attachEvent("onunload", unloadHandler);
      }
    }
    /* Attributes
    ---------------------------------------------------------------------- */
    // Support: IE<8
    // Verify that getAttribute really returns attributes and not properties
    // (excepting IE8 booleans)


    support.attributes = assert(function (el) {
      el.className = "i";
      return !el.getAttribute("className");
    });
    /* getElement(s)By*
    ---------------------------------------------------------------------- */
    // Check if getElementsByTagName("*") returns only elements

    support.getElementsByTagName = assert(function (el) {
      el.appendChild(document.createComment(""));
      return !el.getElementsByTagName("*").length;
    }); // Support: IE<9

    support.getElementsByClassName = rnative.test(document.getElementsByClassName); // Support: IE<10
    // Check if getElementById returns elements by name
    // The broken getElementById methods don't pick up programmatically-set names,
    // so use a roundabout getElementsByName test

    support.getById = assert(function (el) {
      docElem.appendChild(el).id = expando;
      return !document.getElementsByName || !document.getElementsByName(expando).length;
    }); // ID filter and find

    if (support.getById) {
      Expr.filter["ID"] = function (id) {
        var attrId = id.replace(runescape, funescape);
        return function (elem) {
          return elem.getAttribute("id") === attrId;
        };
      };

      Expr.find["ID"] = function (id, context) {
        if (typeof context.getElementById !== "undefined" && documentIsHTML) {
          var elem = context.getElementById(id);
          return elem ? [elem] : [];
        }
      };
    } else {
      Expr.filter["ID"] = function (id) {
        var attrId = id.replace(runescape, funescape);
        return function (elem) {
          var node = typeof elem.getAttributeNode !== "undefined" && elem.getAttributeNode("id");
          return node && node.value === attrId;
        };
      }; // Support: IE 6 - 7 only
      // getElementById is not reliable as a find shortcut


      Expr.find["ID"] = function (id, context) {
        if (typeof context.getElementById !== "undefined" && documentIsHTML) {
          var node,
              i,
              elems,
              elem = context.getElementById(id);

          if (elem) {
            // Verify the id attribute
            node = elem.getAttributeNode("id");

            if (node && node.value === id) {
              return [elem];
            } // Fall back on getElementsByName


            elems = context.getElementsByName(id);
            i = 0;

            while (elem = elems[i++]) {
              node = elem.getAttributeNode("id");

              if (node && node.value === id) {
                return [elem];
              }
            }
          }

          return [];
        }
      };
    } // Tag


    Expr.find["TAG"] = support.getElementsByTagName ? function (tag, context) {
      if (typeof context.getElementsByTagName !== "undefined") {
        return context.getElementsByTagName(tag); // DocumentFragment nodes don't have gEBTN
      } else if (support.qsa) {
        return context.querySelectorAll(tag);
      }
    } : function (tag, context) {
      var elem,
          tmp = [],
          i = 0,
          // By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
      results = context.getElementsByTagName(tag); // Filter out possible comments

      if (tag === "*") {
        while (elem = results[i++]) {
          if (elem.nodeType === 1) {
            tmp.push(elem);
          }
        }

        return tmp;
      }

      return results;
    }; // Class

    Expr.find["CLASS"] = support.getElementsByClassName && function (className, context) {
      if (typeof context.getElementsByClassName !== "undefined" && documentIsHTML) {
        return context.getElementsByClassName(className);
      }
    };
    /* QSA/matchesSelector
    ---------------------------------------------------------------------- */
    // QSA and matchesSelector support
    // matchesSelector(:active) reports false when true (IE9/Opera 11.5)


    rbuggyMatches = []; // qSa(:focus) reports false when true (Chrome 21)
    // We allow this because of a bug in IE8/9 that throws an error
    // whenever `document.activeElement` is accessed on an iframe
    // So, we allow :focus to pass through QSA all the time to avoid the IE error
    // See https://bugs.jquery.com/ticket/13378

    rbuggyQSA = [];

    if (support.qsa = rnative.test(document.querySelectorAll)) {
      // Build QSA regex
      // Regex strategy adopted from Diego Perini
      assert(function (el) {
        // Select is set to empty string on purpose
        // This is to test IE's treatment of not explicitly
        // setting a boolean content attribute,
        // since its presence should be enough
        // https://bugs.jquery.com/ticket/12359
        docElem.appendChild(el).innerHTML = "<a id='" + expando + "'></a>" + "<select id='" + expando + "-\r\\' msallowcapture=''>" + "<option selected=''></option></select>"; // Support: IE8, Opera 11-12.16
        // Nothing should be selected when empty strings follow ^= or $= or *=
        // The test attribute must be unknown in Opera but "safe" for WinRT
        // https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section

        if (el.querySelectorAll("[msallowcapture^='']").length) {
          rbuggyQSA.push("[*^$]=" + whitespace + "*(?:''|\"\")");
        } // Support: IE8
        // Boolean attributes and "value" are not treated correctly


        if (!el.querySelectorAll("[selected]").length) {
          rbuggyQSA.push("\\[" + whitespace + "*(?:value|" + booleans + ")");
        } // Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+


        if (!el.querySelectorAll("[id~=" + expando + "-]").length) {
          rbuggyQSA.push("~=");
        } // Webkit/Opera - :checked should return selected option elements
        // http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
        // IE8 throws error here and will not see later tests


        if (!el.querySelectorAll(":checked").length) {
          rbuggyQSA.push(":checked");
        } // Support: Safari 8+, iOS 8+
        // https://bugs.webkit.org/show_bug.cgi?id=136851
        // In-page `selector#id sibling-combinator selector` fails


        if (!el.querySelectorAll("a#" + expando + "+*").length) {
          rbuggyQSA.push(".#.+[+~]");
        }
      });
      assert(function (el) {
        el.innerHTML = "<a href='' disabled='disabled'></a>" + "<select disabled='disabled'><option/></select>"; // Support: Windows 8 Native Apps
        // The type and name attributes are restricted during .innerHTML assignment

        var input = document.createElement("input");
        input.setAttribute("type", "hidden");
        el.appendChild(input).setAttribute("name", "D"); // Support: IE8
        // Enforce case-sensitivity of name attribute

        if (el.querySelectorAll("[name=d]").length) {
          rbuggyQSA.push("name" + whitespace + "*[*^$|!~]?=");
        } // FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
        // IE8 throws error here and will not see later tests


        if (el.querySelectorAll(":enabled").length !== 2) {
          rbuggyQSA.push(":enabled", ":disabled");
        } // Support: IE9-11+
        // IE's :disabled selector does not pick up the children of disabled fieldsets


        docElem.appendChild(el).disabled = true;

        if (el.querySelectorAll(":disabled").length !== 2) {
          rbuggyQSA.push(":enabled", ":disabled");
        } // Opera 10-11 does not throw on post-comma invalid pseudos


        el.querySelectorAll("*,:x");
        rbuggyQSA.push(",.*:");
      });
    }

    if (support.matchesSelector = rnative.test(matches = docElem.matches || docElem.webkitMatchesSelector || docElem.mozMatchesSelector || docElem.oMatchesSelector || docElem.msMatchesSelector)) {
      assert(function (el) {
        // Check to see if it's possible to do matchesSelector
        // on a disconnected node (IE 9)
        support.disconnectedMatch = matches.call(el, "*"); // This should fail with an exception
        // Gecko does not error, returns false instead

        matches.call(el, "[s!='']:x");
        rbuggyMatches.push("!=", pseudos);
      });
    }

    rbuggyQSA = rbuggyQSA.length && new RegExp(rbuggyQSA.join("|"));
    rbuggyMatches = rbuggyMatches.length && new RegExp(rbuggyMatches.join("|"));
    /* Contains
    ---------------------------------------------------------------------- */

    hasCompare = rnative.test(docElem.compareDocumentPosition); // Element contains another
    // Purposefully self-exclusive
    // As in, an element does not contain itself

    contains = hasCompare || rnative.test(docElem.contains) ? function (a, b) {
      var adown = a.nodeType === 9 ? a.documentElement : a,
          bup = b && b.parentNode;
      return a === bup || !!(bup && bup.nodeType === 1 && (adown.contains ? adown.contains(bup) : a.compareDocumentPosition && a.compareDocumentPosition(bup) & 16));
    } : function (a, b) {
      if (b) {
        while (b = b.parentNode) {
          if (b === a) {
            return true;
          }
        }
      }

      return false;
    };
    /* Sorting
    ---------------------------------------------------------------------- */
    // Document order sorting

    sortOrder = hasCompare ? function (a, b) {
      // Flag for duplicate removal
      if (a === b) {
        hasDuplicate = true;
        return 0;
      } // Sort on method existence if only one input has compareDocumentPosition


      var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;

      if (compare) {
        return compare;
      } // Calculate position if both inputs belong to the same document


      compare = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : // Otherwise we know they are disconnected
      1; // Disconnected nodes

      if (compare & 1 || !support.sortDetached && b.compareDocumentPosition(a) === compare) {
        // Choose the first element that is related to our preferred document
        if (a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a)) {
          return -1;
        }

        if (b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b)) {
          return 1;
        } // Maintain original order


        return sortInput ? indexOf(sortInput, a) - indexOf(sortInput, b) : 0;
      }

      return compare & 4 ? -1 : 1;
    } : function (a, b) {
      // Exit early if the nodes are identical
      if (a === b) {
        hasDuplicate = true;
        return 0;
      }

      var cur,
          i = 0,
          aup = a.parentNode,
          bup = b.parentNode,
          ap = [a],
          bp = [b]; // Parentless nodes are either documents or disconnected

      if (!aup || !bup) {
        return a === document ? -1 : b === document ? 1 : aup ? -1 : bup ? 1 : sortInput ? indexOf(sortInput, a) - indexOf(sortInput, b) : 0; // If the nodes are siblings, we can do a quick check
      } else if (aup === bup) {
        return siblingCheck(a, b);
      } // Otherwise we need full lists of their ancestors for comparison


      cur = a;

      while (cur = cur.parentNode) {
        ap.unshift(cur);
      }

      cur = b;

      while (cur = cur.parentNode) {
        bp.unshift(cur);
      } // Walk down the tree looking for a discrepancy


      while (ap[i] === bp[i]) {
        i++;
      }

      return i ? // Do a sibling check if the nodes have a common ancestor
      siblingCheck(ap[i], bp[i]) : // Otherwise nodes in our document sort first
      ap[i] === preferredDoc ? -1 : bp[i] === preferredDoc ? 1 : 0;
    };
    return document;
  };

  Sizzle.matches = function (expr, elements) {
    return Sizzle(expr, null, null, elements);
  };

  Sizzle.matchesSelector = function (elem, expr) {
    // Set document vars if needed
    if ((elem.ownerDocument || elem) !== document) {
      setDocument(elem);
    } // Make sure that attribute selectors are quoted


    expr = expr.replace(rattributeQuotes, "='$1']");

    if (support.matchesSelector && documentIsHTML && !compilerCache[expr + " "] && (!rbuggyMatches || !rbuggyMatches.test(expr)) && (!rbuggyQSA || !rbuggyQSA.test(expr))) {
      try {
        var ret = matches.call(elem, expr); // IE 9's matchesSelector returns false on disconnected nodes

        if (ret || support.disconnectedMatch || // As well, disconnected nodes are said to be in a document
        // fragment in IE 9
        elem.document && elem.document.nodeType !== 11) {
          return ret;
        }
      } catch (e) {}
    }

    return Sizzle(expr, document, null, [elem]).length > 0;
  };

  Sizzle.contains = function (context, elem) {
    // Set document vars if needed
    if ((context.ownerDocument || context) !== document) {
      setDocument(context);
    }

    return contains(context, elem);
  };

  Sizzle.attr = function (elem, name) {
    // Set document vars if needed
    if ((elem.ownerDocument || elem) !== document) {
      setDocument(elem);
    }

    var fn = Expr.attrHandle[name.toLowerCase()],
        // Don't get fooled by Object.prototype properties (jQuery #13807)
    val = fn && hasOwn.call(Expr.attrHandle, name.toLowerCase()) ? fn(elem, name, !documentIsHTML) : undefined;
    return val !== undefined ? val : support.attributes || !documentIsHTML ? elem.getAttribute(name) : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null;
  };

  Sizzle.escape = function (sel) {
    return (sel + "").replace(rcssescape, fcssescape);
  };

  Sizzle.error = function (msg) {
    throw new Error("Syntax error, unrecognized expression: " + msg);
  };
  /**
   * Document sorting and removing duplicates
   * @param {ArrayLike} results
   */


  Sizzle.uniqueSort = function (results) {
    var elem,
        duplicates = [],
        j = 0,
        i = 0; // Unless we *know* we can detect duplicates, assume their presence

    hasDuplicate = !support.detectDuplicates;
    sortInput = !support.sortStable && results.slice(0);
    results.sort(sortOrder);

    if (hasDuplicate) {
      while (elem = results[i++]) {
        if (elem === results[i]) {
          j = duplicates.push(i);
        }
      }

      while (j--) {
        results.splice(duplicates[j], 1);
      }
    } // Clear input after sorting to release objects
    // See https://github.com/jquery/sizzle/pull/225


    sortInput = null;
    return results;
  };
  /**
   * Utility function for retrieving the text value of an array of DOM nodes
   * @param {Array|Element} elem
   */


  getText = Sizzle.getText = function (elem) {
    var node,
        ret = "",
        i = 0,
        nodeType = elem.nodeType;

    if (!nodeType) {
      // If no nodeType, this is expected to be an array
      while (node = elem[i++]) {
        // Do not traverse comment nodes
        ret += getText(node);
      }
    } else if (nodeType === 1 || nodeType === 9 || nodeType === 11) {
      // Use textContent for elements
      // innerText usage removed for consistency of new lines (jQuery #11153)
      if (typeof elem.textContent === "string") {
        return elem.textContent;
      } else {
        // Traverse its children
        for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
          ret += getText(elem);
        }
      }
    } else if (nodeType === 3 || nodeType === 4) {
      return elem.nodeValue;
    } // Do not include comment or processing instruction nodes


    return ret;
  };

  Expr = Sizzle.selectors = {
    // Can be adjusted by the user
    cacheLength: 50,
    createPseudo: markFunction,
    match: matchExpr,
    attrHandle: {},
    find: {},
    relative: {
      ">": {
        dir: "parentNode",
        first: true
      },
      " ": {
        dir: "parentNode"
      },
      "+": {
        dir: "previousSibling",
        first: true
      },
      "~": {
        dir: "previousSibling"
      }
    },
    preFilter: {
      "ATTR": function ATTR(match) {
        match[1] = match[1].replace(runescape, funescape); // Move the given value to match[3] whether quoted or unquoted

        match[3] = (match[3] || match[4] || match[5] || "").replace(runescape, funescape);

        if (match[2] === "~=") {
          match[3] = " " + match[3] + " ";
        }

        return match.slice(0, 4);
      },
      "CHILD": function CHILD(match) {
        /* matches from matchExpr["CHILD"]
            1 type (only|nth|...)
            2 what (child|of-type)
            3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
            4 xn-component of xn+y argument ([+-]?\d*n|)
            5 sign of xn-component
            6 x of xn-component
            7 sign of y-component
            8 y of y-component
        */
        match[1] = match[1].toLowerCase();

        if (match[1].slice(0, 3) === "nth") {
          // nth-* requires argument
          if (!match[3]) {
            Sizzle.error(match[0]);
          } // numeric x and y parameters for Expr.filter.CHILD
          // remember that false/true cast respectively to 0/1


          match[4] = +(match[4] ? match[5] + (match[6] || 1) : 2 * (match[3] === "even" || match[3] === "odd"));
          match[5] = +(match[7] + match[8] || match[3] === "odd"); // other types prohibit arguments
        } else if (match[3]) {
          Sizzle.error(match[0]);
        }

        return match;
      },
      "PSEUDO": function PSEUDO(match) {
        var excess,
            unquoted = !match[6] && match[2];

        if (matchExpr["CHILD"].test(match[0])) {
          return null;
        } // Accept quoted arguments as-is


        if (match[3]) {
          match[2] = match[4] || match[5] || ""; // Strip excess characters from unquoted arguments
        } else if (unquoted && rpseudo.test(unquoted) && ( // Get excess from tokenize (recursively)
        excess = tokenize(unquoted, true)) && ( // advance to the next closing parenthesis
        excess = unquoted.indexOf(")", unquoted.length - excess) - unquoted.length)) {
          // excess is a negative index
          match[0] = match[0].slice(0, excess);
          match[2] = unquoted.slice(0, excess);
        } // Return only captures needed by the pseudo filter method (type and argument)


        return match.slice(0, 3);
      }
    },
    filter: {
      "TAG": function TAG(nodeNameSelector) {
        var nodeName = nodeNameSelector.replace(runescape, funescape).toLowerCase();
        return nodeNameSelector === "*" ? function () {
          return true;
        } : function (elem) {
          return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
        };
      },
      "CLASS": function CLASS(className) {
        var pattern = classCache[className + " "];
        return pattern || (pattern = new RegExp("(^|" + whitespace + ")" + className + "(" + whitespace + "|$)")) && classCache(className, function (elem) {
          return pattern.test(typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "");
        });
      },
      "ATTR": function ATTR(name, operator, check) {
        return function (elem) {
          var result = Sizzle.attr(elem, name);

          if (result == null) {
            return operator === "!=";
          }

          if (!operator) {
            return true;
          }

          result += "";
          return operator === "=" ? result === check : operator === "!=" ? result !== check : operator === "^=" ? check && result.indexOf(check) === 0 : operator === "*=" ? check && result.indexOf(check) > -1 : operator === "$=" ? check && result.slice(-check.length) === check : operator === "~=" ? (" " + result.replace(rwhitespace, " ") + " ").indexOf(check) > -1 : operator === "|=" ? result === check || result.slice(0, check.length + 1) === check + "-" : false;
        };
      },
      "CHILD": function CHILD(type, what, argument, first, last) {
        var simple = type.slice(0, 3) !== "nth",
            forward = type.slice(-4) !== "last",
            ofType = what === "of-type";
        return first === 1 && last === 0 ? // Shortcut for :nth-*(n)
        function (elem) {
          return !!elem.parentNode;
        } : function (elem, context, xml) {
          var cache,
              uniqueCache,
              outerCache,
              node,
              nodeIndex,
              start,
              dir = simple !== forward ? "nextSibling" : "previousSibling",
              parent = elem.parentNode,
              name = ofType && elem.nodeName.toLowerCase(),
              useCache = !xml && !ofType,
              diff = false;

          if (parent) {
            // :(first|last|only)-(child|of-type)
            if (simple) {
              while (dir) {
                node = elem;

                while (node = node[dir]) {
                  if (ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1) {
                    return false;
                  }
                } // Reverse direction for :only-* (if we haven't yet done so)


                start = dir = type === "only" && !start && "nextSibling";
              }

              return true;
            }

            start = [forward ? parent.firstChild : parent.lastChild]; // non-xml :nth-child(...) stores cache data on `parent`

            if (forward && useCache) {
              // Seek `elem` from a previously-cached index
              // ...in a gzip-friendly way
              node = parent;
              outerCache = node[expando] || (node[expando] = {}); // Support: IE <9 only
              // Defend against cloned attroperties (jQuery gh-1709)

              uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});
              cache = uniqueCache[type] || [];
              nodeIndex = cache[0] === dirruns && cache[1];
              diff = nodeIndex && cache[2];
              node = nodeIndex && parent.childNodes[nodeIndex];

              while (node = ++nodeIndex && node && node[dir] || ( // Fallback to seeking `elem` from the start
              diff = nodeIndex = 0) || start.pop()) {
                // When found, cache indexes on `parent` and break
                if (node.nodeType === 1 && ++diff && node === elem) {
                  uniqueCache[type] = [dirruns, nodeIndex, diff];
                  break;
                }
              }
            } else {
              // Use previously-cached element index if available
              if (useCache) {
                // ...in a gzip-friendly way
                node = elem;
                outerCache = node[expando] || (node[expando] = {}); // Support: IE <9 only
                // Defend against cloned attroperties (jQuery gh-1709)

                uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});
                cache = uniqueCache[type] || [];
                nodeIndex = cache[0] === dirruns && cache[1];
                diff = nodeIndex;
              } // xml :nth-child(...)
              // or :nth-last-child(...) or :nth(-last)?-of-type(...)


              if (diff === false) {
                // Use the same loop as above to seek `elem` from the start
                while (node = ++nodeIndex && node && node[dir] || (diff = nodeIndex = 0) || start.pop()) {
                  if ((ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1) && ++diff) {
                    // Cache the index of each encountered element
                    if (useCache) {
                      outerCache = node[expando] || (node[expando] = {}); // Support: IE <9 only
                      // Defend against cloned attroperties (jQuery gh-1709)

                      uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});
                      uniqueCache[type] = [dirruns, diff];
                    }

                    if (node === elem) {
                      break;
                    }
                  }
                }
              }
            } // Incorporate the offset, then check against cycle size


            diff -= last;
            return diff === first || diff % first === 0 && diff / first >= 0;
          }
        };
      },
      "PSEUDO": function PSEUDO(pseudo, argument) {
        // pseudo-class names are case-insensitive
        // http://www.w3.org/TR/selectors/#pseudo-classes
        // Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
        // Remember that setFilters inherits from pseudos
        var args,
            fn = Expr.pseudos[pseudo] || Expr.setFilters[pseudo.toLowerCase()] || Sizzle.error("unsupported pseudo: " + pseudo); // The user may use createPseudo to indicate that
        // arguments are needed to create the filter function
        // just as Sizzle does

        if (fn[expando]) {
          return fn(argument);
        } // But maintain support for old signatures


        if (fn.length > 1) {
          args = [pseudo, pseudo, "", argument];
          return Expr.setFilters.hasOwnProperty(pseudo.toLowerCase()) ? markFunction(function (seed, matches) {
            var idx,
                matched = fn(seed, argument),
                i = matched.length;

            while (i--) {
              idx = indexOf(seed, matched[i]);
              seed[idx] = !(matches[idx] = matched[i]);
            }
          }) : function (elem) {
            return fn(elem, 0, args);
          };
        }

        return fn;
      }
    },
    pseudos: {
      // Potentially complex pseudos
      "not": markFunction(function (selector) {
        // Trim the selector passed to compile
        // to avoid treating leading and trailing
        // spaces as combinators
        var input = [],
            results = [],
            matcher = compile(selector.replace(rtrim, "$1"));
        return matcher[expando] ? markFunction(function (seed, matches, context, xml) {
          var elem,
              unmatched = matcher(seed, null, xml, []),
              i = seed.length; // Match elements unmatched by `matcher`

          while (i--) {
            if (elem = unmatched[i]) {
              seed[i] = !(matches[i] = elem);
            }
          }
        }) : function (elem, context, xml) {
          input[0] = elem;
          matcher(input, null, xml, results); // Don't keep the element (issue #299)

          input[0] = null;
          return !results.pop();
        };
      }),
      "has": markFunction(function (selector) {
        return function (elem) {
          return Sizzle(selector, elem).length > 0;
        };
      }),
      "contains": markFunction(function (text) {
        text = text.replace(runescape, funescape);
        return function (elem) {
          return (elem.textContent || elem.innerText || getText(elem)).indexOf(text) > -1;
        };
      }),
      // "Whether an element is represented by a :lang() selector
      // is based solely on the element's language value
      // being equal to the identifier C,
      // or beginning with the identifier C immediately followed by "-".
      // The matching of C against the element's language value is performed case-insensitively.
      // The identifier C does not have to be a valid language name."
      // http://www.w3.org/TR/selectors/#lang-pseudo
      "lang": markFunction(function (lang) {
        // lang value must be a valid identifier
        if (!ridentifier.test(lang || "")) {
          Sizzle.error("unsupported lang: " + lang);
        }

        lang = lang.replace(runescape, funescape).toLowerCase();
        return function (elem) {
          var elemLang;

          do {
            if (elemLang = documentIsHTML ? elem.lang : elem.getAttribute("xml:lang") || elem.getAttribute("lang")) {
              elemLang = elemLang.toLowerCase();
              return elemLang === lang || elemLang.indexOf(lang + "-") === 0;
            }
          } while ((elem = elem.parentNode) && elem.nodeType === 1);

          return false;
        };
      }),
      // Miscellaneous
      "target": function target(elem) {
        var hash = window.location && window.location.hash;
        return hash && hash.slice(1) === elem.id;
      },
      "root": function root(elem) {
        return elem === docElem;
      },
      "focus": function focus(elem) {
        return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
      },
      // Boolean properties
      "enabled": createDisabledPseudo(false),
      "disabled": createDisabledPseudo(true),
      "checked": function checked(elem) {
        // In CSS3, :checked should return both checked and selected elements
        // http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
        var nodeName = elem.nodeName.toLowerCase();
        return nodeName === "input" && !!elem.checked || nodeName === "option" && !!elem.selected;
      },
      "selected": function selected(elem) {
        // Accessing this property makes selected-by-default
        // options in Safari work properly
        if (elem.parentNode) {
          elem.parentNode.selectedIndex;
        }

        return elem.selected === true;
      },
      // Contents
      "empty": function empty(elem) {
        // http://www.w3.org/TR/selectors/#empty-pseudo
        // :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
        //   but not by others (comment: 8; processing instruction: 7; etc.)
        // nodeType < 6 works because attributes (2) do not appear as children
        for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
          if (elem.nodeType < 6) {
            return false;
          }
        }

        return true;
      },
      "parent": function parent(elem) {
        return !Expr.pseudos["empty"](elem);
      },
      // Element/input types
      "header": function header(elem) {
        return rheader.test(elem.nodeName);
      },
      "input": function input(elem) {
        return rinputs.test(elem.nodeName);
      },
      "button": function button(elem) {
        var name = elem.nodeName.toLowerCase();
        return name === "input" && elem.type === "button" || name === "button";
      },
      "text": function text(elem) {
        var attr;
        return elem.nodeName.toLowerCase() === "input" && elem.type === "text" && ( // Support: IE<8
        // New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
        (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text");
      },
      // Position-in-collection
      "first": createPositionalPseudo(function () {
        return [0];
      }),
      "last": createPositionalPseudo(function (matchIndexes, length) {
        return [length - 1];
      }),
      "eq": createPositionalPseudo(function (matchIndexes, length, argument) {
        return [argument < 0 ? argument + length : argument];
      }),
      "even": createPositionalPseudo(function (matchIndexes, length) {
        var i = 0;

        for (; i < length; i += 2) {
          matchIndexes.push(i);
        }

        return matchIndexes;
      }),
      "odd": createPositionalPseudo(function (matchIndexes, length) {
        var i = 1;

        for (; i < length; i += 2) {
          matchIndexes.push(i);
        }

        return matchIndexes;
      }),
      "lt": createPositionalPseudo(function (matchIndexes, length, argument) {
        var i = argument < 0 ? argument + length : argument;

        for (; --i >= 0;) {
          matchIndexes.push(i);
        }

        return matchIndexes;
      }),
      "gt": createPositionalPseudo(function (matchIndexes, length, argument) {
        var i = argument < 0 ? argument + length : argument;

        for (; ++i < length;) {
          matchIndexes.push(i);
        }

        return matchIndexes;
      })
    }
  };
  Expr.pseudos["nth"] = Expr.pseudos["eq"]; // Add button/input type pseudos

  for (i in {
    radio: true,
    checkbox: true,
    file: true,
    password: true,
    image: true
  }) {
    Expr.pseudos[i] = createInputPseudo(i);
  }

  for (i in {
    submit: true,
    reset: true
  }) {
    Expr.pseudos[i] = createButtonPseudo(i);
  } // Easy API for creating new setFilters


  function setFilters() {}

  setFilters.prototype = Expr.filters = Expr.pseudos;
  Expr.setFilters = new setFilters();

  tokenize = Sizzle.tokenize = function (selector, parseOnly) {
    var matched,
        match,
        tokens,
        type,
        soFar,
        groups,
        preFilters,
        cached = tokenCache[selector + " "];

    if (cached) {
      return parseOnly ? 0 : cached.slice(0);
    }

    soFar = selector;
    groups = [];
    preFilters = Expr.preFilter;

    while (soFar) {
      // Comma and first run
      if (!matched || (match = rcomma.exec(soFar))) {
        if (match) {
          // Don't consume trailing commas as valid
          soFar = soFar.slice(match[0].length) || soFar;
        }

        groups.push(tokens = []);
      }

      matched = false; // Combinators

      if (match = rcombinators.exec(soFar)) {
        matched = match.shift();
        tokens.push({
          value: matched,
          // Cast descendant combinators to space
          type: match[0].replace(rtrim, " ")
        });
        soFar = soFar.slice(matched.length);
      } // Filters


      for (type in Expr.filter) {
        if ((match = matchExpr[type].exec(soFar)) && (!preFilters[type] || (match = preFilters[type](match)))) {
          matched = match.shift();
          tokens.push({
            value: matched,
            type: type,
            matches: match
          });
          soFar = soFar.slice(matched.length);
        }
      }

      if (!matched) {
        break;
      }
    } // Return the length of the invalid excess
    // if we're just parsing
    // Otherwise, throw an error or return tokens


    return parseOnly ? soFar.length : soFar ? Sizzle.error(selector) : // Cache the tokens
    tokenCache(selector, groups).slice(0);
  };

  function toSelector(tokens) {
    var i = 0,
        len = tokens.length,
        selector = "";

    for (; i < len; i++) {
      selector += tokens[i].value;
    }

    return selector;
  }

  function addCombinator(matcher, combinator, base) {
    var dir = combinator.dir,
        skip = combinator.next,
        key = skip || dir,
        checkNonElements = base && key === "parentNode",
        doneName = done++;
    return combinator.first ? // Check against closest ancestor/preceding element
    function (elem, context, xml) {
      while (elem = elem[dir]) {
        if (elem.nodeType === 1 || checkNonElements) {
          return matcher(elem, context, xml);
        }
      }

      return false;
    } : // Check against all ancestor/preceding elements
    function (elem, context, xml) {
      var oldCache,
          uniqueCache,
          outerCache,
          newCache = [dirruns, doneName]; // We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching

      if (xml) {
        while (elem = elem[dir]) {
          if (elem.nodeType === 1 || checkNonElements) {
            if (matcher(elem, context, xml)) {
              return true;
            }
          }
        }
      } else {
        while (elem = elem[dir]) {
          if (elem.nodeType === 1 || checkNonElements) {
            outerCache = elem[expando] || (elem[expando] = {}); // Support: IE <9 only
            // Defend against cloned attroperties (jQuery gh-1709)

            uniqueCache = outerCache[elem.uniqueID] || (outerCache[elem.uniqueID] = {});

            if (skip && skip === elem.nodeName.toLowerCase()) {
              elem = elem[dir] || elem;
            } else if ((oldCache = uniqueCache[key]) && oldCache[0] === dirruns && oldCache[1] === doneName) {
              // Assign to newCache so results back-propagate to previous elements
              return newCache[2] = oldCache[2];
            } else {
              // Reuse newcache so results back-propagate to previous elements
              uniqueCache[key] = newCache; // A match means we're done; a fail means we have to keep checking

              if (newCache[2] = matcher(elem, context, xml)) {
                return true;
              }
            }
          }
        }
      }

      return false;
    };
  }

  function elementMatcher(matchers) {
    return matchers.length > 1 ? function (elem, context, xml) {
      var i = matchers.length;

      while (i--) {
        if (!matchers[i](elem, context, xml)) {
          return false;
        }
      }

      return true;
    } : matchers[0];
  }

  function multipleContexts(selector, contexts, results) {
    var i = 0,
        len = contexts.length;

    for (; i < len; i++) {
      Sizzle(selector, contexts[i], results);
    }

    return results;
  }

  function condense(unmatched, map, filter, context, xml) {
    var elem,
        newUnmatched = [],
        i = 0,
        len = unmatched.length,
        mapped = map != null;

    for (; i < len; i++) {
      if (elem = unmatched[i]) {
        if (!filter || filter(elem, context, xml)) {
          newUnmatched.push(elem);

          if (mapped) {
            map.push(i);
          }
        }
      }
    }

    return newUnmatched;
  }

  function setMatcher(preFilter, selector, matcher, postFilter, postFinder, postSelector) {
    if (postFilter && !postFilter[expando]) {
      postFilter = setMatcher(postFilter);
    }

    if (postFinder && !postFinder[expando]) {
      postFinder = setMatcher(postFinder, postSelector);
    }

    return markFunction(function (seed, results, context, xml) {
      var temp,
          i,
          elem,
          preMap = [],
          postMap = [],
          preexisting = results.length,
          // Get initial elements from seed or context
      elems = seed || multipleContexts(selector || "*", context.nodeType ? [context] : context, []),
          // Prefilter to get matcher input, preserving a map for seed-results synchronization
      matcherIn = preFilter && (seed || !selector) ? condense(elems, preMap, preFilter, context, xml) : elems,
          matcherOut = matcher ? // If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
      postFinder || (seed ? preFilter : preexisting || postFilter) ? // ...intermediate processing is necessary
      [] : // ...otherwise use results directly
      results : matcherIn; // Find primary matches

      if (matcher) {
        matcher(matcherIn, matcherOut, context, xml);
      } // Apply postFilter


      if (postFilter) {
        temp = condense(matcherOut, postMap);
        postFilter(temp, [], context, xml); // Un-match failing elements by moving them back to matcherIn

        i = temp.length;

        while (i--) {
          if (elem = temp[i]) {
            matcherOut[postMap[i]] = !(matcherIn[postMap[i]] = elem);
          }
        }
      }

      if (seed) {
        if (postFinder || preFilter) {
          if (postFinder) {
            // Get the final matcherOut by condensing this intermediate into postFinder contexts
            temp = [];
            i = matcherOut.length;

            while (i--) {
              if (elem = matcherOut[i]) {
                // Restore matcherIn since elem is not yet a final match
                temp.push(matcherIn[i] = elem);
              }
            }

            postFinder(null, matcherOut = [], temp, xml);
          } // Move matched elements from seed to results to keep them synchronized


          i = matcherOut.length;

          while (i--) {
            if ((elem = matcherOut[i]) && (temp = postFinder ? indexOf(seed, elem) : preMap[i]) > -1) {
              seed[temp] = !(results[temp] = elem);
            }
          }
        } // Add elements to results, through postFinder if defined

      } else {
        matcherOut = condense(matcherOut === results ? matcherOut.splice(preexisting, matcherOut.length) : matcherOut);

        if (postFinder) {
          postFinder(null, results, matcherOut, xml);
        } else {
          push.apply(results, matcherOut);
        }
      }
    });
  }

  function matcherFromTokens(tokens) {
    var checkContext,
        matcher,
        j,
        len = tokens.length,
        leadingRelative = Expr.relative[tokens[0].type],
        implicitRelative = leadingRelative || Expr.relative[" "],
        i = leadingRelative ? 1 : 0,
        // The foundational matcher ensures that elements are reachable from top-level context(s)
    matchContext = addCombinator(function (elem) {
      return elem === checkContext;
    }, implicitRelative, true),
        matchAnyContext = addCombinator(function (elem) {
      return indexOf(checkContext, elem) > -1;
    }, implicitRelative, true),
        matchers = [function (elem, context, xml) {
      var ret = !leadingRelative && (xml || context !== outermostContext) || ((checkContext = context).nodeType ? matchContext(elem, context, xml) : matchAnyContext(elem, context, xml)); // Avoid hanging onto element (issue #299)

      checkContext = null;
      return ret;
    }];

    for (; i < len; i++) {
      if (matcher = Expr.relative[tokens[i].type]) {
        matchers = [addCombinator(elementMatcher(matchers), matcher)];
      } else {
        matcher = Expr.filter[tokens[i].type].apply(null, tokens[i].matches); // Return special upon seeing a positional matcher

        if (matcher[expando]) {
          // Find the next relative operator (if any) for proper handling
          j = ++i;

          for (; j < len; j++) {
            if (Expr.relative[tokens[j].type]) {
              break;
            }
          }

          return setMatcher(i > 1 && elementMatcher(matchers), i > 1 && toSelector( // If the preceding token was a descendant combinator, insert an implicit any-element `*`
          tokens.slice(0, i - 1).concat({
            value: tokens[i - 2].type === " " ? "*" : ""
          })).replace(rtrim, "$1"), matcher, i < j && matcherFromTokens(tokens.slice(i, j)), j < len && matcherFromTokens(tokens = tokens.slice(j)), j < len && toSelector(tokens));
        }

        matchers.push(matcher);
      }
    }

    return elementMatcher(matchers);
  }

  function matcherFromGroupMatchers(elementMatchers, setMatchers) {
    var bySet = setMatchers.length > 0,
        byElement = elementMatchers.length > 0,
        superMatcher = function superMatcher(seed, context, xml, results, outermost) {
      var elem,
          j,
          matcher,
          matchedCount = 0,
          i = "0",
          unmatched = seed && [],
          setMatched = [],
          contextBackup = outermostContext,
          // We must always have either seed elements or outermost context
      elems = seed || byElement && Expr.find["TAG"]("*", outermost),
          // Use integer dirruns iff this is the outermost matcher
      dirrunsUnique = dirruns += contextBackup == null ? 1 : Math.random() || 0.1,
          len = elems.length;

      if (outermost) {
        outermostContext = context === document || context || outermost;
      } // Add elements passing elementMatchers directly to results
      // Support: IE<9, Safari
      // Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id


      for (; i !== len && (elem = elems[i]) != null; i++) {
        if (byElement && elem) {
          j = 0;

          if (!context && elem.ownerDocument !== document) {
            setDocument(elem);
            xml = !documentIsHTML;
          }

          while (matcher = elementMatchers[j++]) {
            if (matcher(elem, context || document, xml)) {
              results.push(elem);
              break;
            }
          }

          if (outermost) {
            dirruns = dirrunsUnique;
          }
        } // Track unmatched elements for set filters


        if (bySet) {
          // They will have gone through all possible matchers
          if (elem = !matcher && elem) {
            matchedCount--;
          } // Lengthen the array for every element, matched or not


          if (seed) {
            unmatched.push(elem);
          }
        }
      } // `i` is now the count of elements visited above, and adding it to `matchedCount`
      // makes the latter nonnegative.


      matchedCount += i; // Apply set filters to unmatched elements
      // NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
      // equals `i`), unless we didn't visit _any_ elements in the above loop because we have
      // no element matchers and no seed.
      // Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
      // case, which will result in a "00" `matchedCount` that differs from `i` but is also
      // numerically zero.

      if (bySet && i !== matchedCount) {
        j = 0;

        while (matcher = setMatchers[j++]) {
          matcher(unmatched, setMatched, context, xml);
        }

        if (seed) {
          // Reintegrate element matches to eliminate the need for sorting
          if (matchedCount > 0) {
            while (i--) {
              if (!(unmatched[i] || setMatched[i])) {
                setMatched[i] = pop.call(results);
              }
            }
          } // Discard index placeholder values to get only actual matches


          setMatched = condense(setMatched);
        } // Add matches to results


        push.apply(results, setMatched); // Seedless set matches succeeding multiple successful matchers stipulate sorting

        if (outermost && !seed && setMatched.length > 0 && matchedCount + setMatchers.length > 1) {
          Sizzle.uniqueSort(results);
        }
      } // Override manipulation of globals by nested matchers


      if (outermost) {
        dirruns = dirrunsUnique;
        outermostContext = contextBackup;
      }

      return unmatched;
    };

    return bySet ? markFunction(superMatcher) : superMatcher;
  }

  compile = Sizzle.compile = function (selector, match
  /* Internal Use Only */
  ) {
    var i,
        setMatchers = [],
        elementMatchers = [],
        cached = compilerCache[selector + " "];

    if (!cached) {
      // Generate a function of recursive functions that can be used to check each element
      if (!match) {
        match = tokenize(selector);
      }

      i = match.length;

      while (i--) {
        cached = matcherFromTokens(match[i]);

        if (cached[expando]) {
          setMatchers.push(cached);
        } else {
          elementMatchers.push(cached);
        }
      } // Cache the compiled function


      cached = compilerCache(selector, matcherFromGroupMatchers(elementMatchers, setMatchers)); // Save selector and tokenization

      cached.selector = selector;
    }

    return cached;
  };
  /**
   * A low-level selection function that works with Sizzle's compiled
   *  selector functions
   * @param {String|Function} selector A selector or a pre-compiled
   *  selector function built with Sizzle.compile
   * @param {Element} context
   * @param {Array} [results]
   * @param {Array} [seed] A set of elements to match against
   */


  select = Sizzle.select = function (selector, context, results, seed) {
    var i,
        tokens,
        token,
        type,
        find,
        compiled = typeof selector === "function" && selector,
        match = !seed && tokenize(selector = compiled.selector || selector);
    results = results || []; // Try to minimize operations if there is only one selector in the list and no seed
    // (the latter of which guarantees us context)

    if (match.length === 1) {
      // Reduce context if the leading compound selector is an ID
      tokens = match[0] = match[0].slice(0);

      if (tokens.length > 2 && (token = tokens[0]).type === "ID" && context.nodeType === 9 && documentIsHTML && Expr.relative[tokens[1].type]) {
        context = (Expr.find["ID"](token.matches[0].replace(runescape, funescape), context) || [])[0];

        if (!context) {
          return results; // Precompiled matchers will still verify ancestry, so step up a level
        } else if (compiled) {
          context = context.parentNode;
        }

        selector = selector.slice(tokens.shift().value.length);
      } // Fetch a seed set for right-to-left matching


      i = matchExpr["needsContext"].test(selector) ? 0 : tokens.length;

      while (i--) {
        token = tokens[i]; // Abort if we hit a combinator

        if (Expr.relative[type = token.type]) {
          break;
        }

        if (find = Expr.find[type]) {
          // Search, expanding context for leading sibling combinators
          if (seed = find(token.matches[0].replace(runescape, funescape), rsibling.test(tokens[0].type) && testContext(context.parentNode) || context)) {
            // If seed is empty or no tokens remain, we can return early
            tokens.splice(i, 1);
            selector = seed.length && toSelector(tokens);

            if (!selector) {
              push.apply(results, seed);
              return results;
            }

            break;
          }
        }
      }
    } // Compile and execute a filtering function if one is not provided
    // Provide `match` to avoid retokenization if we modified the selector above


    (compiled || compile(selector, match))(seed, context, !documentIsHTML, results, !context || rsibling.test(selector) && testContext(context.parentNode) || context);
    return results;
  }; // One-time assignments
  // Sort stability


  support.sortStable = expando.split("").sort(sortOrder).join("") === expando; // Support: Chrome 14-35+
  // Always assume duplicates if they aren't passed to the comparison function

  support.detectDuplicates = !!hasDuplicate; // Initialize against the default document

  setDocument(); // Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
  // Detached nodes confoundingly follow *each other*

  support.sortDetached = assert(function (el) {
    // Should return 1, but returns 4 (following)
    return el.compareDocumentPosition(document.createElement("fieldset")) & 1;
  }); // Support: IE<8
  // Prevent attribute/property "interpolation"
  // https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx

  if (!assert(function (el) {
    el.innerHTML = "<a href='#'></a>";
    return el.firstChild.getAttribute("href") === "#";
  })) {
    addHandle("type|href|height|width", function (elem, name, isXML) {
      if (!isXML) {
        return elem.getAttribute(name, name.toLowerCase() === "type" ? 1 : 2);
      }
    });
  } // Support: IE<9
  // Use defaultValue in place of getAttribute("value")


  if (!support.attributes || !assert(function (el) {
    el.innerHTML = "<input/>";
    el.firstChild.setAttribute("value", "");
    return el.firstChild.getAttribute("value") === "";
  })) {
    addHandle("value", function (elem, name, isXML) {
      if (!isXML && elem.nodeName.toLowerCase() === "input") {
        return elem.defaultValue;
      }
    });
  } // Support: IE<9
  // Use getAttributeNode to fetch booleans when getAttribute lies


  if (!assert(function (el) {
    return el.getAttribute("disabled") == null;
  })) {
    addHandle(booleans, function (elem, name, isXML) {
      var val;

      if (!isXML) {
        return elem[name] === true ? name.toLowerCase() : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null;
      }
    });
  } // EXPOSE


  var _sizzle = window.Sizzle;

  Sizzle.noConflict = function () {
    if (window.Sizzle === Sizzle) {
      window.Sizzle = _sizzle;
    }

    return Sizzle;
  };

  if (true) {
    !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
      return Sizzle;
    }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)); // Sizzle requires that there be a global window in Common-JS like environments
  } else {} // EXPOSE

})(window);

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
exports.transpile = transpile;

var sizzle = _interopRequireWildcard(__webpack_require__(/*! ./sizzle.js */ "./src/sizzle.js"));

var _utils = __webpack_require__(/*! ./utils.js */ "./src/utils.js");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/**
 * Traverse the Columns clause of the AST and return a Set containing the listed columns
 * @param  {Object} node The Columns clause of the AST
 * @return {Set} Set containing the columns listed in the From clause
 */
function _getColumnReferences(node) {
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


function _augmentWhere(node, columns) {
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
 * @param  {String} scope the upmost parent
 * @return {String} compiled DOMString
 */


function _compileSelectors(selectors, scope) {
  var outp = [];

  for (var key in selectors) {
    var selector = "";

    for (var i = 0; i < selectors[key].length; i++) {
      selector += scope + " " + key + selectors[key][i];
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
 * @return {Array<String|Function>}
 */


function transpile(ast) {
  var columns = _getColumnReferences(ast.columns);

  var scope = ast.from.table;

  _augmentWhere(ast.where, columns);

  var selectors = {};
  columns.forEach(function (table) {
    selectors[table] = [""];
  });

  _constructSelectors(ast.where, selectors);

  var compiled = _compileSelectors(selectors, scope);

  var directives = [compiled];
  directives.push(sizzle.default);
  if (ast.limit) directives.push(_utils.limiter.bind(null, ast.limit.value));
  return directives;
}

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sort = sort;
exports.execute = execute;
exports.limiter = limiter;

/**
 * Directive: Sort
 * @param  {Function} f : function used to compare
 * @param  {Any[]} arr : list to sort
 * @return {Any[]} : sorted list
 */
function sort(f, arr) {
  arr.sort(f);
  return arr;
}
/**
 * Reduces a list of directives by applying
 * each element on its previous element and
 * returns the final Element array or Element
 * @param  {Array<String|Function>} directives
 * @return {Element[]|Element}
 */


function execute(directives) {
  if (!directives || directives.length === 0) return null;
  var result = directives[0];

  for (var i = 1; i < directives.length; i++) {
    result = directives[i](result);
  }

  return result;
}
/**
 * Directive: Limiter
 * @param  {Number} limit max amount of elements in the array
 * @param  {Any[]} arr
 * @return {Any[]|Any}
 */


function limiter(limit, arr) {
  var out = arr.splice(0, limit);
  return out.length === 1 ? out[0] : out;
}

/***/ })

/******/ });
});
//# sourceMappingURL=domql.js.map