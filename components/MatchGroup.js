import React, { Children } from 'react';
import InfoMatch from './InfoMatch';
import styles from '../styles/Group.module.css';
import TeamsMatch from './TeamsMatch';

const MatchGroup = ({ children }) => {
	return <div>{children}</div>;
};

export default MatchGroup;
