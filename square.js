var require = require('request');
var fs = require('fs');

//Setting up the function for square side//
var Square = function (side1, side2){
    this.side1 = side1;
    this.side2 = side2;

};

//This will allow the square Object constructor to move to another location where it could be called//

module.exports  = Square; 
