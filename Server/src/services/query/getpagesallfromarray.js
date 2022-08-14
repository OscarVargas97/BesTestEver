const fetch = require('node-fetch')

const GetPagesAllFromArray = async (arrayinfo) => {
  return await Promise.all(
    arrayinfo
      .map(item => {
        return ({
          page: fetch(item.query)
            .then((respond) => respond.json())
            .then(json => json.info.pages),
          ...item
        })
      })
  )
}

const ArrayQuery = async (arrayinfo) => {
  return GetPagesAllFromArray(arrayinfo)
    .map((item, i) => {
    }
    )
}

module.exports = ArrayQuery
