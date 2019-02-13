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
    NUM: null,
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


    function isdigit(c) {
      if (c >= '0' && c <= '9') return true;
      return false;
    }

    function isspace(c) {
      return " \t\n\r\v".indexOf(c) !== -1;
    }

    this.registerTransition(this.State.START, isalpha, this.State.VALUE);
    this.registerTransition(this.State.VALUE, isalpha, this.State.VALUE);
    this.registerTransition(this.State.START, isdigit, this.State.NUM);
    this.registerTransition(this.State.NUM, isdigit, this.State.NUM);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kb21xbC93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vZG9tcWwvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZG9tcWwvLi9zcmMvZG9tcWwuanMiLCJ3ZWJwYWNrOi8vZG9tcWwvLi9zcmMvZG9tcWxfcGFyc2VyLmpzIiwid2VicGFjazovL2RvbXFsLy4vc3JjL2RvbXFsX3Rva2VuaXplci5qcyIsIndlYnBhY2s6Ly9kb21xbC8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJEb21xbCIsInF1ZXJ5IiwiX25hbWUiLCJjb21waWxlIiwiX3F1ZXJ5IiwidG9rZW5zIiwidG9rZW5pemVyIiwidG9rZW5pemUiLCJhc3QiLCJwYXJzZXIiLCJwYXJzZSIsImRpcmVjdGl2ZXMiLCJ0cmFuc3BpbGVyIiwidHJhbnNwaWxlIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiVG9rZW4iLCJraW5kIiwibGV4ZW1lIiwiX2tpbmQiLCJfbGV4ZW1lIiwic2V0dXBUb2tlbktpbmRzIiwiS2luZCIsIlZBTFVFIiwiTFBBUkVOIiwiUlBBUkVOIiwiTlVNIiwiRVEiLCJORSIsIkxUIiwiR1QiLCJMRSIsIkdFIiwiU1RBUiIsIlBDVCIsIkNPTU1BIiwiRE9UIiwiU0VNSSIsIlNRVU9URSIsIkRRVU9URSIsIlNFTEVDVCIsIkZST00iLCJXSEVSRSIsIk9SREVSIiwiQlkiLCJJTiIsIkxJS0UiLCJMSU1JVCIsIkFORCIsIk9SIiwiV0hJVEVTUEFDRSIsImtleXMiLCJPYmplY3QiLCJpIiwibGVuZ3RoIiwia2V5IiwiQXNtREZBIiwiU3RhdGUiLCJGQUlMIiwiU1RBUlQiLCJFWENMQU1BVElPTiIsIkxBUkdFU1RfU1RBVEUiLCJfYWNjZXB0aW5nU3RhdGVzIiwiU2V0IiwidmFsdWVzIiwiX1RGX0xFTiIsIl9URl9TVEFURV9MRU4iLCJfdHJhbnNpdGlvbkZ1bmN0aW9uIiwiQXJyYXkiLCJpc2FscGhhIiwiYyIsInRlc3QiLCJpc2RpZ2l0IiwiaXNzcGFjZSIsImluZGV4T2YiLCJyZWdpc3RlclRyYW5zaXRpb24iLCJvbGRTdGF0ZSIsImNoYXJzIiwibmV3U3RhdGUiLCJTdHJpbmciLCJmcm9tQ2hhckNvZGUiLCJjb25zb2xlIiwibG9nIiwiY2hhckNvZGVBdCIsInN0YXRlIiwibmV4dENoYXIiLCJ1bmRlZmluZWQiLCJoYXMiLCJpbnB1dCIsInJlc3VsdCIsInN0YXJ0IiwibXVuY2hlZElucHV0IiwidHJhbnNpdGlvbiIsImZhaWxlZCIsImFjY2VwdCIsInRva2VuIiwiU3ludGF4RXJyb3IiLCJwdXNoIiwiZGZhIiwic2ltcGxpZmllZE1heGltYWxNdW5jaCIsIm5ld1Rva2VucyIsImZvckVhY2giXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xGQTs7QUFDQTs7Ozs7Ozs7Ozs7O0lBR3FCQSxLOzs7QUFFbkIsbUJBQTBCO0FBQUEsUUFBZEMsS0FBYyx1RUFBTixJQUFNOztBQUFBOztBQUN4QixTQUFLQyxLQUFMLEdBQWEsT0FBYjtBQUNBLFNBQUtDLE9BQUwsQ0FBYUYsS0FBYjtBQUNEOzs7OzhCQVVxQjtBQUFBLFVBQWRBLEtBQWMsdUVBQU4sSUFBTTtBQUNwQixXQUFLRyxNQUFMLEdBQWNILEtBQWQ7QUFDQSxVQUFJSSxNQUFNLEdBQUdDLFNBQVMsQ0FBQ0MsUUFBVixDQUFtQk4sS0FBbkIsQ0FBYjtBQUNBLFVBQUlPLEdBQUcsR0FBR0MsTUFBTSxDQUFDQyxLQUFQLENBQWFMLE1BQWIsQ0FBVjtBQUNBLFVBQUlNLFVBQVUsR0FBR0MsVUFBVSxDQUFDQyxTQUFYLENBQXFCTCxHQUFyQixDQUFqQjtBQUNEOzs7OEJBRVM7QUFDUixhQUFPTSxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsS0FBS1gsTUFBNUIsQ0FBUDtBQUNEOzs7d0JBakJVO0FBQ1QsYUFBTyxLQUFLRixLQUFaO0FBQ0Q7Ozt3QkFFVztBQUNWLGFBQU8sS0FBS0UsTUFBWjtBQUNEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pCSSxTQUFTTSxLQUFULENBQWVMLE1BQWYsRUFBdUI7QUFDNUIsU0FBTyxJQUFQO0FBQ0QsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNGWVcsSzs7O0FBRVgsaUJBQVlDLElBQVosRUFBa0JDLE1BQWxCLEVBQTBCO0FBQUE7O0FBQ3hCLFNBQUtDLEtBQUwsR0FBYUYsSUFBYjtBQUNBLFNBQUtHLE9BQUwsR0FBZUYsTUFBZjtBQUNEOzs7O3dCQUVVO0FBQ1QsYUFBTyxLQUFLQyxLQUFaO0FBQ0Q7Ozt3QkFFWTtBQUNYLGFBQU8sS0FBS0MsT0FBWjtBQUNEOzs7Ozs7OztBQUlILFNBQVNDLGVBQVQsR0FBMkI7QUFDekJMLE9BQUssQ0FBQ00sSUFBTixHQUFhO0FBQ1hDLFNBQUssRUFBRSxJQURJO0FBRVhDLFVBQU0sRUFBRSxJQUZHO0FBR1hDLFVBQU0sRUFBRSxJQUhHO0FBSVhDLE9BQUcsRUFBRSxJQUpNO0FBS1hDLE1BQUUsRUFBRSxJQUxPO0FBTVhDLE1BQUUsRUFBRSxJQU5PO0FBT1hDLE1BQUUsRUFBRSxJQVBPO0FBUVhDLE1BQUUsRUFBRSxJQVJPO0FBU1hDLE1BQUUsRUFBRSxJQVRPO0FBVVhDLE1BQUUsRUFBRSxJQVZPO0FBV1hDLFFBQUksRUFBRSxJQVhLO0FBWVhDLE9BQUcsRUFBRSxJQVpNO0FBYVhDLFNBQUssRUFBRSxJQWJJO0FBY1hDLE9BQUcsRUFBRSxJQWRNO0FBZVhDLFFBQUksRUFBRSxJQWZLO0FBZ0JYQyxVQUFNLEVBQUUsSUFoQkc7QUFpQlhDLFVBQU0sRUFBRSxJQWpCRztBQWtCWEMsVUFBTSxFQUFFLElBbEJHO0FBbUJYQyxRQUFJLEVBQUUsSUFuQks7QUFvQlhDLFNBQUssRUFBRSxJQXBCSTtBQXFCWEMsU0FBSyxFQUFFLElBckJJO0FBc0JYQyxNQUFFLEVBQUUsSUF0Qk87QUF1QlhDLE1BQUUsRUFBRSxJQXZCTztBQXdCWEMsUUFBSSxFQUFFLElBeEJLO0FBeUJYQyxTQUFLLEVBQUUsSUF6Qkk7QUEwQlhDLE9BQUcsRUFBRSxJQTFCTTtBQTJCWEMsTUFBRSxFQUFFLElBM0JPO0FBNkJYQyxjQUFVLEVBQUU7QUE3QkQsR0FBYjtBQWdDQSxNQUFJQyxJQUFJLEdBQUdDLE1BQU0sQ0FBQ0QsSUFBUCxDQUFZbkMsS0FBSyxDQUFDTSxJQUFsQixDQUFYOztBQUNBLE9BQUssSUFBSStCLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdGLElBQUksQ0FBQ0csTUFBekIsRUFBaUNELENBQUMsRUFBbEMsRUFBc0M7QUFDcEMsUUFBSUUsR0FBRyxHQUFHSixJQUFJLENBQUNFLENBQUQsQ0FBZDtBQUNBckMsU0FBSyxDQUFDTSxJQUFOLENBQVdpQyxHQUFYLElBQWtCRixDQUFsQjtBQUNEO0FBQ0Y7O0FBRURoQyxlQUFlOztJQUVUbUMsTTs7O0FBQ0osb0JBQWM7QUFBQTs7QUFDWjtBQUNBLFNBQUtDLEtBQUwsR0FBYXpDLEtBQUssQ0FBQ00sSUFBbkI7QUFDQSxRQUFJNkIsSUFBSSxHQUFHQyxNQUFNLENBQUNELElBQVAsQ0FBWW5DLEtBQUssQ0FBQ00sSUFBbEIsQ0FBWDtBQUNBLFFBQUkrQixDQUFDLEdBQUdGLElBQUksQ0FBQ0csTUFBYjtBQUNBLFNBQUtHLEtBQUwsQ0FBV0MsSUFBWCxHQUFrQkwsQ0FBQyxFQUFuQjtBQUNBLFNBQUtJLEtBQUwsQ0FBV0UsS0FBWCxHQUFtQk4sQ0FBQyxFQUFwQjtBQUNBLFNBQUtJLEtBQUwsQ0FBV0csV0FBWCxHQUF5QlAsQ0FBQyxFQUExQjtBQUNBLFNBQUtJLEtBQUwsQ0FBV0ksYUFBWCxHQUEyQixLQUFLSixLQUFMLENBQVdHLFdBQXRDLENBUlksQ0FVWjs7QUFDQSxTQUFLRSxnQkFBTCxHQUF3QixJQUFJQyxHQUFKLENBQVFYLE1BQU0sQ0FBQ1ksTUFBUCxDQUFjaEQsS0FBSyxDQUFDTSxJQUFwQixDQUFSLENBQXhCLENBWFksQ0FhWjs7QUFDQSxTQUFLMkMsT0FBTCxHQUFlLEtBQUtSLEtBQUwsQ0FBV0ksYUFBWCxHQUEyQixDQUExQztBQUNBLFNBQUtLLGFBQUwsR0FBcUIsR0FBckI7QUFDQSxTQUFLQyxtQkFBTCxHQUEyQixJQUFJQyxLQUFKLENBQVUsS0FBS0gsT0FBZixDQUEzQjs7QUFDQSxTQUFLWixDQUFDLEdBQUcsQ0FBVCxFQUFZQSxDQUFDLEdBQUcsS0FBS1ksT0FBckIsRUFBOEJaLENBQUMsRUFBL0IsRUFBbUM7QUFDakMsV0FBS2MsbUJBQUwsQ0FBeUJkLENBQXpCLElBQThCLEVBQTlCO0FBQ0Q7O0FBRUQsYUFBU2dCLE9BQVQsQ0FBaUJDLENBQWpCLEVBQW9CO0FBQUUsYUFBTyxlQUFlQyxJQUFmLENBQW9CRCxDQUFwQixDQUFQO0FBQWdDLEtBckIxQyxDQXNCWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EsYUFBU0UsT0FBVCxDQUFpQkYsQ0FBakIsRUFBb0I7QUFDbEIsVUFBSUEsQ0FBQyxJQUFJLEdBQUwsSUFBWUEsQ0FBQyxJQUFJLEdBQXJCLEVBQTBCLE9BQU8sSUFBUDtBQUMxQixhQUFPLEtBQVA7QUFDRDs7QUFDRCxhQUFTRyxPQUFULENBQWlCSCxDQUFqQixFQUFvQjtBQUFDLGFBQU8sWUFBWUksT0FBWixDQUFvQkosQ0FBcEIsTUFBMkIsQ0FBQyxDQUFuQztBQUF1Qzs7QUFFNUQsU0FBS0ssa0JBQUwsQ0FBd0IsS0FBS2xCLEtBQUwsQ0FBV0UsS0FBbkMsRUFBMENVLE9BQTFDLEVBQW1ELEtBQUtaLEtBQUwsQ0FBV2xDLEtBQTlEO0FBQ0EsU0FBS29ELGtCQUFMLENBQXdCLEtBQUtsQixLQUFMLENBQVdsQyxLQUFuQyxFQUEwQzhDLE9BQTFDLEVBQW1ELEtBQUtaLEtBQUwsQ0FBV2xDLEtBQTlEO0FBQ0EsU0FBS29ELGtCQUFMLENBQXdCLEtBQUtsQixLQUFMLENBQVdFLEtBQW5DLEVBQTBDYSxPQUExQyxFQUFtRCxLQUFLZixLQUFMLENBQVcvQixHQUE5RDtBQUNBLFNBQUtpRCxrQkFBTCxDQUF3QixLQUFLbEIsS0FBTCxDQUFXL0IsR0FBbkMsRUFBd0M4QyxPQUF4QyxFQUFpRCxLQUFLZixLQUFMLENBQVcvQixHQUE1RDtBQUNBLFNBQUtpRCxrQkFBTCxDQUF3QixLQUFLbEIsS0FBTCxDQUFXRSxLQUFuQyxFQUEwQyxHQUExQyxFQUErQyxLQUFLRixLQUFMLENBQVdqQyxNQUExRDtBQUNBLFNBQUttRCxrQkFBTCxDQUF3QixLQUFLbEIsS0FBTCxDQUFXRSxLQUFuQyxFQUEwQyxHQUExQyxFQUErQyxLQUFLRixLQUFMLENBQVdoQyxNQUExRDtBQUNBLFNBQUtrRCxrQkFBTCxDQUF3QixLQUFLbEIsS0FBTCxDQUFXRSxLQUFuQyxFQUEwQyxHQUExQyxFQUErQyxLQUFLRixLQUFMLENBQVc5QixFQUExRDtBQUNBLFNBQUtnRCxrQkFBTCxDQUF3QixLQUFLbEIsS0FBTCxDQUFXRSxLQUFuQyxFQUEwQyxHQUExQyxFQUErQyxLQUFLRixLQUFMLENBQVdHLFdBQTFEO0FBQ0EsU0FBS2Usa0JBQUwsQ0FBd0IsS0FBS2xCLEtBQUwsQ0FBV0csV0FBbkMsRUFBZ0QsR0FBaEQsRUFBcUQsS0FBS0gsS0FBTCxDQUFXN0IsRUFBaEU7QUFDQSxTQUFLK0Msa0JBQUwsQ0FBd0IsS0FBS2xCLEtBQUwsQ0FBV0UsS0FBbkMsRUFBMEMsR0FBMUMsRUFBK0MsS0FBS0YsS0FBTCxDQUFXNUIsRUFBMUQ7QUFDQSxTQUFLOEMsa0JBQUwsQ0FBd0IsS0FBS2xCLEtBQUwsQ0FBV0UsS0FBbkMsRUFBMEMsR0FBMUMsRUFBK0MsS0FBS0YsS0FBTCxDQUFXM0IsRUFBMUQ7QUFDQSxTQUFLNkMsa0JBQUwsQ0FBd0IsS0FBS2xCLEtBQUwsQ0FBVzVCLEVBQW5DLEVBQXVDLEdBQXZDLEVBQTRDLEtBQUs0QixLQUFMLENBQVcxQixFQUF2RDtBQUNBLFNBQUs0QyxrQkFBTCxDQUF3QixLQUFLbEIsS0FBTCxDQUFXM0IsRUFBbkMsRUFBdUMsR0FBdkMsRUFBNEMsS0FBSzJCLEtBQUwsQ0FBV3pCLEVBQXZEO0FBQ0EsU0FBSzJDLGtCQUFMLENBQXdCLEtBQUtsQixLQUFMLENBQVdFLEtBQW5DLEVBQTBDLEdBQTFDLEVBQStDLEtBQUtGLEtBQUwsQ0FBV3hCLElBQTFEO0FBQ0EsU0FBSzBDLGtCQUFMLENBQXdCLEtBQUtsQixLQUFMLENBQVdFLEtBQW5DLEVBQTBDLEdBQTFDLEVBQStDLEtBQUtGLEtBQUwsQ0FBV3ZCLEdBQTFEO0FBQ0EsU0FBS3lDLGtCQUFMLENBQXdCLEtBQUtsQixLQUFMLENBQVdFLEtBQW5DLEVBQTBDLEdBQTFDLEVBQStDLEtBQUtGLEtBQUwsQ0FBV3RCLEtBQTFEO0FBQ0EsU0FBS3dDLGtCQUFMLENBQXdCLEtBQUtsQixLQUFMLENBQVdFLEtBQW5DLEVBQTBDLEdBQTFDLEVBQStDLEtBQUtGLEtBQUwsQ0FBV3BCLElBQTFEO0FBQ0EsU0FBS3NDLGtCQUFMLENBQXdCLEtBQUtsQixLQUFMLENBQVdFLEtBQW5DLEVBQTBDYyxPQUExQyxFQUFtRCxLQUFLaEIsS0FBTCxDQUFXUCxVQUE5RDtBQUNBLFNBQUt5QixrQkFBTCxDQUF3QixLQUFLbEIsS0FBTCxDQUFXUCxVQUFuQyxFQUErQ3VCLE9BQS9DLEVBQXdELEtBQUtoQixLQUFMLENBQVdQLFVBQW5FO0FBQ0EsU0FBS3lCLGtCQUFMLENBQXdCLEtBQUtsQixLQUFMLENBQVdFLEtBQW5DLEVBQTBDLEdBQTFDLEVBQStDLEtBQUtGLEtBQUwsQ0FBV25CLE1BQTFEO0FBQ0EsU0FBS3FDLGtCQUFMLENBQXdCLEtBQUtsQixLQUFMLENBQVdFLEtBQW5DLEVBQTBDLEdBQTFDLEVBQStDLEtBQUtGLEtBQUwsQ0FBV2xCLE1BQTFEO0FBQ0EsU0FBS29DLGtCQUFMLENBQXdCLEtBQUtsQixLQUFMLENBQVdFLEtBQW5DLEVBQTBDLEdBQTFDLEVBQStDLEtBQUtGLEtBQUwsQ0FBV3JCLEdBQTFEO0FBQ0QsRyxDQUNEOzs7Ozt1Q0FDbUJ3QyxRLEVBQVVDLEssRUFBT0MsUSxFQUFVO0FBQzVDLFVBQUksT0FBT0QsS0FBUCxLQUFpQixVQUFyQixFQUFpQztBQUMvQixhQUFLLElBQUlQLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsS0FBS0osYUFBekIsRUFBd0MsRUFBRUksQ0FBMUMsRUFBNkM7QUFDM0MsY0FBSU8sS0FBSyxDQUFDRSxNQUFNLENBQUNDLFlBQVAsQ0FBb0JWLENBQXBCLENBQUQsQ0FBVCxFQUFtQyxLQUFLSCxtQkFBTCxDQUF5QlMsUUFBekIsRUFBbUNOLENBQW5DLElBQXdDUSxRQUF4Qzs7QUFDbkMsY0FBSSxLQUFLWCxtQkFBTCxDQUF5QixDQUF6QixFQUE0QixFQUE1QixNQUFvQyxFQUF4QyxFQUE0QztBQUMxQ2MsbUJBQU8sQ0FBQ0MsR0FBUjtBQUNEO0FBQ0Y7QUFDRixPQVBELE1BT087QUFDTCxhQUFLLElBQUk3QixDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHd0IsS0FBSyxDQUFDdkIsTUFBMUIsRUFBa0NELENBQUMsRUFBbkMsRUFBdUM7QUFDckMsZUFBS2MsbUJBQUwsQ0FBeUJTLFFBQXpCLEVBQW1DQyxLQUFLLENBQUN4QixDQUFELENBQUwsQ0FBUzhCLFVBQVQsRUFBbkMsSUFBNERMLFFBQTVEO0FBQ0Q7QUFDRjtBQUNGLEssQ0FDRDtBQUNBO0FBQ0E7Ozs7K0JBQ1dNLEssRUFBT0MsUSxFQUFVO0FBQzFCLGFBQU8sS0FBS2xCLG1CQUFMLENBQXlCaUIsS0FBekIsRUFBZ0NDLFFBQVEsQ0FBQ0YsVUFBVCxFQUFoQyxNQUEyREcsU0FBM0QsR0FDTCxLQUFLN0IsS0FBTCxDQUFXQyxJQUROLEdBQ2EsS0FBS1MsbUJBQUwsQ0FBeUJpQixLQUF6QixFQUFnQ0MsUUFBUSxDQUFDRixVQUFULEVBQWhDLENBRHBCO0FBRUQ7OztBQUVEO0FBQ0E7MkJBQ09DLEssRUFBTztBQUFFLGFBQU9BLEtBQUssS0FBSyxLQUFLM0IsS0FBTCxDQUFXQyxJQUE1QjtBQUFtQyxLLENBRW5EO0FBQ0E7Ozs7MkJBQ08wQixLLEVBQU87QUFDWixhQUFPLEtBQUt0QixnQkFBTCxDQUFzQnlCLEdBQXRCLENBQTBCSCxLQUExQixDQUFQO0FBQ0QsSyxDQUVEOzs7OzRCQUNRO0FBQUUsYUFBTyxLQUFLM0IsS0FBTCxDQUFXRSxLQUFsQjtBQUEwQixLLENBRXBDO0FBQ0E7Ozs7MkNBQ3VCNkIsSyxFQUFPO0FBQzVCLFVBQUlDLE1BQU0sR0FBRyxFQUFiO0FBRUEsVUFBSUwsS0FBSyxHQUFHLEtBQUtNLEtBQUwsRUFBWjtBQUNBLFVBQUlDLFlBQVksR0FBRyxFQUFuQixDQUo0QixDQU01QjtBQUNBOztBQUNBLFdBQUssSUFBSXRDLEVBQUMsR0FBRyxDQUFiLEVBQWdCQSxFQUFDLEdBQUdtQyxLQUFLLENBQUNsQyxNQUExQixHQUFtQztBQUNqQyxZQUFJZ0IsQ0FBQyxHQUFHa0IsS0FBSyxDQUFDbkMsRUFBRCxDQUFiO0FBQ0EsWUFBSXVCLFFBQVEsR0FBR1EsS0FBZjtBQUNBQSxhQUFLLEdBQUcsS0FBS1EsVUFBTCxDQUFnQlIsS0FBaEIsRUFBdUJkLENBQXZCLENBQVI7O0FBRUEsWUFBSSxDQUFDLEtBQUt1QixNQUFMLENBQVlULEtBQVosQ0FBTCxFQUF5QjtBQUN2Qk8sc0JBQVksSUFBSXJCLENBQWhCO0FBQ0FNLGtCQUFRLEdBQUdRLEtBQVg7QUFFQSxZQUFFL0IsRUFBRjtBQUNEOztBQUVELFlBQUlBLEVBQUMsS0FBS21DLEtBQUssQ0FBQ2xDLE1BQVosSUFBc0IsS0FBS3VDLE1BQUwsQ0FBWVQsS0FBWixDQUExQixFQUE4QztBQUM1QyxjQUFJLEtBQUtVLE1BQUwsQ0FBWWxCLFFBQVosQ0FBSixFQUEyQjtBQUN6QixnQkFBSW1CLEtBQUssR0FBRyxJQUFJL0UsS0FBSixDQUFVNEQsUUFBVixFQUFvQmUsWUFBcEIsQ0FBWjs7QUFFQSxnQkFBSUksS0FBSyxDQUFDOUUsSUFBTixLQUFlRCxLQUFLLENBQUNNLElBQU4sQ0FBV0MsS0FBOUIsRUFBcUM7QUFDbkMsa0JBQUl3RSxLQUFLLENBQUM3RSxNQUFOLEtBQWlCLFFBQXJCLEVBQStCNkUsS0FBSyxHQUFHLElBQUkvRSxLQUFKLENBQVVBLEtBQUssQ0FBQ00sSUFBTixDQUFXa0IsTUFBckIsRUFBNkJ1RCxLQUFLLENBQUM3RSxNQUFuQyxDQUFSLENBQS9CLEtBQ0ssSUFBSTZFLEtBQUssQ0FBQzdFLE1BQU4sS0FBaUIsTUFBckIsRUFBNkI2RSxLQUFLLEdBQUcsSUFBSS9FLEtBQUosQ0FBVUEsS0FBSyxDQUFDTSxJQUFOLENBQVdtQixJQUFyQixFQUEyQnNELEtBQUssQ0FBQzdFLE1BQWpDLENBQVIsQ0FBN0IsS0FDQSxJQUFJNkUsS0FBSyxDQUFDN0UsTUFBTixLQUFpQixPQUFyQixFQUE4QjZFLEtBQUssR0FBRyxJQUFJL0UsS0FBSixDQUFVQSxLQUFLLENBQUNNLElBQU4sQ0FBV29CLEtBQXJCLEVBQTRCcUQsS0FBSyxDQUFDN0UsTUFBbEMsQ0FBUixDQUE5QixLQUNBLElBQUk2RSxLQUFLLENBQUM3RSxNQUFOLEtBQWlCLE9BQXJCLEVBQThCNkUsS0FBSyxHQUFHLElBQUkvRSxLQUFKLENBQVVBLEtBQUssQ0FBQ00sSUFBTixDQUFXcUIsS0FBckIsRUFBNEJvRCxLQUFLLENBQUM3RSxNQUFsQyxDQUFSLENBQTlCLEtBQ0EsSUFBSTZFLEtBQUssQ0FBQzdFLE1BQU4sS0FBaUIsSUFBckIsRUFBMkI2RSxLQUFLLEdBQUcsSUFBSS9FLEtBQUosQ0FBVUEsS0FBSyxDQUFDTSxJQUFOLENBQVdzQixFQUFyQixFQUF5Qm1ELEtBQUssQ0FBQzdFLE1BQS9CLENBQVIsQ0FBM0IsS0FDQSxJQUFJNkUsS0FBSyxDQUFDN0UsTUFBTixLQUFpQixPQUFyQixFQUE4QjZFLEtBQUssR0FBRyxJQUFJL0UsS0FBSixDQUFVQSxLQUFLLENBQUNNLElBQU4sQ0FBV3lCLEtBQXJCLEVBQTRCZ0QsS0FBSyxDQUFDN0UsTUFBbEMsQ0FBUixDQUE5QixLQUNBLElBQUk2RSxLQUFLLENBQUM3RSxNQUFOLEtBQWlCLEtBQXJCLEVBQTRCNkUsS0FBSyxHQUFHLElBQUkvRSxLQUFKLENBQVVBLEtBQUssQ0FBQ00sSUFBTixDQUFXMEIsR0FBckIsRUFBMEIrQyxLQUFLLENBQUM3RSxNQUFoQyxDQUFSLENBQTVCLEtBQ0EsSUFBSTZFLEtBQUssQ0FBQzdFLE1BQU4sS0FBaUIsSUFBckIsRUFBMkI2RSxLQUFLLEdBQUcsSUFBSS9FLEtBQUosQ0FBVUEsS0FBSyxDQUFDTSxJQUFOLENBQVcyQixFQUFyQixFQUF5QjhDLEtBQUssQ0FBQzdFLE1BQS9CLENBQVIsQ0FBM0IsS0FDQSxJQUFJNkUsS0FBSyxDQUFDN0UsTUFBTixLQUFpQixNQUFyQixFQUE2QjZFLEtBQUssR0FBRyxJQUFJL0UsS0FBSixDQUFVQSxLQUFLLENBQUNNLElBQU4sQ0FBV3dCLElBQXJCLEVBQTJCaUQsS0FBSyxDQUFDN0UsTUFBakMsQ0FBUixDQUE3QixLQUNBLElBQUk2RSxLQUFLLENBQUM3RSxNQUFOLEtBQWlCLElBQXJCLEVBQTJCNkUsS0FBSyxHQUFHLElBQUkvRSxLQUFKLENBQVVBLEtBQUssQ0FBQ00sSUFBTixDQUFXdUIsRUFBckIsRUFBeUJrRCxLQUFLLENBQUM3RSxNQUEvQixDQUFSO0FBRWpDLGFBWkQsTUFZTyxJQUFJNkUsS0FBSyxDQUFDOUUsSUFBTixLQUFlRCxLQUFLLENBQUNNLElBQU4sQ0FBV2dCLE1BQTFCLElBQW9DeUQsS0FBSyxDQUFDOUUsSUFBTixLQUFlRCxLQUFLLENBQUNNLElBQU4sQ0FBV2lCLE1BQWxFLEVBQTBFO0FBQy9FLHFCQUFPYyxFQUFDLEdBQUdtQyxLQUFLLENBQUNsQyxNQUFqQixFQUF5QjtBQUN2QmdCLGlCQUFDLEdBQUdrQixLQUFLLENBQUNuQyxFQUFELENBQVQ7QUFDQXNDLDRCQUFZLElBQUlyQixDQUFoQjtBQUNBLGtCQUFFakIsRUFBRjtBQUNBLG9CQUFJaUIsQ0FBQyxLQUFLeUIsS0FBSyxDQUFDN0UsTUFBaEIsRUFBd0I7QUFDekI7O0FBQ0Qsa0JBQUl5RSxZQUFZLENBQUNBLFlBQVksQ0FBQ3JDLE1BQWIsR0FBc0IsQ0FBdkIsQ0FBWixLQUEwQ3lDLEtBQUssQ0FBQzdFLE1BQXBELEVBQTREO0FBQzFELHNCQUFNLElBQUk4RSxXQUFKLENBQWdCLGlFQUFpRUwsWUFBakYsQ0FBTjtBQUNEOztBQUNESSxtQkFBSyxHQUFHLElBQUkvRSxLQUFKLENBQVVBLEtBQUssQ0FBQ00sSUFBTixDQUFXQyxLQUFyQixFQUE0Qm9FLFlBQTVCLENBQVI7QUFDRDs7QUFFREYsa0JBQU0sQ0FBQ1EsSUFBUCxDQUFZRixLQUFaO0FBRUFKLHdCQUFZLEdBQUcsRUFBZjtBQUNBUCxpQkFBSyxHQUFHLEtBQUtNLEtBQUwsRUFBUjtBQUNELFdBaENELE1BZ0NPO0FBQ0wsZ0JBQUksS0FBS0csTUFBTCxDQUFZVCxLQUFaLENBQUosRUFBd0I7QUFDdEJPLDBCQUFZLElBQUlyQixDQUFoQjtBQUNEOztBQUNELGtCQUFNLElBQUkwQixXQUFKLENBQWdCLGlFQUFpRUwsWUFBakYsQ0FBTjtBQUNEO0FBQ0Y7QUFDRjs7QUFFRCxhQUFPRixNQUFQO0FBQ0Q7Ozs7OztBQUdJLFNBQVNsRixRQUFULEdBQWdDO0FBQUEsTUFBZE4sS0FBYyx1RUFBTixJQUFNO0FBQ3JDLE1BQUlBLEtBQUssS0FBSyxJQUFWLElBQWtCQSxLQUFLLEtBQUtxRixTQUFoQyxFQUEyQyxPQUFPLElBQVA7QUFDM0MsTUFBSVksR0FBRyxHQUFHLElBQUkxQyxNQUFKLEVBQVY7QUFFQSxNQUFJbkQsTUFBTSxHQUFHNkYsR0FBRyxDQUFDQyxzQkFBSixDQUEyQmxHLEtBQTNCLENBQWIsQ0FKcUMsQ0FNckM7QUFDQTs7QUFFQSxNQUFJbUcsU0FBUyxHQUFHLEVBQWhCO0FBRUEvRixRQUFNLENBQUNnRyxPQUFQLENBQWUsVUFBVU4sS0FBVixFQUFpQjtBQUM5QixRQUFJQSxLQUFLLENBQUM5RSxJQUFOLEtBQWVELEtBQUssQ0FBQ00sSUFBTixDQUFXNEIsVUFBOUIsRUFBMEM7QUFDeENrRCxlQUFTLENBQUNILElBQVYsQ0FBZUYsS0FBZjtBQUNEO0FBQ0YsR0FKRDtBQU1BLFNBQU9LLFNBQVA7QUFDRCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuUEQiLCJmaWxlIjoiZG9tcWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcImRvbXFsXCIsIFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImRvbXFsXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImRvbXFsXCJdID0gZmFjdG9yeSgpO1xufSkodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnID8gc2VsZiA6IHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0ICogYXMgdG9rZW5pemVyIGZyb20gJy4vZG9tcWxfdG9rZW5pemVyLmpzJztcclxuaW1wb3J0ICogYXMgcGFyc2VyIGZyb20gJy4vZG9tcWxfcGFyc2VyLmpzJztcclxuaW1wb3J0ICogYXMgdHJhbnNwaWxlciBmcm9tICcuL2RvbXFsX3BhcnNlci5qcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEb21xbCB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHF1ZXJ5ID0gbnVsbCkge1xyXG4gICAgdGhpcy5fbmFtZSA9ICdEb21xbCc7XHJcbiAgICB0aGlzLmNvbXBpbGUocXVlcnkpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IG5hbWUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fbmFtZTtcclxuICB9XHJcblxyXG4gIGdldCBxdWVyeSgpIHtcclxuICAgIHJldHVybiB0aGlzLl9xdWVyeTtcclxuICB9XHJcblxyXG4gIGNvbXBpbGUocXVlcnkgPSBudWxsKSB7XHJcbiAgICB0aGlzLl9xdWVyeSA9IHF1ZXJ5O1xyXG4gICAgdmFyIHRva2VucyA9IHRva2VuaXplci50b2tlbml6ZShxdWVyeSk7XHJcbiAgICB2YXIgYXN0ID0gcGFyc2VyLnBhcnNlKHRva2Vucyk7XHJcbiAgICB2YXIgZGlyZWN0aXZlcyA9IHRyYW5zcGlsZXIudHJhbnNwaWxlKGFzdCk7XHJcbiAgfVxyXG5cclxuICBleGVjdXRlKCkge1xyXG4gICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5fcXVlcnkpO1xyXG4gIH1cclxufVxyXG4iLCJleHBvcnQgZnVuY3Rpb24gcGFyc2UodG9rZW5zKSB7XHJcbiAgcmV0dXJuIG51bGw7XHJcbn1cclxuIiwiZXhwb3J0IGNsYXNzIFRva2VuIHtcclxuXHJcbiAgY29uc3RydWN0b3Ioa2luZCwgbGV4ZW1lKSB7XHJcbiAgICB0aGlzLl9raW5kID0ga2luZDtcclxuICAgIHRoaXMuX2xleGVtZSA9IGxleGVtZTtcclxuICB9XHJcblxyXG4gIGdldCBraW5kKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2tpbmQ7XHJcbiAgfVxyXG5cclxuICBnZXQgbGV4ZW1lKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2xleGVtZTtcclxuICB9XHJcblxyXG59XHJcblxyXG5mdW5jdGlvbiBzZXR1cFRva2VuS2luZHMoKSB7XHJcbiAgVG9rZW4uS2luZCA9IHtcclxuICAgIFZBTFVFOiBudWxsLFxyXG4gICAgTFBBUkVOOiBudWxsLFxyXG4gICAgUlBBUkVOOiBudWxsLFxyXG4gICAgTlVNOiBudWxsLFxyXG4gICAgRVE6IG51bGwsXHJcbiAgICBORTogbnVsbCxcclxuICAgIExUOiBudWxsLFxyXG4gICAgR1Q6IG51bGwsXHJcbiAgICBMRTogbnVsbCxcclxuICAgIEdFOiBudWxsLFxyXG4gICAgU1RBUjogbnVsbCxcclxuICAgIFBDVDogbnVsbCxcclxuICAgIENPTU1BOiBudWxsLFxyXG4gICAgRE9UOiBudWxsLFxyXG4gICAgU0VNSTogbnVsbCxcclxuICAgIFNRVU9URTogbnVsbCxcclxuICAgIERRVU9URTogbnVsbCxcclxuICAgIFNFTEVDVDogbnVsbCxcclxuICAgIEZST006IG51bGwsXHJcbiAgICBXSEVSRTogbnVsbCxcclxuICAgIE9SREVSOiBudWxsLFxyXG4gICAgQlk6IG51bGwsXHJcbiAgICBJTjogbnVsbCxcclxuICAgIExJS0U6IG51bGwsXHJcbiAgICBMSU1JVDogbnVsbCxcclxuICAgIEFORDogbnVsbCxcclxuICAgIE9SOiBudWxsLFxyXG5cclxuICAgIFdISVRFU1BBQ0U6IG51bGxcclxuICB9O1xyXG5cclxuICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKFRva2VuLktpbmQpO1xyXG4gIGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xyXG4gICAgdmFyIGtleSA9IGtleXNbaV07XHJcbiAgICBUb2tlbi5LaW5kW2tleV0gPSBpO1xyXG4gIH1cclxufVxyXG5cclxuc2V0dXBUb2tlbktpbmRzKCk7XHJcblxyXG5jbGFzcyBBc21ERkEge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgLy8gU2V0dXAgc3RhdGVzXHJcbiAgICB0aGlzLlN0YXRlID0gVG9rZW4uS2luZDtcclxuICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXMoVG9rZW4uS2luZCk7XHJcbiAgICB2YXIgaSA9IGtleXMubGVuZ3RoO1xyXG4gICAgdGhpcy5TdGF0ZS5GQUlMID0gaSsrO1xyXG4gICAgdGhpcy5TdGF0ZS5TVEFSVCA9IGkrKztcclxuICAgIHRoaXMuU3RhdGUuRVhDTEFNQVRJT04gPSBpKys7XHJcbiAgICB0aGlzLlN0YXRlLkxBUkdFU1RfU1RBVEUgPSB0aGlzLlN0YXRlLkVYQ0xBTUFUSU9OO1xyXG5cclxuICAgIC8vIFNldHVwIGFjY2VwdGluZyBzdGF0ZXNcclxuICAgIHRoaXMuX2FjY2VwdGluZ1N0YXRlcyA9IG5ldyBTZXQoT2JqZWN0LnZhbHVlcyhUb2tlbi5LaW5kKSk7XHJcblxyXG4gICAgLy8gU2V0dXAgdHJhbnNpdGlvbiBmdW5jdGlvblxyXG4gICAgdGhpcy5fVEZfTEVOID0gdGhpcy5TdGF0ZS5MQVJHRVNUX1NUQVRFICsgMTtcclxuICAgIHRoaXMuX1RGX1NUQVRFX0xFTiA9IDEyODtcclxuICAgIHRoaXMuX3RyYW5zaXRpb25GdW5jdGlvbiA9IG5ldyBBcnJheSh0aGlzLl9URl9MRU4pO1xyXG4gICAgZm9yIChpID0gMDsgaSA8IHRoaXMuX1RGX0xFTjsgaSsrKSB7XHJcbiAgICAgIHRoaXMuX3RyYW5zaXRpb25GdW5jdGlvbltpXSA9IHt9O1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGlzYWxwaGEoYykgeyByZXR1cm4gL15bYS16QS1aKCldJC8udGVzdChjKTsgfVxyXG4gICAgLy8gZnVuY3Rpb24gaXNhbG51bShjKSB7XHJcbiAgICAvLyAgIHZhciBjb2RlLCBpO1xyXG4gICAgLy8gICBjb2RlID0gYy5jaGFyQ29kZUF0KGkpO1xyXG4gICAgLy8gICBpZiAoIShjb2RlID4gNDcgJiYgY29kZSA8IDU4KSAmJiAvLyBudW1lcmljICgwLTkpXHJcbiAgICAvLyAgICAgICAhKGNvZGUgPiA2NCAmJiBjb2RlIDwgOTEpICYmIC8vIHVwcGVyIGFscGhhIChBLVopXHJcbiAgICAvLyAgICAgICAhKGNvZGUgPiA5NiAmJiBjb2RlIDwgMTIzKSkgeyAvLyBsb3dlciBhbHBoYSAoYS16KVxyXG4gICAgLy8gICAgIHJldHVybiBmYWxzZTtcclxuICAgIC8vICAgfVxyXG4gICAgLy8gICByZXR1cm4gdHJ1ZTtcclxuICAgIC8vIH1cclxuICAgIGZ1bmN0aW9uIGlzZGlnaXQoYykge1xyXG4gICAgICBpZiAoYyA+PSAnMCcgJiYgYyA8PSAnOScpIHJldHVybiB0cnVlO1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBpc3NwYWNlKGMpIHtyZXR1cm4gXCIgXFx0XFxuXFxyXFx2XCIuaW5kZXhPZihjKSAhPT0gLTE7IH1cclxuXHJcbiAgICB0aGlzLnJlZ2lzdGVyVHJhbnNpdGlvbih0aGlzLlN0YXRlLlNUQVJULCBpc2FscGhhLCB0aGlzLlN0YXRlLlZBTFVFKTtcclxuICAgIHRoaXMucmVnaXN0ZXJUcmFuc2l0aW9uKHRoaXMuU3RhdGUuVkFMVUUsIGlzYWxwaGEsIHRoaXMuU3RhdGUuVkFMVUUpO1xyXG4gICAgdGhpcy5yZWdpc3RlclRyYW5zaXRpb24odGhpcy5TdGF0ZS5TVEFSVCwgaXNkaWdpdCwgdGhpcy5TdGF0ZS5OVU0pO1xyXG4gICAgdGhpcy5yZWdpc3RlclRyYW5zaXRpb24odGhpcy5TdGF0ZS5OVU0sIGlzZGlnaXQsIHRoaXMuU3RhdGUuTlVNKTtcclxuICAgIHRoaXMucmVnaXN0ZXJUcmFuc2l0aW9uKHRoaXMuU3RhdGUuU1RBUlQsIFwiKFwiLCB0aGlzLlN0YXRlLkxQQVJFTik7XHJcbiAgICB0aGlzLnJlZ2lzdGVyVHJhbnNpdGlvbih0aGlzLlN0YXRlLlNUQVJULCBcIilcIiwgdGhpcy5TdGF0ZS5SUEFSRU4pO1xyXG4gICAgdGhpcy5yZWdpc3RlclRyYW5zaXRpb24odGhpcy5TdGF0ZS5TVEFSVCwgXCI9XCIsIHRoaXMuU3RhdGUuRVEpO1xyXG4gICAgdGhpcy5yZWdpc3RlclRyYW5zaXRpb24odGhpcy5TdGF0ZS5TVEFSVCwgXCIhXCIsIHRoaXMuU3RhdGUuRVhDTEFNQVRJT04pO1xyXG4gICAgdGhpcy5yZWdpc3RlclRyYW5zaXRpb24odGhpcy5TdGF0ZS5FWENMQU1BVElPTiwgXCI9XCIsIHRoaXMuU3RhdGUuTkUpO1xyXG4gICAgdGhpcy5yZWdpc3RlclRyYW5zaXRpb24odGhpcy5TdGF0ZS5TVEFSVCwgXCI8XCIsIHRoaXMuU3RhdGUuTFQpO1xyXG4gICAgdGhpcy5yZWdpc3RlclRyYW5zaXRpb24odGhpcy5TdGF0ZS5TVEFSVCwgXCI+XCIsIHRoaXMuU3RhdGUuR1QpO1xyXG4gICAgdGhpcy5yZWdpc3RlclRyYW5zaXRpb24odGhpcy5TdGF0ZS5MVCwgXCI9XCIsIHRoaXMuU3RhdGUuTEUpO1xyXG4gICAgdGhpcy5yZWdpc3RlclRyYW5zaXRpb24odGhpcy5TdGF0ZS5HVCwgXCI9XCIsIHRoaXMuU3RhdGUuR0UpO1xyXG4gICAgdGhpcy5yZWdpc3RlclRyYW5zaXRpb24odGhpcy5TdGF0ZS5TVEFSVCwgXCIqXCIsIHRoaXMuU3RhdGUuU1RBUik7XHJcbiAgICB0aGlzLnJlZ2lzdGVyVHJhbnNpdGlvbih0aGlzLlN0YXRlLlNUQVJULCBcIiVcIiwgdGhpcy5TdGF0ZS5QQ1QpO1xyXG4gICAgdGhpcy5yZWdpc3RlclRyYW5zaXRpb24odGhpcy5TdGF0ZS5TVEFSVCwgXCIsXCIsIHRoaXMuU3RhdGUuQ09NTUEpO1xyXG4gICAgdGhpcy5yZWdpc3RlclRyYW5zaXRpb24odGhpcy5TdGF0ZS5TVEFSVCwgXCI7XCIsIHRoaXMuU3RhdGUuU0VNSSk7XHJcbiAgICB0aGlzLnJlZ2lzdGVyVHJhbnNpdGlvbih0aGlzLlN0YXRlLlNUQVJULCBpc3NwYWNlLCB0aGlzLlN0YXRlLldISVRFU1BBQ0UpO1xyXG4gICAgdGhpcy5yZWdpc3RlclRyYW5zaXRpb24odGhpcy5TdGF0ZS5XSElURVNQQUNFLCBpc3NwYWNlLCB0aGlzLlN0YXRlLldISVRFU1BBQ0UpO1xyXG4gICAgdGhpcy5yZWdpc3RlclRyYW5zaXRpb24odGhpcy5TdGF0ZS5TVEFSVCwgXCInXCIsIHRoaXMuU3RhdGUuU1FVT1RFKTtcclxuICAgIHRoaXMucmVnaXN0ZXJUcmFuc2l0aW9uKHRoaXMuU3RhdGUuU1RBUlQsICdcIicsIHRoaXMuU3RhdGUuRFFVT1RFKTtcclxuICAgIHRoaXMucmVnaXN0ZXJUcmFuc2l0aW9uKHRoaXMuU3RhdGUuU1RBUlQsICcuJywgdGhpcy5TdGF0ZS5ET1QpO1xyXG4gIH1cclxuICAvLyBSZWdpc3RlciBhIHRyYW5zaXRpb24gb24gYWxsIGNoYXJzIGluIGNoYXJzIG9yIG9uIGFsbCBjaGFycyBtYXRjaGluZyB0ZXN0XHJcbiAgcmVnaXN0ZXJUcmFuc2l0aW9uKG9sZFN0YXRlLCBjaGFycywgbmV3U3RhdGUpIHtcclxuICAgIGlmICh0eXBlb2YgY2hhcnMgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgZm9yICh2YXIgYyA9IDA7IGMgPCB0aGlzLl9URl9TVEFURV9MRU47ICsrYykge1xyXG4gICAgICAgIGlmIChjaGFycyhTdHJpbmcuZnJvbUNoYXJDb2RlKGMpKSkgdGhpcy5fdHJhbnNpdGlvbkZ1bmN0aW9uW29sZFN0YXRlXVtjXSA9IG5ld1N0YXRlO1xyXG4gICAgICAgIGlmICh0aGlzLl90cmFuc2l0aW9uRnVuY3Rpb25bMF1bMzJdID09PSAyNikge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hhcnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICB0aGlzLl90cmFuc2l0aW9uRnVuY3Rpb25bb2xkU3RhdGVdW2NoYXJzW2ldLmNoYXJDb2RlQXQoKV0gPSBuZXdTdGF0ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICAvLyBSZXR1cm5zIHRoZSBzdGF0ZSBjb3JyZXNwb25kaW5nIHRvIGZvbGxvd2luZyBhIHRyYW5zaXRpb25cclxuICAvLyBmcm9tIHRoZSBnaXZlbiBzdGFydGluZyBzdGF0ZSBvbiB0aGUgZ2l2ZW4gY2hhcmFjdGVyLFxyXG4gIC8vIG9yIGEgc3BlY2lhbCBmYWlsIHN0YXRlIGlmIHRoZSB0cmFuc2l0aW9uIGRvZXMgbm90IGV4aXN0LlxyXG4gIHRyYW5zaXRpb24oc3RhdGUsIG5leHRDaGFyKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fdHJhbnNpdGlvbkZ1bmN0aW9uW3N0YXRlXVtuZXh0Q2hhci5jaGFyQ29kZUF0KCldID09PSB1bmRlZmluZWQgP1xyXG4gICAgICB0aGlzLlN0YXRlLkZBSUwgOiB0aGlzLl90cmFuc2l0aW9uRnVuY3Rpb25bc3RhdGVdW25leHRDaGFyLmNoYXJDb2RlQXQoKV07XHJcbiAgfTtcclxuXHJcbiAgLy8gQ2hlY2tzIHdoZXRoZXIgdGhlIHN0YXRlIHJldHVybmVkIGJ5IHRyYW5zaXRpb25cclxuICAvLyBjb3JyZXNwb25kcyB0byBmYWlsdXJlIHRvIHRyYW5zaXRpb24uXHJcbiAgZmFpbGVkKHN0YXRlKSB7IHJldHVybiBzdGF0ZSA9PT0gdGhpcy5TdGF0ZS5GQUlMOyB9XHJcblxyXG4gIC8vIENoZWNrcyB3aGV0aGVyIHRoZSBzdGF0ZSByZXR1cm5lZCBieSB0cmFuc2l0aW9uXHJcbiAgLy8gaXMgYW4gYWNjZXB0aW5nIHN0YXRlLlxyXG4gIGFjY2VwdChzdGF0ZSkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2FjY2VwdGluZ1N0YXRlcy5oYXMoc3RhdGUpO1xyXG4gIH1cclxuXHJcbiAgLy8gUmV0dXJucyB0aGUgc3RhcnRpbmcgc3RhdGUgb2YgdGhlIERGQVxyXG4gIHN0YXJ0KCkgeyByZXR1cm4gdGhpcy5TdGF0ZS5TVEFSVDsgfVxyXG5cclxuICAvLyBUb2tlbml6ZXMgYW4gaW5wdXQgc3RyaW5nIGFjY29yZGluZyB0byB0aGUgU01NIGFsZ29yaXRobS5cclxuICAvLyBZb3Ugd2lsbCBsZWFybiB0aGUgU01NIGFsZ29yaXRobSBpbiBjbGFzcyBhcm91bmQgdGhlIHRpbWUgb2YgQXNzaWdubWVudCA2LlxyXG4gIHNpbXBsaWZpZWRNYXhpbWFsTXVuY2goaW5wdXQpIHtcclxuICAgIHZhciByZXN1bHQgPSBbXTtcclxuXHJcbiAgICB2YXIgc3RhdGUgPSB0aGlzLnN0YXJ0KCk7XHJcbiAgICB2YXIgbXVuY2hlZElucHV0ID0gJyc7XHJcblxyXG4gICAgLy8gV2UgY2FuJ3QgdXNlIGEgcmFuZ2UtYmFzZWQgZm9yIGxvb3AgZWZmZWN0aXZlbHkgaGVyZVxyXG4gICAgLy8gc2luY2UgdGhlIGl0ZXJhdG9yIGRvZXNuJ3QgYWx3YXlzIGluY3JlbWVudC5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW5wdXQubGVuZ3RoOykge1xyXG4gICAgICB2YXIgYyA9IGlucHV0W2ldO1xyXG4gICAgICB2YXIgb2xkU3RhdGUgPSBzdGF0ZTtcclxuICAgICAgc3RhdGUgPSB0aGlzLnRyYW5zaXRpb24oc3RhdGUsIGMpO1xyXG5cclxuICAgICAgaWYgKCF0aGlzLmZhaWxlZChzdGF0ZSkpIHtcclxuICAgICAgICBtdW5jaGVkSW5wdXQgKz0gYztcclxuICAgICAgICBvbGRTdGF0ZSA9IHN0YXRlO1xyXG5cclxuICAgICAgICArK2k7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChpID09PSBpbnB1dC5sZW5ndGggfHwgdGhpcy5mYWlsZWQoc3RhdGUpKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuYWNjZXB0KG9sZFN0YXRlKSkge1xyXG4gICAgICAgICAgdmFyIHRva2VuID0gbmV3IFRva2VuKG9sZFN0YXRlLCBtdW5jaGVkSW5wdXQpO1xyXG5cclxuICAgICAgICAgIGlmICh0b2tlbi5raW5kID09PSBUb2tlbi5LaW5kLlZBTFVFKSB7XHJcbiAgICAgICAgICAgIGlmICh0b2tlbi5sZXhlbWUgPT09IFwiU0VMRUNUXCIpIHRva2VuID0gbmV3IFRva2VuKFRva2VuLktpbmQuU0VMRUNULCB0b2tlbi5sZXhlbWUpO1xyXG4gICAgICAgICAgICBlbHNlIGlmICh0b2tlbi5sZXhlbWUgPT09IFwiRlJPTVwiKSB0b2tlbiA9IG5ldyBUb2tlbihUb2tlbi5LaW5kLkZST00sIHRva2VuLmxleGVtZSk7XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHRva2VuLmxleGVtZSA9PT0gXCJXSEVSRVwiKSB0b2tlbiA9IG5ldyBUb2tlbihUb2tlbi5LaW5kLldIRVJFLCB0b2tlbi5sZXhlbWUpO1xyXG4gICAgICAgICAgICBlbHNlIGlmICh0b2tlbi5sZXhlbWUgPT09IFwiT1JERVJcIikgdG9rZW4gPSBuZXcgVG9rZW4oVG9rZW4uS2luZC5PUkRFUiwgdG9rZW4ubGV4ZW1lKTtcclxuICAgICAgICAgICAgZWxzZSBpZiAodG9rZW4ubGV4ZW1lID09PSBcIkJZXCIpIHRva2VuID0gbmV3IFRva2VuKFRva2VuLktpbmQuQlksIHRva2VuLmxleGVtZSk7XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHRva2VuLmxleGVtZSA9PT0gXCJMSU1JVFwiKSB0b2tlbiA9IG5ldyBUb2tlbihUb2tlbi5LaW5kLkxJTUlULCB0b2tlbi5sZXhlbWUpO1xyXG4gICAgICAgICAgICBlbHNlIGlmICh0b2tlbi5sZXhlbWUgPT09IFwiQU5EXCIpIHRva2VuID0gbmV3IFRva2VuKFRva2VuLktpbmQuQU5ELCB0b2tlbi5sZXhlbWUpO1xyXG4gICAgICAgICAgICBlbHNlIGlmICh0b2tlbi5sZXhlbWUgPT09IFwiT1JcIikgdG9rZW4gPSBuZXcgVG9rZW4oVG9rZW4uS2luZC5PUiwgdG9rZW4ubGV4ZW1lKTtcclxuICAgICAgICAgICAgZWxzZSBpZiAodG9rZW4ubGV4ZW1lID09PSBcIkxJS0VcIikgdG9rZW4gPSBuZXcgVG9rZW4oVG9rZW4uS2luZC5MSUtFLCB0b2tlbi5sZXhlbWUpO1xyXG4gICAgICAgICAgICBlbHNlIGlmICh0b2tlbi5sZXhlbWUgPT09IFwiSU5cIikgdG9rZW4gPSBuZXcgVG9rZW4oVG9rZW4uS2luZC5JTiwgdG9rZW4ubGV4ZW1lKTtcclxuXHJcbiAgICAgICAgICB9IGVsc2UgaWYgKHRva2VuLmtpbmQgPT09IFRva2VuLktpbmQuU1FVT1RFIHx8IHRva2VuLmtpbmQgPT09IFRva2VuLktpbmQuRFFVT1RFKSB7XHJcbiAgICAgICAgICAgIHdoaWxlIChpIDwgaW5wdXQubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgYyA9IGlucHV0W2ldO1xyXG4gICAgICAgICAgICAgIG11bmNoZWRJbnB1dCArPSBjO1xyXG4gICAgICAgICAgICAgICsraTtcclxuICAgICAgICAgICAgICBpZiAoYyA9PT0gdG9rZW4ubGV4ZW1lKSBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAobXVuY2hlZElucHV0W211bmNoZWRJbnB1dC5sZW5ndGggLSAxXSAhPT0gdG9rZW4ubGV4ZW1lKSB7XHJcbiAgICAgICAgICAgICAgdGhyb3cgbmV3IFN5bnRheEVycm9yKFwiU2Nhbm5pbmcgZmFpbHVyZTogU2ltcGxpZmllZCBtYXhpbWFsIG11bmNoIGZhaWxlZCBvbiBpbnB1dDogXCIgKyBtdW5jaGVkSW5wdXQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRva2VuID0gbmV3IFRva2VuKFRva2VuLktpbmQuVkFMVUUsIG11bmNoZWRJbnB1dCk7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgcmVzdWx0LnB1c2godG9rZW4pO1xyXG5cclxuICAgICAgICAgIG11bmNoZWRJbnB1dCA9IFwiXCI7XHJcbiAgICAgICAgICBzdGF0ZSA9IHRoaXMuc3RhcnQoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgaWYgKHRoaXMuZmFpbGVkKHN0YXRlKSkge1xyXG4gICAgICAgICAgICBtdW5jaGVkSW5wdXQgKz0gYztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHRocm93IG5ldyBTeW50YXhFcnJvcihcIlNjYW5uaW5nIGZhaWx1cmU6IFNpbXBsaWZpZWQgbWF4aW1hbCBtdW5jaCBmYWlsZWQgb24gaW5wdXQ6IFwiICsgbXVuY2hlZElucHV0KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHRva2VuaXplKHF1ZXJ5ID0gbnVsbCkge1xyXG4gIGlmIChxdWVyeSA9PT0gbnVsbCB8fCBxdWVyeSA9PT0gdW5kZWZpbmVkKSByZXR1cm4gbnVsbDtcclxuICB2YXIgZGZhID0gbmV3IEFzbURGQSgpO1xyXG5cclxuICB2YXIgdG9rZW5zID0gZGZhLnNpbXBsaWZpZWRNYXhpbWFsTXVuY2gocXVlcnkpO1xyXG5cclxuICAvLyBXZSBuZWVkIHRvOlxyXG4gIC8vICogUmVtb3ZlIFdISVRFU1BBQ0UgdG9rZW5zIGVudGlyZWx5LlxyXG5cclxuICB2YXIgbmV3VG9rZW5zID0gW107XHJcblxyXG4gIHRva2Vucy5mb3JFYWNoKGZ1bmN0aW9uICh0b2tlbikge1xyXG4gICAgaWYgKHRva2VuLmtpbmQgIT09IFRva2VuLktpbmQuV0hJVEVTUEFDRSkge1xyXG4gICAgICBuZXdUb2tlbnMucHVzaCh0b2tlbik7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiBuZXdUb2tlbnM7XHJcbn1cclxuIiwiaW1wb3J0IERvbXFsIGZyb20gJy4vZG9tcWwuanMnO1xyXG5leHBvcnQgeyBEb21xbCB9O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9