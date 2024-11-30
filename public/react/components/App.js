import React, { useState, useEffect } from 'react';
import { ItemsList } from './itemsList';
import { ItemDetail } from './itemDetail';	
import { NavBar } from './Navbar';
import { FormModal } from './formModal';
import './app.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import and prepend the api url to any fetch calls
import apiURL from '../api';

export const App = () => {

    // States
    const [items, setItems] = useState([]);
	const [selectedItem, setSelectedItem] = useState({
        id: 0,
        name: '',
        image: '',
        price: 0,
        category: '',
        description: ''
    });
	const [selectedItemId, setSelectedItemId] = useState(null);
    const [showAll, setShowAll] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const [isAdding, setIsAdding] = useState(false);

    async function fetchItems(){
        try {
            const response = await fetch(`${apiURL}/items`);
            const itemsData = await response.json();
            setItems(itemsData);
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
        setShowAll(false);
		fetchItem(itemId);
	  };
	
	  const handleBack = () => {
		setSelectedItem({
            name: '',
            image: '',
            price: 0,
            category: '',
            description: ''
        });
        fetchItems();
        setShowAll(true);
	  };
    return (
        <main>	
            <NavBar handleBack={handleBack} setShowModal={setShowModal} setIsAdding={setIsAdding} showAll={showAll}/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            {!showAll && (
                    <ItemDetail item={selectedItem} handleBack={handleBack} setShowModal={setShowModal} fetchItems={fetchItems} setShowAll={setShowAll}/>
            )}
            {showAll && (
                <>
                <h1 style={{color: 'blue'}}> Inventory List </h1>
                <br/>
                <br/>
                <br/>
                <div className='item-list'>
                    {items.map((item, index)=>(
                        <ItemsList key={index} item={item} onItemClick={handleItemClick}/>
                    ))}
                </div>
                </>
            )}
            <FormModal showModal={showModal} setShowModal={setShowModal} selectedItem={selectedItem} isAdding={isAdding} setIsAdding={setIsAdding} fetchItem={fetchItem} fetchItems={fetchItems}/>
        </main>
    );
}