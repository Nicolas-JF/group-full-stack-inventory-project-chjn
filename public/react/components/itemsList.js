import React, { useEffect, useState } from 'react';
import { Item } from './itemDetail';
import './itemsList.css';
import { Button } from 'react-bootstrap';

export const ItemsList = ({item,  onItemClick}) => {
  
	return (
    <>
      <div className='item-container'>
        <div className='item-image-wrap'><img src={item.image} alt='Img' className='item-image'/></div>
        <div className='item-footer'>
          <div className='item-info'> 
            <div className='item-info-unit'> {item.name} </div>
            <div className='item-info-unit'> Price: ${item.price} </div>
          </div>
          <Button className='item-details-button' variant='info' onClick={()=>onItemClick(item.id)} > Details </Button>
        </div>
      </div>
    </>
  )
} 
