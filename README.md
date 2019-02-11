# domql
> DOM query language.

<!-- [![NPM Version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Downloads Stats][npm-downloads]][npm-url] -->

Tired of using document.querySelector() with CSS selectors? Ever wanted to use SQL-like syntax to query DOM elements?
Yeah, me neither.

<!-- ![](header.png) -->

## Installation & Usage

ES6:

```javascript
import Domql from './domql.js';
var cursor = new Domql("SELECT * FROM html WHERE id='foo'");
var result = cursor.execute();
```

From script:

```html
<script src="domql.js"></script>

<script>
    var cursor = new domql.Domql("SELECT * FROM html WHERE id='foo'");
    var result = cursor.execute();
</script>
```

## More examples

_For even more examples and usage, please refer to the [Wiki][wiki]._

## Development setup

Build:

```sh
npm run build
```

Dev:

```sh
npm run dev
```

Test:

```sh
npm run test
```


## Contributing

Contributions are welcome through pull requests!

1. Fork it (<https://github.com/yourname/yourproject/fork>)
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Commit your changes (`git commit -am 'Add some fooBar'`)
4. Push to the branch (`git push origin feature/fooBar`)
5. Create a new Pull Request

<!-- Markdown link & img dfn's -->
[npm-image]: https://img.shields.io/npm/v/datadog-metrics.svg?style=flat-square
[npm-url]: https://npmjs.org/package/datadog-metrics
[npm-downloads]: https://img.shields.io/npm/dm/datadog-metrics.svg?style=flat-square
[travis-image]: https://img.shields.io/travis/dbader/node-datadog-metrics/master.svg?style=flat-square
[travis-url]: https://travis-ci.org/dbader/node-datadog-metrics
[wiki]: https://github.com/yourname/yourproject/wiki
