export const xmlStructToJS = (() => {
  let inArray = false
  function cl (set, x, y) {
    switch (set) {
      case '<array>':
        inArray = true
        return '['
      case '</array>':
        inArray = false
        return ']'
      case '<struct>':
        return '{'
      case '</struct>':
        return '}'
      case '</member>':
        return x === y.length - 18 ? '' : ','
      case '<boolean>':
      case '</boolean>':
      case '<double>':
      case '</double>':
      case '<int>':
      case '<i4>':
      case '</int>':
      case '</i4>':
      case '<member>':
      case '<value>':
        return ''
      case '</value>':
        return inArray ? ',' : ''
      case '<name>':
        return '"'
      case '</name>':
        return '":'
      case '<string>':
        return '"'
      case '</string>':
        return '"'
      default:
        return ''
    }
  }
  return cl
})()
