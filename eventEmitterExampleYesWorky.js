'use strict'

var EventEmitter = require('events').EventEmitter

function newEmitter() {
  var emitter = new EventEmitter()

  function go() {
    emitter.emit('criticalEvent')
  }

  process.nextTick(go)

  return emitter
}

var myNewEmitter = newEmitter()

myNewEmitter.on('criticalEvent', function () {
  console.log('criticalEvent caught.  Customers will not bail.')
})
