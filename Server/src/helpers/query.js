const fetch = require("node-fetch")

const Query = (uri = "", query = "") => {
	const url = String(uri) + String(query);
	return fetch(url)
		.then((respond) => respond.json()
		).then(json => {
			return json.results
		})
}
module.exports = Query

