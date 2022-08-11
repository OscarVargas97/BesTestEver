const countCharInObject = require('../../../helpers/count');
const Query = require('../../../helpers/query');

async function getAll(value) {
	return await Query('https://rickandmortyapi.com/api/', value)
}

async function responseTest() {
	result = {}
	console.log(countCharInObject(await getAll('character'), 'c'))
	return result;
}

const RickAndMorty = {
	getAllCharacter: getAll('character'),

	getAllLocation: getAll('location'),

	getAllEpisode: getAll('episode'),

	getResponseTest: responseTest()
}


module.exports = RickAndMorty;