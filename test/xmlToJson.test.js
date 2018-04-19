const {expect} = require('chai')
const {xmlToJson} = require('../build/xmlToJson')
const {xmlStruct, jsonStruct} = require('./lib')

describe('xmlToJson', () => {
  it('should find the proper xml data type from JavaScript', () => {
    expect(
      xmlToJson(xmlStruct)
    ).to.equal(jsonStruct)
  })

  it('should find the proper xml data type from JavaScript', () => {
    let x = `<array><data><struct><member><name>foo</name><array><data><value><int>1</int></value><value><int>2</int></value><value><int>3</int></value><value><int>4</int></value></data></array></member></struct><array><data><value><int>1</int></value><value><int>2</int></value><value><int>3</int></value><value><int>4</int></value></data></array></data></array>`
    expect(
      xmlToJson(x)
    ).to.equal(JSON.stringify([{foo:[1,2,3,4]},[1,2,3,4]]))
  })

  it('should find the proper xml data type from JavaScript', () => {
    let x = `<struct><member><name>foo</name><value><string>bar</string></value></member><member><name>bar</name><struct><member><name>foo</name><value><string>baz</string></value></member></struct></member></struct>`
    expect(
      xmlToJson(x)
    ).to.equal(JSON.stringify({foo: 'bar', bar: {foo: 'baz'}}))
  })
})
