import React from 'react';
import Image from 'next/image';
import styles from '../styles/Flag.module.css';

const Flags = ({ listCountries, flags }) => {
	const URL = 'https://countryflagsapi.com/png/';

	const flagUrl = listCountries.map( country => 
		flags.filter(flag => flag.Country == country).map(flag => flag.Flag)
	).flat()
	
	return (
		<>
			{flagUrl.map((flag) => (
				<div key={flag} className={styles.flag}>
					<Image src={URL + flag} alt='flag' height={60} width={90} />
				</div>
			))}
		</>
	);
};

export default Flags;
