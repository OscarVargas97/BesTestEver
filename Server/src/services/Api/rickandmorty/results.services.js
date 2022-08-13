const CountCharInPropObject = require('../../general/count.services')
async function ResultFirst (alldata, typequeryarray) {
  const data = typequeryarray.map((item, i) => {
    return [item, CountCharInPropObject(alldata[i], item, 'name')]
  })// hay que modificar get all for api
  return (
    data
      .map((item) => {
        return ({
          char: item[0].substring(0, 1),
          count: item[1],
          resource: item[0]
        })
      })
  )
}

async function ResultSecond (alldata) {
  const result = alldata
  return result.map(item => {
    return ({
      name: '',
      episode: '',
      locations: ''
    })
  })
}

module.exports = {
  ResultFirst,
  ResultSecond
}
