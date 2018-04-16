export function xmlStructToJS (set, x, y) {
  switch (set) {
    case '<array>':
      return '['
    case '</array>':
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
    case '</value>':
      return ''
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
