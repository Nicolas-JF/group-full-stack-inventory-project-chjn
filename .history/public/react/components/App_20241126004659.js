import React, { useState, useEffect } from 'react';
import { ItemsList } from './ItemList';

// import and prepend the api url to any fetch calls
import apiURL from '../api';

export const App = () => {

	const [stem, setStem] = useState([]);

	async function fetchStem(){
		try {
			const response = await fetch(`${apiURL}/stem`);
			const stemData = await response.json();
			
			setStem(stemData);
		} catch (err) {
			console.log("Oh no an error! ", err)
		}
	}

	useEffect(() => {
		fetchStem();
	}, []);

	return (
		<main>	
      <h1>Sauce Store</h1>
			<h2>All things 🔥</h2>
			<StemList stem={stem} />
		</main>
	)
}