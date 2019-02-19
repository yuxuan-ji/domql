## Functions

<dl>
<dt><a href="#parse">parse(tokens)</a> ⇒ <code><a href="#AST">AST</a></code></dt>
<dd><p>Parse a list of tokens and returns the Abstract Syntax Tree</p>
</dd>
</dl>

## Typedefs

<dl>
<dt><a href="#Token">Token</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#AST">AST</a> : <code>Object</code></dt>
<dd></dd>
</dl>

<a name="parse"></a>

## parse(tokens) ⇒ [<code>AST</code>](#AST)
Parse a list of tokens and returns the Abstract Syntax Tree

**Kind**: global function

| Param | Type |
| --- | --- |
| tokens | [<code>Array.&lt;Token&gt;</code>](#Token) |

<a name="Token"></a>

## Token : <code>Object</code>
**Kind**: global typedef
**Properties**

| Name | Type |
| --- | --- |
| kind | <code>string</code> |
| lexeme | <code>string</code> |

<a name="AST"></a>

## AST : <code>Object</code>
**Kind**: global typedef
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | Abstract Syntax Tree |
