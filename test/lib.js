
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
let xmlStruct = `<struct><member><name>number</name><value><int>11</int></value></member><member><name>object</name><struct><member><name>name</name><value><string>sammy</string></value></member><member><name>bool</name><value><boolean>false</boolean></value></member></struct></member><member><name>arr</name><array><data><value><int>1</int></value><value><int>2</int></value><value><int>3</int></value><value><int>4</int></value><value><int>5</int></value><value><int>6</int></value></data></array></member></struct>`
let jsStruct = {number: 11, object: {name: 'sammy', bool: false}, arr: [1,2,3,4,5,6]}
let jsonStruct = JSON.stringify(jsStruct)
let arrOut = `<array><data><value><int>1</int></value><struct><member><name>foo</name><value><string>bar</string></value></member></struct><value><string>baz</string></value></data></array>`
let boolIn = true
let boolOut = `<value><boolean>true</boolean></value>`
module.exports = {
  arrIn,
  arrOut,
  doubleIn,
  doubleOut,
  numberIn,
  numberOut,
  stringIn,
  stringOut,
  jsStruct,
  jsonStruct,
  xmlStruct,
  boolIn,
  boolOut
}
