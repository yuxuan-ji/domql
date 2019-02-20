## Functions

<dl>
<dt><a href="#parse">parse(tokens)</a> ⇒ <code><a href="#AST">AST</a></code></dt>
<dd><p>Parse a list of tokens and returns the Abstract Syntax Tree</p>
</dd>
<dt><a href="#tokenize">tokenize(query)</a> ⇒ <code><a href="#Token">Array.&lt;Token&gt;</a></code></dt>
<dd><p>Tokenizes an user query</p>
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

## Typedefs

<dl>
<dt><a href="#Domql">Domql</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#AST">AST</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#Token">Token</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#AsmDFA">AsmDFA</a> : <code>Object</code></dt>
<dd></dd>
</dl>

<a name="parse"></a>

## parse(tokens) ⇒ [<code>AST</code>](#AST)
Parse a list of tokens and returns the Abstract Syntax Tree

**Kind**: global function  

| Param | Type |
| --- | --- |
| tokens | [<code>Array.&lt;Token&gt;</code>](#Token) | 

<a name="tokenize"></a>

## tokenize(query) ⇒ [<code>Array.&lt;Token&gt;</code>](#Token)
Tokenizes an user query

**Kind**: global function  

| Param | Type |
| --- | --- |
| query | <code>string</code> | 

<a name="transpile"></a>

## transpile(ast) ⇒ <code>List.&lt;(string\|function())&gt;</code>
Traverses the given Abstract Syntax Treeand generates a set of directives

**Kind**: global function  

| Param | Type |
| --- | --- |
| ast | [<code>AST</code>](#AST) | 

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

<a name="Domql"></a>

## Domql : <code>Object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| query | <code>string</code> | 
| directives | <code>Array.&lt;any&gt;</code> | 


* [Domql](#Domql) : <code>Object</code>
    * [.Domql](#Domql+Domql)
        * [new exports.Domql(query)](#new_Domql+Domql_new)
    * [.compile(query)](#Domql+compile)
    * [.execute()](#Domql+execute) ⇒ <code>NodeList</code> \| <code>Element</code>

<a name="Domql+Domql"></a>

### domql.Domql
**Kind**: instance class of [<code>Domql</code>](#Domql)  
<a name="new_Domql+Domql_new"></a>

#### new exports.Domql(query)
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
<a name="AST"></a>

## AST : <code>Object</code>
**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | Abstract Syntax Tree |

<a name="Token"></a>

## Token : <code>Object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| kind | <code>string</code> | 
| lexeme | <code>string</code> | 

<a name="AsmDFA"></a>

## AsmDFA : <code>Object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| State | [<code>State</code>](#AsmDFA.State) | 


* [AsmDFA](#AsmDFA) : <code>Object</code>
    * _instance_
        * [.registerTransition(oldState, chars, newState)](#AsmDFA+registerTransition)
        * [.transition(state, nextChar)](#AsmDFA+transition) ⇒ <code>Asm.State</code>
        * [.failed(state)](#AsmDFA+failed) ⇒ <code>bool</code>
        * [.accept(state)](#AsmDFA+accept) ⇒ <code>bool</code>
        * [.start()](#AsmDFA+start) ⇒ <code>Asm.State</code>
        * [.simplifiedMaximalMunch(input)](#AsmDFA+simplifiedMaximalMunch) ⇒ [<code>Array.&lt;Token&gt;</code>](#Token)
    * _static_
        * [.State](#AsmDFA.State) : <code>Object</code>

<a name="AsmDFA+registerTransition"></a>

### asmDFA.registerTransition(oldState, chars, newState)
Register a transition on all chars in chars or on all chars matching test

**Kind**: instance method of [<code>AsmDFA</code>](#AsmDFA)  

| Param | Type | Description |
| --- | --- | --- |
| oldState | <code>Asm.State</code> |  |
| chars | <code>string</code> \| <code>function</code> | : A string or function that describes the allowed characters |
| newState | <code>Asm.State</code> |  |

<a name="AsmDFA+transition"></a>

### asmDFA.transition(state, nextChar) ⇒ <code>Asm.State</code>
Returns the state corresponding to following a transitionfrom the given starting state on the given character,or a special fail state if the transition does not exist.

**Kind**: instance method of [<code>AsmDFA</code>](#AsmDFA)  

| Param | Type |
| --- | --- |
| state | <code>Asm.State</code> | 
| nextChar | <code>char</code> | 

<a name="AsmDFA+failed"></a>

### asmDFA.failed(state) ⇒ <code>bool</code>
Checks whether the state returned by transitioncorresponds to failure to transition.

**Kind**: instance method of [<code>AsmDFA</code>](#AsmDFA)  

| Param | Type |
| --- | --- |
| state | <code>Asm.State</code> | 

<a name="AsmDFA+accept"></a>

### asmDFA.accept(state) ⇒ <code>bool</code>
Checks whether the state returned by transitionis an accepting state.

**Kind**: instance method of [<code>AsmDFA</code>](#AsmDFA)  

| Param | Type |
| --- | --- |
| state | <code>Asm.State</code> | 

<a name="AsmDFA+start"></a>

### asmDFA.start() ⇒ <code>Asm.State</code>
Returns the starting state of the DFA

**Kind**: instance method of [<code>AsmDFA</code>](#AsmDFA)  
<a name="AsmDFA+simplifiedMaximalMunch"></a>

### asmDFA.simplifiedMaximalMunch(input) ⇒ [<code>Array.&lt;Token&gt;</code>](#Token)
Tokenizes an input string according to the SMM algorithm.

**Kind**: instance method of [<code>AsmDFA</code>](#AsmDFA)  

| Param | Type |
| --- | --- |
| input | <code>string</code> | 

<a name="AsmDFA.State"></a>

### AsmDFA.State : <code>Object</code>
**Kind**: static typedef of [<code>AsmDFA</code>](#AsmDFA)  
**Properties**

| Name | Type |
| --- | --- |
| state | <code>enum</code> | 

