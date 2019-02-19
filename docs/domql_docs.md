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
returns a NodeList or a DOM Element or null if not found

**Kind**: instance method of [<code>Domql</code>](#Domql)
