
const fetch = require('node-fetch')

const GetPagesAllFromArray = (arrayuri) => {
  return Promise.all(arrayuri.map(item => {
    return fetch(item)
      .then((respond) => respond.json())
      .then(json => json.info.pages)
  }))
}

module.exports = GetPagesAllFromArray
