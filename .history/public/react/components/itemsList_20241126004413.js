import React, { useEffect, useState } from 'react';
import { Sauce } from './itemDetail';

export const SaucesList = ({sauces}) => {

	const [sauces, setSauces] = useState([]);

  
	return <>
		{
			sauces.map((sauce, idx) => {
				return <Sauce sauce={sauce} key={idx} />
			})

		}
		
	</>
} 
