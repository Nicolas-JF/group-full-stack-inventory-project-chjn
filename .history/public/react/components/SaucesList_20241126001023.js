import React, { useEffect, useState } from 'react';
import { Sauce } from './Sauce';

export const SaucesList = ({sauces}) => {

	const [sauces, setSauces] = useState([]);

  useEffect(() => {
    fetch('/api/sauces')
      .then(response => response.json())
      .then(data => setSauces(data))
      .catch(error => console.error('Error fetching sauces:', error));
  }, []);
	return <>
		{
			sauces.map((sauce, idx) => {
				return <Sauce sauce={sauce} key={idx} />
			})

		}
		
	</>
} 
