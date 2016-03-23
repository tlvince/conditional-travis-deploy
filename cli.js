#!/usr/bin/env node

'use strict'

var conditionalTravisDeploy = require('./')

try {
  var environment = conditionalTravisDeploy()
  console.log(environment)
} catch (e) {
  console.error(e.toString())
  process.exit(1)
}
