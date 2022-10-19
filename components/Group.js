import React from 'react';
import MatchGroup from './MatchGroup';
import HeaderGroup from './HeaderGroup';
import Flags from './Flags';
import styles from '../styles/Group.module.css';
import InfoMatch from './InfoMatch';
import TeamsMatch from './TeamsMatch';

const Group = ({ matches, group, flags }) => {
	//orden de los partidos segun fecha de juego
	const groupMatches = matches
		.filter((match) => match.Group == group)
		.sort((a, b) => a.MatchNumber - b.MatchNumber);
	//listado de paises por grupo
	function onlyUnique(country, index, self) {
		return self.indexOf(country) === index;
	}
	const countries = [];
	groupMatches.map((matches) => {
		countries.push(matches.HomeTeam);
	});
	const listCountries = countries.filter(onlyUnique);

	return (
		<>
			<HeaderGroup group={group}>
				<Flags listCountries={listCountries} flags={flags} />
			</HeaderGroup>
			<MatchGroup>
				{groupMatches.map((group) => (
					<div key={group.MatchNumber} className={styles.match}>
						<InfoMatch
							className={styles.info}
							location={group.Location}
							dateMatch={group.DateUtc}
						/>
						<TeamsMatch homeTeam={group.HomeTeam} awayTeam={group.AwayTeam} />
					</div>
				))}
			</MatchGroup>
		</>
	);
};

export default Group;
