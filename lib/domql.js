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

var tokenizer = _interopRequireWildcard(__webpack_require__(/*! ./tokenizer.js */ "./src/tokenizer.js"));

var parser = _interopRequireWildcard(__webpack_require__(/*! ./parser.js */ "./src/parser.js"));

var transpiler = _interopRequireWildcard(__webpack_require__(/*! ./transpiler.js */ "./src/transpiler.js"));

var utils = _interopRequireWildcard(__webpack_require__(/*! ./utils.js */ "./src/utils.js"));

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
      this._directives = transpiler.transpile(ast);
    }
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

exports.default = Domql;
module.exports = exports["default"];

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

function parse(tokens) {
  return null;
}

/***/ }),

/***/ "./src/tokenizer.js":
/*!**************************!*\
  !*** ./src/tokenizer.js ***!
  \**************************/
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

function transpile(ast) {
  return null;
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

function sort(f, arr) {
  arr.sort(f);
  return arr;
}

function execute(directives) {
  if (!directives || directives.length === 0) return null;
  var result = directives[0];

  for (var i = 1; i < directives.length; i++) {
    result = directives[i](result);
  }

  return result;
}

/***/ })

/******/ });
});
//# sourceMappingURL=domql.js.map