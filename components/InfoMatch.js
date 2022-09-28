import React from 'react';
import styles from '../styles/InfoMatch.module.css';

//TODO: grid vs flexbox que conviene para fijar los dos componentes info y match
//TODO: ver tema estadio en dos lineas delimitar el ancho del componente InfoMatch.js

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
		<div className={styles.info}>
			<p>{location}</p>
			<p>{fullDay}</p>
			<p>{fullHour}</p>
		</div>
	);
};

export default InfoMatch;
