'use strict'

// `process.nextTick` callbacks only execute on boundaries between the other phases.
// Both `setImmediate` callbacks are ready to go in the same check handles phase, so they
// both execute *before* the `process.nextTick` callback can.

setImmediate(function () { 
  console.log('layer 1, immediate 1') 
  process.nextTick(function () { console.log('layer 2, nextTick 1') } )
})

setImmediate(function () { console.log('layer 1, immediate 2') })
