const {expect} = require('chai')
const {transformBoolean} = require('./../build/transformBoolean')
const {boolIn, boolOut} = require('./lib')

describe('transformBoolean', () => {
  it('should turn a JavaScript Boolean into an xml string', () => {
    expect(transformBoolean(boolIn)).to.equal(boolOut)
  })
})
