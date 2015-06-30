"use strict";

module.exports = setLocationHash;

function setLocationHash (path) {

	return window.location.hash = path;
}