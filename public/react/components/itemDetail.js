import React, { useEffect, useState } from 'react';
import './itemDetail.css';
import { Button } from 'react-bootstrap';
export const ItemDetail = ({item,onBack}) => {



  return (
    <>
      <div className='item-container'>
        <div className='item-image-wrap'> <img src={item.image} alt={item.name} className='item-image'/></div>
        <div className='item-content'>
          <div className='item-description'> Description: {item.description} </div>
          <div className='item-price'> Price: ${item.price} </div>
          <div className='item-category'> Category: {item.category} </div>
        </div>
      </div>
      <br/>
      <Button onClick={onBack} variant='primary'> Back </Button>
    </>
  )
} 
	