const GetLocationForCharacter = (characters, allcharracters, alllocations) => {
  return characters
    .map(item => {
      return allcharracters
        .find(character => character.id === parseInt(item.slice(42)))
        .origin.name
    }).reduce((acc, item) => {
      return (!acc.includes(item))
        ? [...acc, item]
        : [...acc]
    }, [])
}

module.exports = GetLocationForCharacter
