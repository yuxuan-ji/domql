## Functions

<dl>
<dt><a href="#tokenize">tokenize(query)</a> ⇒ <code><a href="#Token">Array.&lt;Token&gt;</a></code></dt>
<dd><p>Tokenizes an user query</p>
</dd>
</dl>

## Typedefs

<dl>
<dt><a href="#Token">Token</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#AsmDFA">AsmDFA</a> : <code>Object</code></dt>
<dd></dd>
</dl>

<a name="tokenize"></a>

## tokenize(query) ⇒ [<code>Array.&lt;Token&gt;</code>](#Token)
Tokenizes an user query

**Kind**: global function

| Param | Type |
| --- | --- |
| query | <code>string</code> |

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
or a special fail state if the transition does not exist.

**Kind**: instance method of [<code>AsmDFA</code>](#AsmDFA)

| Param | Type |
| --- | --- |
| state | <code>Asm.State</code> |
| nextChar | <code>char</code> |

<a name="AsmDFA+failed"></a>

### asmDFA.failed(state) ⇒ <code>bool</code>
corresponds to failure to transition.transition

**Kind**: instance method of [<code>AsmDFA</code>](#AsmDFA)

| Param | Type |
| --- | --- |
| state | <code>Asm.State</code> |

<a name="AsmDFA+accept"></a>

### asmDFA.accept(state) ⇒ <code>bool</code>
is an accepting state.te returned by transition

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
