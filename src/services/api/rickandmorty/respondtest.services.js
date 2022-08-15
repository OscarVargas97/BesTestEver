const { ResultFirst, ResultSecond } = require('./results.services')

const infoarray = [
  {
    resource: 'character',
    query: 'https://rickandmortyapi.com/api/character',
    char: 'c'
  },
  {
    resource: 'location',
    query: 'https://rickandmortyapi.com/api/location',
    char: 'l'
  },
  {
    resource: 'episode',
    query: 'https://rickandmortyapi.com/api/episode',
    char: 'e'
  }
]

// export modules
const ResponseTest = async () => {
  return [
    await ResultFirst(infoarray),
    await ResultSecond(infoarray)
  ]
}

module.exports.ResponseTest = ResponseTest
