import React from 'react';

//TODO: Como pasar solo las fechas y la locacion del partido
// Ahora estoy pasando todos los partidos, no sirve

const InfoMatch = ({ location, dateMatch }) => {
	let date = new Date(dateMatch);
	let day = date.getDate();
	let month = date.getMonth() + 1;
	let hour = String(date.getHours()).padStart(2, '0');
	let minute = String(date.getMinutes()).padStart(2, '0');
	let fullDay = `${day}/${month}`;
	let fullHour = `${hour}:${minute}`;
	// console.log(fullHour);
	return (
		<div>
			<p>{location}</p>
			<p>{fullDay}</p>
			<p>{fullHour}</p>
		</div>
	);
};

export default InfoMatch;
