const { CreateArrayQuery } = require('./createarrayquery.services')
const ResolveArrayUris = require('./resolvearrayuris.services')

const GetAllFromApi = async (arrayinfo) => {
  try {
    return [...await ResolveArrayUris((await CreateArrayQuery(arrayinfo)))]
      .reduce((acc, item) => {
        return (acc[item.resource])
          ? { ...acc, [item.resource]: [...(acc[item.resource]), ...item.results] }
          : { ...acc, [item.resource]: [...item.results] }
      }, {})
  } catch {
    return false
  }
}

module.exports = GetAllFromApi
