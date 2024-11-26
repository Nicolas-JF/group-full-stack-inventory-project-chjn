import React, { useEffect, useState } from 'react';
import { Item } from './itemDetail';

export const ItemsList = ({items}) => {


  
	return <>
		{
			items.map((item, idx) => {
				return <Item item={item} key={idx} />
			})

		}
		
	</>
} 
