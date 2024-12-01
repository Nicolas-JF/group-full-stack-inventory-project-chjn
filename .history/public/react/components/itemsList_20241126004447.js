import React, { useEffect, useState } from 'react';
import { Item } from './itemDetail';

export const ItemsList = ({items}) => {

	const [items, setItems] = useState([]);

  
	return <>
		{
			items.map((Item, idx) => {
				return <Item Item={Item} key={idx} />
			})

		}
		
	</>
} 
