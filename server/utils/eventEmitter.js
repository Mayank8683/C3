const EventEmitter=require('events');
const Module = require('module');
class MyEmitter extends EventEmitter{}
const emitter=new MyEmitter();
Module.exports=emitter