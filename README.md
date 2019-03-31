# domql
> DOM query language.

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/435de61743134f549100edd8b737a198)](https://www.codacy.com/app/yuxuan98/domql?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=yuxuan-ji/domql&amp;utm_campaign=Badge_Grade)
[![Known Vulnerabilities](https://snyk.io/test/github/yuxuan-ji/domql/badge.svg?targetFile=package.json)](https://snyk.io/test/github/yuxuan-ji/domql?targetFile=package.json)

Tired of using document.querySelector() with CSS selectors? Ever wanted to use SQL-like syntax to query DOM elements?<br/>
Yeah, me neither.

## Installation & Usage

ES6:

```javascript
import * as domql from './domql.min.js';
var result = domql.$("SELECT * FROM html WHERE id='foo'");
```

From script:

```html
<script src="https://cdn.jsdelivr.net/gh/yuxuan-ji/domql@master/dist/domql.min.js"></script>

<script>
    var result = domql.$("SELECT * FROM html WHERE id='foo'");
</script>
```

## Compiling a DOMQL query for subsequent usage

You can use the <code>$$</code> helper method to avoid recompiling the same query:

```javascript
var cursor = domql.$$("SELECT * FROM html WHERE id='foo'");
// You can then use this cursor for subsequent queries:
var result = cursor.execute();
var result2 = cursor.execute();
...
var resultX = cursor.execute();
```

## Using a different query engine

By default, Domql uses <code>document.querySelectorAll</code> as its query engine. While this results in an overall smaller
build file, the default engine has limited support for complex CSS selectors. When you need access to complex queries, it is
recommended to use an external query engine such as [Sizzle.js](https://github.com/jquery/sizzle) like so:

ES6:

```javascript
import * as Sizzle from './sizzle.min.js';
...
domql.QueryEngine.setEngine(Sizzle.default);
```

From script:

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/sizzle/2.3.3/sizzle.min.js"></script>
...
<script>
    domql.QueryEngine.setEngine(Sizzle);
</script>
```

## Demo

_A demo is available in the [Demo Page][demo]._

## More examples

_For even more examples and usage, please refer to the [Examples Page][examples]._

## Development setup

Install Dependencies:

```sh
npm install
```

Build lib:

```sh
npm run build
```

Build non-minified and run playground:

```sh
npm run dev
```

Run tests:

```sh
npm run test
```


## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

1. Fork this repo
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Commit your changes (`git commit -am 'Add some fooBar'`)
4. Push to the branch (`git push origin feature/fooBar`)
5. Create a new Pull Request

# Documentation

Documentation is generated with JsDoc and jsdoc2md. Run:

```sh
npm run build:docs
```
to generate the documentation automatically from your JsDoc comments.

<!-- Markdown link & img dfn's -->
[examples]: https://github.com/yuxuan-ji/domql/tree/master/examples
[demo]: https://yuxuan-ji.github.io/domql/#demo
