let {findXmlDataType} = require('./findXmlDataType.js')

export function transformArray (arr) {
  return `<array><data>${arr.map(findXmlDataType).join('')}</data></array>`
}
