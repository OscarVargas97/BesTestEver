const fetch = require('node-fetch')

const resolveArrayPromise = async (array) => {
  return await Promise.all(
    array
      .map(item => {
        return fetch(item)
          .then((respond) => respond.json())
          .then(json => json.results)
      })
  )
}

const AllPromiseResult = async (typearray,arrayquery, arraypages) => {
  maxiteration = arraypages / 35
	i = 0
	//Quiero crear un objeto con las keys del typearray
	while(i<maxiteration){

	}

  const (totalpages >= 35)
    ? [...(await resolveArrayPromise(array.splice(0, array.length / 2))),
        ...(await resolveArrayPromise(array.splice(Math.length / 2)))]
    : (await resolveArrayPromise(array))

  return [[], [], []]
}

module.exports = {
  AllPromiseResult
}
