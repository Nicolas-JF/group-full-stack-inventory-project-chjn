import React, { useEffect, useState } from 'react';
import './itemDetail.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
export const ItemDetail = ({item,onBack}) => {



  return (
    <>
      <div className='body'>
        <div className='item'>
          <div className='image-wrap'> <img src={item.image} alt={item.name} className='image'/></div>
          <div className='content'>
            <div className='description'> Description: {item.description} </div>
            <div className='price'> Price: ${item.price} </div>
            <div className='category'> Category: {item.category} </div>
          </div>
          <Button onClick={onBack} variant='primary' className='back-button'> Back </Button>
        </div>
      </div>
      <br/>
    </>
  )
} 
	