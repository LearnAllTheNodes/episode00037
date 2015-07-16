'use strict'

// In my first iteration of setImmediateEmptiesOncePerTrip.js, I used a `setTimeout` instead of `process.nextTick`.
// This gave me unexpected results when I first ran it, because output the timeout's log message *after*
// the layer 2, immediate 1 message.  Sometimes, the event loop is able to process faster than the timers are ready.

setImmediate(function () { 
  console.log('layer 1, immediate 1') 
  setImmediate(function () { console.log('layer 2, immediate 1') } )
})

setImmediate(function () { 
  console.log('layer 1, immediate 2') 
  setTimeout(function () { console.log('layer 2, timeout 1') } )
})
