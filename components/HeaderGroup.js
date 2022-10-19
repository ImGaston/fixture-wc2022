import React, { Children } from 'react';
import styles from '../styles/HeaderGroup.module.css';

const HeaderGroup = ({ group, children }) => {
	return (
		<div className={styles.header}>
			<h2 className={styles.title}>{group}</h2>
			{children}
		</div>
	);
};

export default HeaderGroup;
