const {expect} = require('chai')
const {xmlStructToJS} = require('../build/xmlStructToJS')
const {xmlStruct, jsonStruct} = require('./lib')
const {replaceXml, replaceTabsNewlines, fixCommas}  = require('../lib/regex.js')
const {fixCommaCallback} = require('../build/fixCommaCallback')

describe('xmlStructToJS', () => {
  it('should find the proper xml data type from JavaScript', () => {
    expect(
      xmlStruct
      .replace(replaceXml ,xmlStructToJS)
      .replace(replaceTabsNewlines, '')
      .replace(fixCommas, fixCommaCallback)
  ).to.equal(jsonStruct)
  })
})
