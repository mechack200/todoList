import React, { Component } from 'react';
import './menu-item.styles.scss';
import { withRouter } from 'react-router-dom';

// withRouter  is an higher order Component,
// An highewr order component is a function that takes a component an orguments and returned a modified components or teransformed it into another component

const MenuItem = ({ title, size, imageUrl, history, linkUrl, match }) => {
	return (
		<div className={`${size} menu-item`}>
			<div
				className="background-image"
				style={{ backgroundImage: `url(${imageUrl})` }}
				onClick={() => history.push(`${match.url}${linkUrl}`)}
			/>
			<div className="content">
				<h1 className="title">{title}</h1>
				<span className="subtitle">SHOP NOW</span>
			</div>
		</div>
	);
};
export default withRouter(MenuItem);
