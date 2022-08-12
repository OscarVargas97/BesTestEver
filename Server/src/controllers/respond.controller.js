const RickAndMorty = require("../services/Api/rickandmorty/apiQuery.services");

const ApiRespond = {
	query: async (req, res) => {
		res.send(await RickAndMorty.getAllCharacter)
	},
	allName: async (req, res) => {
		res.send(await RickAndMorty.getResponseTest)
	}
}

module.exports = ApiRespond;
