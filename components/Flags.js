import React from 'react';
import Image from 'next/image';

const Flags = ({ listCountries, flags }) => {
	const URL = 'https://countryflagsapi.com/png/';
	const flagUrl = ['qat', 'sen', 'nld', 'ecu'];

	//TODO: buscar un cada uno de los listados de paises en la API de bandera
	//? como hago para buscar y pushear
	// const getFlags = listCountries.map((flag) => {
	// 	flagUrl.push(flags.find((country) => country === flag));
	// });
	console.log(listCountries);
	//Manejo de fecha y horario
	return (
		<>
			{/* {listCountries.map((country) => (
				<p key={country} className={styles.flags}>
					{country}
				</p>
			))} */}
			{flagUrl.map((flag) => (
				<div key={flag}>
					<Image src={URL + flag} alt='flag' height={20} width={40} />
				</div>
			))}
		</>
	);
};

export default Flags;
