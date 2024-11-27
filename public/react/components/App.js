import React, { useState, useEffect } from 'react';
import { ItemsList } from './itemsList';
import { ItemDetail } from './itemDetail';	
import { NavBar } from './Navbar';
import './app.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import and prepend the api url to any fetch calls
import apiURL from '../api';

export const App = () => {

    const [items, setItems] = useState([]);
	const [selectedItem, setSelectedItem] = useState(null);
	const [selectedItemId, setSelectedItemId] = useState(null);

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
	async function fetchItem(id){
		try {
			const response = await fetch(`${apiURL}/items/${id}`);
			const itemData = await response.json();
			setSelectedItem(itemData);
		}
		catch (err) {
			console.log("Oh no an error! ", err)
		}
	}

    useEffect(() => {
        fetchItems();
    }, []);
	const handleItemClick = (itemId) => {
		setSelectedItemId(itemId);
		fetchItem(itemId);
	  };
	
	  const handleBack = () => {
		setSelectedItem(null);
	  };
    return (
        <main>	
            <NavBar handleBack={handleBack}/>
            <h1><b> CHJL Inventory Management</b></h1>
            <h2>Full inventory list of items for sale</h2>
            <br/>
            <br/>
            {selectedItem && (
                    <ItemDetail item={selectedItem} onBack={handleBack} />
            )}
            {!selectedItem && (
                <>
                <h1> Inventory List </h1>
                <br/>
                <br/>
                <br/>
                <div className='item-list'>
                    {items.map((item)=>(
                        <ItemsList item={item} onItemClick={handleItemClick}/>
                    ))}
                </div>
                </>
            )}
        </main>
    );
}