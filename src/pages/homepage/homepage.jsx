import React from 'react';
import './homepage.scss';
import { Route } from 'react-router-dom';
import Directory from '../../components/directory/directory.component';

export const Homepage = ({ history }) => {
	return (
		<div className="homepage">
			<Directory history={history} />
		</div>
	);
};
