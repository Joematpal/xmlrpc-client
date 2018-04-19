const {transformInt} = require('./transformInt')
const {transformString} = require('./transformString')
const {transformArray} = require('./transformArray')
const {transformStructs} = require('./transformStructs')
const {transformDouble} = require('./transformDouble')
const {transformBase64} = require('./transformBase64')
const {transformISODate} = require('./transformISODate')
const {transformBoolean} = require('./transformBoolean')

export function jsToXml (ele) {
  if (Array.isArray(ele)) {
    return transformArray(ele)
  } else if (typeof ele === 'object') {
    return transformStructs(ele)
  } else if (typeof ele === 'number' && ele % 1 !== 0) {
    return transformDouble(ele)
  } else if (typeof ele === 'number') {
    return transformInt(ele)
  } else if (typeof ele === 'string' && isIsoDate(ele)) {
    return transformISODate(ele)
  } else if (typeof ele === 'string' && isBase64(ele)) {
    return transformBase64(ele)
  } else if (typeof ele === 'string') {
    return transformString(ele)
  } else if (typeof ele === 'boolean') {
    return transformBoolean(ele)
  }
}

export function isBase64 (str) {
  let decode = Buffer.from(str, 'base64').toString()
  return Buffer.from(decode).toString('base64') === str
}

export function isIsoDate (str) {
  let date = new Date(str)
  let isDate = date.toString() !== 'Invalid Date'
  if (isDate) {
    return str === date.toISOString()
  }
  return false
}
