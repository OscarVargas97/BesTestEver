const ConvertToSeconds = require('../../general/timer_convert.services')
const GetAllFromApi = require('../query/getallfromapi.services')

async function CreateJson (exerciseName, arrayinfo, funcresults) {
  try {
    let time = performance.now()
    const array = funcresults(await GetAllFromApi(arrayinfo), arrayinfo)
    time = performance.now() - time
    return {
      exercise_name: exerciseName,
      time: ConvertToSeconds(time),
      in_time: Boolean(time < 3000),
      results: array
    }
  } catch {
    return false
  }
}

module.exports = CreateJson
