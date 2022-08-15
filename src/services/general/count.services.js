// Export Region
const CountCharInPropObject = (obj = {}, char = '', prop = '') => {
  if (!obj || !char || !prop) { return false }
  try {
    return obj.reduce((acc, item) => [...acc, ...item[prop]], [])
      .reduce((acc, item) => {
        return ((item === char)
          ? (acc += 1)
          : acc
        )
      }
      , 0)
  } catch {
    return false
  }
}
module.exports = CountCharInPropObject
