import React, { useState, useEffect } from 'react';
import { ItemsList } from './itemsList';
import { ItemDetail } from './itemDetail';	
import './app.css';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
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
            <Navbar className='bg-body-tertiary' variant='light'>
                <Container>
                    <Navbar.Brand onClick={handleBack} href='#'> CJHL </Navbar.Brand>
                    <Nav>
                        <Button> Add new item </Button>
                    </Nav>
                </Container>
            </Navbar>
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