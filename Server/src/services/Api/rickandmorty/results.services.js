const CreateJson = require('./createjson.services')
const CountCharInPropObject = require('../../general/count.services')

async function ResultFirst (arrayinfo) {
  const funcresults = (resultquery) => {
    resultquery
      .map((item) => {
        return ({
          char: item.char,
          count: CountCharInPropObject(item.results),
          resource: item.resource
        })
      })
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
