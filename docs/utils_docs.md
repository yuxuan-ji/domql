## Functions

<dl>
<dt><a href="#sort">sort(f, arr)</a> ⇒ <code>Array.&lt;any&gt;</code></dt>
<dd><p>Directive: Sort</p>
</dd>
<dt><a href="#execute">execute(directives)</a> ⇒ <code>NodeList</code> | <code>Element</code></dt>
<dd><p>Reduces a list of directives by applying
each element on its previous element and
returns the final NodeList, HTML Element, or null</p>
</dd>
</dl>

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
returns the final NodeList, HTML Element, or null

**Kind**: global function

| Param | Type |
| --- | --- |
| directives | <code>Array.&lt;string&gt;</code> \| <code>Array.&lt;function()&gt;</code> |
