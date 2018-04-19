const {jsToXml} = require('./jsToXml')

export function transformParams (params) {
  return params.reduce((acc, ele) => {
    let param = jsToXml(ele)
    if (param.length) {
      acc.push(`<param>${param}</param>`)
    }
    return acc
  }, []).join('')
}
