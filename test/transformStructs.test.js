const {expect} = require('chai')
const {transformStructs} = require('./../build/transformStructs')

describe('transformStructs', () => {
  it('should turn a JavaScript Object into an xml string', () => {
    let obj = {foo: 'bar'}
    expect(transformStructs(obj)).to.equal(`<struct><member><name>foo</name><value><string>bar</string></value></member></struct>`)
  })
  it('should turn a JavaScript Object into an xml string', () => {
    let obj = {foo: 'bar', bar: {foo: 'baz'}}
    expect(transformStructs(obj)).to.equal(`<struct><member><name>foo</name><value><string>bar</string></value></member><member><name>bar</name><struct><member><name>foo</name><value><string>baz</string></value></member></struct></member></struct>`)
  })
})
