const CountCharInPropObject = require('../../general/count.services')
const GetLocationForCharacter = require('./getlocationcorcharacter.services')

function ResultFirst (resultquery, arrayinfo) {
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
}

function ResultSecond (resultquery) {
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
}

module.exports = {
  ResultFirst,
  ResultSecond
}
