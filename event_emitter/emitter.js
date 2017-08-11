// Simple Event emitter object

// 'events' is going to be an array which would save listeners of a particular type
// in different arrays
function Emitter() {
    this.events = {};
}

// on an event of particular type, push its listener into an array
Emitter.prototype.on = function(type, listener) {
    // if the events array doesn't exist then create an empty array
    this.events['type'] = this.events['type'] || [];
    this.events['type'].push(listener);
}

Emitter.prototype.emit = function(type) {
    // if we have this 'type' of event then invoke all listeners saved in this array
    if (this.events['type']) {
        this.events['type'].forEach(function(listener) {
            listener();
        });
    }
}

// export this object
module.exports = Emitter;