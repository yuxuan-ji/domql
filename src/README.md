## Classes

<dl>
<dt><a href="#Directives">Directives</a></dt>
<dd><p>Utility class containing directives for SQL modifiers</p>
</dd>
<dt><a href="#Domql">Domql</a></dt>
<dd><p>DOMQL API model</p>
</dd>
<dt><a href="#Parser">Parser</a></dt>
<dd><p>Parser for converting queries into Abstract Syntax trees</p>
</dd>
<dt><a href="#QueryEngine">QueryEngine</a></dt>
<dd><p>Wrapper around the inner query engine. Defaults to QueryEngine.defaultQuerySelector</p>
</dd>
<dt><a href="#Transpiler">Transpiler</a></dt>
<dd><p>Transpiler for converting Abstract Syntax Trees into CSS selectors and Javascript directives</p>
</dd>
</dl>

## Functions

<dl>
<dt><a href="#$">$(query)</a> ⇒ <code>Element</code></dt>
<dd><p>Utilty method to execute a DOMQL query</p>
</dd>
<dt><a href="#$$">$$(query)</a> ⇒ <code>Object</code></dt>
<dd><p>Utility method to create a DOMQL instance. This instance can then be used
subsequently to avoid recompilation.</p>
</dd>
</dl>

<a name="Directives"></a>

## Directives
Utility class containing directives for SQL modifiers

**Kind**: global class  

