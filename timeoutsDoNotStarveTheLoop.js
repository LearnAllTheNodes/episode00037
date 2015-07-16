'use strict'

// Similar to `setImmediate`, timers will not starve the event loop

setTimeout(function () { 
  console.log('layer 1, timeout 1')
  setTimeout(function () { console.log('layer 2, timeout 1') }, 0)
}, 0)

setTimeout(function () { console.log('layer 1, timeout 2') }, 0)
setTimeout(function () { console.log('layer 1, timeout 3') }, 0)

setImmediate(function () { console.log('layer 1, immediate 1') }, 0)
