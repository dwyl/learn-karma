"use strict";

var twoFunc = require("../src/two.js");

describe("Function two: ", function () {

	it("should change location", function () {

		var path = "/user/22"
		twoFunc(path);
		expect(window.location.hash).toBe("#"+path);
	});
});