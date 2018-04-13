let http = require('https')
const json2xml = require('json2xml')

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
  constructor (options) {
    this.options = options
  }
  call = (methodName, ...param) => {
    let params = transformParams(param)

    const body = json2xml({
      methodCall: {
        methodName,
        params
      }
    }, {header: true})

    try {
      return doRequest(this.options, body)
    } catch (e) {
      throw new Error(e)
    }
  }
}

function doRequest (options, body) {
  return new Promise((resolve, reject) => {
    let req = http.request(options, res => {
      let chunks = []
      res.on('data', data => chunks.push(data))

      res.on('error', reject)

      res.on('end', () => {
        resolve(Buffer.concat(chunks).toString())
      })
    })
    req.write(body)
    req.end()
  })
}

function transformParams (params) {
  return params.reduce((acc, ele) => {
    let param
    if (typeof ele === 'object' && !Array.isArray(ele)) {
      param = transformStructs(ele)
    } else if (typeof ele === 'number') {
      param = transformInt(ele)
    } else if (typeof ele === 'string') {
      param = transformString(ele)
    }
    if (param.length) {
      acc.push(`<param>${param}</param>`)
    }
    return acc
  }, []).join('')
}

function transformStructs (struct) {
  let members = Object.entries(struct).map(([key, value]) => {
    return `<member><name>${key}</name>${typeof value === 'string' ? transformString(value) : transformInt(value)}</member>`
  })
  return `<struct>${members}</struct>`
}

function transformInt (number) {
  return `<value><i4>${number}</i4></value>`
}

function transformString (str) {
  return `<value><string>${str}</string></value>`
}

export const Client = new Proxy(ClientProxy, {construct})
