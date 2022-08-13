// Internal
function countByProp (obj, char, prop) {
  return obj.reduce((acc, item) => [...acc, ...item[prop]], [])
    .reduce((acc, item) => {
      return ((item === char)
        ? (acc += 1)
        : acc
      )
    }
    , 0)
}

function tryCount (obj, char, prop) {
  try {
    return countByProp(obj, char, prop)
  } catch {

  }
  return 0
}

// Export Region
const CountCharInPropObject = (obj = {}, char = '', prop = '') => {
  return (
    (obj && char && prop)
      ? tryCount(obj, char, prop)
      : 0
  )
}
module.exports = CountCharInPropObject
