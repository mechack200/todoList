import React, { Component } from 'react';
import { Homepage } from './pages/homepage/homepage';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignUpAndSignInPage from './pages/signin_and_signup_page/signin_and_signup_page.pages';
import { auth } from '../src/firebase/firebase.util';
class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currentUser: null
		};
	}

	unsubscribeFromAuth = null;

	componentDidMount() {
		this.unsubscribeAuth = auth.onAuthStateChanged(user => {
			this.setState({ currentUser: user });

			console.log(user);
		});
	}

	componentWillUnmount() {
		this.unsubscribeFromAuth();
	}

	render() {
		return (
			<div>
				<Header currentUser={this.state.currentUser} />
				<Switch>
					<Route exact path="/" component={Homepage} />;
					<Route path="/shopPage" component={ShopPage} />
					<Route path="/signin" component={SignUpAndSignInPage} />
				</Switch>
			</div>
		);
	}
}
export default App;
