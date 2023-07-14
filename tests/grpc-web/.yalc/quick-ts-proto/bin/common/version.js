'use strict'

module.exports = function printVersion(output) {
  const version = require('../../package.json').version

  output.write(`v${version}\n`)

  return Promise.resolve(null)
}