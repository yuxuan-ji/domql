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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
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
exports.default = void 0;

var tokenizer = _interopRequireWildcard(__webpack_require__(/*! ./domql_tokenizer.js */ "./src/domql_tokenizer.js"));

var parser = _interopRequireWildcard(__webpack_require__(/*! ./domql_parser.js */ "./src/domql_parser.js"));

var transpiler = parser;

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Domql =
/*#__PURE__*/
function () {
  function Domql() {
    var query = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

    _classCallCheck(this, Domql);

    this._name = 'Domql';
    this.compile(query);
  }

  _createClass(Domql, [{
    key: "compile",
    value: function compile() {
      var query = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      this._query = query;
      var tokens = tokenizer.tokenize(query);
      var ast = parser.parse(tokens);
      var directives = transpiler.transpile(ast);
    }
  }, {
    key: "execute",
    value: function execute() {
      return document.querySelector(this._query);
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

exports.default = Domql;
module.exports = exports["default"];

/***/ }),

/***/ "./src/domql_parser.js":
/*!*****************************!*\
  !*** ./src/domql_parser.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parse = parse;

function parse(tokens) {
  return null;
}

/***/ }),

/***/ "./src/domql_tokenizer.js":
/*!********************************!*\
  !*** ./src/domql_tokenizer.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tokenize = tokenize;
exports.Token = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Token =
/*#__PURE__*/
function () {
  function Token(kind, lexeme) {
    _classCallCheck(this, Token);

    this._kind = kind;
    this._lexeme = lexeme;
  }

  _createClass(Token, [{
    key: "kind",
    get: function get() {
      return this._kind;
    }
  }, {
    key: "lexeme",
    get: function get() {
      return this._lexeme;
    }
  }]);

  return Token;
}();

exports.Token = Token;

function setupTokenKinds() {
  Token.Kind = {
    VALUE: null,
    LPAREN: null,
    RPAREN: null,
    EQ: null,
    NE: null,
    LT: null,
    GT: null,
    LE: null,
    GE: null,
    STAR: null,
    PCT: null,
    COMMA: null,
    DOT: null,
    SEMI: null,
    SQUOTE: null,
    DQUOTE: null,
    SELECT: null,
    FROM: null,
    WHERE: null,
    ORDER: null,
    BY: null,
    IN: null,
    LIKE: null,
    LIMIT: null,
    AND: null,
    OR: null,
    WHITESPACE: null
  };
  var keys = Object.keys(Token.Kind);

  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    Token.Kind[key] = i;
  }
}

setupTokenKinds();

