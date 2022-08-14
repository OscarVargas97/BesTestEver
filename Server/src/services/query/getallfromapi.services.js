const AllPromiseResult = require('./allPromiseResult.services')
const ArrayQuery = require('./getpagesallfromarray')

function GetAllFromApi (arrayinfo) {
  return AllPromiseResult(ArrayQuery(arrayinfo))
}

module.exports = GetAllFromApi
