// Simple app to demonstrate Events

// get the custom event object constructor
var Emitter = require('./emitter.js');

// If we want to use Node's core events module, we just have to change above line as below
// var Emitter = require('events');

// construct a new object of the event emitter
var event = new Emitter();

// manually push events
event.on('greet', function() {
    console.log('Somewhere, someone said Hello !!');
});

event.on('greet', function() {
    console.log('A greeting occurred');
});


// ... and trigger the event manually
event.emit('greet');


