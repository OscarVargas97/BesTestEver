const ConvertToSeconds = require('../../general/timer_convert.services')
const CreateData = require('./createdata.services')

function CreateJson (exerciseName, arrayinfo, funcresults) {
  const [time, array] = CreateData(arrayinfo, funcresults)
  return {
    exercise_name: exerciseName,
    time: ConvertToSeconds(time),
    in_time: Boolean(time < 3000),
    results: array
  }
}

module.exports = CreateJson
