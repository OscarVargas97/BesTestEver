const fetch = require('node-fetch')

const ResolveArrayUris = (array) => {
  return Promise.all(
    array
      .map(async item => {
        return ({
          results: await fetch(item.uri)
            .then((respond) => respond.json())
            .then(json => json.results),
          resource: item.resource
        })
      })
  )
}

module.exports = ResolveArrayUris
