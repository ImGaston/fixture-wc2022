import React from 'react';
import styles from '../styles/Group.module.css';

const Group = ({ matches, group, children }) => {
	// const [match, setMatch] = useState([]);

	const groupMatches = matches
		.filter((match) => match.Group == group)
		.sort((a, b) => a.MatchNumber - b.MatchNumber);
	console.log(groupMatches);

	return (
		<>
			{children}
			<h2 className={styles.title}>{group}</h2>
			{groupMatches.map((group) => (
				<div key={group.MatchNumber} className={styles.match}>
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
			))}
		</>
	);
};

export default Group;
