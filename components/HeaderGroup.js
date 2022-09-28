import React from 'react';
import Flags from './Flags';
import styles from '../styles/HeaderGroup.module.css';

const HeaderGroup = ({ group, listCountries, flags }) => {
	return (
		<div className={styles.header}>
			<h2 className={styles.title}>{group}</h2>
			<Flags listCountries={listCountries} flags={flags} />
		</div>
	);
};

export default HeaderGroup;
