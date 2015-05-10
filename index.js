
var path = require('path')
var tmpdir = require('os-tmpdir')()

module.exports = function () {
  return path.join(tmpdir, random() + random())
}

function random() {
  return Math.random().toString(36).slice(2)
}
