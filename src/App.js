import React, { Component } from 'react';
import { Homepage } from './pages/homepage/homepage';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignUpAndSignInPage from './pages/signin_and_signup_page/signin_and_signup_page.pages';

export const App = () => {
	return (
		<div>
			<Header />
			<Switch>
				<Route exact path="/" component={Homepage} />;
				<Route path="/shopPage" component={ShopPage} />
				<Route path="/signUp" component={SignUpAndSignInPage} />
			</Switch>
		</div>
	);
};
