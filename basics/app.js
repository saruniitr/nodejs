// Simple nodejs application to show basics
// app.js

var greet_export = require('./greet.js')

// greet_export("World !!");

// person class
var person = {
    firstname: 'Arun',
    lastname: 'Siluvery',
    greet: function() {
        console.log('Hello ' + this.firstname + ' ' + this.lastname);
    }
};

person.greet();

// Another way of accessing members
console.log(person['firstname']);


// function prototype and Inheritance
// remember function is also an object
function Person(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
}

Person.prototype.greet = function() {
    console.log('Hello ' + this.firstname + ' ' + this.lastname);
}

var arun = new Person('Arun', 'Siluvery');
var test = new Person('Test', '123');

arun.greet();
test.greet();