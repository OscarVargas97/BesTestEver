const GetLocationForCharacter = (characters, allcharracters) => {
  return characters
    .map(item => {
      return allcharracters
        .find(character => character.id === parseInt(item.split('/')[5]))
        .origin.name
    }).reduce((acc, item) => {
      return (!acc.includes(item))
        ? [...acc, item]
        : [...acc]
    }, [])
}

module.exports = GetLocationForCharacter
