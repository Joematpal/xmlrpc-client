const {expect} = require('chai')
const {transformDouble} = require('./../build/transformDouble')
const {doubleIn, doubleOut} = require('./lib')

describe('transformDouble', () => {
  it('should turn a JavaScript float into an xml string', () => {
    expect(transformDouble(doubleIn)).to.equal(doubleOut)
  })
})
