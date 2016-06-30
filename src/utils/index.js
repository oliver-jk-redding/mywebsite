export const clickHandler = (text) => {
  switch(text) {
    case 'definitely!':
      return '2a'
      break
    case 'i prefer other things':
      return '2b'
      break
    case 'why, yes!':
      return '3a'
      break
    case 'nope':
      return '3b'
      break
    case 'not right now thanks':
      return '3b'
      break
    case 'sure!':
      return '4'
      break
    case 'will do!':
      return '4'
      break
    case 'skip':
      return '4'
      break
  }
}