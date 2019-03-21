/**
 * The following pegjs grammar modifies https://github.com/godmodelabs/flora-sql-parser/blob/master/sql.pegjs
 * with DOMQL's language specification.
 */

{
  //////////////////////////////////////////////// UTILITY VARS ////////////////////////////////////////////////

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
  };

  //////////////////////////////////////////////// UTILITY FCTS ////////////////////////////////////////////////

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
  };

  // used for dependency analysis
  var varList = [];
}

//////////////////////////////////////////////// STATEMENTS ////////////////////////////////////////////////

start
  = select_stmt

select_stmt
  = __ KW_SELECT __
    c:column_clause     __
    f:from_clause?      __
    w:where_clause?     __
    g:group_by_clause?  __
    o:order_by_clause?  __
    l:limit_clause? {
      return {
        type: 'select',
        columns: c,
        from: f,
        where: w,
        groupby: g,
        orderby: o,
        limit: l
      };
  }

//////////////////////////////////////////////// CLAUSES ////////////////////////////////////////////////

column_clause
  = (STAR !ident_start) { return '*'; }
  / head:column_list_item tail:(__ COMMA __ column_list_item)* {
      return createList(head, tail);
    }

column_list_item
  = c:column_ref {
      return c;
    }

from_clause
  = KW_FROM __ l:table_ref_list { return l; }

table_ref_list
  = head:table_name
    tail:table_ref* {
      tail.unshift(head);
      return tail;
    }

table_ref
  = __ COMMA __ t:table_name { return t; }

table_name
  = dt:ident tail:(__ DOT __ ident)? {
      var obj = { type: 'table_ref', table: dt };
      if (tail !== null) {
        obj.table = tail[3];
      }
      return obj;
    }

where_clause
  = KW_WHERE __ e:expr { return e; }

group_by_clause
  = KW_GROUP __ KW_BY __ l:column_ref_list { return l; }

column_ref_list
  = head:column_ref tail:(__ COMMA __ column_ref)* {
      return createList(head, tail);
    }

order_by_clause
  = KW_ORDER __ KW_BY __ l:order_by_list { return l; }

order_by_list
  = head:order_by_element tail:(__ COMMA __ order_by_element)* {
      return createList(head, tail);
    }

order_by_element
  = c:column_ref __ d:(KW_DESC / KW_ASC)? {
    var obj = c;
    obj.order = 'ASC';
    if (d === 'DESC') obj.order = 'DESC';
    return obj;
  }

limit_clause
  = KW_LIMIT __ i:(literal_numeric) {
      return i;
    }

//////////////////////////////////////////////// EXPRESSIONS ////////////////////////////////////////////////

expr_list
  = head:expr tail:(__ COMMA __ expr)* {
      var el = { type: 'expr_list' };
      el.value = createList(head, tail);
      return el;
    }

/**
 * Borrowed from PL/SQL ,the priority of below list IS ORDER BY DESC
 * ---------------------------------------------------------------------------------------------------
 * | =, <, >, <=, >=, <>, !=, IS, LIKE, IN                    | comparion                            |
 * | !, NOT                                                   | logical negation                     |
 * | AND                                                      | conjunction                          |
 * | OR                                                       | inclusion                            |
 * ---------------------------------------------------------------------------------------------------
 */

expr
  = or_expr

or_expr
  = head:and_expr tail:(__ KW_OR __ and_expr)* {
      return createBinaryExprChain(head, tail);
    }

and_expr
  = head:not_expr tail:(__ KW_AND __ not_expr)* {
      return createBinaryExprChain(head, tail);
    }

//here we should use `NOT` instead of `comparision_expr` to support chain-expr
not_expr
  = comparison_expr
  / exists_expr
  / (KW_NOT / "!" !"=") __ expr:not_expr {
      return createUnaryExpr('NOT', expr);
    }

comparison_expr
  = left:additive_expr __ rh:comparison_op_right? {
      if (rh === null) return left;
      else if (rh.type === 'arithmetic') return createBinaryExprChain(left, rh.tail);
      else return createBinaryExpr(rh.op, left, rh.right);
    }

exists_expr
  = op:exists_op __ LPAREN __ stmt:select_stmt __ RPAREN {
    stmt.parentheses = true;
    return createUnaryExpr(op, stmt);
  }

exists_op
  = nk:(KW_NOT __ KW_EXISTS) { return nk[0] + ' ' + nk[2]; }
  / KW_EXISTS

comparison_op_right
  = arithmetic_op_right
  / in_op_right
  / is_op_right
  / like_op_right

arithmetic_op_right
  = l:(__ arithmetic_comparison_operator __ additive_expr)+ {
      return { type: 'arithmetic', tail: l };
    }

arithmetic_comparison_operator
  = ">=" / ">" / "<=" / "<>" / "<" / "=" / "!="

is_op_right
  = KW_IS __ right:additive_expr {
      return { op: 'IS', right: right };
    }
  / (KW_IS __ KW_NOT) __ right:additive_expr {
      return { op: 'IS NOT', right: right };
  }

like_op
  = nk:(KW_NOT __ KW_LIKE) { return nk[0] + ' ' + nk[2]; }
  / KW_LIKE

in_op
  = nk:(KW_NOT __ KW_IN) { return nk[0] + ' ' + nk[2]; }
  / KW_IN

like_op_right
  = op:like_op __ right:comparison_expr {
      return { op: op, right: right };
    }

in_op_right
  = op:in_op __ LPAREN  __ l:expr_list __ RPAREN {
      return { op: op, right: l };
    }

additive_expr
  = head:multiplicative_expr
    tail:(__ multiplicative_expr)* {
      return createBinaryExprChain(head, tail);
    }

