# domql
> DOM query language.

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/435de61743134f549100edd8b737a198)](https://www.codacy.com/app/yuxuan98/domql?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=yuxuan-ji/domql&amp;utm_campaign=Badge_Grade)

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

# Documentation

Documentation is generated with JsDoc and jsdoc2md and located in docs/api.md. Run:
```sh
bash docs/docs.sh
```
to generate the documentation automatically from your JsDoc comments.

<!-- Markdown link & img dfn's -->
[wiki]: https://github.com/yuxuan-ji/domql/wiki
