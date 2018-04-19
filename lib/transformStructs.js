let {jsToXml} = require('./jsToXml.js')

export function transformStructs (struct) {
  let members = Object.entries(struct).map(([key, value]) => {
    return `<member><name>${key}</name>${jsToXml(value)}</member>`
  }).join('')
  return `<struct>${members}</struct>`
}
