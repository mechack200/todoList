import React from 'react';
import SignIn from '../../components/signin/signin.components.jsx';
import SignUp from '../../components/signUp/signup.component.jsx';
import './signin_and_signup_page.pages.scss';

const SignUpAndSignInPage = () => {
	return (
		<div className="sign-in-and-sign-up">
			<SignIn />
			<SignUp />
		</div>
	);
};

export default SignUpAndSignInPage;
