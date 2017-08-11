// Simple app to demonstrate Inheritance

// get required core modules
var EventEmitter = require('events');
var util = require('util');

// simple object
function Greetr() {
    this.greeting = "Hello World !!";
}

// Setup inheritance, Greetr objects now inherits EventEmitter
// Greetr object has access to EventEmitter methods
util.inherits(Greetr, EventEmitter);

// we can create more methods to Greetr
Greetr.prototype.greet = function(event_data) {
    console.log(this.greeting);

    // we will also make this function to emit an event
    // It is possible because it inherits EventEmitter
    this.emit('greet', event_data);
}

// instantiate an object
var greeter = new Greetr();

// we will listen for events using greeter1
greeter.on('greet', function(event_data) {
    console.log('Greetings from ' + event_data);
});


// finally call the function to send an event
greeter.greet('Arun');
