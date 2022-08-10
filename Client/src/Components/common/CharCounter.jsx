import { countCharInObject } from "../../helper/count";
import Get from "../../services/rickAndMorty/getFromApi";
import { useState } from "react";

//Property and method
const click = async (apiQuery, charFind, setContador, setTimer) => {
	const start = performance.now()
	setContador(
		countCharInObject(
			await Get(apiQuery), charFind
		)
	)
	const finish = performance.now()
	setTimer(
		finish - start
	)

}
//Render
const CharCounter = (props) => {

	const [count, setCount] = useState(0)
	const [timer, setTimer] = useState(0)
	const { charFind, apiQuery } = props

	return (
		<div>
			<p>{count}</p>
			<p>{timer}</p>
			<button onClick={() => click(apiQuery, charFind, setCount, setTimer)}>All {charFind} in {apiQuery}</button>
		</div>
	);
};

export default CharCounter;