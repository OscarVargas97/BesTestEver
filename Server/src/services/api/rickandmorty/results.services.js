const CreateJson = require('./createjson.services')
const CountCharInPropObject = require('../../general/count.services')

async function ResultFirst (arrayinfo) {
  const funcresults = (resultquery, arrayinfo) => {
    return arrayinfo
      .map(item => {
        return {
          char: item.char,
          count: CountCharInPropObject(resultquery[item.resource], item.char, 'name'),
          resource: item.resource

        }
      }
      )
  }
  return CreateJson(
    'Char counter',
    arrayinfo,
    funcresults
  )
}

async function ResultSecond (arrayinfo) {
  const funcresults = (resultquery) => {
    return 'hi'
  }
  return CreateJson(
    'Episode locations',
    arrayinfo,
    funcresults
  )
}

module.exports = {
  ResultFirst,
  ResultSecond
}
