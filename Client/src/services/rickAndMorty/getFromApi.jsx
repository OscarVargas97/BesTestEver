const Get = (query = "") => {
	const url = 'https://rickandmortyapi.com/api/' + query;
	return (
		fetch(url)
			.then((respond) => respond.json())
	)
}
export default Get;