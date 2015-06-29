'use strict';


var getLocation = require("./one.js");
var setLocation = require("./two.js");

var currentLocation = getLocation();

setLocation("/hello");