multiplicative_expr
  = head:primary
    tail:(__ primary)* {
      return createBinaryExprChain(head, tail)
    }

primary
  = literal
  / column_ref
  / LPAREN __ e:expr __ RPAREN {
      e.parentheses = true;
      return e;
    }
  / LPAREN __ list:expr_list __ RPAREN {
        list.parentheses = true;
        return list;
    }  

column_ref
  = tbl:ident __ DOT __ col:column {
      return {
        type: 'column_ref',
        column: col
      };
    }
  / col:column {
      return {
        type: 'column_ref',
        column: col
      };
    }

column_list
  = head:column tail:(__ COMMA __ column)* {
      return createList(head, tail);
    }

ident
  = name:ident_name !{ return isReserved[name.toUpperCase()] === true; } {
      return name;
    }
  / name:quoted_ident {
      return name;
    }

quoted_ident
  = double_quoted_ident
  / single_quoted_ident
  / backticks_quoted_ident

double_quoted_ident
  = '"' chars:[^"]+ '"' { return chars.join(''); }

single_quoted_ident
  = "'" chars:[^']+ "'" { return chars.join(''); }

backticks_quoted_ident
  = "`" chars:[^`]+ "`" { return chars.join(''); }

column
  = name:column_name !{ return isReserved[name.toUpperCase()] === true; } { return name; }
  / quoted_ident

column_name
  =  start:ident_start parts:column_part* { return start + parts.join(''); }

ident_name
  =  start:ident_start parts:ident_part* { return start + parts.join(''); }

ident_start = [A-Za-z_]

ident_part  = [A-Za-z0-9_]

// to support column name like `cf1:name`, used to represent object properties e.g.: person.name -> person:name
column_part  = [A-Za-z0-9_:]

star_expr
  = "*" { return { type: 'star', value: '*' }; }

//////////////////////////////////////////////// DATA TYPES ////////////////////////////////////////////////

literal
  = literal_string
  / literal_numeric
  / literal_bool
  / literal_null

literal_list
  = head:literal tail:(__ COMMA __ literal)* {
      return createList(head, tail);
    }

literal_null
  = KW_NULL {
      return { type: 'null', value: null };
    }

literal_bool
  = KW_TRUE {
      return { type: 'bool', value: true };
    }
  / KW_FALSE {
      return { type: 'bool', value: false };
    }

literal_string
  = ca:("'" single_char* "'") {
      return {
        type: 'string',
        value: ca[1].join('')
      };
    }

single_char
  = [^'\\\0-\x1F\x7f]
  / escape_char

escape_char
  = "\\'"  { return "'";  }
  / '\\"'  { return '"';  }
  / "\\\\" { return "\\"; }
  / "\\/"  { return "/";  }
  / "\\b"  { return "\b"; }
  / "\\f"  { return "\f"; }
  / "\\n"  { return "\n"; }
  / "\\r"  { return "\r"; }
  / "\\t"  { return "\t"; }
  / "\\u" h1:hexDigit h2:hexDigit h3:hexDigit h4:hexDigit {
      return String.fromCharCode(parseInt("0x" + h1 + h2 + h3 + h4));
    }

line_terminator
  = [\n\r]

literal_numeric
  = n:number {
      return { type: 'number', value: n };
    }

number
  = int_:int frac:frac exp:exp __ { return parseFloat(int_ + frac + exp); }
  / int_:int frac:frac __         { return parseFloat(int_ + frac); }
  / int_:int exp:exp __           { return parseFloat(int_ + exp); }
  / int_:int __                   { return parseFloat(int_); }

int
  = digits
  / digit:digit

frac
  = "." digits:digits { return "." + digits; }

exp
  = e:e digits:digits { return e + digits; }

digits
  = digits:digit+ { return digits.join(""); }

digit   = [0-9]

hexDigit
  = [0-9a-fA-F]

e
  = e:[eE] sign:[+-]? { return e + (sign !== null ? sign: ''); }

//////////////////////////////////////////////// KEYWORDS ////////////////////////////////////////////////

KW_NULL     = "NULL"i       !ident_start
KW_TRUE     = "TRUE"i       !ident_start
KW_FALSE    = "FALSE"i      !ident_start

KW_SELECT   = "SELECT"i     !ident_start

KW_FROM     = "FROM"i       !ident_start

KW_WHERE    = "WHERE"i      !ident_start

KW_GROUP    = "GROUP"i      !ident_start
KW_BY       = "BY"i         !ident_start
KW_ORDER    = "ORDER"i      !ident_start

KW_LIMIT    = "LIMIT"i      !ident_start

KW_ASC      = "ASC"i        !ident_start { return 'ASC'; }
KW_DESC     = "DESC"i       !ident_start { return 'DESC'; }

KW_IN       = "IN"i         !ident_start { return 'IN'; }
KW_IS       = "IS"i         !ident_start { return 'IS'; }
KW_LIKE     = "LIKE"i       !ident_start { return 'LIKE'; }
KW_EXISTS   = "EXISTS"i     !ident_start { return 'EXISTS'; }

KW_NOT      = "NOT"i        !ident_start { return 'NOT'; }
KW_AND      = "AND"i        !ident_start { return 'AND'; }
KW_OR       = "OR"i         !ident_start { return 'OR'; }

//////////////////////////////////////////////// SPECAL CHARACTERS ////////////////////////////////////////////////

DOT       = '.'
COMMA     = ','
STAR      = '*'
LPAREN    = '('
RPAREN    = ')'

LBRAKE    = '['
RBRAKE    = ']'

//////////////////////////////////////////////// SEPARATORS ////////////////////////////////////////////////
__
  = (whitespace)*


char = .

whitespace =
  [ \t\n\r]

EOL
  = EOF
  / [\n\r]+

EOF = !.
