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