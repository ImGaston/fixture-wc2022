import React from 'react';
import styles from '../styles/Group.module.css';

const TeamsMatch = ({ homeTeam, awayTeam }) => {
	return (
		<>
			<div className={styles.teams}>
				<div className={styles.team}>
					<p>{homeTeam}</p>
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
					<p>{awayTeam}</p>
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
		</>
	);
};

export default TeamsMatch;
