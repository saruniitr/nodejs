// Simple module
//

// function statement
function greet(name) {
    console.log('Hello '.concat(name));
}

// function as object
function logGreeting(func) {
    func("New World");
}

// function expression
var greetMe = function() {
    console.log("Hi There !!");
}

// function that we are exporting from this module
module.exports = greet;