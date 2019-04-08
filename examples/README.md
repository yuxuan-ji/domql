# Examples

### Select all elements
```javascript
var result = domql.$("SELECT * FROM *");
```

### Select the <code>html</code> element
```javascript
var result = domql.$("SELECT html FROM *");
```

### Select all elements inside the <code>html</code> element
```javascript
var result = domql.$("SELECT * FROM html");
```

### Select one element inside the <code>html</code> element with <code>id='foo'</code>
```javascript
var result = domql.$("SELECT * FROM html WHERE id='foo' LIMIT 1");
```

### Select maximum five elements inside the <code>html</code> element with <code>class='foo'</code>
```javascript
var result = domql.$("SELECT * FROM html WHERE class='foo' LIMIT 5");
```

### Select all <code>p</code> and <code>a</code> elements inside <code>div</code> elements
```javascript
var result = domql.$("SELECT p, a FROM div");
```

### Select all <code>p</code> and <code>a</code> elements inside <code>div</code> elements with multiple conditions
```javascript
var result = domql.$("SELECT p, a FROM div WHERE p.id='foo' AND (a.id='bar' OR a.href='baz.com')");
```
