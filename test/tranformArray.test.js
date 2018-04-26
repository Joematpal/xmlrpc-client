const {expect} = require('chai')
const {transformArray} = require('./../build/transformArray')
const {arrIn, arrOut} = require('./lib')

describe('transformArray', () => {
  it('should turn a JavaScript Array into an xml string', () => {
    expect(transformArray(arrIn)).to.equal(arrOut)
  })

  // it('should turn a JavaScript Array into an xml string', () => {
  //   expect(transformArray([{foo:[1,2,3,4]},[1,2,3,4]])).to.equal(arrOut)
  // })
})
