var require = require('request');
// any data that is going to be requested is asked//
var fs = require('fs');

//making the other files available to each other//
var Shape = require('./shape.js');
var Triangle = require('./Traingle.js');


//Setting up the function for square side and create it as a constructor//
var Square = function (side1, side2){
    this.side1 = side1;
    this.side2 = side2;

};

//This will allow the square Object constructor to move to another location where it could be called//

module.exports  = Square; 
