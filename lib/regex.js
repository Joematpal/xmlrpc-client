let replaceXml = /<\/?\??([\w\s="-.]+)?\??>/g
let replaceTabsNewlines = /\n|\t/g
let fixCommas = /,?,},?,{|,?,},?]|,,},]|}{|,,|,]$/g

module.exports = {
  replaceXml,
  replaceTabsNewlines,
  fixCommas
}
