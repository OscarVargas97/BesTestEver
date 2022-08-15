const CreateArrayQuery = require('./createarrayquery.services')
const ResolveArrayUris = require('./resolvearrayuris.seervices')

const GetAllFromApi = async (arrayinfo) => {
  const arraywithdata = await CreateArrayQuery(arrayinfo)
  const arrayquery = arraywithdata
    .reduce((acc, item) => [...acc, ...item.arrayQuery], [])
  const result = [...await ResolveArrayUris(arrayquery)]
    .reduce((acc, item) => {
      if ((acc[item.resource])) {
        return { ...acc, [item.resource]: [...(acc[item.resource]), ...item.results] }
      }
      return { ...acc, [item.resource]: [...item.results] }
    }, {})
  return result
}

module.exports = GetAllFromApi
