const http = require('http')
const {xmlStructToJS} = require('./xmlStructToJS.js')

export function request (config, body, {parse = 'js'}) {
  return new Promise((resolve, reject) => {
    let req = http.request(config, res => {
      let chunks = []
      res.on('data', data => chunks.push(data))

      res.on('error', reject)

      res.on('end', () => {
        let data = Buffer
          .concat(chunks)
          .toString()

        let dataOut = data
          .replace(/<\/?\??([\w\s="-.]+)?\??>/g, xmlStructToJS)
          .replace(/\n|\t/g, '')
          .replace(/(,\}\{)|}{|,\}/g, match => match === ',}' ? '}' : '},{')

        if (parse === 'xml') { dataOut = data }
        if (parse === 'js') { dataOut = JSON.parse(dataOut) }
        resolve(dataOut)
      })
    })
    req.write(body)
    req.end()
  })
}
