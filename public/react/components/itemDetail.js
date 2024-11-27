import React, { useEffect, useState } from 'react';
import './itemDetail.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';
export const ItemDetail = ({item,onBack}) => {



  return (
    <>
      <div className='body'>
        <div className='item'>
        <Button onClick={onBack} variant='secondary' className='back-button'> <i class="bi bi-arrow-left"></i> Back </Button>
          <div className='image-wrap'> <img src={item.image} alt={item.name} className='image'/></div>
          <div className='content'>
            <div className='description'> Description: {item.description} </div>
            <div className='price'> Price: ${item.price} </div>
            <div className='category'> Category: {item.category} </div>
          </div>
          <div className='actions'>
            <Button variant='primary' className='edit-button'> <i class="bi bi-pen"></i> Edit </Button>
            <Button variant='danger' className='delete-button'> <i class="bi bi-trash"></i> Delete </Button>
          </div>
        </div>
      </div>
      <br/>
    </>
  )
} 
	