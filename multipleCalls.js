'use strict'

// Demonstrates the order the 3 types get called in when there are multiples of them
// Interwoven for funsies


process.nextTick(function () { console.log('nextTick 1') } )
setImmediate(function () { console.log('immediate 1') })
setTimeout(function () { console.log('timeout 1') }, 0)
setImmediate(function () { console.log('immediate 2') })
setTimeout(function () { console.log('timeout 2') }, 0)
process.nextTick(function () { console.log('nextTick 2') } )
