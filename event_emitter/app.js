// Simple app to demonstrate Events

// get the custom event object constructor
var Emitter = require('./emitter.js');
var eventsConfig = require('./config.js').events;

// If we want to use Node's core events module, we just have to change above line as below
// var Emitter = require('events');

// construct a new object of the event emitter
var emitter = new Emitter();

// manually push events
emitter.on(eventsConfig.GREET, function() {
    console.log('Somewhere, someone said Hello !!');
});

emitter.on(eventsConfig.GREET, function() {
    console.log('A greeting occurred');
});


// ... and trigger the event manually
emitter.emit(eventsConfig.GREET);


