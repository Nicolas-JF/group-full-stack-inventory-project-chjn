import React, { useState, useEffect } from 'react';
import { ItemsList } from './itemsList';
import { Item } from './itemDetail';	

// import and prepend the api url to any fetch calls
import apiURL from '../api';

export const App = () => {

    const [items, setItems] = useState([]);

    async function fetchItems(){
        try {
            const response = await fetch(`${apiURL}/items`);
            const itemsData = await response.json();
            setItems(itemsData);
			console.log(items)
        } catch (err) {
            console.log("Oh no an error! ", err)
        }
    }

    useEffect(() => {
        fetchItems();
    }, []);

    return (
        <main>	
      <h1>Sauce Store</h1>
            <h2>All things 🔥</h2>
            <ItemsList items={items} />
        </main>
    );
}