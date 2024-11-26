import React, { useEffect, useState } from 'react';

export const Item = ({item}) => {



  return <>
    
    <div>
      <h1>{item.name}</h1>
      <p>{item.description}</p>
      <p>Price: ${item.price}</p>
      <p>Category: {item.category}</p>
      <img src={item.image} alt={item.name} />
    </div>
  </>
} 
	