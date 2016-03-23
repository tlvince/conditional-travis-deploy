'use strict'

var test = require('tape')

var conditionalTravisDeploy = require('./')

test('title', function (t) {
  t.equal(conditionalTravisDeploy(), 'hello world')
  t.end()
})
