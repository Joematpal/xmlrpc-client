const {expect} = require('chai')
const {findXmlDataType} = require('./../build/findXmlDataType')
const {numberIn, numberOut} = require('./lib')

describe('findXmlDataType', () => {
  it('should find the proper xml data type from JavaScript', () => {
    expect(findXmlDataType(numberIn)).to.equal(numberOut)
  })
})
