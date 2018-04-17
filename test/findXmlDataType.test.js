const {expect} = require('chai')
const {findXmlDataType} = require('./../build/findXmlDataType')
const {numberIn, numberOut, jsStruct, xmlStruct} = require('./lib')

describe('findXmlDataType', () => {
  it('should find the proper xml data type from JavaScript number', () => {
    expect(findXmlDataType(numberIn)).to.equal(numberOut)
  })

  it('should find the proper xml data type from JavaScript object', () => {
    expect(findXmlDataType(jsStruct)).to.equal(xmlStruct)
  })
})
