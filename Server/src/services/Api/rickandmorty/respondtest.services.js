const GetAllFromApi = require('../../query/getallfromapi.services')
const CreateJson = require('./createjson.services')
const { ResultFirst, ResultSecond } = require('./results.services')

const Uri = 'https://rickandmortyapi.com/api/'
const TypeQueryArray = ['character', 'location', 'episode']

async function exercise (exercisename, funcresult) {
  let time = performance.now()
  const alldata = await GetAllFromApi(Uri, TypeQueryArray)
  const array = await funcresult(alldata, TypeQueryArray)
  time = performance.now() - time

  return CreateJson(exercisename, array, time)
}

// export modules
async function ResponseTest () {
  return [
    await exercise('Char counter', ResultFirst),
    await exercise('Episode locations', ResultSecond)
  ]
}

module.exports.ResponseTest = ResponseTest