* [Directives](#Directives)
    * [.sort(f, arr)](#Directives.sort) ⇒ <code>Array.&lt;Any&gt;</code>
    * [.limiter(limit, arr)](#Directives.limiter) ⇒ <code>Array.&lt;Any&gt;</code>
    * [.execute(selector, engine, directives)](#Directives.execute) ⇒ <code>Array.&lt;Element&gt;</code>

<a name="Directives.sort"></a>

### Directives.sort(f, arr) ⇒ <code>Array.&lt;Any&gt;</code>
Directive: Sort

**Kind**: static method of [<code>Directives</code>](#Directives)  
**Returns**: <code>Array.&lt;Any&gt;</code> - : sorted list  

| Param | Type | Description |
| --- | --- | --- |
| f | <code>function</code> | : function used to compare |
| arr | <code>Array.&lt;Any&gt;</code> | : list to sort |

<a name="Directives.limiter"></a>

### Directives.limiter(limit, arr) ⇒ <code>Array.&lt;Any&gt;</code>
Directive: Limiter

**Kind**: static method of [<code>Directives</code>](#Directives)  

| Param | Type | Description |
| --- | --- | --- |
| limit | <code>Number</code> | max amount of elements in the array |
| arr | <code>Array.&lt;Any&gt;</code> |  |

<a name="Directives.execute"></a>

### Directives.execute(selector, engine, directives) ⇒ <code>Array.&lt;Element&gt;</code>
Query the CSS selector using the given engine, then apply eachdirective on the result

**Kind**: static method of [<code>Directives</code>](#Directives)  

| Param | Type |
| --- | --- |
| selector | <code>String</code> | 
| engine | <code>function</code> | 
| directives | <code>Array.&lt;function()&gt;</code> | 

<a name="Domql"></a>

## Domql
DOMQL API model

**Kind**: global class  

* [Domql](#Domql)
    * [new exports.Domql(query)](#new_Domql_new)
    * [.compile(query)](#Domql+compile)
    * [.execute()](#Domql+execute) ⇒ <code>Array.&lt;Element&gt;</code>

<a name="new_Domql_new"></a>

### new exports.Domql(query)
Initialize a Domql object with the input query.


| Param | Type | Default |
| --- | --- | --- |
| query | <code>String</code> | <code></code> | 

<a name="Domql+compile"></a>

### domql.compile(query)
Compile user query into a query model

**Kind**: instance method of [<code>Domql</code>](#Domql)  

| Param | Type | Default |
| --- | --- | --- |
| query | <code>String</code> | <code></code> | 

<a name="Domql+execute"></a>

### domql.execute() ⇒ <code>Array.&lt;Element&gt;</code>
Execute compiled query model andreturns an Element array.

**Kind**: instance method of [<code>Domql</code>](#Domql)  
<a name="Parser"></a>

## Parser
Parser for converting queries into Abstract Syntax trees

**Kind**: global class  
<a name="Parser.parse"></a>

### Parser.parse(query) ⇒ <code>Object</code>
Parse a query into an Abstract Syntax Tree

**Kind**: static method of [<code>Parser</code>](#Parser)  
**Returns**: <code>Object</code> - the Abstract Syntax Tree  

| Param | Type |
| --- | --- |
| query | <code>String</code> | 

<a name="QueryEngine"></a>

## QueryEngine
Wrapper around the inner query engine. Defaults to QueryEngine.defaultQuerySelector

**Kind**: global class  

* [QueryEngine](#QueryEngine)
    * [.getEngine()](#QueryEngine.getEngine) ⇒ <code>function</code>
    * [.setEngine()](#QueryEngine.setEngine)
    * [.useDefault()](#QueryEngine.useDefault)
    * [.defaultQuerySelector(selector)](#QueryEngine.defaultQuerySelector) ⇒ <code>Array.&lt;Element&gt;</code>

<a name="QueryEngine.getEngine"></a>

### QueryEngine.getEngine() ⇒ <code>function</code>
Get the engine

**Kind**: static method of [<code>QueryEngine</code>](#QueryEngine)  
<a name="QueryEngine.setEngine"></a>

### QueryEngine.setEngine()
Set the engine

**Kind**: static method of [<code>QueryEngine</code>](#QueryEngine)  
<a name="QueryEngine.useDefault"></a>

### QueryEngine.useDefault()
Use the default engine: QueryEngine.defaultQuerySelector

**Kind**: static method of [<code>QueryEngine</code>](#QueryEngine)  
<a name="QueryEngine.defaultQuerySelector"></a>

### QueryEngine.defaultQuerySelector(selector) ⇒ <code>Array.&lt;Element&gt;</code>
The default query selector: document.querySelectorAll wrapped around Array.from

**Kind**: static method of [<code>QueryEngine</code>](#QueryEngine)  

| Param | Type |
| --- | --- |
| selector | <code>String</code> | 

<a name="Transpiler"></a>

## Transpiler
Transpiler for converting Abstract Syntax Trees into CSS selectors and Javascript directives

**Kind**: global class  

* [Transpiler](#Transpiler)
    * [._getColumnReferences(node)](#Transpiler._getColumnReferences) ⇒ <code>Set</code>
    * [._augmentWhere(node, columns)](#Transpiler._augmentWhere)
    * [._constructSelectors(node, selectors)](#Transpiler._constructSelectors)
    * [._compileSelectors(selectors, scope)](#Transpiler._compileSelectors) ⇒ <code>String</code>
    * [.transpile(ast)](#Transpiler.transpile) ⇒ <code>Object</code>

<a name="Transpiler._getColumnReferences"></a>

### Transpiler.\_getColumnReferences(node) ⇒ <code>Set</code>
Traverse the Columns clause of the AST and return a Set containing the listed columns

**Kind**: static method of [<code>Transpiler</code>](#Transpiler)  
**Returns**: <code>Set</code> - Set containing the columns listed in the From clause  

| Param | Type | Description |
| --- | --- | --- |
| node | <code>Object</code> | The Columns clause of the AST |

<a name="Transpiler._augmentWhere"></a>

### Transpiler.\_augmentWhere(node, columns)
Traverse and augment the Where clause of the AST, and check if conditions using a table referenceare valid

**Kind**: static method of [<code>Transpiler</code>](#Transpiler)  

| Param | Type | Description |
| --- | --- | --- |
| node | <code>Object</code> | The Where clause of the AST |
| columns | <code>Set</code> | Set containing the columns listed in the From clause |

<a name="Transpiler._constructSelectors"></a>

### Transpiler.\_constructSelectors(node, selectors)
Traverse the augmented Where clause and generate corresponding CSS selectors

**Kind**: static method of [<code>Transpiler</code>](#Transpiler)  

| Param | Type | Description |
| --- | --- | --- |
| node | <code>Object</code> | The augmented Where clause of the AST |
| selectors | <code>Object</code> | Map of columns to their generated selectors |

<a name="Transpiler._compileSelectors"></a>

### Transpiler.\_compileSelectors(selectors, scope) ⇒ <code>String</code>
Reduce the selectors map into one DOMString

**Kind**: static method of [<code>Transpiler</code>](#Transpiler)  
**Returns**: <code>String</code> - compiled DOMString  

| Param | Type | Description |
| --- | --- | --- |
| selectors | <code>Object</code> |  |
| scope | <code>String</code> | the upmost parent |

<a name="Transpiler.transpile"></a>

### Transpiler.transpile(ast) ⇒ <code>Object</code>
Traverses the given Abstract Syntax Treeand returns the query model

**Kind**: static method of [<code>Transpiler</code>](#Transpiler)  
**Returns**: <code>Object</code> - the transpiled query model  

| Param | Type |
| --- | --- |
| ast | <code>Object</code> | 

<a name="$"></a>

## $(query) ⇒ <code>Element</code>
Utilty method to execute a DOMQL query

**Kind**: global function  
**Returns**: <code>Element</code> - query result  

| Param | Type |
| --- | --- |
| query | <code>String</code> | 

<a name="$$"></a>

## $$(query) ⇒ <code>Object</code>
Utility method to create a DOMQL instance. This instance can then be usedsubsequently to avoid recompilation.

**Kind**: global function  
**Returns**: <code>Object</code> - DOMQL instance  

| Param | Type |
| --- | --- |
| query | <code>String</code> | 

