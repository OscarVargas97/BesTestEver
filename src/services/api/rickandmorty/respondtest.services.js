const { ResultFirst, ResultSecond } = require('./results.services')
const CreateJson = require('./createjson.services')

const uri = 'https://rickandmortyapi.com/api/'
const infoarray = [
  {
    resource: 'character',
    query: uri
  },
  {
    resource: 'location',
    query: uri
  },
  {
    resource: 'episode',
    query: uri
  }
]

// export modules
const ResponseTest = async () => {
  return [
    await CreateJson('Char counter', infoarray, ResultFirst),
    await CreateJson('Char counter', infoarray, ResultSecond)
  ]
}

module.exports.ResponseTest = ResponseTest
