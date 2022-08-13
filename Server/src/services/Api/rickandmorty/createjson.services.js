const ConvertToSeconds = require('../../general/timer_convert.services')

function CreateJson (exerciseName, array, time) {
  return {
    exercise_name: exerciseName,
    time: ConvertToSeconds(time),
    in_time: Boolean(time < 3000),
    results: array
  }
}

module.exports = CreateJson
