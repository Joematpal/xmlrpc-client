const {xmlStructToJS} = require('./xmlStructToJS')
const {replaceXml, replaceTabsNewlines, fixCommas} = require('./regex')
const {fixCommaCallback} = require('./fixCommaCallback')

export const xmlToJson = data => data
  .replace(replaceXml, xmlStructToJS)
  .replace(replaceTabsNewlines, '')
  .replace(fixCommas, fixCommaCallback)
  .replace(fixCommas, fixCommaCallback)
