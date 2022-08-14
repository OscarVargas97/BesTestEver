const fetch = require('node-fetch')

const GetPagesAllFromArray = async (arrayinfo) => {
  return await Promise.all(
    arrayinfo
      .map(async item => {
        return ({
          page: await fetch(item.query)
            .then((respond) => respond.json())
            .then(json => json.info.pages),
          ...item
        })
      })
  )
}

const ArrayQuery = (theuri, page, theresource) => {
  return Array(page).fill('').map((item, i) => {
    return ({
      uri: (theuri + '?page=' + (i + 1)),
      resource: theresource
    })
  })
}

const CreateArrayQuery = async (arrayinfo) => {
  return (await GetPagesAllFromArray(arrayinfo))
    .map(item => {
      return {
        resource: item.resource,
        char: item.char,
        arrayQuery: ArrayQuery(item.query, item.page, item.resource)
      }
    })
}

module.exports = CreateArrayQuery
