const {findXmlDataType} = require('./findXmlDataType')

export function transformParams (params) {
  return params.reduce((acc, ele) => {
    let param = findXmlDataType(ele)
    if (param.length) {
      acc.push(`<param>${param}</param>`)
    }
    return acc
  }, []).join('')
}
