'use strict'

// All timers that are ready to go also drain in the same way that `setImmediate` callbacks do

setTimeout(function () { 
  console.log('layer 1, timeout 1')
  process.nextTick(function () { console.log('layer 2, nextTick 1') } )
}, 0)

setTimeout(function () { console.log('layer 1, timeout 2') }, 0)
setTimeout(function () { console.log('layer 1, timeout 3') }, 0)

setImmediate(function () { console.log('layer 1, immediate 1') }, 0)
