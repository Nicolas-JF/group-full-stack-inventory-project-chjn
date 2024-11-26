import React, { useEffect, useState } from 'react';
import { Item } from './itemDetail';

export const ItemsList = ({items,  onItemClick}) => {


  
	return <>
		<ul>
      {items.map((item) => (
        <li key={item.id} onClick={() => onItemClick(item.id)}>
          {item.name}
        </li>
      ))}
    </ul>
		
	</>
} 
