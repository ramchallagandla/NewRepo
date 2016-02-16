'use strict';
var Emitter = require('events');
var util = require('util');

function Greeter() {
    Emitter.call(this);
    this.greeting = 'Hello World!';
}

util.inherits(Greeter, Emitter);

Greeter.prototype.greet = function (params) {
    console.log(this.greeting);
    this.emit('greet', params);
}

var greeter1 = new Greeter();

greeter1.on('greet', function (params) {
    console.log(params);
})

greeter1.greet('Emit')

class GreeterES6 extends Emitter {
    constructor() {
        super();
        this.greeting = 'Hello World ES6';
    }
    
    greet (params) {
        console.log(this.greeting);
        this.emit('greet', params);
    }
}

var greeter2 = new GreeterES6();
greeter2.on('greet', function(params){
    console.log(params);
})

greeter2.greet('Greet ES6');