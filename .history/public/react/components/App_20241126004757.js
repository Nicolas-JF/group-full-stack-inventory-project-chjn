import React, { useState, useEffect } from 'react';
import { ItemsList } from './ItemsList';

// import and prepend the api url to any fetch calls
import apiURL from '../api';

export const App = () => {

	const [item, setitem] = useState([]);

	async function fetchStem(){
		try {
			const response = await fetch(`${apiURL}/item`);
			const stemData = await response.json();
			
			setItem(itemData);
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
			<ItemList item={item} />
		</main>
	)
}