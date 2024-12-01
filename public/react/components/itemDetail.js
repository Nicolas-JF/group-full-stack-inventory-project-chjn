import React, { useEffect, useState } from 'react';
import './itemDetail.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';
import apiURL from '../api'


export const ItemDetail = ({item,setSelectedItem,handleBack, setShowModal, setShowAll, fetchItems}) => {
  const handleEdit = () =>{
    setShowModal(true);
  }

  const handleDelete = async (id) =>{
    if(window.confirm('Are you sure you want to delete this item?')){
      const response = await fetch(`${apiURL}/items/${id}`, {
        method: 'DELETE'
      });
      if(!response.ok){
        throw new Error('Failed to delete item');
      }
      // Refetch items and show all items again, set selectedItem to default values
      setSelectedItem({
        id: 0,
        name: '',
        image: '',
        price: 0,
        category: '',
        description: ''
    })
      fetchItems();
      setShowAll(true);
    }
  }

  return (
    <>
      <div className='body'>
        <div className='item'>
        <Button onClick={handleBack} variant='secondary' className='back-button'> <i className="bi bi-arrow-left"></i> Back </Button>
          <h3> {item.name} </h3>
          <div className='image-wrap'> <img src={item.image} alt={item.name} className='image'/></div>
          <div className='content'>
            <div className='description'> Description: {item.description} </div>
            <div className='price'> Price: ${item.price} </div>
            <div className='category'> Category: {item.category} </div>
          </div>
          <div className='actions'>
            <Button onClick={handleEdit} variant='primary' className='edit-button'> <i className="bi bi-pen"></i> Edit </Button>
            <Button variant='danger' className='delete-button' onClick={()=>handleDelete(item.id)}> <i className="bi bi-trash"></i> Delete </Button>
          </div>
        </div>
      </div>
      <br/>
    </>
  )
} 
	