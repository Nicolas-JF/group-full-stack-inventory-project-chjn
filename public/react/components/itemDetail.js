import React, { useEffect, useState } from 'react';

export const Item = ({item}) => {



  return <>
    
    <div>
    <img src={item.image} alt={item.name} />
      <h1>{item.name}</h1>
      <p>{item.description}</p>
      <p>Price: ${item.price}</p>
      <p>Category: {item.category}</p>
    </div>
  </>
} 
	