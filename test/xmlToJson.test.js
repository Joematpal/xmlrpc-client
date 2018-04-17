const {expect} = require('chai')
const {xmlToJson} = require('../build/xmlToJson')
const {xmlStruct, jsonStruct} = require('./lib')

describe('xmlToJson', () => {
  it('should find the proper xml data type from JavaScript', () => {
    expect(
      xmlToJson(xmlStruct)
    ).to.equal(jsonStruct)
  })
})
