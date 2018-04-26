const {xmlToJson} = require('../build/xmlToJson')
const {jsToXml} = require('../build/jsToXml')
let js = {test: true,
  data: {
    obj: 'this is a string',
    arr: ['d', 1, 2, 3, 4, 5],
    arr2: [{obj2: [1, 2, 3, 4, {ob3: false}]}, 1, 2, 3, 4],
    arr3: {0: [{arr4: [[1, 3, 4, 5, 6], 1, 2, 3, 4]}]}
  }}
console.log(
  xmlToJson(
    jsToXml(js)
  )
)
