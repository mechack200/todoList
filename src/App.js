import React, { Component } from 'react';
import { Homepage } from './pages/homepage/homepage';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignUpAndSignInPage from './pages/signin_and_signup_page/signin_and_signup_page.pages';
import { auth, createUserProfileDocument } from '../src/firebase/firebase.util';
class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currentUser: null,
		};
	}

	unsubscribeFromAuth = null;

	componentDidMount() {
		this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
			if (userAuth) {
				const userRef = await createUserProfileDocument(userAuth);
				// onSnapShot is a document refrence method that show the
				// properties and data of and object
				userRef.onSnapShot((snapShot) => {
					this.setState(
						{
							currentUser: {
								id: snapShot.id,
								...snapShot.data(),
							},
						},
						() => {
							console.log(this.state);
							// second parameter(I.e the function c that log out the
							// stat)e was called because console log will log out null
							// if called after this this.setState method
							// setState will call a fuction after it has fully updated
						}
					);
				});
			} else {
				this.setState({ currentUser: userAuth });
			}
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
