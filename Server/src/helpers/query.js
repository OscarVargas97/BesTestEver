const fetch = require('node-fetch')

const resolveArrayPromise = async (array) => {
  return await Promise.all(array
    .map(item => {
      return fetch(item)
        .then((respond) => respond.json())
        .then(json => json.results)
    }))
}

const allPromiseResult = async (uri, totalpages) => {
  const array = arrayUri(uri, totalpages)
  return (totalpages >= 35)
    ? [...(await resolveArrayPromise(array.splice(0, array.length * 0.5))),
        ...(await resolveArrayPromise(array.splice(Math.length * 0.5)))]
    : (await resolveArrayPromise(array))
}

const arrayUri = (uri, totalpages) => {
  return Array(totalpages).fill('').map((item, i) => {
    return (uri + '?page=' + (i + 1))
  })
}

const Query = async (uri) => {
  return fetch(uri)
    .then((respond) => respond.json())
    .then(async json => {
      // return { ...json.results, ...(await allPromiseResult(uri, json.info.pages)) }
      return json.results.concat(...(await allPromiseResult(uri, json.info.pages)))
    })
}

module.exports = Query
