'use strict'

// When `libuv` gets to the handles portion of its pass (the one that powers `setImmediate`, it clears out all
// the `setImmediate` calls that were ready at that point in time.  Ones that show up later wait for the next
// trip through the loop

setImmediate(function () { 
  console.log('layer 1, immediate 1') 
  setImmediate(function () { console.log('layer 2, immediate 1') } )
})

setImmediate(function () { 
  console.log('layer 1, immediate 2') 
  process.nextTick(function () { console.log('layer 2, nextTick 1') } )
})
