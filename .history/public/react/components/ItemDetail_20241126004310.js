import React, { useEffect, useState } from 'react';

export const Sauce = (props) => {
  const [sauce, setSauce] = useState(null);



  return <>
    
    <div>
      <h1>{props.sauce.name}</h1>
      <p>{props.sauce.description}</p>
      <p>Price: ${props.sauce.price}</p>
      <p>Category: {props.sauce.category}</p>
      <img src={props.sauce.image} alt={props.sauce.name} />
    </div>
  </>
} 
	