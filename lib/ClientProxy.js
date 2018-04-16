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
  constructor ({hostname, path, headers}, {parse = 'js'}) {
    let cHeaders = this.config.headers
    this.config = Object.assign({}, this.config, {hostname, path, headers}, {headers: {...cHeaders, ...headers}})
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
