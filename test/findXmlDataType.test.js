const {expect} = require('chai')
const {jsToXml} = require('./../build/jsToXml')
const {numberIn, numberOut, jsStruct, xmlStruct} = require('./lib')

describe('jsToXml', () => {
  it('should find the proper xml data type from JavaScript number', () => {
    expect(jsToXml(numberIn)).to.equal(numberOut)
  })

  it('should find the proper xml data type from JavaScript object', () => {
    expect(jsToXml(jsStruct)).to.equal(xmlStruct)
  })
})
