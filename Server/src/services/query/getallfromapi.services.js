const { AllPromiseResult } = require('./allPromiseResult.services')
const { GetPagesAllFromArray, CreateObjQuery, ArrayQuery } = require('./transform.services')

async function GetAllFromApi (uri, arraytype) {
  const arrayuri = CreateObjQuery(uri, arraytype)
  return AllPromiseResult(
    ArrayQuery(
      arrayuri,
      await GetPagesAllFromArray(arrayuri)
    )
  )
}

module.exports = GetAllFromApi
