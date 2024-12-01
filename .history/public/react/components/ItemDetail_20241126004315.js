import React, { useEffect, useState } from 'react';

export const Sauce = (props) => {
  const [item, setSauce] = useState(null);



  return <>
    
    <div>
      <h1>{props.item.name}</h1>
      <p>{props.item.description}</p>
      <p>Price: ${props.item.price}</p>
      <p>Category: {props.item.category}</p>
      <img src={props.item.image} alt={props.item.name} />
    </div>
  </>
} 
	