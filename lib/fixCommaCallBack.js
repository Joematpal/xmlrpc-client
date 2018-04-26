export const fixCommaCallback = (match) => {
  switch (match) {
    case ',,}':
    case ',}':
      return '}'
    case ',]':
      return ']'
    case '}{':
    case ',}{':
    case ',,}{':
    case ',,},,{':
    case ',,},{':
    case ',},,{':
      return '},{'
    case ',}]':
    case ',,},]':
    case ',},]':
      return '}]'
    case ',':
      return ''
    case ',,':
      return ','
    default:
      return ''
  }
}
