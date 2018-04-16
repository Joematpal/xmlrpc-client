const {expect} = require('chai')
const {transformString} = require('./../build/transformString')
const {stringIn, stringOut} = require('./lib')

describe('transformString', () => {
  it('should turn a JavaScript String into an xml string', () => {
    expect(transformString(stringIn)).to.equal(stringOut)
  })
})
