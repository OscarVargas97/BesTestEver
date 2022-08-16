const GetLocationForCharacter = (characters, allcharracters) => {
  try {
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
  } catch {
    return false
  }
}

module.exports = GetLocationForCharacter
