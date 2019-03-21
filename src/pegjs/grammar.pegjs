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
  = KW_FROM __ l:table_name { return l; }

table_name
  = dt:ident tail:(__ DOT __ ident)? {
      var obj = { table: dt };
      if (tail !== null) {
        obj.table = tail[3];
      }
      return obj.table;
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