var AsmDFA =
/*#__PURE__*/
function () {
  function AsmDFA() {
    _classCallCheck(this, AsmDFA);

    // Setup states
    this.State = Token.Kind;
    var keys = Object.keys(Token.Kind);
    var i = keys.length;
    this.State.FAIL = i++;
    this.State.START = i++;
    this.State.EXCLAMATION = i++;
    this.State.LARGEST_STATE = this.State.EXCLAMATION; // Setup accepting states

    this._acceptingStates = new Set(Object.values(Token.Kind)); // Setup transition function

    this._TF_LEN = this.State.LARGEST_STATE + 1;
    this._TF_STATE_LEN = 128;
    this._transitionFunction = new Array(this._TF_LEN);

    for (i = 0; i < this._TF_LEN; i++) {
      this._transitionFunction[i] = {};
    }

    function isalpha(c) {
      return /^[a-zA-Z()]$/.test(c);
    } // function isalnum(c) {
    //   var code, i;
    //   code = c.charCodeAt(i);
    //   if (!(code > 47 && code < 58) && // numeric (0-9)
    //       !(code > 64 && code < 91) && // upper alpha (A-Z)
    //       !(code > 96 && code < 123)) { // lower alpha (a-z)
    //     return false;
    //   }
    //   return true;
    // }
    // function isdigit(c) {
    //   if (c >= '0' && c <= '9') return true;
    //   return false;
    // }
    // function allowall(c) { return true; }


    function isspace(c) {
      return " \t\n\r\v".indexOf(c) !== -1;
    }

    this.registerTransition(this.State.START, isalpha, this.State.VALUE);
    this.registerTransition(this.State.VALUE, isalpha, this.State.VALUE);
    this.registerTransition(this.State.START, "(", this.State.LPAREN);
    this.registerTransition(this.State.START, ")", this.State.RPAREN);
    this.registerTransition(this.State.START, "=", this.State.EQ);
    this.registerTransition(this.State.START, "!", this.State.EXCLAMATION);
    this.registerTransition(this.State.EXCLAMATION, "=", this.State.NE);
    this.registerTransition(this.State.START, "<", this.State.LT);
    this.registerTransition(this.State.START, ">", this.State.GT);
    this.registerTransition(this.State.LT, "=", this.State.LE);
    this.registerTransition(this.State.GT, "=", this.State.GE);
    this.registerTransition(this.State.START, "*", this.State.STAR);
    this.registerTransition(this.State.START, "%", this.State.PCT);
    this.registerTransition(this.State.START, ",", this.State.COMMA);
    this.registerTransition(this.State.START, ";", this.State.SEMI);
    this.registerTransition(this.State.START, isspace, this.State.WHITESPACE);
    this.registerTransition(this.State.WHITESPACE, isspace, this.State.WHITESPACE);
    this.registerTransition(this.State.START, "'", this.State.SQUOTE);
    this.registerTransition(this.State.START, '"', this.State.DQUOTE);
    this.registerTransition(this.State.START, '.', this.State.DOT);
  } // Register a transition on all chars in chars or on all chars matching test


  _createClass(AsmDFA, [{
    key: "registerTransition",
    value: function registerTransition(oldState, chars, newState) {
      if (typeof chars === 'function') {
        for (var c = 0; c < this._TF_STATE_LEN; ++c) {
          if (chars(String.fromCharCode(c))) this._transitionFunction[oldState][c] = newState;

          if (this._transitionFunction[0][32] === 26) {
            console.log();
          }
        }
      } else {
        for (var i = 0; i < chars.length; i++) {
          this._transitionFunction[oldState][chars[i].charCodeAt()] = newState;
        }
      }
    } // Returns the state corresponding to following a transition
    // from the given starting state on the given character,
    // or a special fail state if the transition does not exist.

  }, {
    key: "transition",
    value: function transition(state, nextChar) {
      return this._transitionFunction[state][nextChar.charCodeAt()] === undefined ? this.State.FAIL : this._transitionFunction[state][nextChar.charCodeAt()];
    }
  }, {
    key: "failed",
    // Checks whether the state returned by transition
    // corresponds to failure to transition.
    value: function failed(state) {
      return state === this.State.FAIL;
    } // Checks whether the state returned by transition
    // is an accepting state.

  }, {
    key: "accept",
    value: function accept(state) {
      return this._acceptingStates.has(state);
    } // Returns the starting state of the DFA

  }, {
    key: "start",
    value: function start() {
      return this.State.START;
    } // Tokenizes an input string according to the SMM algorithm.
    // You will learn the SMM algorithm in class around the time of Assignment 6.

  }, {
    key: "simplifiedMaximalMunch",
    value: function simplifiedMaximalMunch(input) {
      var result = [];
      var state = this.start();
      var munchedInput = ''; // We can't use a range-based for loop effectively here
      // since the iterator doesn't always increment.

      for (var _i = 0; _i < input.length;) {
        var c = input[_i];
        var oldState = state;
        state = this.transition(state, c);

        if (!this.failed(state)) {
          munchedInput += c;
          oldState = state;
          ++_i;
        }

        if (_i === input.length || this.failed(state)) {
          if (this.accept(oldState)) {
            var token = new Token(oldState, munchedInput);

            if (token.kind === Token.Kind.VALUE) {
              if (token.lexeme === "SELECT") token = new Token(Token.Kind.SELECT, token.lexeme);else if (token.lexeme === "FROM") token = new Token(Token.Kind.FROM, token.lexeme);else if (token.lexeme === "WHERE") token = new Token(Token.Kind.WHERE, token.lexeme);else if (token.lexeme === "ORDER") token = new Token(Token.Kind.ORDER, token.lexeme);else if (token.lexeme === "BY") token = new Token(Token.Kind.BY, token.lexeme);else if (token.lexeme === "LIMIT") token = new Token(Token.Kind.LIMIT, token.lexeme);else if (token.lexeme === "AND") token = new Token(Token.Kind.AND, token.lexeme);else if (token.lexeme === "OR") token = new Token(Token.Kind.OR, token.lexeme);else if (token.lexeme === "LIKE") token = new Token(Token.Kind.LIKE, token.lexeme);else if (token.lexeme === "IN") token = new Token(Token.Kind.IN, token.lexeme);
            } else if (token.kind === Token.Kind.SQUOTE || token.kind === Token.Kind.DQUOTE) {
              while (_i < input.length) {
                c = input[_i];
                munchedInput += c;
                ++_i;
                if (c === token.lexeme) break;
              }

              if (munchedInput[munchedInput.length - 1] !== token.lexeme) {
                throw new SyntaxError("Scanning failure: Simplified maximal munch failed on input: " + munchedInput);
              }

              token = new Token(Token.Kind.VALUE, munchedInput);
            }

            result.push(token);
            munchedInput = "";
            state = this.start();
          } else {
            if (this.failed(state)) {
              munchedInput += c;
            }

            throw new SyntaxError("Scanning failure: Simplified maximal munch failed on input: " + munchedInput);
          }
        }
      }

      return result;
    }
  }]);

  return AsmDFA;
}();

function tokenize() {
  var query = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  if (query === null || query === undefined) return null;
  var dfa = new AsmDFA();
  var tokens = dfa.simplifiedMaximalMunch(query); // We need to:
  // * Remove WHITESPACE tokens entirely.

  var newTokens = [];
  tokens.forEach(function (token) {
    if (token.kind !== Token.Kind.WHITESPACE) {
      newTokens.push(token);
    }
  });
  return newTokens;
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Domql", {
  enumerable: true,
  get: function get() {
    return _domql.default;
  }
});

