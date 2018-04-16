const {expect} = require('chai')
const {transformInt} = require('./../build/transformInt')
const {numberIn, numberOut} = require('./lib')

describe('transformInt', () => {
  it('should turn a JavaScript Number into an xml string', () => {
    expect(transformInt(numberIn)).to.equal(numberOut)
  })
})
