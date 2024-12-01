import React, { useEffect, useState } from 'react';
import { Sauce } from './itemDetail';

export const SaucesList = ({items}) => {

	const [items, setSauces] = useState([]);

  
	return <>
		{
			items.map((sauce, idx) => {
				return <Sauce sauce={sauce} key={idx} />
			})

		}
		
	</>
} 
