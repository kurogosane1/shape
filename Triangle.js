//Allowing the files to be read from other areas//
var fs = require('fs');

var require = require('request');

// this is to request files from other files
var Square = require('./square.js');
var Shape = require('./shape.js');

//Creating a temporary function that would help us make the constructor object for the function that is required//
var Triangle = function (side1, side2, side3){
    this.side1 = side1,
    this.side2 = side2,
    this.side3 = side3

};

module.exports = Triangle;



