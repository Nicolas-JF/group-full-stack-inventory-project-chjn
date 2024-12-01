import React, { useEffect, useState } from 'react';

export const Sauce = (props) => {
  const [sauce, setSauce] = useState(null);

  useEffect(() => {
    fetch(`/api/sauces/${id}`)
      .then(response => response.json())
      .then(data => setSauce(data))
      .catch(error => console.error('Error fetching sauce:', error));
  }, []);

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
	