
var assert = require('assert')
var fs = require('fs')

var temp = require('..')

it('should work', function () {
  var filename = temp()
  fs.writeFileSync(filename, 'asdf')
  var result = fs.readFileSync(filename, 'utf8')
  assert.equal(result, 'asdf')
  fs.unlinkSync(filename)
})
