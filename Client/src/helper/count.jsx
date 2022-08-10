//Internal
function count(obj, char) {
	return obj.reduce((acc, item) => [...acc, ...item.name], [])
		.reduce((acc, item) => {
			if (item === char) {
				return acc += 1
			}
			return acc
		}, 0)
	//obj.reduce(acc, item => acc + item.name.  0);
}

function tryCount(obj, char) {
	try {
		return count(obj.results, char);
	}
	catch {

	}
	return 0;
}

//Export Region
export const countCharInObject = (obj = {}, char = '') => {
	if (obj && char) {
		return tryCount(obj, char);
	}
	return 0;
}
