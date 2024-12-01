import React, { useState, useEffect } from 'react';
import { ItemsList } from './ItemsList';

// import and prepend the api url to any fetch calls
import apiURL from '../api';

export const App = () => {

	const [item, setitem] = useState([]);

	async function fetchItem(){
		try {
			const response = await fetch(`${apiURL}/item`);
			const itemData = await response.json();
			
			setItem(itemData);
		} catch (err) {
			console.log("Oh no an error! ", err)
		}
	}

	useEffect(() => {
		fetchItem();
	}, []);

	return (
		<main>	
      <h1>Sauce Store</h1>
			<h2>All things 🔥</h2>
			<ItemsList item={item} />
		</main>
	)
}