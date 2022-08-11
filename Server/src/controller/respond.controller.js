const RickAndMorty = require("../services/Api/rickandmorty/getFromRickandMorty");


const ApiRespond = {
	query: async (req, res) => {
		res.send(await RickAndMorty.getAllCharacter)
	},
	allName: async (req, res) => {
		const pepe = await RickAndMorty.getResponseTest
		res.send('hi')
	}
}
module.exports = ApiRespond;
