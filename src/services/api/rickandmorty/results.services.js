const CountCharInPropObject = require('../../general/count.services')
const GetLocationForCharacter = require('./getlocationcorcharacter.services')

function ResultFirst (resultquery, arrayinfo) {
  try {
    return arrayinfo
      .map(item => {
        return {
          char: item.resource.substring(0, 1),
          count: CountCharInPropObject(
            resultquery[item.resource],
            item.resource.substring(0, 1),
            'name'),
          resource: item.resource
        }
      })
  } catch {
    return false
  }
}

function ResultSecond (resultquery) {
  try {
    return resultquery.episode.map(item => {
      return {
        name: item.name,
        episode: item.episode,
        locations: GetLocationForCharacter(
          item.characters,
          resultquery.character
        )
      }
    })
  } catch {
    return false
  }
}

module.exports = {
  ResultFirst,
  ResultSecond
}
