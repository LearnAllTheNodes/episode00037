'use strict'

var EventEmitter = require('events').EventEmitter

// This function causes the emitter to start emitting events
// BEFORE its clients can begin listening for them.
function newEmitter() {
  var emitter = new EventEmitter()

  function go() {
    emitter.emit('criticalEvent')
  }

  go()

  return emitter
}

var myNewEmitter = newEmitter()

myNewEmitter.on('criticalEvent', function () {
  console.log('criticalEvent caught.  Customers will not bail.')
})
