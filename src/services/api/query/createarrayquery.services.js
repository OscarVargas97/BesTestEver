const fetch = require('node-fetch')

const GetPagesAllFromArray = async (arrayinfo) => {
  if (!arrayinfo || arrayinfo.every((currentValue) => { return (typeof (currentValue) !== 'object') })) { return false }
  try {
    return await Promise.all(
      arrayinfo
        .map(async item => {
          return ({
            page: await fetch(String(item.query + item.resource))
              .then((respond) => respond.json())
              .then(json => json.info.pages),
            ...item
          })
        })
    )
  } catch {
    return false
  }
}

const ArrayQuery = (theuri, page, theresource) => {
  if (!theuri || !page || !theresource || typeof (page) !== 'number' || typeof (theuri) !== 'string' || typeof (theresource) !== 'string') { return false }
  return Array(page).fill('').map((item, i) => {
    return ({
      uri: (theuri + theresource + '?page=' + (i + 1)),
      resource: theresource
    })
  })
}

async function CreateArrayQuery (arrayinfo = []) {
  if (!arrayinfo) { return false }
  try {
    return (await GetPagesAllFromArray(arrayinfo))
      .reduce((acc, item) => {
        return [
          ...acc,
          ...ArrayQuery(item.query, item.page, item.resource)]
      }, [])
  } catch {
    return false
  }
}

module.exports = {
  CreateArrayQuery,
  ArrayQuery,
  GetPagesAllFromArray
}
