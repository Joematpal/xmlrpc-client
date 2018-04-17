let {findXmlDataType} = require('./findXmlDataType.js')

export function transformStructs (struct) {
  let members = Object.entries(struct).map(([key, value]) => {
    return `<member><name>${key}</name>${findXmlDataType(value)}</member>`
  }).join('')
  return `<struct>${members}</struct>`
}
