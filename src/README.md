## Classes

<dl>
<dt><a href="#Domql">Domql</a></dt>
<dd><p>Domql: Domql API</p>
</dd>
</dl>

## Functions

<dl>
<dt><a href="#parse">parse(query)</a> ⇒ <code>Object</code></dt>
<dd><p>Parse a query into an Abstract Syntax Tree</p>
</dd>
<dt><a href="#transpile">transpile(ast)</a> ⇒ <code>List.&lt;(string|function())&gt;</code></dt>
<dd><p>Traverses the given Abstract Syntax Tree
and generates a set of directives</p>
</dd>
<dt><a href="#sort">sort(f, arr)</a> ⇒ <code>Array.&lt;any&gt;</code></dt>
<dd><p>Directive: Sort</p>
</dd>
<dt><a href="#execute">execute(directives)</a> ⇒ <code>NodeList</code> | <code>Element</code></dt>
<dd><p>Reduces a list of directives by applying
each element on its previous element and
returns the final NodeList, HTML Element, or null</p>
</dd>
</dl>

<a name="Domql"></a>

## Domql
Domql: Domql API

**Kind**: global class  

* [Domql](#Domql)
    * [new exports.Domql(query)](#new_Domql_new)
    * [.compile(query)](#Domql+compile)
    * [.execute()](#Domql+execute) ⇒ <code>NodeList</code> \| <code>Element</code>

<a name="new_Domql_new"></a>

### new exports.Domql(query)
Initialize a Domql object with the input query.


| Param | Type | Default |
| --- | --- | --- |
| query | <code>string</code> | <code>null</code> | 

<a name="Domql+compile"></a>

### domql.compile(query)
Compile user query into a set of directives

**Kind**: instance method of [<code>Domql</code>](#Domql)  

| Param | Type | Default |
| --- | --- | --- |
| query | <code>string</code> | <code>null</code> | 

<a name="Domql+execute"></a>

### domql.execute() ⇒ <code>NodeList</code> \| <code>Element</code>
Execute compiled set of directives andreturns a NodeList or a DOM Element or null if not found

**Kind**: instance method of [<code>Domql</code>](#Domql)  
<a name="parse"></a>

## parse(query) ⇒ <code>Object</code>
Parse a query into an Abstract Syntax Tree

**Kind**: global function  
**Returns**: <code>Object</code> - the Abstract Syntax Tree  

| Param | Type |
| --- | --- |
| query | <code>String</code> | 

<a name="transpile"></a>

## transpile(ast) ⇒ <code>List.&lt;(string\|function())&gt;</code>
Traverses the given Abstract Syntax Treeand generates a set of directives

**Kind**: global function  

| Param | Type |
| --- | --- |
| ast | <code>Object</code> | 

<a name="sort"></a>

## sort(f, arr) ⇒ <code>Array.&lt;any&gt;</code>
Directive: Sort

**Kind**: global function  
**Returns**: <code>Array.&lt;any&gt;</code> - : sorted list  

| Param | Type | Description |
| --- | --- | --- |
| f | <code>function</code> | : function used to compare |
| arr | <code>Array.&lt;any&gt;</code> | : list to sort |

<a name="execute"></a>

## execute(directives) ⇒ <code>NodeList</code> \| <code>Element</code>
Reduces a list of directives by applyingeach element on its previous element andreturns the final NodeList, HTML Element, or null

**Kind**: global function  

| Param | Type |
| --- | --- |
| directives | <code>Array.&lt;string&gt;</code> \| <code>Array.&lt;function()&gt;</code> | 

