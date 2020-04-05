import React, { Component } from 'react';
import { Homepage } from './pages/homepage/homepage';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';

export const App = () => {
	return (
		<div>
			<Header />
			<Switch>
				<Route exact path="/" component={Homepage} />;
				<Route path="/shopPage" component={ShopPage} />
			</Switch>
		</div>
	);
};
