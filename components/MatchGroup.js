import React from 'react';
import InfoMatch from './InfoMatch';
import styles from '../styles/Group.module.css';

const MatchGroup = ({ groupMatches, matches }) => {
	return (
		<div className='info-partido'>
			{groupMatches.map((group) => (
				<div key={group.MatchNumber} className={styles.match}>
					<InfoMatch
						className={styles.info}
						location={group.Location}
						dateMatch={group.DateUtc}
					/>
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
		</div>
	);
};

export default MatchGroup;
