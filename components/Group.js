import React from 'react';
import { useEffect, useState } from 'react';
import MatchGroup from './MatchGroup';
import HeaderGroup from './HeaderGroup';

const Group = ({ matches, group, children, flags }) => {
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

	return (
		<>
			{children}
			<HeaderGroup group={group} listCountries={listCountries} flags={flags} />
			<MatchGroup groupMatches={groupMatches} matches={matches} />
		</>
	);
};

export default Group;
