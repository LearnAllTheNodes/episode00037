'use strict'

// Demonstrates the order that the 3 types execute in

setImmediate(function () { console.log('immediate') })
setTimeout(function () { console.log('timeout') }, 0)
process.nextTick(function () { console.log('nextTick') } )

