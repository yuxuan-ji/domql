export class Token {

  constructor(kind, lexeme) {
    this._kind = kind;
    this._lexeme = lexeme;
  }

  get kind() {
    return this._kind;
  }

  get lexeme() {
    return this._lexeme;
  }

}

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

class AsmDFA {
  constructor() {
    // Setup states
    this.State = Token.Kind;
    var keys = Object.keys(Token.Kind);
    var i = keys.length;
    this.State.FAIL = i++;
    this.State.START = i++;
    this.State.EXCLAMATION = i++;
    this.State.LARGEST_STATE = this.State.EXCLAMATION;

    // Setup accepting states
    this._acceptingStates = new Set(Object.values(Token.Kind));

    // Setup transition function
    this._TF_LEN = this.State.LARGEST_STATE + 1;
    this._TF_STATE_LEN = 128;
    this._transitionFunction = new Array(this._TF_LEN);
    for (i = 0; i < this._TF_LEN; i++) {
      this._transitionFunction[i] = {};
    }

    function isalpha(c) { return /^[a-zA-Z()]$/.test(c); }
    // function isalnum(c) {
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
    function isspace(c) {return " \t\n\r\v".indexOf(c) !== -1; }

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
  }
  // Register a transition on all chars in chars or on all chars matching test
  registerTransition(oldState, chars, newState) {
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
  }
  // Returns the state corresponding to following a transition
  // from the given starting state on the given character,
  // or a special fail state if the transition does not exist.
  transition(state, nextChar) {
    return this._transitionFunction[state][nextChar.charCodeAt()] === undefined ?
      this.State.FAIL : this._transitionFunction[state][nextChar.charCodeAt()];
  };

  // Checks whether the state returned by transition
  // corresponds to failure to transition.
  failed(state) { return state === this.State.FAIL; }

  // Checks whether the state returned by transition
  // is an accepting state.
  accept(state) {
    return this._acceptingStates.has(state);
  }

  // Returns the starting state of the DFA
  start() { return this.State.START; }

  // Tokenizes an input string according to the SMM algorithm.
  // You will learn the SMM algorithm in class around the time of Assignment 6.
  simplifiedMaximalMunch(input) {
    var result = [];

    var state = this.start();
    var munchedInput = '';

    // We can't use a range-based for loop effectively here
    // since the iterator doesn't always increment.
    for (let i = 0; i < input.length;) {
      var c = input[i];
      var oldState = state;
      state = this.transition(state, c);

      if (!this.failed(state)) {
        munchedInput += c;
        oldState = state;

        ++i;
      }

      if (i === input.length || this.failed(state)) {
        if (this.accept(oldState)) {
          var token = new Token(oldState, munchedInput);

          if (token.kind === Token.Kind.VALUE) {
            if (token.lexeme === "SELECT") token = new Token(Token.Kind.SELECT, token.lexeme);
            else if (token.lexeme === "FROM") token = new Token(Token.Kind.FROM, token.lexeme);
            else if (token.lexeme === "WHERE") token = new Token(Token.Kind.WHERE, token.lexeme);
            else if (token.lexeme === "ORDER") token = new Token(Token.Kind.ORDER, token.lexeme);
            else if (token.lexeme === "BY") token = new Token(Token.Kind.BY, token.lexeme);
            else if (token.lexeme === "LIMIT") token = new Token(Token.Kind.LIMIT, token.lexeme);
            else if (token.lexeme === "AND") token = new Token(Token.Kind.AND, token.lexeme);
            else if (token.lexeme === "OR") token = new Token(Token.Kind.OR, token.lexeme);
            else if (token.lexeme === "LIKE") token = new Token(Token.Kind.LIKE, token.lexeme);
            else if (token.lexeme === "IN") token = new Token(Token.Kind.IN, token.lexeme);

          } else if (token.kind === Token.Kind.SQUOTE || token.kind === Token.Kind.DQUOTE) {
            while (i < input.length) {
              c = input[i];
              munchedInput += c;
              ++i;
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
}

export function tokenize(query = null) {
  if (query === null || query === undefined) return null;
  var dfa = new AsmDFA();

  var tokens = dfa.simplifiedMaximalMunch(query);

  // We need to:
  // * Remove WHITESPACE tokens entirely.

  var newTokens = [];

  tokens.forEach(function (token) {
    if (token.kind !== Token.Kind.WHITESPACE) {
      newTokens.push(token);
    }
  });

  return newTokens;
}
