const { GetAllFromApi, ResponseTest } = require("./helper");

const RickAndMorty = {
	getAllCharacter: GetAllFromApi('character'),

	getAllLocation: GetAllFromApi('location'),

	getAllEpisode: GetAllFromApi('episode'),

	getResponseTest: ResponseTest()
}

module.exports = RickAndMorty;