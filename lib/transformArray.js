let {jsToXml} = require('./jsToXml.js')

export function transformArray (arr) {
  return `<array><data>${arr.map(jsToXml).join('')}</data></array>`
}
