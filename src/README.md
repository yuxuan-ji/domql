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
<dt><a href="#_getTableReferences">_getTableReferences(node)</a> ⇒ <code>Set</code></dt>
<dd><p>Traverse the From clause of the AST and return a Set containing the listed tables</p>
</dd>
<dt><a href="#_augmentWhere">_augmentWhere(node, tables)</a></dt>
<dd><p>Traverse and augment the Where clause of the AST, and check if conditions using a table reference
are valid</p>
</dd>
<dt><a href="#_constructSelectors">_constructSelectors(node, selectors)</a></dt>
<dd><p>Traverse the augmented Where clause and generate corresponding CSS selectors</p>
</dd>
<dt><a href="#_compileSelectors">_compileSelectors(selectors)</a> ⇒ <code>String</code></dt>
<dd><p>Reduce the selectors map into one DOMString</p>
</dd>
<dt><a href="#transpile">transpile(ast)</a> ⇒ <code>List.&lt;(String|function())&gt;</code></dt>
<dd><p>Traverses the given Abstract Syntax Tree
and generates a set of directives</p>
</dd>
<dt><a href="#sort">sort(f, arr)</a> ⇒ <code>Array.&lt;Any&gt;</code></dt>
<dd><p>Directive: Sort</p>
</dd>
<dt><a href="#execute">execute(directives)</a> ⇒ <code>NodeList</code> | <code>Element</code></dt>
<dd><p>Reduces a list of directives by applying
each element on its previous element and
returns the final NodeList, Element, or null</p>
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
| query | <code>String</code> | <code></code> | 

<a name="Domql+compile"></a>

### domql.compile(query)
Compile user query into a set of directives

**Kind**: instance method of [<code>Domql</code>](#Domql)  

| Param | Type | Default |
| --- | --- | --- |
| query | <code>String</code> | <code></code> | 

<a name="Domql+execute"></a>

### domql.execute() ⇒ <code>NodeList</code> \| <code>Element</code>
Execute compiled set of directives andreturns a NodeList or an Element or null if not found

**Kind**: instance method of [<code>Domql</code>](#Domql)  
<a name="parse"></a>

## parse(query) ⇒ <code>Object</code>
Parse a query into an Abstract Syntax Tree

**Kind**: global function  
**Returns**: <code>Object</code> - the Abstract Syntax Tree  

| Param | Type |
| --- | --- |
| query | <code>String</code> | 

<a name="_getTableReferences"></a>

## \_getTableReferences(node) ⇒ <code>Set</code>
Traverse the From clause of the AST and return a Set containing the listed tables

**Kind**: global function  
**Returns**: <code>Set</code> - Set containing the tables listed in the From clause  

| Param | Type | Description |
| --- | --- | --- |
| node | <code>Object</code> | The From clause of the AST |

<a name="_augmentWhere"></a>

## \_augmentWhere(node, tables)
Traverse and augment the Where clause of the AST, and check if conditions using a table referenceare valid

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| node | <code>Object</code> | The Where clause of the AST |
| tables | <code>Set</code> | Set containing the tables listed in the From clause |

<a name="_constructSelectors"></a>

## \_constructSelectors(node, selectors)
Traverse the augmented Where clause and generate corresponding CSS selectors

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| node | <code>Object</code> | The augmented Where clause of the AST |
| selectors | <code>Object</code> | Map of tables to their generated selectors |

<a name="_compileSelectors"></a>

## \_compileSelectors(selectors) ⇒ <code>String</code>
Reduce the selectors map into one DOMString

**Kind**: global function  
**Returns**: <code>String</code> - compiled DOMString  

| Param | Type |
| --- | --- |
| selectors | <code>Object</code> | 

<a name="transpile"></a>

## transpile(ast) ⇒ <code>List.&lt;(String\|function())&gt;</code>
Traverses the given Abstract Syntax Treeand generates a set of directives

**Kind**: global function  

| Param | Type |
| --- | --- |
| ast | <code>Object</code> | 

<a name="sort"></a>

## sort(f, arr) ⇒ <code>Array.&lt;Any&gt;</code>
Directive: Sort

**Kind**: global function  
**Returns**: <code>Array.&lt;Any&gt;</code> - : sorted list  

| Param | Type | Description |
| --- | --- | --- |
| f | <code>function</code> | : function used to compare |
| arr | <code>Array.&lt;Any&gt;</code> | : list to sort |

<a name="execute"></a>

## execute(directives) ⇒ <code>NodeList</code> \| <code>Element</code>
Reduces a list of directives by applyingeach element on its previous element andreturns the final NodeList, Element, or null

**Kind**: global function  

| Param | Type |
| --- | --- |
| directives | <code>Array.&lt;String&gt;</code> \| <code>Array.&lt;function()&gt;</code> | 

