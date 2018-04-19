export const xmlStructToJS = (() => {
  let inArray = 0
  let inObject = 0
  function cl (set, x, y) {
    switch (set) {
      case '<array>':
        inArray--
        return '['
      case '</array>':
        inArray++
        return ']'
      case '<struct>':
        inObject++
        return '{'
      case '</struct>':
        inObject--
        return !inObject && inArray ? '},' : '}'
      case '</member>':
        return x === y.length - 18 ? '' : ','
      case '<boolean>':
      case '</boolean>':
      case '<double>':
      case '</double>':
      case '<int>':
      case '</int>':
      case '<i4>':
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
