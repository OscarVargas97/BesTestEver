const { CreateArrayQuery } = require('./createarrayquery.services')
const ResolveArrayUris = require('./resolvearrayuris.seervices')

const GetAllFromApi = async (arrayinfo) => {
  return [...await ResolveArrayUris((await CreateArrayQuery(arrayinfo)))]
    .reduce((acc, item) => {
      return (acc[item.resource])
        ? { ...acc, [item.resource]: [...(acc[item.resource]), ...item.results] }
        : { ...acc, [item.resource]: [...item.results] }
    }, {})
}

module.exports = GetAllFromApi
