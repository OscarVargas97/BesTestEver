const CountCharInPropObject = require('../../../helpers/count');
const Query = require('../../../helpers/query');
const ConvertToSeconds = require('../../../helpers/timerConvert');

async function resultFirst() {
	return (
		[["character", await CountCharInPropObject(await GetAllFromApi("character"), "c", "name")],
		["location", await CountCharInPropObject(await GetAllFromApi("location"), "l", "name"),],
		["episode", await CountCharInPropObject(await GetAllFromApi("episode"), "e", "name")]]
			.map((item) => {
				return ({
					"char": item[0].substring(0, 1),
					"count": item[1],
					"resource": item[0]
				});
			})
	);
};

async function resultSecond() {
	return (await GetAllFromApi("character")).map(item => {
		return ({
			"name": "",
			"episode": "",
			"locations": ""
		});
	});
}

function createJson(exerciseName, array, time) {
	return {
		"exercise_name": exerciseName,
		"time": ConvertToSeconds(time),
		"in_time": Boolean(time < 3000),
		"results": array
	}
};

async function exercise(exerciseName, funcResult) {

	let time = performance.now();
	let array = await funcResult();
	time = performance.now() - time

	return createJson(exerciseName, array, time)
};


//export modules
async function ResponseTest() {
	return [
		await exercise("Char counter", resultFirst),
		await exercise("Episode locations", resultSecond)
	];
};

async function GetAllFromApi(value) {
	return await Query('https://rickandmortyapi.com/api/', value);
};

module.exports.ResponseTest = ResponseTest
module.exports.GetAllFromApi = GetAllFromApi