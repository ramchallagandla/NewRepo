//import {Emitter} from "./emitter";
'use strict';
//const Emitter = require('./emitter');
const Emitter = require('events');
var emitr = new Emitter();

emitr.on('greet', () => {
   console.log('Greetings 1');    
});

emitr.on('greet', () => {
    console.log('Greetings 2');
})

console.log('Emit Events');

emitr.emit('greet');
