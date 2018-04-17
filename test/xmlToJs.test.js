const {expect} = require('chai')
const {xmlToJs} = require('../build/xmlToJs')
const {xmlStruct, jsonStruct} = require('./lib')

describe('xmlToJS', () => {
  it('should find the proper xml data type from JavaScript', () => {
    expect(
      xmlToJs(xmlStruct)
    ).to.equal(jsonStruct)
  })
})