var _domql = _interopRequireDefault(__webpack_require__(/*! ./domql.js */ "./src/domql.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kb21xbC93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vZG9tcWwvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZG9tcWwvLi9zcmMvZG9tcWwuanMiLCJ3ZWJwYWNrOi8vZG9tcWwvLi9zcmMvZG9tcWxfcGFyc2VyLmpzIiwid2VicGFjazovL2RvbXFsLy4vc3JjL2RvbXFsX3Rva2VuaXplci5qcyIsIndlYnBhY2s6Ly9kb21xbC8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJEb21xbCIsInF1ZXJ5IiwiX25hbWUiLCJjb21waWxlIiwiX3F1ZXJ5IiwidG9rZW5zIiwidG9rZW5pemVyIiwidG9rZW5pemUiLCJhc3QiLCJwYXJzZXIiLCJwYXJzZSIsImRpcmVjdGl2ZXMiLCJ0cmFuc3BpbGVyIiwidHJhbnNwaWxlIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiVG9rZW4iLCJraW5kIiwibGV4ZW1lIiwiX2tpbmQiLCJfbGV4ZW1lIiwic2V0dXBUb2tlbktpbmRzIiwiS2luZCIsIlZBTFVFIiwiTFBBUkVOIiwiUlBBUkVOIiwiRVEiLCJORSIsIkxUIiwiR1QiLCJMRSIsIkdFIiwiU1RBUiIsIlBDVCIsIkNPTU1BIiwiRE9UIiwiU0VNSSIsIlNRVU9URSIsIkRRVU9URSIsIlNFTEVDVCIsIkZST00iLCJXSEVSRSIsIk9SREVSIiwiQlkiLCJJTiIsIkxJS0UiLCJMSU1JVCIsIkFORCIsIk9SIiwiV0hJVEVTUEFDRSIsImtleXMiLCJPYmplY3QiLCJpIiwibGVuZ3RoIiwia2V5IiwiQXNtREZBIiwiU3RhdGUiLCJGQUlMIiwiU1RBUlQiLCJFWENMQU1BVElPTiIsIkxBUkdFU1RfU1RBVEUiLCJfYWNjZXB0aW5nU3RhdGVzIiwiU2V0IiwidmFsdWVzIiwiX1RGX0xFTiIsIl9URl9TVEFURV9MRU4iLCJfdHJhbnNpdGlvbkZ1bmN0aW9uIiwiQXJyYXkiLCJpc2FscGhhIiwiYyIsInRlc3QiLCJpc3NwYWNlIiwiaW5kZXhPZiIsInJlZ2lzdGVyVHJhbnNpdGlvbiIsIm9sZFN0YXRlIiwiY2hhcnMiLCJuZXdTdGF0ZSIsIlN0cmluZyIsImZyb21DaGFyQ29kZSIsImNvbnNvbGUiLCJsb2ciLCJjaGFyQ29kZUF0Iiwic3RhdGUiLCJuZXh0Q2hhciIsInVuZGVmaW5lZCIsImhhcyIsImlucHV0IiwicmVzdWx0Iiwic3RhcnQiLCJtdW5jaGVkSW5wdXQiLCJ0cmFuc2l0aW9uIiwiZmFpbGVkIiwiYWNjZXB0IiwidG9rZW4iLCJTeW50YXhFcnJvciIsInB1c2giLCJkZmEiLCJzaW1wbGlmaWVkTWF4aW1hbE11bmNoIiwibmV3VG9rZW5zIiwiZm9yRWFjaCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEZBOztBQUNBOzs7Ozs7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SkQ7QUFNQSxTQUFPSyxTQUFQO0FBQ0QsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDalBEIiwiZmlsZSI6ImRvbXFsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJkb21xbFwiLCBbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJkb21xbFwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJkb21xbFwiXSA9IGZhY3RvcnkoKTtcbn0pKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyA/IHNlbGYgOiB0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCAqIGFzIHRva2VuaXplciBmcm9tICcuL2RvbXFsX3Rva2VuaXplci5qcyc7XHJcbmltcG9ydCAqIGFzIHBhcnNlciBmcm9tICcuL2RvbXFsX3BhcnNlci5qcyc7XHJcbmltcG9ydCAqIGFzIHRyYW5zcGlsZXIgZnJvbSAnLi9kb21xbF9wYXJzZXIuanMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRG9tcWwge1xyXG5cclxuICBjb25zdHJ1Y3RvcihxdWVyeSA9IG51bGwpIHtcclxuICAgIHRoaXMuX25hbWUgPSAnRG9tcWwnO1xyXG4gICAgdGhpcy5jb21waWxlKHF1ZXJ5KTtcclxuICB9XHJcblxyXG4gIGdldCBuYW1lKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX25hbWU7XHJcbiAgfVxyXG5cclxuICBnZXQgcXVlcnkoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fcXVlcnk7XHJcbiAgfVxyXG5cclxuICBjb21waWxlKHF1ZXJ5ID0gbnVsbCkge1xyXG4gICAgdGhpcy5fcXVlcnkgPSBxdWVyeTtcclxuICAgIHZhciB0b2tlbnMgPSB0b2tlbml6ZXIudG9rZW5pemUocXVlcnkpO1xyXG4gICAgdmFyIGFzdCA9IHBhcnNlci5wYXJzZSh0b2tlbnMpO1xyXG4gICAgdmFyIGRpcmVjdGl2ZXMgPSB0cmFuc3BpbGVyLnRyYW5zcGlsZShhc3QpO1xyXG4gIH1cclxuXHJcbiAgZXhlY3V0ZSgpIHtcclxuICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRoaXMuX3F1ZXJ5KTtcclxuICB9XHJcbn1cclxuIiwiZXhwb3J0IGZ1bmN0aW9uIHBhcnNlKHRva2Vucykge1xyXG4gIHJldHVybiBudWxsO1xyXG59XHJcbiIsImV4cG9ydCBjbGFzcyBUb2tlbiB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGtpbmQsIGxleGVtZSkge1xyXG4gICAgdGhpcy5fa2luZCA9IGtpbmQ7XHJcbiAgICB0aGlzLl9sZXhlbWUgPSBsZXhlbWU7XHJcbiAgfVxyXG5cclxuICBnZXQga2luZCgpIHtcclxuICAgIHJldHVybiB0aGlzLl9raW5kO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGxleGVtZSgpIHtcclxuICAgIHJldHVybiB0aGlzLl9sZXhlbWU7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuZnVuY3Rpb24gc2V0dXBUb2tlbktpbmRzKCkge1xyXG4gIFRva2VuLktpbmQgPSB7XHJcbiAgICBWQUxVRTogbnVsbCxcclxuICAgIExQQVJFTjogbnVsbCxcclxuICAgIFJQQVJFTjogbnVsbCxcclxuICAgIEVROiBudWxsLFxyXG4gICAgTkU6IG51bGwsXHJcbiAgICBMVDogbnVsbCxcclxuICAgIEdUOiBudWxsLFxyXG4gICAgTEU6IG51bGwsXHJcbiAgICBHRTogbnVsbCxcclxuICAgIFNUQVI6IG51bGwsXHJcbiAgICBQQ1Q6IG51bGwsXHJcbiAgICBDT01NQTogbnVsbCxcclxuICAgIERPVDogbnVsbCxcclxuICAgIFNFTUk6IG51bGwsXHJcbiAgICBTUVVPVEU6IG51bGwsXHJcbiAgICBEUVVPVEU6IG51bGwsXHJcbiAgICBTRUxFQ1Q6IG51bGwsXHJcbiAgICBGUk9NOiBudWxsLFxyXG4gICAgV0hFUkU6IG51bGwsXHJcbiAgICBPUkRFUjogbnVsbCxcclxuICAgIEJZOiBudWxsLFxyXG4gICAgSU46IG51bGwsXHJcbiAgICBMSUtFOiBudWxsLFxyXG4gICAgTElNSVQ6IG51bGwsXHJcbiAgICBBTkQ6IG51bGwsXHJcbiAgICBPUjogbnVsbCxcclxuXHJcbiAgICBXSElURVNQQUNFOiBudWxsXHJcbiAgfTtcclxuXHJcbiAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhUb2tlbi5LaW5kKTtcclxuICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcclxuICAgIHZhciBrZXkgPSBrZXlzW2ldO1xyXG4gICAgVG9rZW4uS2luZFtrZXldID0gaTtcclxuICB9XHJcbn1cclxuXHJcbnNldHVwVG9rZW5LaW5kcygpO1xyXG5cclxuY2xhc3MgQXNtREZBIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIC8vIFNldHVwIHN0YXRlc1xyXG4gICAgdGhpcy5TdGF0ZSA9IFRva2VuLktpbmQ7XHJcbiAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKFRva2VuLktpbmQpO1xyXG4gICAgdmFyIGkgPSBrZXlzLmxlbmd0aDtcclxuICAgIHRoaXMuU3RhdGUuRkFJTCA9IGkrKztcclxuICAgIHRoaXMuU3RhdGUuU1RBUlQgPSBpKys7XHJcbiAgICB0aGlzLlN0YXRlLkVYQ0xBTUFUSU9OID0gaSsrO1xyXG4gICAgdGhpcy5TdGF0ZS5MQVJHRVNUX1NUQVRFID0gdGhpcy5TdGF0ZS5FWENMQU1BVElPTjtcclxuXHJcbiAgICAvLyBTZXR1cCBhY2NlcHRpbmcgc3RhdGVzXHJcbiAgICB0aGlzLl9hY2NlcHRpbmdTdGF0ZXMgPSBuZXcgU2V0KE9iamVjdC52YWx1ZXMoVG9rZW4uS2luZCkpO1xyXG5cclxuICAgIC8vIFNldHVwIHRyYW5zaXRpb24gZnVuY3Rpb25cclxuICAgIHRoaXMuX1RGX0xFTiA9IHRoaXMuU3RhdGUuTEFSR0VTVF9TVEFURSArIDE7XHJcbiAgICB0aGlzLl9URl9TVEFURV9MRU4gPSAxMjg7XHJcbiAgICB0aGlzLl90cmFuc2l0aW9uRnVuY3Rpb24gPSBuZXcgQXJyYXkodGhpcy5fVEZfTEVOKTtcclxuICAgIGZvciAoaSA9IDA7IGkgPCB0aGlzLl9URl9MRU47IGkrKykge1xyXG4gICAgICB0aGlzLl90cmFuc2l0aW9uRnVuY3Rpb25baV0gPSB7fTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBpc2FscGhhKGMpIHsgcmV0dXJuIC9eW2EtekEtWigpXSQvLnRlc3QoYyk7IH1cclxuICAgIC8vIGZ1bmN0aW9uIGlzYWxudW0oYykge1xyXG4gICAgLy8gICB2YXIgY29kZSwgaTtcclxuICAgIC8vICAgY29kZSA9IGMuY2hhckNvZGVBdChpKTtcclxuICAgIC8vICAgaWYgKCEoY29kZSA+IDQ3ICYmIGNvZGUgPCA1OCkgJiYgLy8gbnVtZXJpYyAoMC05KVxyXG4gICAgLy8gICAgICAgIShjb2RlID4gNjQgJiYgY29kZSA8IDkxKSAmJiAvLyB1cHBlciBhbHBoYSAoQS1aKVxyXG4gICAgLy8gICAgICAgIShjb2RlID4gOTYgJiYgY29kZSA8IDEyMykpIHsgLy8gbG93ZXIgYWxwaGEgKGEteilcclxuICAgIC8vICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAvLyAgIH1cclxuICAgIC8vICAgcmV0dXJuIHRydWU7XHJcbiAgICAvLyB9XHJcbiAgICAvLyBmdW5jdGlvbiBpc2RpZ2l0KGMpIHtcclxuICAgIC8vICAgaWYgKGMgPj0gJzAnICYmIGMgPD0gJzknKSByZXR1cm4gdHJ1ZTtcclxuICAgIC8vICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgLy8gfVxyXG4gICAgLy8gZnVuY3Rpb24gYWxsb3dhbGwoYykgeyByZXR1cm4gdHJ1ZTsgfVxyXG4gICAgZnVuY3Rpb24gaXNzcGFjZShjKSB7cmV0dXJuIFwiIFxcdFxcblxcclxcdlwiLmluZGV4T2YoYykgIT09IC0xOyB9XHJcblxyXG4gICAgdGhpcy5yZWdpc3RlclRyYW5zaXRpb24odGhpcy5TdGF0ZS5TVEFSVCwgaXNhbHBoYSwgdGhpcy5TdGF0ZS5WQUxVRSk7XHJcbiAgICB0aGlzLnJlZ2lzdGVyVHJhbnNpdGlvbih0aGlzLlN0YXRlLlZBTFVFLCBpc2FscGhhLCB0aGlzLlN0YXRlLlZBTFVFKTtcclxuICAgIHRoaXMucmVnaXN0ZXJUcmFuc2l0aW9uKHRoaXMuU3RhdGUuU1RBUlQsIFwiKFwiLCB0aGlzLlN0YXRlLkxQQVJFTik7XHJcbiAgICB0aGlzLnJlZ2lzdGVyVHJhbnNpdGlvbih0aGlzLlN0YXRlLlNUQVJULCBcIilcIiwgdGhpcy5TdGF0ZS5SUEFSRU4pO1xyXG4gICAgdGhpcy5yZWdpc3RlclRyYW5zaXRpb24odGhpcy5TdGF0ZS5TVEFSVCwgXCI9XCIsIHRoaXMuU3RhdGUuRVEpO1xyXG4gICAgdGhpcy5yZWdpc3RlclRyYW5zaXRpb24odGhpcy5TdGF0ZS5TVEFSVCwgXCIhXCIsIHRoaXMuU3RhdGUuRVhDTEFNQVRJT04pO1xyXG4gICAgdGhpcy5yZWdpc3RlclRyYW5zaXRpb24odGhpcy5TdGF0ZS5FWENMQU1BVElPTiwgXCI9XCIsIHRoaXMuU3RhdGUuTkUpO1xyXG4gICAgdGhpcy5yZWdpc3RlclRyYW5zaXRpb24odGhpcy5TdGF0ZS5TVEFSVCwgXCI8XCIsIHRoaXMuU3RhdGUuTFQpO1xyXG4gICAgdGhpcy5yZWdpc3RlclRyYW5zaXRpb24odGhpcy5TdGF0ZS5TVEFSVCwgXCI+XCIsIHRoaXMuU3RhdGUuR1QpO1xyXG4gICAgdGhpcy5yZWdpc3RlclRyYW5zaXRpb24odGhpcy5TdGF0ZS5MVCwgXCI9XCIsIHRoaXMuU3RhdGUuTEUpO1xyXG4gICAgdGhpcy5yZWdpc3RlclRyYW5zaXRpb24odGhpcy5TdGF0ZS5HVCwgXCI9XCIsIHRoaXMuU3RhdGUuR0UpO1xyXG4gICAgdGhpcy5yZWdpc3RlclRyYW5zaXRpb24odGhpcy5TdGF0ZS5TVEFSVCwgXCIqXCIsIHRoaXMuU3RhdGUuU1RBUik7XHJcbiAgICB0aGlzLnJlZ2lzdGVyVHJhbnNpdGlvbih0aGlzLlN0YXRlLlNUQVJULCBcIiVcIiwgdGhpcy5TdGF0ZS5QQ1QpO1xyXG4gICAgdGhpcy5yZWdpc3RlclRyYW5zaXRpb24odGhpcy5TdGF0ZS5TVEFSVCwgXCIsXCIsIHRoaXMuU3RhdGUuQ09NTUEpO1xyXG4gICAgdGhpcy5yZWdpc3RlclRyYW5zaXRpb24odGhpcy5TdGF0ZS5TVEFSVCwgXCI7XCIsIHRoaXMuU3RhdGUuU0VNSSk7XHJcbiAgICB0aGlzLnJlZ2lzdGVyVHJhbnNpdGlvbih0aGlzLlN0YXRlLlNUQVJULCBpc3NwYWNlLCB0aGlzLlN0YXRlLldISVRFU1BBQ0UpO1xyXG4gICAgdGhpcy5yZWdpc3RlclRyYW5zaXRpb24odGhpcy5TdGF0ZS5XSElURVNQQUNFLCBpc3NwYWNlLCB0aGlzLlN0YXRlLldISVRFU1BBQ0UpO1xyXG4gICAgdGhpcy5yZWdpc3RlclRyYW5zaXRpb24odGhpcy5TdGF0ZS5TVEFSVCwgXCInXCIsIHRoaXMuU3RhdGUuU1FVT1RFKTtcclxuICAgIHRoaXMucmVnaXN0ZXJUcmFuc2l0aW9uKHRoaXMuU3RhdGUuU1RBUlQsICdcIicsIHRoaXMuU3RhdGUuRFFVT1RFKTtcclxuICAgIHRoaXMucmVnaXN0ZXJUcmFuc2l0aW9uKHRoaXMuU3RhdGUuU1RBUlQsICcuJywgdGhpcy5TdGF0ZS5ET1QpO1xyXG4gIH1cclxuICAvLyBSZWdpc3RlciBhIHRyYW5zaXRpb24gb24gYWxsIGNoYXJzIGluIGNoYXJzIG9yIG9uIGFsbCBjaGFycyBtYXRjaGluZyB0ZXN0XHJcbiAgcmVnaXN0ZXJUcmFuc2l0aW9uKG9sZFN0YXRlLCBjaGFycywgbmV3U3RhdGUpIHtcclxuICAgIGlmICh0eXBlb2YgY2hhcnMgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgZm9yICh2YXIgYyA9IDA7IGMgPCB0aGlzLl9URl9TVEFURV9MRU47ICsrYykge1xyXG4gICAgICAgIGlmIChjaGFycyhTdHJpbmcuZnJvbUNoYXJDb2RlKGMpKSkgdGhpcy5fdHJhbnNpdGlvbkZ1bmN0aW9uW29sZFN0YXRlXVtjXSA9IG5ld1N0YXRlO1xyXG4gICAgICAgIGlmICh0aGlzLl90cmFuc2l0aW9uRnVuY3Rpb25bMF1bMzJdID09PSAyNikge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hhcnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICB0aGlzLl90cmFuc2l0aW9uRnVuY3Rpb25bb2xkU3RhdGVdW2NoYXJzW2ldLmNoYXJDb2RlQXQoKV0gPSBuZXdTdGF0ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICAvLyBSZXR1cm5zIHRoZSBzdGF0ZSBjb3JyZXNwb25kaW5nIHRvIGZvbGxvd2luZyBhIHRyYW5zaXRpb25cclxuICAvLyBmcm9tIHRoZSBnaXZlbiBzdGFydGluZyBzdGF0ZSBvbiB0aGUgZ2l2ZW4gY2hhcmFjdGVyLFxyXG4gIC8vIG9yIGEgc3BlY2lhbCBmYWlsIHN0YXRlIGlmIHRoZSB0cmFuc2l0aW9uIGRvZXMgbm90IGV4aXN0LlxyXG4gIHRyYW5zaXRpb24oc3RhdGUsIG5leHRDaGFyKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fdHJhbnNpdGlvbkZ1bmN0aW9uW3N0YXRlXVtuZXh0Q2hhci5jaGFyQ29kZUF0KCldID09PSB1bmRlZmluZWQgP1xyXG4gICAgICB0aGlzLlN0YXRlLkZBSUwgOiB0aGlzLl90cmFuc2l0aW9uRnVuY3Rpb25bc3RhdGVdW25leHRDaGFyLmNoYXJDb2RlQXQoKV07XHJcbiAgfTtcclxuXHJcbiAgLy8gQ2hlY2tzIHdoZXRoZXIgdGhlIHN0YXRlIHJldHVybmVkIGJ5IHRyYW5zaXRpb25cclxuICAvLyBjb3JyZXNwb25kcyB0byBmYWlsdXJlIHRvIHRyYW5zaXRpb24uXHJcbiAgZmFpbGVkKHN0YXRlKSB7IHJldHVybiBzdGF0ZSA9PT0gdGhpcy5TdGF0ZS5GQUlMOyB9XHJcblxyXG4gIC8vIENoZWNrcyB3aGV0aGVyIHRoZSBzdGF0ZSByZXR1cm5lZCBieSB0cmFuc2l0aW9uXHJcbiAgLy8gaXMgYW4gYWNjZXB0aW5nIHN0YXRlLlxyXG4gIGFjY2VwdChzdGF0ZSkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2FjY2VwdGluZ1N0YXRlcy5oYXMoc3RhdGUpO1xyXG4gIH1cclxuXHJcbiAgLy8gUmV0dXJucyB0aGUgc3RhcnRpbmcgc3RhdGUgb2YgdGhlIERGQVxyXG4gIHN0YXJ0KCkgeyByZXR1cm4gdGhpcy5TdGF0ZS5TVEFSVDsgfVxyXG5cclxuICAvLyBUb2tlbml6ZXMgYW4gaW5wdXQgc3RyaW5nIGFjY29yZGluZyB0byB0aGUgU01NIGFsZ29yaXRobS5cclxuICAvLyBZb3Ugd2lsbCBsZWFybiB0aGUgU01NIGFsZ29yaXRobSBpbiBjbGFzcyBhcm91bmQgdGhlIHRpbWUgb2YgQXNzaWdubWVudCA2LlxyXG4gIHNpbXBsaWZpZWRNYXhpbWFsTXVuY2goaW5wdXQpIHtcclxuICAgIHZhciByZXN1bHQgPSBbXTtcclxuXHJcbiAgICB2YXIgc3RhdGUgPSB0aGlzLnN0YXJ0KCk7XHJcbiAgICB2YXIgbXVuY2hlZElucHV0ID0gJyc7XHJcblxyXG4gICAgLy8gV2UgY2FuJ3QgdXNlIGEgcmFuZ2UtYmFzZWQgZm9yIGxvb3AgZWZmZWN0aXZlbHkgaGVyZVxyXG4gICAgLy8gc2luY2UgdGhlIGl0ZXJhdG9yIGRvZXNuJ3QgYWx3YXlzIGluY3JlbWVudC5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW5wdXQubGVuZ3RoOykge1xyXG4gICAgICB2YXIgYyA9IGlucHV0W2ldO1xyXG4gICAgICB2YXIgb2xkU3RhdGUgPSBzdGF0ZTtcclxuICAgICAgc3RhdGUgPSB0aGlzLnRyYW5zaXRpb24oc3RhdGUsIGMpO1xyXG5cclxuICAgICAgaWYgKCF0aGlzLmZhaWxlZChzdGF0ZSkpIHtcclxuICAgICAgICBtdW5jaGVkSW5wdXQgKz0gYztcclxuICAgICAgICBvbGRTdGF0ZSA9IHN0YXRlO1xyXG5cclxuICAgICAgICArK2k7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChpID09PSBpbnB1dC5sZW5ndGggfHwgdGhpcy5mYWlsZWQoc3RhdGUpKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuYWNjZXB0KG9sZFN0YXRlKSkge1xyXG4gICAgICAgICAgdmFyIHRva2VuID0gbmV3IFRva2VuKG9sZFN0YXRlLCBtdW5jaGVkSW5wdXQpO1xyXG5cclxuICAgICAgICAgIGlmICh0b2tlbi5raW5kID09PSBUb2tlbi5LaW5kLlZBTFVFKSB7XHJcbiAgICAgICAgICAgIGlmICh0b2tlbi5sZXhlbWUgPT09IFwiU0VMRUNUXCIpIHRva2VuID0gbmV3IFRva2VuKFRva2VuLktpbmQuU0VMRUNULCB0b2tlbi5sZXhlbWUpO1xyXG4gICAgICAgICAgICBlbHNlIGlmICh0b2tlbi5sZXhlbWUgPT09IFwiRlJPTVwiKSB0b2tlbiA9IG5ldyBUb2tlbihUb2tlbi5LaW5kLkZST00sIHRva2VuLmxleGVtZSk7XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHRva2VuLmxleGVtZSA9PT0gXCJXSEVSRVwiKSB0b2tlbiA9IG5ldyBUb2tlbihUb2tlbi5LaW5kLldIRVJFLCB0b2tlbi5sZXhlbWUpO1xyXG4gICAgICAgICAgICBlbHNlIGlmICh0b2tlbi5sZXhlbWUgPT09IFwiT1JERVJcIikgdG9rZW4gPSBuZXcgVG9rZW4oVG9rZW4uS2luZC5PUkRFUiwgdG9rZW4ubGV4ZW1lKTtcclxuICAgICAgICAgICAgZWxzZSBpZiAodG9rZW4ubGV4ZW1lID09PSBcIkJZXCIpIHRva2VuID0gbmV3IFRva2VuKFRva2VuLktpbmQuQlksIHRva2VuLmxleGVtZSk7XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHRva2VuLmxleGVtZSA9PT0gXCJMSU1JVFwiKSB0b2tlbiA9IG5ldyBUb2tlbihUb2tlbi5LaW5kLkxJTUlULCB0b2tlbi5sZXhlbWUpO1xyXG4gICAgICAgICAgICBlbHNlIGlmICh0b2tlbi5sZXhlbWUgPT09IFwiQU5EXCIpIHRva2VuID0gbmV3IFRva2VuKFRva2VuLktpbmQuQU5ELCB0b2tlbi5sZXhlbWUpO1xyXG4gICAgICAgICAgICBlbHNlIGlmICh0b2tlbi5sZXhlbWUgPT09IFwiT1JcIikgdG9rZW4gPSBuZXcgVG9rZW4oVG9rZW4uS2luZC5PUiwgdG9rZW4ubGV4ZW1lKTtcclxuICAgICAgICAgICAgZWxzZSBpZiAodG9rZW4ubGV4ZW1lID09PSBcIkxJS0VcIikgdG9rZW4gPSBuZXcgVG9rZW4oVG9rZW4uS2luZC5MSUtFLCB0b2tlbi5sZXhlbWUpO1xyXG4gICAgICAgICAgICBlbHNlIGlmICh0b2tlbi5sZXhlbWUgPT09IFwiSU5cIikgdG9rZW4gPSBuZXcgVG9rZW4oVG9rZW4uS2luZC5JTiwgdG9rZW4ubGV4ZW1lKTtcclxuXHJcbiAgICAgICAgICB9IGVsc2UgaWYgKHRva2VuLmtpbmQgPT09IFRva2VuLktpbmQuU1FVT1RFIHx8IHRva2VuLmtpbmQgPT09IFRva2VuLktpbmQuRFFVT1RFKSB7XHJcbiAgICAgICAgICAgIHdoaWxlIChpIDwgaW5wdXQubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgYyA9IGlucHV0W2ldO1xyXG4gICAgICAgICAgICAgIG11bmNoZWRJbnB1dCArPSBjO1xyXG4gICAgICAgICAgICAgICsraTtcclxuICAgICAgICAgICAgICBpZiAoYyA9PT0gdG9rZW4ubGV4ZW1lKSBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAobXVuY2hlZElucHV0W211bmNoZWRJbnB1dC5sZW5ndGggLSAxXSAhPT0gdG9rZW4ubGV4ZW1lKSB7XHJcbiAgICAgICAgICAgICAgdGhyb3cgbmV3IFN5bnRheEVycm9yKFwiU2Nhbm5pbmcgZmFpbHVyZTogU2ltcGxpZmllZCBtYXhpbWFsIG11bmNoIGZhaWxlZCBvbiBpbnB1dDogXCIgKyBtdW5jaGVkSW5wdXQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRva2VuID0gbmV3IFRva2VuKFRva2VuLktpbmQuVkFMVUUsIG11bmNoZWRJbnB1dCk7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgcmVzdWx0LnB1c2godG9rZW4pO1xyXG5cclxuICAgICAgICAgIG11bmNoZWRJbnB1dCA9IFwiXCI7XHJcbiAgICAgICAgICBzdGF0ZSA9IHRoaXMuc3RhcnQoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgaWYgKHRoaXMuZmFpbGVkKHN0YXRlKSkge1xyXG4gICAgICAgICAgICBtdW5jaGVkSW5wdXQgKz0gYztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHRocm93IG5ldyBTeW50YXhFcnJvcihcIlNjYW5uaW5nIGZhaWx1cmU6IFNpbXBsaWZpZWQgbWF4aW1hbCBtdW5jaCBmYWlsZWQgb24gaW5wdXQ6IFwiICsgbXVuY2hlZElucHV0KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHRva2VuaXplKHF1ZXJ5ID0gbnVsbCkge1xyXG4gIGlmIChxdWVyeSA9PT0gbnVsbCB8fCBxdWVyeSA9PT0gdW5kZWZpbmVkKSByZXR1cm4gbnVsbDtcclxuICB2YXIgZGZhID0gbmV3IEFzbURGQSgpO1xyXG5cclxuICB2YXIgdG9rZW5zID0gZGZhLnNpbXBsaWZpZWRNYXhpbWFsTXVuY2gocXVlcnkpO1xyXG5cclxuICAvLyBXZSBuZWVkIHRvOlxyXG4gIC8vICogUmVtb3ZlIFdISVRFU1BBQ0UgdG9rZW5zIGVudGlyZWx5LlxyXG5cclxuICB2YXIgbmV3VG9rZW5zID0gW107XHJcblxyXG4gIHRva2Vucy5mb3JFYWNoKGZ1bmN0aW9uICh0b2tlbikge1xyXG4gICAgaWYgKHRva2VuLmtpbmQgIT09IFRva2VuLktpbmQuV0hJVEVTUEFDRSkge1xyXG4gICAgICBuZXdUb2tlbnMucHVzaCh0b2tlbik7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiBuZXdUb2tlbnM7XHJcbn1cclxuIiwiaW1wb3J0IERvbXFsIGZyb20gJy4vZG9tcWwuanMnO1xuZXhwb3J0IHsgRG9tcWwgfTtcbiJdLCJzb3VyY2VSb290IjoiIn0=