var Triangle = require("./Triangle.js");
var Square = require('./square.js');


//creating the object//
var Shape = function(){
    this.type = type;
    //attaching a method to the object//
    this.get_type = function ()
    {
        this.Square.call();
        this.Triangle.call();
    }
    
};
