const fetch = require('node-fetch')

const ResolveArrayUris = (array) => {
  try {
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
  } catch {
    return false
  }
}

module.exports = ResolveArrayUris
