"use strict";

var oneFunc = require("../src/one.js");

describe("Function one: ", function () {

	it("should return a string", function () {

		var locPath = oneFunc();
		expect(typeof locPath).toBe("string");
	});
});