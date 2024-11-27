import React, { useEffect, useState } from 'react';
import './itemsList.css';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
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
          <Button className='item-details-button' variant='info' onClick={()=>onItemClick(item.id)}> <i class="bi bi-info-circle"></i> Info </Button>
        </div>
      </div>
    </>
  )
} 
