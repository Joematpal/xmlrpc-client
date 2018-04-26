const {request} = require('./request.js')
const {transformParams} = require('./transformParams.js')

let construct = (Target, args) => {
  return new Proxy(new Target(...args), {get})
}

let get = (target, name) => {
  return name in target
    ? target[name]
    : new Proxy(
      function (args) {
        return target.call(`${name}`, ...args)
      },
      ({
        get (t, n) {
          return n in t ? t[n] : function (...args1) {
            return target.call(`${name}.${n}`, ...args1)
          }
        }
      })
    )
}

class ClientProxy {
  constructor (config, {parse = 'js'}) {
    if (typeof config === 'string') {
      let isProtocolSet, isHostnameSet
      const {protocol, hostname, path} = config
        .split('/')
        .filter(Boolean)
        .reduce((sum, str) => {
          switch (true) {
            case (/:$/.test(str) && !isProtocolSet):
              sum.protocol = str
              isProtocolSet = true
              break
            case (/./.test(str) && !isHostnameSet):
              sum.hostname = str
              isHostnameSet = true
              break
            case (isHostnameSet):
              if (!sum.path) sum.path = '/' + str
              else sum.path += '/' + str
              break
            default:
              break
          }
          return sum
        }, {protocol: 'https'})
      this.config = Object.assign({}, this.config, {protocol, hostname, path})
    } else if (typeof config === 'object' && !Array.isArray(config)) {
      const {hostname, path, headers} = config
      let cHeaders = this.config.headers
      this.config = Object.assign({}, this.config, {hostname, path, headers}, {headers: {...cHeaders, ...headers}})
    }
    this.options = {parse}
  }

  config = {
    'method': 'POST',
    'headers': {
      'Content-Type': 'text/xml'
    }
  }

  call = (methodName, ...param) => {
    let params = transformParams(param)

    const body = `<?xml version="1.0" encoding="UTF-8"?>` +
        `<methodCall><methodName>${methodName}</methodName>` +
        `<params>${params}</params></methodCall>`

    try {
      return request(this.config, body, this.options)
    } catch (e) {
      throw new Error(e)
    }
  }
}

export const Client = new Proxy(ClientProxy, {construct})
