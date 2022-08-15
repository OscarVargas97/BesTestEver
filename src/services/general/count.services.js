const Validation = (obj, char, prop) => {
  return true
}

// Export Region
const CountCharInPropObject = (obj = {}, char = '', prop = '') => {
  if (Validation) {
    return obj.reduce((acc, item) => [...acc, ...item[prop]], [])
      .reduce((acc, item) => {
        return ((item === char)
          ? (acc += 1)
          : acc
        )
      }
      , 0)
  }
  return false
}
module.exports = CountCharInPropObject
