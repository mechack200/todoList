import React, { Component } from 'react';
import { createStructuredSelector } from 'reselect';
import { Homepage } from './pages/homepage/homepage';
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import ShopPage from './pages/shop/shop.component';
import CheckoutPage from './pages/checkout/checkout.page.jsx';
import Header from './components/header/header.component';
import SignUpAndSignInPage from './pages/signin_and_signup_page/signin_and_signup_page.pages';
import { auth, createUserProfileDocument } from '../src/firebase/firebase.util';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.action.js';
import { selectCurrentUser } from './redux/user/user.selector';
class App extends Component {
	unsubscribeFromAuth = null;

	componentDidMount() {
		const { setCurrentUser } = this.props;
		this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
			if (userAuth) {
				const userRef = await createUserProfileDocument(userAuth);
				// onSnapShot is a document refrence method that show the
				// properties and data of and object
				userRef.onSnapshot((snapShot) => {
					setCurrentUser({
						id: snapShot.id,
						...snapShot.data(),
					});
				});
			} else {
				setCurrentUser(userAuth);
			}
		});
	}

	componentWillUnmount() {
		this.unsubscribeFromAuth();
	}

	render() {
		return (
			<div>
				<Header />
				<Switch>
					<Route exact path="/" component={Homepage} />;
					<Route path="/shop" component={ShopPage} />
					<Route
						exact
						path="/signin"
						render={() =>
							this.props.currentUser ? (
								<Redirect to="/" />
							) : (
								<SignUpAndSignInPage />
							)
						}
					/>
					<Route exact path="/checkout" component={CheckoutPage} />
				</Switch>
			</div>
		);
	}
}

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
	setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
