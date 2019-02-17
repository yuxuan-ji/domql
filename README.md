# domql
> DOM query language.

Tired of using document.querySelector() with CSS selectors? Ever wanted to use SQL-like syntax to query DOM elements?<br/>
Yeah, me neither.

## Installation & Usage

ES6:

```javascript
import Domql from './domql.min.js';
var cursor = new Domql("SELECT * FROM html WHERE id='foo'");
var result = cursor.execute();
```

From script:

```html
<script src="domql.min.js"></script>

<script>
    var cursor = new domql.Domql("SELECT * FROM html WHERE id='foo'");
    var result = cursor.execute();
</script>
```

## More examples

_For even more examples and usage, please refer to the [Wiki][wiki]._

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

<!-- Markdown link & img dfn's -->
[wiki]: https://github.com/yuxuan-ji/domql/wiki
