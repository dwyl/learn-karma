# Learn karma

Karma is a test runner for the browser supported by the Angular.js team at Google.

## Install

After initializing the repo with npm init and git init, install karma with:

```
	npm install karma --save-dev
```

## Create tests and src files

After having installed karma, create two simple files to work with:

```js
// js/index.js -------------------------------------
function hello () {
	return "HELLO WORLD!";
}
var store = hello();
console.log(store);


// test/index.spec.js -------------------------------
describe("First test", function () {

	it("should work", function () {

		console.log("HELLO WORLD!");
	});
});
```

## Karma config

In order to run karma needs a config file with the type of browsers and the general configuation

```
	./node_modules/karma/bin/karma init tests/config/karma.config.js
```

This will prompt a command line to enter the config data. In list of files insert: 

```js
    // list of files / patterns to load in the browser
    files: [
        'src/index.js',
        'tests/*.spec.js'
    ]
```

## Start karma

To start karma run:

```
	./node_modules/karma/bin/karma start tests/config/karma.config.js
```

This should throw this error:

```
Error: No provider for "framework:jasmine"! (Resolving: framework:jasmine)
```

This because karma is **not** a test framework but a **test runner**, so in order to run the tests we need to install a test framework like jasmine.

Particularly `karma-jasmine` which is a karma plugin for jasmine.

```
	npm install karma-jasmine --save-dev
```

If we try to run it again with the command above, we should get another error like this:

```
	WARN [launcher]: Can not load "Chrome", it is not registered!
	Perhaps you are missing some plugin?
```

To fix it install:

```
	npm install karma-chrome-launcher --save-dev
```

## First test

This test checks that our function returns the right result.

```js
// src/index.js -----------------------------------------
function hello () {
	return "HELLO WORLD!";
}


// test/index.spec.js -----------------------------------
describe("First test", function () {

	it("should work", function () {
		var test = hello();
		expect(test).toBe("HELLO WORLD!");
	});
});
```

## Work with browserify

Sometimes we may want to bundle all our javascript into one file. In order do to so we can use `browserify`.

Let's have a look to an example with it:

```js
// src/one.js -------------------------------------------

"use strict";

module.exports = getLocation;

function getLocation () {

	return window.location.href;
}



// src/two.js -------------------------------------------

"use strict";

module.exports = setLocationHash;

function setLocationHash (path) {

	return window.location.hash = path;
}
```

By using the karma plugin `karma-browserify` is possible to require files. Let's have a look:


```
	npm install karma-browserify --save-dev
```

We need also to update the `karma.config.js`:

```js
frameworks: ['jasmine', 'browserify'],

// ...some code

preprocessors: {
    'tests/*.spec.js': ['browserify']
},

browserify: {
    debug: true
},
```

Now everything is ready in order to require files directly from out test files.

```js
// test/one.spec.js -------------------------------------------
"use strict";

var oneFunc = require("../src/one.js");

describe("Function one: ", function () {

	it("should return a string", function () {

		var locPath = oneFunc();
		expect(typeof locPath).toBe("string");
	});
});


// test/two.spec.js -------------------------------------------
"use strict";

var twoFunc = require("../src/two.js");

describe("Function two: ", function () {

	it("should change location", function () {

		var path = "/user/22"
		twoFunc(path);
		expect(window.location.hash).toBe("#"+path);
	});
});
```