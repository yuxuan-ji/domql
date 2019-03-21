```
start BEGIN query END

query SELECT * FROM tags modifiers
query SELECT * FROM tags WHERE conditions modifiers

tags tag
tags tag COMMA tags
tag VALUE

conditions condition
conditions conditions OR condition
condition test
condition condition AND test

test attribute EQ VALUE
test field EQ VALUE
test LPAREN conditions RPAREN

attribute VALUE

field VALUE
field field DOT VALUE

modifiers
modifiers modifier modifiers
modifier ORDER BY VALUE
modifier LIMIT NUM
```
