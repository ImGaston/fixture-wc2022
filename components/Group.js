import React from 'react';
import { useEffect, useState } from 'react';
import styles from '../styles/Group.module.css';
import InfoMatch from '../components/InfoMatch';

const Group = ({ matches, group, children }) => {
	// conseguir banderas
	const [flags, setFlags] = useState([]);

	useEffect(() => {
		window
			.fetch('/api/flags')
			.then((res) => res.json())
			.then(({ data }) => {
				setFlags(data);
			});
	}, []);

	const URL = 'https://countryflagsapi.com/svg/';
	const flagUrl = [];

	//orden de los partidos segun fecha de juego
	const groupMatches = matches
		.filter((match) => match.Group == group)
		.sort((a, b) => a.MatchNumber - b.MatchNumber);
	//listado de paises por grupo para @TODO: banderas
	function onlyUnique(country, index, self) {
		return self.indexOf(country) === index;
	}
	const countries = [];
	groupMatches.map((matches) => {
		countries.push(matches.HomeTeam);
	});
	const listCountries = countries.filter(onlyUnique);

	//TODO: buscar un cada uno de los listados de paises en la API de bandera
	//? como hago para buscar y pushear
	const getFlags = listCountries.map((flag) => {
		return flags.find((country) => country === flag);
	});
	flagUrl.push(getFlags);
	console.log(flagUrl);

	//Manejo de fecha y horario

	return (
		<>
			{children}
			<div className={styles.title}>
				<h2>{group}</h2>
				{listCountries.map((country) => (
					<p key={country} className={styles.country}>
						{country}
					</p>
				))}
			</div>
			{groupMatches.map((group) => (
				<div key={group.MatchNumber} className={styles.match}>
					<InfoMatch className={styles.info} matches={matches} />
					<div className={styles.teams}>
						<div className={styles.team}>
							<p>{group.HomeTeam}</p>
							<input
								className={styles.input}
								placeholder='0'
								type='number'
								id='homegoal'
								name='homegoal'
								min='0'
								max='20'
								inputMode='numeric'
							></input>
						</div>
						<div className={styles.team}>
							<p>{group.AwayTeam}</p>
							<input
								className={styles.input}
								placeholder='0'
								type='number'
								id='awaygoal'
								name='awaygoal'
								min='0'
								max='20'
								inputMode='numeric'
							></input>
						</div>
					</div>
				</div>
			))}
		</>
	);
};

export default Group;
