'use strict'

// Unlike `setImmediate`, `process.nextTick` *will* starve the event loop

var i=1
function queueNextTick() {
  process.nextTick(function () {
    console.log('layer %s, nextTick 1', i)
    if (i++ < 10) {
      queueNextTick()
    }
  })
}

queueNextTick()

setImmediate(function () { console.log('layer 1, immediate 1') } )
