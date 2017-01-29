var fs = require('fs');

var require = require('request');

//Creating a temporary function that would help us make the constructor object for the function that is required//
function newTriangle (side1, side2, side3){
    this.side1 = side1,
    this.side2 = side2,
    this.side3 = side3

};

//establishing the constructor object for the Triangle//
var Triangle = new newTraingle(side1, side2, side3);




