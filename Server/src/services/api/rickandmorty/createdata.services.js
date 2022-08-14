const GetAllFromApi = require('../query/getallfromapi.services')

async function CreateData (infoarray, funcresult) {
  let gettime = performance.now()
  const array = funcresult(await GetAllFromApi(infoarray), infoarray)
  gettime = performance.now() - gettime
  return ([
    gettime,
    array
  ])
}

module.exports = CreateData
