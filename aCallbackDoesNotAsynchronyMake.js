'use strict'

// Not all callbaks are asynchronous

var result = "Hey, I'm safely async!"

function notAsync(cb) {
  return cb(null, 'I tricked you.')
}

result = notAsync(function (err, notAsynchronouslyObtained) {
  return notAsynchronouslyObtained
})

console.log(result)
