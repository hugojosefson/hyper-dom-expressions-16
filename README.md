# hyper-dom-expressions#16

Companion repo to Pull Request
[ryansolid/dom-expressions#16](https://github.com/ryansolid/dom-expressions/pull/16).

## How to use

```bash
yarn
yarn start
```

Browse to [http://localhost:1234](http://localhost:1234) in a browser
with Developer Console open. Possibly reload the browser after having
opened the Console to see the error output.

### Expected result

* The web page displaying **HELLO**.
* No errors in the Developer Console.

### Actual result

Depending on which branch of this repo you are on:

#### master branch, using `hyper-dom-expressions@=0.18.11`

* Empty web page.
* Error in the Developer Console:

```
TypeError: props is null
```

#### hyper-dom-expressions-0.19.0

* The web page displaying **HELLO**.
* No errors in the Developer Console.

