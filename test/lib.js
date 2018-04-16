
let doubleIn = 3.33
let doubleOut = `<value><double>${doubleIn}</double></value>`
let numberIn = 3
let numberOut = `<value><int>${numberIn}</int></value>`
let stringIn = 'This is a very long string.'
let stringOut = `<value><string>${stringIn}</string></value>`
let arrIn = [
  1,
  {
    foo: 'bar'
  },
  'baz'
]

let arrOut = `<array><data><value><int>1</int></value><struct><member><name>foo</name><value><string>bar</string></value></member></struct><value><string>baz</string></value></data></array>`

module.exports = {
  arrIn,
  arrOut,
  doubleIn,
  doubleOut,
  numberIn,
  numberOut,
  stringIn,
  stringOut
}
